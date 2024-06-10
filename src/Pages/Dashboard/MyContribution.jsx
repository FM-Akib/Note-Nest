 import { Link } from "react-router-dom";
import useUserInfo from "../../Hooks/useUserInfo";
import HeadDash from "./HeadDash";
import { RiShieldStarFill } from "react-icons/ri";

const MyContribution = () => {

   const {userInfo} = useUserInfo()
//    console.log(userInfo)
   const {myContribution} = userInfo;
//    console.log(myContribution);

    return (
        <div className="pt-20 md:px-20 px-2 overflow-y-auto max-h-screen">
            <HeadDash icn={<RiShieldStarFill className="text-[#EFCA08]" />} head="My Contribution" subHead="All your remarkable contribution are here."></HeadDash>


{
    myContribution?.map((acontribution, i) => (
        <div key={i} className="flex items-center justify-center mb-4">
            <div className="p-4 items-center justify-between w-full border-[1px] border-gray-600 group sm:flex space-x-6 bg-opacity-50 shadow-sm bg-white rounded-2xl">
                <img className="block md:w-3/12 h-40 rounded-lg mx-0" alt="art cover" src={acontribution.imgCover} />
                <div className="md:w-9/12 pl-0 p-5">
                    <div className="space-y-2">
                        <div className="space-y-1">
                            <h4 className="text-md font-semibold text-cyan-900 text-justify break-words">
                                {acontribution.title}
                            </h4>
                            <p className="w-full whitespace-normal break-words">
                                {acontribution.description}
                            </p>
                            <p className="font-semibold">{acontribution.courseCode} </p>
                        </div>
                        <div className="flex items-center space-x-4 justify-between">
                            <div className="flex items-center gap-3">
                                <img src={acontribution.authorImg} className="rounded-full h-8 w-8" alt="author" />
                                <span className="text-sm">
                                    {acontribution.authorName} <br />
                                    <span className="text-xs">3AM</span>
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-center space-x-4 justify-between">
                            <div className="text-grey-500 flex flex-row space-x-1 my-4">
                                <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                <p className="text-xs">2 hours ago</p>
                            </div>
                            <div className="flex flex-row space-x-1">
                               <Link to={`/dashboard/editContribution/${acontribution.id}`} target="_blank">
                                    <button className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded mr-2">
                                        Edit
                                    </button>
                                </Link>
                                <Link to={acontribution.url} target="_blank">
                                    <button className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded mr-2">
                                        View
                                    </button>
                                </Link>
                                <button className="bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded flex justify-between items-center">
                                    <svg stroke="currentColor" fill="currentColor" viewBox="0 0 1024 1024" className="text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M885.9 533.7c16.8-22.2 26.1-49.4 26.1-77.7 0-44.9-25.1-87.4-65.5-111.1a67.67 67.67 0 0 0-34.3-9.3H572.4l6-122.9c1.4-29.7-9.1-57.9-29.5-79.4A106.62 106.62 0 0 0 471 99.9c-52 0-98 35-111.8 85.1l-85.9 311H144c-17.7 0-32 14.3-32 32v364c0 17.7 14.3 32 32 32h601.3c9.2 0 18.2-1.8 26.5-5.4 47.6-20.3 78.3-66.8 78.3-118.4 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7-.2-12.6-2-25.1-5.6-37.1zM184 852V568h81v284h-81zm636.4-353l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 22.4-13.2 42.6-33.6 51.8H329V564.8l99.5-360.5a44.1 44.1 0 0 1 42.2-32.3c7.6 0 15.1 2.2 21.1 6.7 9.9 7.4 15.2 18.6 14.6 30.5l-9.6 198.4h314.4C829 418.5 840 436.9 840 456c0 16.5-7.2 32.1-19.6 43z"></path>
                                    </svg>
                                    <span className="ml-1">{acontribution?.star}</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ))
}




        </div>
    );
};

export default MyContribution;