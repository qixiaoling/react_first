import React , {useState, useEffect} from 'react'
import todosData from "../../../todosData";
import {Link} from 'react-router-dom'

function ProductsAddict() {

    const [products, setProducts] = useState(todosData);

    useEffect(()=>{
        console.log(products)
    },[])


    return (
        <div>
            <h1>products</h1>
            {products.map((product)=>{
                const {id, text} = product;
                return(
                    <div key={id}>
                        <h5>{text}</h5>
                        <Link to={`/products/${id}`}>learn more</Link>
                    </div>
                )
            })}

        </div>
    )
}

export default ProductsAddict