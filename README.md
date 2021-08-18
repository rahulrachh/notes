# notes

The home page of the item
![image](https://user-images.githubusercontent.com/25946587/129823533-e9a13a77-3ab4-4805-af2f-314f360cbd14.png)

The front page of the apps after adding items.
![image](https://user-images.githubusercontent.com/25946587/129823322-c4a7bf64-8423-48e5-9a34-45eebfccd824.png)

We can delete the notes by clicking on the "-" button. The front page of the app after deleting a few items.
![image](https://user-images.githubusercontent.com/25946587/129823473-cb7434ea-b7c7-419f-99a8-e1ddec570352.png)

To recreate this, follow the following step:
- Download and install [MongoDb Compass](https://docs.mongodb.com/compass/current/install/), [MongoDB shell](https://www.mongodb.com/products/shell) and [MongoDB community server](https://www.mongodb.com/try/download/community). After these things are installed, add mongodb to the PATH variable.
- Make sure you have Javascript and ReactJS installed.
- Also, Install FastAPI version 0.65.1, I have also mentioned that in the requirements.txt file in the fastAPI folder.
- Open the terminal and run ``` uvicorn main:app --reload``` to run the fastAPI server and go to ```http://127.0.0.1:8000/docs``` to see the APIs that were created for this project.
- Go to React folder and run ```npm start``` to start the react app.
- Along with these, to get the live demo of the datbase launch the MongoDB Compass and input the address ```mongodb://localhost:27017/``` to connect to the database where these operations are happening.

notes
