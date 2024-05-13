
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import NavBar from "../components/Shared/NavBar";

const DashbordLayout = () => {
    const [isNavOpen,setIsNavOpen] = useState(false);
    const toggleNav=()=>{
        setIsNavOpen(!isNavOpen);
    }
    const closeNav=()=>{
        setIsNavOpen(false);
    }

    return (
    <>
      <NavBar></NavBar>
       <div className="relative flex h-screen min-w-full py-16">
   
        {/* Navigation */}
        <div className={`bg-red-600 text-white w-full md:w-1/5 z-10 ${isNavOpen ? 'absolute' : 'hidden'} md:block`}>
          <div className="p-6">
            <h1 className="text-xl font-bold">Dashboard</h1>
            <ul className="mt-4">
             <Link to="/" className=" "> <li className="py-2 transition duration-300 ease-in-out hover:bg-white hover:text-red-600 font-semibold  px-4 rounded-sm " onClick={closeNav}>Link 1 </li></Link>
              <li className="py-2 transition duration-300 ease-in-out hover:bg-white hover:text-red-600 font-semibold  px-4 rounded-sm " onClick={closeNav}>Link 2</li>
              <li className="py-2 transition duration-300 ease-in-out hover:bg-white hover:text-red-600 font-semibold  px-4 rounded-sm " onClick={closeNav}>Link 3</li>
              {/* Add more navigation links as needed */}
            </ul>
          </div>
        </div>
  
        {/* Content */}
        <div className="w-full md:w-4/5">

          {/* Toggle Button for Mobile */}
          <button className="md:hidden fixed bottom-4 right-4 z-20 bg-gray-800 text-white rounded-full p-3"
            onClick={toggleNav}>
            {isNavOpen ? 'Close' : 'Menu'}
          </button>
  




          <div className="p-4">
           <Outlet></Outlet>
          </div>


          
        </div>
      </div></>
    );
};

export default DashbordLayout;