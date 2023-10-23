
import ContextProvider from './context/UserContextProvider'
import Login from './componenets/Login'
import Profile from './componenets/Profile'

function App() {
  

  return (
    <> <ContextProvider>
      <h1>Hello! in redux</h1>
      <Login/>
      <Profile/>
      </ContextProvider>  
     
    </>
  )
}

export default App
