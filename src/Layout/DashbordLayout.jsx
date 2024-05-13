import { Outlet } from "react-router-dom";
import NavBar from "../components/Shared/NavBar";
import DashNavLeft from "../Pages/Dashboard/DashNavLeft";

const DashbordLayout = () => {
    return (
        <div className="Inter-font bg-[#F8F0FB]">
            <NavBar></NavBar>
        <div className="max-w-full pt-[68px]  mx-auto grid grid-cols-11">
        
        <div className="col-span-2">
        <DashNavLeft></DashNavLeft>
        </div>
        
        <div className="col-span-9 p-4">
        <Outlet></Outlet> 
        </div>


        </div>            
        </div>
    );
};

export default DashbordLayout;