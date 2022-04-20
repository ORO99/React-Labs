import { useSelector, useDispatch} from 'react-redux';
import Form from '../components/form/Form';
import List from '../components/list/List';
import { addTodo, deleteTodo } from '../redux';
import React from 'react';

export default function Todo(){
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    console.log(todos);

    const addTodoItem = (task)=>{
        let title = document.getElementById('title').value;
        let content = document.getElementById('content').value;
        document.getElementById('title').value = '';
        document.getElementById('content').value = '';
        console.log(title,content);
        dispatch(addTodo({
            title:title,
            content: content
        }));
    }
    
    const deleteTodoItem = (i) => {
        //console.log(i);
        dispatch(deleteTodo(i));
    };


    return(
        <div>
            <Form addTodo = {addTodoItem}></Form>
            <List todos={todos} deleteTodo={deleteTodoItem}></List>
        </div>
    )
}

