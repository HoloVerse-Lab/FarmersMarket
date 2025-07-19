
import { useState } from "react";
import "../css/login.css";
import UsersData from "../data/user";


const Login = () => {


    const [ textValue, setTextValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const [ messageValue, setMessageValue] = useState("");
    const [ userData, setUserData] = useState("");

    function handleNameChange(e){

       setTextValue(
         e.target.value
       )
    }


        function handlePasswordChange(e){

       setPasswordValue(
         e.target.value
       )
    }

    


      console.log(textValue);

      const message1 = <h1> LOGIN</h1>;
      const messageError = <h1>CANNOT LOGIN</h1>;


         function handleSubmit(e){

          e.preventDefault;

         (textValue == 'rayfane') ? setMessageValue(message1) : setMessageValue(messageError)
              

      }



return(
    <div className="LoginWrapper">
        
        <h1>  Login </h1>

        <h1> {messageValue}  </h1>

    

          <form onSubmit={handleSubmit
          }>
            
            <div className="form-field">

                <label>Name </label>

                <input
                   type="text"
                   name="username"
                   value={textValue}
                   placeholder="Enter Username"
                   onChange={handleNameChange}
                    

                
                />

            </div>
            <div className="form-field">
                     <label>Password</label>

                <input 
                    type="text"
                   name="password"
                   value={passwordValue}
                   placeholder="Enter Password"
                   onChange={handlePasswordChange}
                    
                    
                    
                    />

            </div>

                <div className="form-field">
                   

                   <button type="submit"> Submit</button>

            </div>


          </form>

    </div>
)

}


export default Login;