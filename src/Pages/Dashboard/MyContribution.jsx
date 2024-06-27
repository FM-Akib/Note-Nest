 import { Link } from "react-router-dom";
import useUserInfo from "../../Hooks/useUserInfo";
import HeadDash from "./HeadDash";
import { RiShieldStarFill } from "react-icons/ri";
import { FcInfo } from "react-icons/fc";

const MyContribution = () => {

   const {userInfo} = useUserInfo()
//    console.log(userInfo)
   const {myContribution} = userInfo;
//    console.log(myContribution);

    return (
        <div className="pt-20 md:px-20 px-2 overflow-y-auto min-h-screen max-h-screen">
            <HeadDash icn={<RiShieldStarFill className="text-[#EFCA08]" />} head="My Contribution" subHead="All your remarkable contribution are here."></HeadDash>


{
   myContribution?.length? myContribution?.map((acontribution, i) => (
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
                                {/* <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                <p className="text-xs">2 hours ago</p> */}
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
    )) : <div className="flex flex-col items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" width="200"  viewBox="0 0 647.63626 632.17383" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="M687.3279,276.08691H512.81813a15.01828,15.01828,0,0,0-15,15v387.85l-2,.61005-42.81006,13.11a8.00676,8.00676,0,0,1-9.98974-5.31L315.678,271.39691a8.00313,8.00313,0,0,1,5.31006-9.99l65.97022-20.2,191.25-58.54,65.96972-20.2a7.98927,7.98927,0,0,1,9.99024,5.3l32.5498,106.32Z" transform="translate(-276.18187 -133.91309)" fill="#f2f2f2"/><path d="M725.408,274.08691l-39.23-128.14a16.99368,16.99368,0,0,0-21.23-11.28l-92.75,28.39L380.95827,221.60693l-92.75,28.4a17.0152,17.0152,0,0,0-11.28028,21.23l134.08008,437.93a17.02661,17.02661,0,0,0,16.26026,12.03,16.78926,16.78926,0,0,0,4.96972-.75l63.58008-19.46,2-.62v-2.09l-2,.61-64.16992,19.65a15.01489,15.01489,0,0,1-18.73-9.95l-134.06983-437.94a14.97935,14.97935,0,0,1,9.94971-18.73l92.75-28.4,191.24024-58.54,92.75-28.4a15.15551,15.15551,0,0,1,4.40966-.66,15.01461,15.01461,0,0,1,14.32032,10.61l39.0498,127.56.62012,2h2.08008Z" transform="translate(-276.18187 -133.91309)" fill="#3f3d56"/><path d="M398.86279,261.73389a9.0157,9.0157,0,0,1-8.61133-6.3667l-12.88037-42.07178a8.99884,8.99884,0,0,1,5.9712-11.24023l175.939-53.86377a9.00867,9.00867,0,0,1,11.24072,5.9707l12.88037,42.07227a9.01029,9.01029,0,0,1-5.9707,11.24072L401.49219,261.33887A8.976,8.976,0,0,1,398.86279,261.73389Z" transform="translate(-276.18187 -133.91309)" fill="#9a031e"/><circle cx="190.15351" cy="24.95465" r="20" fill="#9a031e"/><circle cx="190.15351" cy="24.95465" r="12.66462" fill="#fff"/><path d="M878.81836,716.08691h-338a8.50981,8.50981,0,0,1-8.5-8.5v-405a8.50951,8.50951,0,0,1,8.5-8.5h338a8.50982,8.50982,0,0,1,8.5,8.5v405A8.51013,8.51013,0,0,1,878.81836,716.08691Z" transform="translate(-276.18187 -133.91309)" fill="#e6e6e6"/><path d="M723.31813,274.08691h-210.5a17.02411,17.02411,0,0,0-17,17v407.8l2-.61v-407.19a15.01828,15.01828,0,0,1,15-15H723.93825Zm183.5,0h-394a17.02411,17.02411,0,0,0-17,17v458a17.0241,17.0241,0,0,0,17,17h394a17.0241,17.0241,0,0,0,17-17v-458A17.02411,17.02411,0,0,0,906.81813,274.08691Zm15,475a15.01828,15.01828,0,0,1-15,15h-394a15.01828,15.01828,0,0,1-15-15v-458a15.01828,15.01828,0,0,1,15-15h394a15.01828,15.01828,0,0,1,15,15Z" transform="translate(-276.18187 -133.91309)" fill="#3f3d56"/><path d="M801.81836,318.08691h-184a9.01015,9.01015,0,0,1-9-9v-44a9.01016,9.01016,0,0,1,9-9h184a9.01016,9.01016,0,0,1,9,9v44A9.01015,9.01015,0,0,1,801.81836,318.08691Z" transform="translate(-276.18187 -133.91309)" fill="#9a031e"/><circle cx="433.63626" cy="105.17383" r="20" fill="#9a031e"/><circle cx="433.63626" cy="105.17383" r="12.18187" fill="#fff"/></svg>
        
        <h2 className="mt-2 md:mt-5 bg-yellow-300 font-semibold px-4 py-2 rounded-lg flex items-center text-sm md:text-md justify-center"><FcInfo className="mr-1" /> You have no contributions.</h2>
    </div>
}




        </div>
    );
};

export default MyContribution;