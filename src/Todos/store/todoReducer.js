export const addTodoAction = todo => ({
    type: "ADD_TODO",
    payload: todo
})
export const deleteTodoAction = todoId => ({
    type: "DELETE_TODO",
    payload: todoId
})
export const toggleTodoAction = todoId => ({
    type: "TOGGLE_TODO",
    payload: todoId
})
const initialState = {todos: []} /* JSON이 두개({}, []), 배열로써 다룬다, 편의상 배열이라 부른다 */
const todoReducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_TODO":
            return {...state, todos: [...state.todos, action.payload]}
        case "TOGGLE_TODO":
            return {...state, todos: 
                state.todos.map(todo => todo.todoId === action.payload ?
                    {...todo, complete: !todo.complete} : todo)
            }
        case "DELETE_TODO":
            return {...state, todos: state.todos.filter(todo => todo.todoId !== action.payload)}
        default:
            return state
    }    /* JSON 변수 -> state는 json임 */
}


export default todoReducer