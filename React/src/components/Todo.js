import axios from 'axios'
import React from 'react'

function TodoItem(props) {
    const deleteTodoHandler = (title) => {
    axios.delete(`http://localhost:8000/api/note/${title}`)
        .then(res => console.log(res.data)) }

    return (
        <div>
            <p>
                <span style={{ fontWeight: 'bold, underline' }}>{props.note.title} : </span> {props.note.description}
                <button onClick={() => deleteTodoHandler(props.note.title)} className="btn btn-outline-danger my-2 mx-2">x</button>
                <hr></hr>
            </p>
        </div>
    )
}

export default TodoItem;
