import { Link, NavLink } from "react-router-dom";
import logo from '../assets/logo1.png';
import navBg from '../assets/nav-bg.jpg'
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const {logOut,user} = useContext(AuthContext)


    const links = <>
    <li className="text-white font-raleway"><NavLink to='/'>Home</NavLink></li>
    <li className="text-white font-raleway"><NavLink to='/addCoffee'>Add Coffee</NavLink></li>
    <li className="text-white font-raleway"><NavLink to='/signUp'>Signup</NavLink></li>
    { user && user.email &&(
  <li className="text-white font-raleway"><NavLink to='/users'>Users</NavLink></li>

    )}
    </>
    return (
        <div className="navbar" style={{
            backgroundImage:`url(${navBg})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
        }}>
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-[#331A15] rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <div className="hidden md:block">
    <div className="flex items-center">
    <img className="w-10 h-10 object-cover" src={logo} alt="" />
    <a className="text-xl font-bold text-white font-rancho">Expresso Emperium</a>
    </div>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    {
      user && user.email ? (
        
        <button onClick={logOut} className="btn">Logout</button>
        
      ) : (
        <NavLink to='/signIn'><button className="btn font-raleway">Login</button></NavLink>
      )
    }
    
  </div>
</div>
    );
};

export default Navbar;