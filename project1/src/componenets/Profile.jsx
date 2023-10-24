
import React  ,{useContext} from 'react'
// import ContextProvider from '../context/UserContextProvider'
import UserContext from '../context/UserContext'

function Profile(){
    const {user}=useContext(UserContext)

  if(!user) return <div>please login</div>
  return <div>Welcome to the profile of {user.userName} and password is {user.password}</div>
  
}

export default Profile