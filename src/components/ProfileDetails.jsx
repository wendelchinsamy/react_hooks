import { useContext } from "react"
import { LoginContext } from "../Context"

function ProfileDetails() {
  const { loggedIn } = useContext(LoginContext)

  return (
    <div className={loggedIn ? "" : "hidden"}>
      <p>Name: Jane Doe</p>
      <p>Email: jane_doe@example,.com</p>
    </div>
  )
}

export default ProfileDetails
