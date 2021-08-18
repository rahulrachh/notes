import './App.css';
import React, {useState, useEffect} from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css'
import TodoView from "./components/TodoListView";

function App() {
      const [noteList, setTodoList] = useState([{}])
      const [title, setTitle] = useState('')
      const [desc, setDesc] = useState('')

      // Read all notes
      useEffect(() => {
        axios.get('http://localhost:8000/api/note')
          .then(res => {
            setTodoList(res.data)
          })
      });

      // Post a note
      const addTodoHandler = () => {
        // window.location.reload();
          document.getElementById("textfield1").value = "";
          document.getElementById("textfield2").value = "";
            axios.post('http://localhost:8000/api/note/', { 'title': title, 'description': desc })
              .then(res => console.log(res))
    };

  return (
        <div className="App list-group-item justify-content-center
        align-items-center mx-auto" style={{width: "400px", backgroundColor: "white"
        ,marginTop: "15px"}}>
        <h1 className="card text-white mb-1" style={{backgroundColor: "black"}}
            styleName="max-width: 20rem;">Notes App</h1>
            <div className="card-body">
            <h5 className="card mb-3" style={{"color": "orange", backgroundColor: "lightcyan"}}>Add Your Notes</h5>
            <span className="card-text">
                <input id="textfield1" className="mb-2 form-control titleIn" onChange={event => setTitle(event.target.value)} placeholder='Title'/>
                <textarea id="textfield2" style={{height: '150px'}} className="mb-2 form-control desIn" onChange={event => setDesc(event.target.value)} placeholder='Description'/>
            <button className="btn btn-outline-primary mx-2 mb-3" style={{'borderRadius':'5px',"font-weight":"bold"}} onClick={addTodoHandler}>Add Note</button>
            </span>
            <h5 className="card mb-3" style={{"color": "orange", backgroundColor: "lightcyan"}}>Your Notes</h5>
            <div>
            <TodoView noteList={noteList} />
            </div>

            </div>
        </div>
  );
}

export default App;
