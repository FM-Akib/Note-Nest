import { NavLink } from "react-router-dom";
import Departments from "./Departments";
import Features from "./Features";
import Hero from "./Hero";
import SellComponents from "./SellComponents";
import TopContributor from "./TopContributor";
import UniCard from "./UniCard";
import { useState } from "react";
import { MdComputer, MdSportsVolleyball } from "react-icons/md";
import { GiElectric } from "react-icons/gi";
import { GoProjectSymlink } from "react-icons/go";

const Landing = () => {
    // const [isNavOpen, setIsNavOpen] = useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    // const toggleNav = () => {
    //     setIsNavOpen(!isNavOpen);
    // };

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const handleNavLinkClick = () => {
        // setIsNavOpen(false);
        setIsDrawerOpen(false);
    };

    return (
        <div className="px-2 md:px-20">
            <Hero />
            <UniCard />
            <TopContributor />
            <Features />
            <SellComponents />
            <Departments />

















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

                <NavLink to="/clubs" className="text-white flex flex-col items-center" onClick={handleNavLinkClick}>
                    <MdSportsVolleyball className="text-2xl" />
                    <span className="text-xs">Clubs</span>
                </NavLink>

                <NavLink to="/projects" className="text-white flex flex-col items-center" onClick={handleNavLinkClick}>
                    <GoProjectSymlink className="text-2xl" />
                    <span className="text-xs">Projects</span>
                </NavLink>
                
                <button className="text-white flex flex-col items-center" onClick={toggleDrawer}>
                    {isDrawerOpen ? (
                        <svg
                            width="24px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M16 8L8 16M8 8L16 16"
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
                    <span className="text-xs">Menu</span>
                </button>
            </div>

          
            {/* Drawer for Departments */}
          
            {isDrawerOpen && (
                <div className="fixed bottom-16 left-0 right-0 bg-[#1E2D24] z-30 border-t-2 border-slate-400 shadow-2xl shadow-black p-4">
                    <NavLink to="/resources/cse" className="text-white flex items-center mb-2" onClick={handleNavLinkClick}>
                        <MdComputer className="text-2xl mr-2" />
                        <span className="text-base">CSE</span>
                    </NavLink>
                    <NavLink to="/eee" className="text-white flex items-center mb-2" onClick={handleNavLinkClick}>
                        <GiElectric className="text-2xl mr-2" />
                        <span className="text-base">EEE</span>
                    </NavLink>
                    <NavLink to="/pharmacy" className="text-white flex items-center mb-2" onClick={handleNavLinkClick}>
                        <svg
                            width="24px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="mr-2"
                        >
                            <path
                                d="M5 21h14V7H5v14zM19 3h-2V1h-2v2H9V1H7v2H5v4h14V3z"
                                fill="#FFFFFF"
                            />
                        </svg>
                        <span className="text-base">Pharmacy</span>
                    </NavLink>
                </div>
            )}
        </div>
    );
};

export default Landing;
