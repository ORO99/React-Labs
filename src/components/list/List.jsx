//import { useState } from "react";
import React from 'react';

const List = ({ todos, deleteTodo }) => {
    //let [list, setList] = useState([]);
    console.log(todos);
    return(
        <div className="row mt-4">
                <h2 style={{ color: 'goldenrod' }} className="text-center">TODO list</h2>
                <ul style={{ listStyle: 'none' }} className="container mx-auto w-50">
                    {
                        todos.map((todo, i) => {
                            return <li key={i} className="border border-4 p-2 w-100 mt-2">
                                <p className="btn btn-primary m-2" style={{}}>{i+1}</p>
                                <span style={{ color: 'darkred', fontSize: '20px', fontWeight: '600' }}>Title: {todo.title}</span>
                                <br></br>
                                <span style={{ color: 'black', fontSize: '20px' }}>Content: {todo.content}</span>
                                <button className="btn btn-outline-danger" onClick={()=>deleteTodo(i)} style={{float: 'right'}}>
                                    Delete Item
                                </button>
                            </li>
                        })
                    }
                </ul>
            </div>
    )

}
export default List;