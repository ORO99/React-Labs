import { useState } from "react";

export default function Form() {
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
                <button type="submit" className="w-25 mx-auto btn btn-outline-success" onClick={addToList} >
                    Add to List
                </button>
            </div>
            <div className="row mt-4">
                <h2 style={{ color: 'goldenrod' }} className="text-center">TODO list</h2>
                <ul style={{ listStyle: 'none' }} className="container mx-auto w-50">
                    {
                        list.map((listItem) => {
                            return <li className="border border-4 p-2 w-100 mt-2">
                                <span style={{ color: 'darkred', fontSize: '20px', fontWeight: '600' }}>Title: {listItem.title}</span>
                                <br></br>
                                <span style={{ color: 'black', fontSize: '20px' }}>Content: {listItem.content}</span>
                            </li>
                        })
                    }
                </ul>
            </div>
        </>
    );

}