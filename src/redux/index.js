import { createStore } from "redux";

//action types
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

// actions
export const addTodo = (payload)=>{
    return{
        type: ADD_TODO,
        payload,
    }
};

export const deleteTodo = (id)=>{
    return{
        type: DELETE_TODO,
        id
    };
};

//initial states
const initialState = {
    todos: [
        {
            title: 'ay title',
            content: 'ay content'
        }
    ]
};

//reducers
const rootReducer = (state = initialState, action)=>{
    if(action.type === ADD_TODO)
        return {...state, todos: [...state.todos, action.payload]};
    else if(action.type === DELETE_TODO)
        return {todos: [...state.todos.filter((item,id) => id !== action.id)]};
    return state;
}
//store 
export const store = createStore(rootReducer);