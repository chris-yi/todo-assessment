// 43G
const initialState = {
  todos: []
};

const ADD_TODO = "ADD_TODO";
const GET_ALL_TODOS = "GET_ALL_TODOS";

// 43F
export function addTodo(newTodo) {
  return {
    type: ADD_TODO,
    payload: newTodo
  };
}

export function getTodos(todos) {
  return {
    type: GET_ALL_TODOS,
    payload: todos
  };
}

// 43D, 43E
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return Object.assign({}, state, {
        todos: [...state.todos, action.payload]
      });
    case GET_ALL_TODOS:
      return Object.assign({}, state, { todos: action.payload });
    default:
      return state;
  }
}
