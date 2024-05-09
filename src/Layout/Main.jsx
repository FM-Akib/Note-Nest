import { Outlet } from "react-router-dom";
import NavBar from "../components/Shared/NavBar";
import '../App.css'

const Main = () => {
    return (
        <div className="Inter-font">
        <NavBar></NavBar>
        <Outlet></Outlet>
        </div>
    );
};

export default Main;