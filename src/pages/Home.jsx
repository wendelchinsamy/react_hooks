import { useContext } from "react"
import { LoginContext } from "../Context"

function Home() {
  const { loggedIn, setLoggedIn } = useContext(LoginContext)

  const handleLogout = () => {
    setLoggedIn(false)
  }

  return (
    <div className={loggedIn ? "" : "hidden"}>
      <div className="card">
        <p>The home page is visible because you are logged in</p>
        {loggedIn && (
          <button className="btn" type="button" onClick={handleLogout}>
            Click to log out!
          </button>
        )}
      </div>
    </div>
  )
}

export default Home
