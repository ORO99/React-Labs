import { useEffect } from 'react';
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function ProductDetails() {
    const [product, setProduct] = useState([])
    const productID = useParams()
    const fetchProducts = () => {
        fetch(`https://fakestoreapi.com/products/${productID.id}`)
            .then(res => res.json())
            .then(json => setProduct(json));
    }
    useEffect(() => {
        fetchProducts();
    }, []);
    console.log(product);
    return (
        <div className="card shadow-lg p-3 mb-5 bg-body rounded mx-auto mt-4" style={{width:'fit-content'}}>
            <img className="card-img-top mx-auto w-25" height="300px" src={product.image} alt={product.title} />
            <div className="card-body text-center">
                <h6 className="card-title">
                    <span style={{ color: 'darkred' }}>{product.id}    </span>
                    {product.title}
                </h6>
                <p className="card-text">{product.description}</p>
                <Link to={`/products/${product.id}`} className="btn btn-success">Add to cart</Link>
            </div>
        </div>
    )
}