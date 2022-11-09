import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
// import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./components/auth/SignUp";
import Home from "./components/auth/Home";
import ProfileEdit from "./components/auth/ProfileEdit";
import ProfileDisplay from "./components/auth/ProfileDisplay";
import Error from "./components/auth/Error";

function App() {
  return (
    <div>
      <h1>Welcome to <b></b>
      </h1>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="signup" element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="profile" element={<ProfileDisplay />} />
        <Route path="profileEdit" element={<ProfileEdit />} />
        <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/login">Log In</Link>
          </li>
          <li>
            <Link to="/profile">Profile Page</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}


// function About() {
//   return <h2>About</h2>;
// }

// function Users() {
//   return <h2>Users</h2>;
// }
export default App;
