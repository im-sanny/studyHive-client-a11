import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <NavLink>
        <li>
          <a>Assignments</a>
        </li>
      </NavLink>
      <NavLink>
        <li>
          <a>Create Assignments</a>
        </li>
      </NavLink>
      <NavLink>
        <li>
          <a>Pending Assignments</a>
        </li>
      </NavLink>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl lg:-ml-0 -ml-5">
            <img
              src="https://i.ibb.co/7tw5yvk/study-group.png"
              className="w-10"
              alt=""
            />
            StudyHive
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <Link to={"/login"}>
            <a className="btn">Login</a>
          </Link>
          <div className="dropdown">
            <div className="btn btn-ghost btn-circle avatar">
              <div tabIndex={0} role="button" className="w-10 rounded-full">
                <img src="https://i.ibb.co/7tw5yvk/study-group.png" alt="" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-circle right-0 w-36"
            >
              <li>
                <a>My Attempted Assignments</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;