import React, {useState} from 'react'
import Product from "./Product";
import vschoolProducts from "../../map-vschoolProducts";


function VSchoolApp() {
    const [products, setProducts] = useState(vschoolProducts)

    return (
        <div>
            {products.map((item) => {
                return (
                    <Product key={item.id} {...item}/>
                )
            })}
        </div>
    )


}

export default VSchoolApp