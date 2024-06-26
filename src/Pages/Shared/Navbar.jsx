import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navOptions = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/colleges">Colleges</NavLink>
      </li>
      <li>
        <NavLink to="/admission">Admission</NavLink>
      </li>
      <li>
        <NavLink to="/my-college">My college</NavLink>
      </li>
    </>
  );
  return (
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
            {navOptions}
          </ul>
        </div>
        <div className="text-xl flex justify-center items-center">
          <img width="50px" src={logo} alt="" />
          <span className="mt-4 font-bold hidden md:block">College Finder</span>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navOptions}
        </ul>
      </div>
      <div className="navbar-end">
        { (user?.displayName) ? (
          <>
            <img
              className="rounded-full hidden md:block"
              width="40px"
              src={user?.photoURL}
              alt=""
            />
            <Link to="/profile" className="">
              <span className="me-4 text-primary">{user?.displayName}</span>
            </Link>
            <NavLink className="btn btn-neutral" onClick={handleLogOut}>
              LogOut
            </NavLink>
          </>
        ) : (
          <NavLink className="btn btn-neutral" to="/login">
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
