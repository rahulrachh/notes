import motor.motor_asyncio
from model import Todo

client = motor.motor_asyncio.AsyncIOMotorClient('mongodb://localhost:27017/')
database = client.TodoList
collection = database.note

async def fetch_one_note(title):
    document = await collection.find_one({"title": title})
    return document

async def fetch_all_notes():
    notes = []
    cursor = collection.find({})
    async for document in cursor:
        notes.append(Todo(**document))
    return notes

async def create_note(note):
    document = note
    result = await collection.insert_one(document)
    return document


async def update_note(title, desc):
    await collection.update_one({"title": title}, {"$set": {"description": desc}})
    document = await collection.find_one({"title": title})
    return document

async def remove_note(title):
    await collection.delete_one({"title": title})
    return True