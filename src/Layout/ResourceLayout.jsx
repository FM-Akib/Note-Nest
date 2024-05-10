import { Outlet } from "react-router-dom";
import NavBar from "../components/Shared/NavBar";


const ResourceLayout = () => {
    return (
        <div className="Inter-font bg-[#F8F0FB]">
            <NavBar></NavBar>
        <div className="max-w-[1300px] pt-20  mx-auto">
        <Outlet></Outlet>    
        </div>            
        </div>
    );
};

export default ResourceLayout;