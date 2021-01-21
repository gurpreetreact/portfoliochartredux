function nextTodoId(todos) {
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
    return maxId + 1
  }
  
  // Use the initialState as a default value
  export default function appReducer(state = initialState, action) {
    switch (action.type) {
      case 'todos/todoAdded': {
        return {
          ...state,
          todos: [
            ...state.todos,
            {
              id: nextTodoId(state.todos),
              text: action.payload,
              completed: false
            }
          ]
        }
      }
      default:
        return state
    }
  }