import TodoItem from './Todo'

function TodoView(props) {
    return (
        <div>
            <ul>
                {props.noteList.map(note => <TodoItem note={note} />)}
            </ul>
        </div>
    )
}

export default TodoView