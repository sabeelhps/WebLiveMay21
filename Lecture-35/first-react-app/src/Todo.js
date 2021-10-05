
function Todo() {

    const todos = ['Go to Gym', 'Read Newspapar', 'Buy Vegetables', 'Learn Web'];

    const todoList = todos.map((todo) => {
        return <li>{ todo }</li>
    })
    
    return (
        <ul>
            {todoList}
        </ul>
    )

}


export default Todo;