import ProductData from "../data/product";
import { useState } from "react";
import "../css/market.css";
import { useNavigate } from "react-router-dom";

  const Market = () => {



      
      



    const [increment, setIncrement] = useState(1);

    const navgate = useNavigate();
  
     const [ProductDB, setProductDB ] = useState(ProductData);

      
     
         const MappedProduct = ProductDB.map(
            




            (product) => {
               
                 return(
                    <div className="ProductCard" key={product.id}>

                     <img src={product.url} />
                     <h2>{product.name}</h2>
                     <h4>{product.price} Kwacha</h4>
                      
                      <button
                      
                        onClick={() => {

                           navgate("/about")

                        }}
                      
                      
                      >
                        More Info
                      </button>
                    <h3></h3>
                    </div>
                 )

            }


          )


          

    return(

      <>
          <h1 id="increment">{increment}</h1>

        <div className="ProductWrapper">

        

        { MappedProduct}

        </div>
        </>
    )
  }



  export default Market;