import React from "react"
import MapProduct from "./map-Product";
import productsData from "./map-vschoolProducts"
import vschoolProducts from "./map-vschoolProducts";
function AppOud(){
    const productComponents = vschoolProducts.map(function(p){
        return (<MapProduct product={p}/>)
    })
    return(
        <div>
            {productComponents}
        </div>
    )
}
export default AppOud