import { RiShieldStarFill } from "react-icons/ri";
import HeadDash from "./HeadDash";
import useUserInfo from "../../Hooks/useUserInfo";

const Myprojects = () => {

    const {userInfo} = useUserInfo()
    //    console.log(userInfo)
       const {components} = userInfo;
    
    return (
        <div className="pt-20 md:px-20 px-2 overflow-y-auto min-h-screen max-h-screen">
            <HeadDash icn={<RiShieldStarFill className="text-[#EFCA08]" />} head="My Components" subHead="Your Hub for Quality Project Components"></HeadDash>
  

        {
            components?.map(component => <div 
                key={component.id}
                className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
                >
                <span
                    className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
                ></span>

                <div className="sm:flex sm:justify-between sm:gap-4">
                    <div>
                    <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                       {component.title}
                    </h3>

                    <p className="mt-1 text-xs font-medium text-gray-600">By {component.authorName}</p>
                    </div>

                    <div className=" sm:block sm:shrink-0">
                    <img
                        alt=""
                        src={component.projectImg}
                        className="size-36 my-2 md:my-0 rounded-lg object-cover shadow-sm"
                    />
                    </div>
                </div>

                <div className="mt-4">
                    <p className="text-pretty text-sm text-gray-500">
                    {component.description}
                    </p>
                </div>

                <dl className="mt-6 flex flex-col md:flex-row gap-4 sm:gap-6">
                    <div className="flex flex-col-reverse">
                    <dt className="text-sm font-medium text-gray-600">BDT - {component.price}</dt>
                    <dd className="text-xs text-gray-500">{component.sale}</dd>
                    </div>

                    <div className="flex flex-col-reverse">
                    <dt className="text-sm font-medium text-gray-600">{component.contact}</dt>
                    <dd className="text-xs text-gray-500">Contact-</dd>
                    </div>



                    <div className="flex flex-col-reverse">
                    <div>
                    <label  className="block text-sm font-medium text-gray-900"> Status </label>

                    <select
                        name="HeadlineAct"
                        id="HeadlineAct"
                        className="mt-1.5 w-full px-2 py-1 rounded-lg border-gray-300 text-gray-700 sm:text-sm"
                    >
                        <option value="">Please select</option>
                        <option value="Available">Available</option>
                        <option value="Sold out">Sold out</option>
                    </select>
                    </div>
                    </div>

                    <div className="flex flex-col-reverse">
                    <label
                    className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600">
                    <input
                        type="text"
                        id="UserEmail"
                        placeholder="Email"
                        className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                    />

                    <span
                        className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                        New Price
                    </span>
                    </label>
                    </div>



                 
                    <button
                    className="group relative inline-block overflow-hidden border border-indigo-600 px-8 py-2 focus:outline-none focus:ring rounded-md"
                    >
                    <span
                        className="absolute inset-y-0 left-0 w-[2px] bg-indigo-600 transition-all group-hover:w-full group-active:bg-indigo-500"
                    ></span>

                    <span
                        className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white"
                    >
                        Update
                    </span>
                    </button>


                </dl>
            </div>)
        }


  

        </div>
    );
};

export default Myprojects;