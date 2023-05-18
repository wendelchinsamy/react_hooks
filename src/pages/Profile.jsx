import { useContext } from "react"
import { LoginContext } from "../Context"

function Profile() {
  const { loggedIn } = useContext(LoginContext)

  return (
    <div className={loggedIn ? "" : "hidden"}>
      <div className="card">
        <p>The profile page is visible because you are logged in</p>
      </div>
    </div>
  )
}

export default Profile
