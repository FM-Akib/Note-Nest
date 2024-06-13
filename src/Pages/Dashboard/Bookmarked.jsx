import { Link } from "react-router-dom";
import useUserInfo from '../../Hooks/useUserInfo'
import { BsTrash3Fill } from "react-icons/bs";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import HeadDash from "./HeadDash";
import { IoMdBookmarks } from "react-icons/io";

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
            bookmarked?.map((acontribution, i) => (
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
            ))
        }
        
        
        
        
                </div>
    );
};

export default Bookmarked;