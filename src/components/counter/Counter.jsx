import { useState } from 'react'
import './Counter.css'
export default function Counter(){
    let [count, setCount] = useState(0);
    const increase = () => {
        setCount(count=>count+1);
    }
    const decrease = () => {
        setCount(count=>count-1);
    }
    return(
        <div className="container">
            <div className="row justify-content-center">
                <h1 className="txt mt-5 text-center border border-4 p-2 w-50">{count}</h1>
            </div>
            <div className="row text-center">
                <div className="col-sm-6 mt-5">
                    <button className="btn btn-success" onClick={increase}>Increase</button>
                </div>
                <div className="col-sm-6 mt-5">
                    <button className="btn btn-danger" onClick={decrease}>Decrease</button>
                </div>
            </div>
            
        </div>
    )
}