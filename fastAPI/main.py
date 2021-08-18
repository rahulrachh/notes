from fastapi import FastAPI, HTTPException

from model import Todo

from database import (
    fetch_one_note,
    fetch_all_notes,
    create_note,
    update_note,
    remove_note,
)

# an HTTP-specific exception class  to generate exception information

from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()

origins = [
    "http://localhost:3000",
]

# what is a middleware?
# software that acts as a bridge between an operating system or database and applications, especially on a network.

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def read_root():
    return {"Hello": "World"}

@app.get("/api/note")
async def get_note():
    response = await fetch_all_notes()
    return response

@app.get("/api/note/{title}", response_model=Todo)
async def get_note_by_title(title):
    response = await fetch_one_note(title)
    if response:
        return response
    raise HTTPException(404, f"There is no note with the title {title}")

@app.post("/api/note/", response_model=Todo)
async def post_note(note: Todo):
    response = await create_note(note.dict())
    if response:
        return response
    raise HTTPException(400, "Something went wrong")

@app.put("/api/note/{title}/", response_model=Todo)
async def put_note(title: str, desc: str):
    response = await update_note(title, desc)
    if response:
        return response
    raise HTTPException(404, f"There is no note with the title {title}")

@app.delete("/api/note/{title}")
async def delete_note(title):
    response = await remove_note(title)
    if response:
        return "Successfully deleted note"
    raise HTTPException(404, f"There is no note with the title {title}")