import { NavLink, Outlet, useLocation } from "react-router-dom";
import NavBar from "../components/Shared/NavBar";
import ResourceLeftNav from "../components/Shared/ResourceLeftNav";
import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const ResourceLayout = () => {
    const [isNavOpen,setIsNavOpen] = useState(false);
    const {user} = useContext(AuthContext)
    const location = useLocation();
    const toggleNav=()=>{
        setIsNavOpen(!isNavOpen);
    }
    const closeNav=()=>{
        setIsNavOpen(false);
    }
    return (
        <div className="Inter-font bg-[#F8F0FB]">
            <NavBar></NavBar>
        <div className=" pt-[68px]  relative flex h-screen min-w-full">
        
        <div className={`bg-[#9A031E] text-white w-full md:w-1/5 z-10 ${isNavOpen ? 'absolute' : 'hidden'} md:block`}>
        <ResourceLeftNav  closeNav={closeNav} ></ResourceLeftNav>
        </div>
        

{/* Content */}
        <div className="w-full md:w-4/5">

        {/* Toggle Button for Mobile */}

            {/* Bottom Navigation Bar for Mobile */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#1E2D24] z-20 border-t-2 border-slate-400 shadow-2xl shadow-black flex justify-around items-center py-2">
                <NavLink to="/" className="text-white flex flex-col items-center">
                    <svg
                        width="24px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12 3L2 12h3v8h6V15h2v5h6v-8h3L12 3z"
                            stroke="#FFFFFF"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <span className="text-xs">Home</span>
                </NavLink>
                
                {
                    user?  <NavLink to="/dashboard/home" className="text-white flex flex-col items-center">
                        <svg
                            width="24px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10 2H14V6H10V2ZM2 10H6V14H2V10ZM18 10H22V14H18V10ZM10 18H14V22H10V18ZM4 4H9V9H4V4ZM15 4H20V9H15V4ZM15 15H20V20H15V15ZM4 15H9V20H4V15Z"
                                fill="#FFFFFF"
                            />
                        </svg>
                        <span className="text-xs">Dashboard</span>
                    </NavLink> : <NavLink to={{ pathname: '/login', state: { from: location } }} className="text-white flex flex-col items-center">
                    <svg
                        width="24px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10 2H14V6H10V2ZM2 10H6V14H2V10ZM18 10H22V14H18V10ZM10 18H14V22H10V18ZM4 4H9V9H4V4ZM15 4H20V9H15V4ZM15 15H20V20H15V15ZM4 15H9V20H4V15Z"
                            fill="#FFFFFF"
                        />
                    </svg>
                    <span className="text-xs">Dashboard</span>
                </NavLink>
                }

                <button
                    className="text-white flex flex-col items-center"
                    onClick={toggleNav}
                >
                    {isNavOpen ? (
                        <svg
                            width="24px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M16 8L7.99997 16M7.99999 8L16 16"
                                stroke="#FFFFFF"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    ) : (
                        <svg
                            width="24px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447ZM12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13ZM9 12C9 12.5523 8.55228 13 8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12ZM16 13C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11C15.4477 11 15 11.4477 15 12C15 12.5523 15.4477 13 16 13Z"
                                fill="#FFFFFF"
                            />
                        </svg>
                    )}
                    <span className="text-xs">Course</span>
                </button>
            </div>

        {/* Toggle Button for Mobile */}


        <div className="p-2 md:p-4 pb-20 md:pb-0">
            <Outlet></Outlet> 
        </div>
            </div>

        </div>            
        </div>
    );
};

export default ResourceLayout;