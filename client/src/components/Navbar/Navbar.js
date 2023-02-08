import "./Navbar.css";
// import link element from dependency react-router-dom for use with browser router
import { NavLink, Outlet } from "react-router-dom";

// implement functional React component for the Navbar
export const Navbar = () => {
  return (
    <div className="Navbar">
      {/* utilize semantic HTML for header and nav elements */}
      <header className="header">
        <nav className="nav">
          {/* load react icon image per the mockup */}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            alt="small react logo"
          ></img>
          {/* implement a list of links for the navbar elements */}
          <ul className="list">
            <li>
              {/* link is essentially an anchor tag that links to the specified path */}
              <NavLink to="/">Exams</NavLink>
            </li>
            <li>
              <NavLink to="/admin">Admin</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};
