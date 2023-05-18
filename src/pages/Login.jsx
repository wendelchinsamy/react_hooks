import { useContext } from "react"
import { LoginContext } from "../Context"
import ProfileDetails from "../components/ProfileDetails"

function Login() {
  const { loggedIn, setLoggedIn } = useContext(LoginContext)

  const handleLogin = () => {
    setLoggedIn(!loggedIn)
  }

  return (
    <div className="card">
      {loggedIn && (
        <>
          <p>You are logged in!</p>
          <button className="btn" type="button" onClick={handleLogin}>
            Click to log out!
          </button>
        </>
      )}
      {!loggedIn && (
        <>
          <p>You are logged out!</p>
          <button className="btn" type="button" onClick={handleLogin}>
            Click to login!
          </button>
        </>
      )}
      <ProfileDetails loggedIn={loggedIn} />
    </div>
  )
}

export default Login
