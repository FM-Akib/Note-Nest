import { NavLink } from 'react-router-dom';
import iiuc from '../../assets/iiucLogo.png';
import { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import useUserInfo from '../../Hooks/useUserInfo';
import toast, { Toaster } from 'react-hot-toast';
import { RiLogoutCircleRFill } from "react-icons/ri";



const loggedOutNotify = () =>{
    toast.success('Logged Out!!')
}

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const { userInfo } = useUserInfo();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleLogout = () => {
        logOut()
            .then(() => { 
                loggedOutNotify() 
            })
            .catch(err => console.log(err));
    }

    const handleNavLinkClick = () => {
        setDropdownOpen(false);
    }

    return (
        <>
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
        <div className="navbar md:px-28 bg-[#1E2D24] text-white fixed z-30">
            <div className="navbar-start">
                <div className="dropdown">
                    <div 
                        tabIndex={0} 
                        role="button" 
                        className="btn btn-ghost lg:hidden px-4"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    {dropdownOpen && (
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow-xl bg-[#1E2D24] rounded-box w-72">
                            <li><NavLink exact to="/resources/cse" activeClassName="bg-white text-gray-600" onClick={handleNavLinkClick}>CSE</NavLink></li>
                            <li><NavLink exact to="/resourcesEEE/eee" activeClassName="bg-white text-gray-600" onClick={handleNavLinkClick}>EEE</NavLink></li>
                            <li><NavLink exact to="/resourcesPharma/pharmacy" activeClassName="bg-white text-gray-600" onClick={handleNavLinkClick}>Pharmacy</NavLink></li>
                            <li><NavLink exact to="/clubs" activeClassName="bg-white text-gray-600" onClick={handleNavLinkClick}>Clubs</NavLink></li>
                            <li><NavLink exact to="/projects" activeClassName="bg-white text-gray-600" onClick={handleNavLinkClick}>Project-components</NavLink></li>
                        </ul>
                    )}
                </div>
                <NavLink to="/" className="btn btn-ghost p-0 text-xl">
                    <img className="h-full" src={iiuc} alt="" />
                    <img className="sm:h-full h-5/6" src="https://i.ibb.co/x22cWLD/2.png" alt="" />
                </NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink exact to="/resources/cse" activeClassName="bg-white text-gray-600">CSE</NavLink></li>
                    <li><NavLink exact to="/resourcesEEE/eee" activeClassName="bg-white text-gray-600">EEE</NavLink></li>
                    <li><NavLink exact to="/resourcesPharma/pharmacy" activeClassName="bg-white text-gray-600">Pharmacy</NavLink></li>
                    <li><NavLink exact to="/clubs" activeClassName="bg-white text-gray-600">Clubs</NavLink></li>
                    <li><NavLink exact to="/projects" activeClassName="bg-white text-gray-600">Project-components</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? (
                        <div className="dropdown dropdown-end mr-4">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="" src={user?.photoURL ? user.photoURL : userInfo?.image} />
                                </div>
                            </div>
                            <ul tabIndex={0} className="mt-3 z-[1] p-4 shadow-xl menu menu-sm dropdown-content rounded-box w-52 bg-[#1E2D24]">
                                <li>
                                    <NavLink to="/dashboard/home" className="justify-between" activeClassName="bg-white text-gray-600">
                                        Dashboard
                                        <span className="badge">user</span>
                                    </NavLink>
                                </li>
                                {/* <li><a>Settings</a></li> */}
                                <li><button onClick={handleLogout} >Logout<RiLogoutCircleRFill className='text-xl' /></button></li>
                            </ul>
                        </div>
                    ) : (
                        <NavLink className="px-4 py-2 text-center text-white border border-[#FF1B1C] rounded hover:bg-[#FF1B1C] hover:text-white active:bg-[#FF1B1C] focus:outline-none focus:ring"
                            to="/login"
                            activeClassName="bg-white text-gray-600"
                        >
                            Login
                        </NavLink>
                    )
                }
            </div>
        </div>
        </>
    );
};

export default NavBar;
