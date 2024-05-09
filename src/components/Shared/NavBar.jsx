import { Link } from 'react-router-dom';
import logo from '../../assets/logowhite.png'

const NavBar = () => {
    return (
        <div className="navbar  md:px-28 bg-[#1E2D24] text-white fixed z-10 bg-opacity-80">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#1E2D24] rounded-box w-52">
                    <li><Link to="/cse">CSE</Link></li>
                    <li><Link to="/eee">EEE</Link></li>
                    <li><Link to="/pharmacy">Pharmacy</Link></li>
                    <li>
                    <a>Parent</a>
                    <ul className="p-2">
                        <li><a>Submenu 1</a></li>
                        <li><a>Submenu 2</a></li>
                    </ul>
                    </li>
                   
                </ul>
                </div>
                <a className="btn btn-ghost text-xl"><img className="h-full" src={logo} alt="" /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                <li><Link to="/cse">CSE</Link></li>
                <li><Link to="/eee">EEE</Link></li>
                <li><Link to="/pharmacy">Pharmacy</Link></li>
                <li>
                    <details>
                    <summary>Parent</summary>
                    <ul className="p-2 bg-[#1E2D24] w-36 ">
                        <li><a>Submenu 1</a></li>
                        <li><a>Submenu 2</a></li>
                    </ul>
                    </details>
                </li>
                </ul>
            </div>



        
            <div className="navbar-end">
            <div className="dropdown dropdown-end mr-4">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
            </div>
            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content  rounded-box w-52 bg-[#1E2D24]">
                <li>
                <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                </a>
                </li>
                <li><a>Settings</a></li>
                <li><a>Logout</a></li>
            </ul>
            </div>
               

 <a className="px-6 py-2 min-w-[120px] text-center text-[#FF1B1C] border border-[#FF1B1C] rounded hover:bg-[#FF1B1C] hover:text-white active:bg-[#FF1B1C] focus:outline-none focus:ring"
            href="/download">
            Login
        </a>
            </div>
      </div>
    );
};

export default NavBar;