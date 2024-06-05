import { Outlet } from "react-router-dom";
import NavBar from "../components/Shared/NavBar";
import ResourceLeftNav from "../components/Shared/ResourceLeftNav";
import { useState } from "react";


const ResourceLayout = () => {
    const [isNavOpen,setIsNavOpen] = useState(false);


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
            <button className="md:hidden fixed bottom-4 right-4 z-20 bg-gray-600 text-white rounded-full p-3"
            onClick={toggleNav}>
            {isNavOpen ? <svg fill="#EFCA08" width="25px" viewBox="0 0 200 200" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><title/><path d="M100,15a85,85,0,1,0,85,85A84.93,84.93,0,0,0,100,15Zm0,150a65,65,0,1,1,65-65A64.87,64.87,0,0,1,100,165Z"/><path d="M128.5,74a9.67,9.67,0,0,0-14,0L100,88.5l-14-14a9.9,9.9,0,0,0-14,14l14,14-14,14a9.9,9.9,0,0,0,14,14l14-14,14,14a9.9,9.9,0,0,0,14-14l-14-14,14-14A10.77,10.77,0,0,0,128.5,74Z"/></svg> :     <svg fill="#9A031E" width="25px" viewBox="0 0 24 24" id="dashboard" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" className="icon flat-color">
            <path id="secondary" d="M22,4V7a2,2,0,0,1-2,2H15a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2h5A2,2,0,0,1,22,4ZM9,15H4a2,2,0,0,0-2,2v3a2,2,0,0,0,2,2H9a2,2,0,0,0,2-2V17A2,2,0,0,0,9,15Z" style={{ fill: 'rgb(239, 202, 8)' }} />
            <path id="primary" d="M11,4v7a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V4A2,2,0,0,1,4,2H9A2,2,0,0,1,11,4Zm9,7H15a2,2,0,0,0-2,2v7a2,2,0,0,0,2,2h5a2,2,0,0,0,2-2V13A2,2,0,0,0,20,11Z" style={{ fill: 'rgb(255, 255, 255)' }} />
            </svg>}
            </button>


        <div className="p-4">
            <Outlet></Outlet> 
        </div>
            </div>

        </div>            
        </div>
    );
};

export default ResourceLayout;