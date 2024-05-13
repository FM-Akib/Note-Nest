import { Outlet } from "react-router-dom";
import NavBar from "../components/Shared/NavBar";
import '../App.css'

const Main = () => {
    return (
        <div className="Inter-font bg-[#F8F0FB]">
        <NavBar></NavBar>
        <div className="max-w-full py-10  mx-auto">
        <Outlet></Outlet>
        </div>
        </div>
    );
};

export default Main;