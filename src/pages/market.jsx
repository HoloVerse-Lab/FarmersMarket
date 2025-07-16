import ProductData from "../data/product";
import { useState } from "react";
import "../css/market.css";

  const Market = () => {

    
     const [ProductDB, setProductDB ] = useState(ProductData);

      
     
         const MappedProduct = ProductDB.map(
            
            (product) => {
               
                 return(
                    <div className="ProductCard">

                     <img src={product.url} />
                     <h1>{product.name}</h1>


                    </div>
                 )

            }


          )


    return(
        <div className="ProductWrapper">

            {MappedProduct}
           
        </div>
    )
  }



  export default Market;