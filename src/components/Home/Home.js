import React, { Fragment, useState } from "react";
import "./home.css"
import { useNavigate } from 'react-router-dom';




function Home() {
const [userName, setUserName] = useState("")
const [userPass, setPassword] = useState("")


const navigate = useNavigate();
    const onClickHandler = (e) => {

       e.preventDefault()
       if(userName !== "" || userPass !== ""){
        if(userName === userPass ){
            console.log("login")
              navigate('/Dashboard');
        }
        
    }
    else {
        alert("Please use same userName and password ")
    }
    }

    const onUserNameChange = (e) => {
        setUserName(e.target.value)

    }
   

    const onPassChange = (e) => {
        setPassword(e.target.value)
    }

    return (
        <>
                   <section >
                <div className="Login">
                    <h3 className="loginheading">Welcome to Dashboard, Login</h3>
                </div>
                <br></br>
                <form className="form">
                    <label className="formlabel">Username</label>
                    <input id="username" onChange={onUserNameChange} className="username forminput" name="username" type="text" required="" />

                    <label className="formlabel">Password</label>
                    <input id="password" onChange={onPassChange} className="password forminput" name="password" type="password" required="" />

                    <button className="loginbtn" onClick={onClickHandler}>LOGIN</button>
                    

                    <button className="loginbtn forgotBtn">FORGOT YOUR PASSWORD</button>

                 

                </form>
            </section>
   

          
       
        </>
    )
}

export default Home