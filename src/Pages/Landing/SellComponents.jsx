import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const SellComponents = () => {
    const {user} = useContext(AuthContext)
    return (
<div className=" text-gray-900 py-20">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row items-center">
            <div className="lg:w-1/2 ">
                <h1 className="text-4xl font-bold leading-tight mb-4">Marketplace - Buy & Sell Project Components with Ease</h1>
                <p className="text-xl mb-8">Empowering IIUC students to easily buy and sell project components. Juniors can purchase essential items like Arduino and wires from peers, and anyone can sell their used components after completing projects. Simplify your project journey with our user-friendly platform.</p>
                <Link to="/projects"
                    className="bg-white  border-2 hover:bg-[#FDC317] mr-4 text-gray-900 py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition duration-200">Buy
                </Link>

            {
                user?<Link to="/dashboard/sellprojects"
                className="bg-white border-2 hover:bg-[#FDC317] text-gray-900 py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition duration-200">Sell
                </Link>:<Link to="/login"
                                className="bg-white border hover:bg-[#FDC317] text-gray-900 py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition duration-200">Sell
                </Link>
            }

            </div>
            <div className="lg:w-1/2 lg:ml-12">
                <img src="https://i.ibb.co/zVy514h/Buy.gif" alt="Tailwind CSS" className="rounded-lg shadow-lg hover:shadow-xl transition duration-200"/>
            </div>
        </div>
    </div>
</div>
    );
};

export default SellComponents;