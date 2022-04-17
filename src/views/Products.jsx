import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import './Products.css'

export default function Products() {
    const [data, setData] = useState([]);

    const fetchProducts = () => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setData(json));
    }
    useEffect(() => {
        fetchProducts();
    }, [])
    //console.log(data);
    return (
        <div className="container mt-3">
            <div className="row">
            {
                data.length?
                data.map((product) => {
                    return <div key={product.id} className="col-sm-4">
                        <div className="card shadow-lg p-3 mb-5 bg-body rounded">
                            <img className="card-img-top w-75 mx-auto" height="250px" src={product.image} alt={product.title} />
                            <div className="card-body">
                                <h6 className="card-title">
                                    <span className="p-3" style={{ color: 'darkred', fontSize: '20px' }}>{product.id}</span>
                                    {product.title}
                                </h6>
                                <p className="card-text">{product.description.substring(0,100)}...</p>
                                <Link to={`/products/${product.id}`} className="btn btn-outline-success">View Item</Link>
                            </div>
                        </div>
                    </div>
                })
                :
                <img width="100%" height="100%" src="https://acegif.com/wp-content/uploads/loading-78.gif" alt="spinner"/>
            }
            </div>
        </div>
    );
}