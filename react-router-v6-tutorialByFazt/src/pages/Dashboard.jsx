// import { Route, Routes, useNavigate } from "react-router-dom"

import { Link, Outlet, useNavigate } from "react-router-dom";




export const Dashboard = () => {
  /* este hook antes era useHistory */
  const navigate = useNavigate();

  const handleClick = () => {
    /* ya no es history.push(url) sino simplemente navigate(url) */
    navigate("/users");
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <button
        onClick={handleClick}>Logout
      </button>
      <br /><br />
      <Link to="welcome">Go to Welcome</Link>
      
      {/* nunca crear rutas en un archivo de esta forma */}
      {/* <Routes>
        <Route path="welcome" element={<p>Welcome</p>} />
      </Routes> */}
      
      <br /><br />
      <Link to="goodbye">Go to Goodbye</Link>
      <br /><br />
      <Outlet />
    </div>
  )
}
