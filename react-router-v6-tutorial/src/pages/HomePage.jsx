import { Link } from "react-router-dom"

const userId = 10;

const HomePage = () => {


  return (
    <>
      <h1>Home page</h1>
      <Link to={`/users/${userId}`}>Users</Link>
    </>
  )
}

export default HomePage
