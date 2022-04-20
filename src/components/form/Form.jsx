import { useState } from "react";
import React from 'react';

const Form = ({ addTodo }) =>{
    let [list, setList] = useState([]);
    const addToList = () => {
        let newObj = {
            title: '',
            content: ''
        }
        if (document.getElementById('title').value !== '')
            newObj.title = document.getElementById('title').value;
        if (document.getElementById('content').value !== '')
            newObj.content = document.getElementById('content').value;
        setList(oldList => [...oldList, newObj]);
        document.getElementById('title').value = '';
        document.getElementById('content').value = '';
        console.log(list);
    }
    return (
        <>
            <div className="row text-center mt-3">
                <h2 style={{ color: 'goldenrod' }}>Add Item to TODO list</h2>
                <label htmlFor="title" style={{ color: 'darkred', fontWeight: '800' }}>Title</label>
                <input type="text" className="w-25 mx-auto" id="title" />
                <label htmlFor="content" className="mt-2" style={{ color: 'darkred', fontWeight: '800' }}>Content</label>
                <input type="text" className="w-25 mx-auto" id="content" />
            </div>
            <div className="row text-center mt-3">
                <button type="submit" className="w-25 mx-auto btn btn-outline-success" onClick={addTodo} >
                    Add to List
                </button>
            </div>
        </>
    );

}
export default Form;