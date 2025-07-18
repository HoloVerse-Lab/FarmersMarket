import './App.css';
import Header from "./components/header.jsx";
import logo from './images/logo.png';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import About from './pages/about.jsx';
import Market from './pages/market.jsx';
import Login from './components/login.jsx';

function App(){

     

   return(
    
    <>
       <BrowserRouter>

     
     <Header 
     
         Logo={logo} userName="andrettttttw" sirName="paul"
     />
   

          <Routes>
            


              <Route 

                 path='/about'
                 element={<About />}
              
              />


              <Route

                path='/market'
                element={<Market />}

                />


                <Route 
                    path='/login'
                    element={<Login />}
               />

          </Routes>






   </BrowserRouter>

    </>
   )
}


export default App;
