import Home from "./pages/Home"
import Login from "./pages/Login"
import Profile from "./pages/Profile"

// import the context
import { LoginContext } from "./Context"
import { useState } from "react"

function App() {
  // Create loggedIn useState
  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <div className="wrapper">
      {/* The provider is a component you wrap around the other components you want to have access to the shared state */}
      {/* You set the values/functions that will be shared between the wrapped components */}
      <LoginContext.Provider value={{ loggedIn, setLoggedIn }}>
        <Login />
        <Home />
        <Profile />
      </LoginContext.Provider>
    </div>
  )
}

export default App
