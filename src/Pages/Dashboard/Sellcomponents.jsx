import { RiShieldStarFill } from "react-icons/ri";
import HeadDash from "./HeadDash";

const Sellcomponents = () => {
    return (
        <div className="pt-20 md:px-20 px-2 overflow-y-auto min-h-screen max-h-screen">
            <HeadDash icn={<RiShieldStarFill className="text-[#EFCA08]" />} head="Sell Components" subHead="Sell your project components"></HeadDash>
  
  
  
  <div className=" flex items-center">
    <div className="w-full">
        {/* <h2 className="text-center text-blue-400 font-bold text-2xl uppercase mb-10">Fill out our form</h2> */}
        <div className="bg-white p-10 rounded-lg shadow md:w-4/4 mx-auto lg:w-2/2">
           
                <div className="mb-5">
                    <label  className="block mb-2 font-bold text-gray-600">Components Name</label>
                    <input type="text" placeholder="Sell components name." className="border border-gray-300 shadow p-3 w-full rounded mb-"/>
                </div>


                <div className="w-full flex gap-4">
                <div className="mb-5 w-1/2">
                    <label className="block mb-2 font-bold text-gray-600">Price</label>
                    <input placeholder="Enter a price." className="border border-red-300 shadow p-3 w-full rounded mb-"/>
                    {/* <p className="text-sm text-red-400 mt-2">Twitter username is required</p> */}
                </div>

                <div className="mb-5 w-1/2">
                    <label className="block mb-2 font-bold text-gray-600">Contact</label>
                    <input placeholder="Give a contact number." className="border border-red-300 shadow p-3 w-full rounded mb-"/>
                    {/* <p className="text-sm text-red-400 mt-2">Twitter username is required</p> */}
                </div>
                </div>
                
                <div className="mb-5">
                    <label  className="block mb-2 font-bold text-gray-600">Short description</label>
                    <textarea type="text" placeholder="S hort description about your components." className="border border-gray-300 shadow p-3 w-full rounded mb-"/>
                </div>


                <button className="block w-full bg-blue-500 text-white font-bold p-4 rounded-lg">Submit</button>
            
        </div>
    </div>
</div>
        </div>
    );
};

export default Sellcomponents;