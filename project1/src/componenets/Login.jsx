import React ,{useState,useContext} from 'react'

// import ContextProvider from '../context/UserContextProvider';

import UserContext from '../context/UserContext';


function Login(){
   const [userName,setUserName]=useState("");

   const [password,setPassord]=useState("");

   const {setUser}=useContext(UserContext)

    const fullFillHandler=(e)=>{

        e.preventDefault();

        setUser({userName,password})

    }

    return(
        <>
  <h2>Login</h2>
  <input type="text"

   placeholder="userName" value={userName} onChange={(e)=>{

    setUserName(e.target.value)

   }}/>

  <input type='text' placeholder="password" value={password} onChange={(e)=>{

    setPassord(e.target.value)

   }}/>

  <button onClick={fullFillHandler}>Submit</button>
  </>

    )
}

export default Login
