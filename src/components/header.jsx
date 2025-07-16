import "../css/header.css";
import { Link } from "react-router-dom";


const Header = ({Logo}) => {



    return (
        <div className="HeaderWrapper">

          
           <img src={Logo} id='logo' />



           <div className="Menu">

               <Link to="/">
                  Home
              </Link>


          
              
               <Link to="/market">
                  Market
              </Link>

                  
               <Link to="/about">
                  About
              </Link>


           </div>
            
        </div>
    )



}



export default Header;