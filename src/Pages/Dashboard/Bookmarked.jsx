import { Link } from "react-router-dom";
import useUserInfo from '../../Hooks/useUserInfo'
import { BsTrash3Fill } from "react-icons/bs";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import HeadDash from "./HeadDash";
import { IoMdBookmarks } from "react-icons/io";
import { FcInfo } from "react-icons/fc";

const Bookmarked = () => {
   const {userInfo,refetch} = useUserInfo();
   const {bookmarked} = userInfo;
   const axiosPublic = useAxiosPublic();
   const {user} = useContext(AuthContext)


   const handleDelete= (id) => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(async(result) => {
        if (result.isConfirmed) {
          const deleteBookmark = await axiosPublic.delete(`/users/${user?.email}/bookmarks/${id}`)
        // console.log(deleteBookmark);
        if(deleteBookmark.data.result.modifiedCount>0){
            refetch();
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
        }
        
           
        }
      });
   }

    return (
        <div className="pt-20 md:px-20 px-2 overflow-y-auto pb-96 max-h-screen md:mb-20">
            <HeadDash icn={<IoMdBookmarks className="text-[#EFCA08]" />} head="Bookmarked" subHead="All your bookmarked resources are here."></HeadDash>

        {
           bookmarked.length? bookmarked?.map((acontribution, i) => (
                <div key={i} className="flex items-center justify-center mb-4 ">
                    <div className="p-4 items-center justify-between w-full  bg-white rounded-xl group sm:flex space-x-6 bg-opacity-50 shadow-sm border-[1px] hover:rounded-2xl">
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
                                    {/* <p className="font-semibold">{courseCode} - {courseTitle}</p> */}
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
                                        <Link to={acontribution.url} target="_blank">
                                            <button className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded mr-2">
                                                View
                                            </button>
                                        </Link>

                                        <button onClick={() =>handleDelete(acontribution?.id)} className="bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded flex justify-between items-center">
                                        <BsTrash3Fill />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )): <div className="flex flex-col items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" width="200"  viewBox="0 0 647.63626 632.17383" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="M687.3279,276.08691H512.81813a15.01828,15.01828,0,0,0-15,15v387.85l-2,.61005-42.81006,13.11a8.00676,8.00676,0,0,1-9.98974-5.31L315.678,271.39691a8.00313,8.00313,0,0,1,5.31006-9.99l65.97022-20.2,191.25-58.54,65.96972-20.2a7.98927,7.98927,0,0,1,9.99024,5.3l32.5498,106.32Z" transform="translate(-276.18187 -133.91309)" fill="#f2f2f2"/><path d="M725.408,274.08691l-39.23-128.14a16.99368,16.99368,0,0,0-21.23-11.28l-92.75,28.39L380.95827,221.60693l-92.75,28.4a17.0152,17.0152,0,0,0-11.28028,21.23l134.08008,437.93a17.02661,17.02661,0,0,0,16.26026,12.03,16.78926,16.78926,0,0,0,4.96972-.75l63.58008-19.46,2-.62v-2.09l-2,.61-64.16992,19.65a15.01489,15.01489,0,0,1-18.73-9.95l-134.06983-437.94a14.97935,14.97935,0,0,1,9.94971-18.73l92.75-28.4,191.24024-58.54,92.75-28.4a15.15551,15.15551,0,0,1,4.40966-.66,15.01461,15.01461,0,0,1,14.32032,10.61l39.0498,127.56.62012,2h2.08008Z" transform="translate(-276.18187 -133.91309)" fill="#3f3d56"/><path d="M398.86279,261.73389a9.0157,9.0157,0,0,1-8.61133-6.3667l-12.88037-42.07178a8.99884,8.99884,0,0,1,5.9712-11.24023l175.939-53.86377a9.00867,9.00867,0,0,1,11.24072,5.9707l12.88037,42.07227a9.01029,9.01029,0,0,1-5.9707,11.24072L401.49219,261.33887A8.976,8.976,0,0,1,398.86279,261.73389Z" transform="translate(-276.18187 -133.91309)" fill="#9a031e"/><circle cx="190.15351" cy="24.95465" r="20" fill="#9a031e"/><circle cx="190.15351" cy="24.95465" r="12.66462" fill="#fff"/><path d="M878.81836,716.08691h-338a8.50981,8.50981,0,0,1-8.5-8.5v-405a8.50951,8.50951,0,0,1,8.5-8.5h338a8.50982,8.50982,0,0,1,8.5,8.5v405A8.51013,8.51013,0,0,1,878.81836,716.08691Z" transform="translate(-276.18187 -133.91309)" fill="#e6e6e6"/><path d="M723.31813,274.08691h-210.5a17.02411,17.02411,0,0,0-17,17v407.8l2-.61v-407.19a15.01828,15.01828,0,0,1,15-15H723.93825Zm183.5,0h-394a17.02411,17.02411,0,0,0-17,17v458a17.0241,17.0241,0,0,0,17,17h394a17.0241,17.0241,0,0,0,17-17v-458A17.02411,17.02411,0,0,0,906.81813,274.08691Zm15,475a15.01828,15.01828,0,0,1-15,15h-394a15.01828,15.01828,0,0,1-15-15v-458a15.01828,15.01828,0,0,1,15-15h394a15.01828,15.01828,0,0,1,15,15Z" transform="translate(-276.18187 -133.91309)" fill="#3f3d56"/><path d="M801.81836,318.08691h-184a9.01015,9.01015,0,0,1-9-9v-44a9.01016,9.01016,0,0,1,9-9h184a9.01016,9.01016,0,0,1,9,9v44A9.01015,9.01015,0,0,1,801.81836,318.08691Z" transform="translate(-276.18187 -133.91309)" fill="#9a031e"/><circle cx="433.63626" cy="105.17383" r="20" fill="#9a031e"/><circle cx="433.63626" cy="105.17383" r="12.18187" fill="#fff"/></svg>
                
                <h2 className="mt-2 md:mt-5 bg-yellow-300 font-semibold px-4 py-2 rounded-lg flex items-center text-sm md:text-md justify-center"><FcInfo className="mr-1" /> You are not bookmarked any resouces.</h2>
            </div>
        }
        
        
        
        
                </div>
    );
};

export default Bookmarked;