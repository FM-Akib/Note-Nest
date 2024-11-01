import { Link, useLocation, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { LiaBullseyeSolid } from "react-icons/lia";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { v4 as uuidv4 } from 'uuid';
import { Helmet } from "react-helmet";
import { CiBookmark } from "react-icons/ci";
import VideoPreview from "../../components/Shared/VideoPreview";


const PharmaContent = () => {
    const {id} = useParams();
    const [resourceCse, setResourceCse] = useState([]);
    const {user} = useContext(AuthContext)
    const axiosPublic = useAxiosPublic();
    const location = useLocation();

    
    const [liked, setLiked] = useState(false);
    const [stars, setStars] = useState();
    console.log(liked,stars);

    useEffect(() => {
        fetch('https://note-nest-server-three.vercel.app/pharmaCourses')
        .then(response => response.json())
        .then(data => setResourceCse(data));
    }, []);

    if (resourceCse.length === 0) return <div className="flex items-center justify-center min-h-screen min-w-screen"><span className="loading text-red-700 loading-dots loading-lg"></span></div> ;
    
    // console.log(resourceCse)

    const course = resourceCse?.filter(course => course.courseCode === id);
    
    if (!course || course.length === 0) {
        return <div>Course not found</div>;
    }
    //    console.log(course[0])
    const {other,questionBank,Note,Playlist,courseCode,courseTitle} = course[0];
    // console.log(Playlist)

    const midPlaylist = Playlist.filter(playlist => playlist.type === 'mid');
    const finalPlaylist = Playlist.filter(playlist => playlist.type === 'final');

    const midNote = Note.filter(playlist => playlist.type === 'mid');
    const finalNote = Note.filter(playlist => playlist.type === 'final');
    

    const midquestionBank = questionBank.filter(playlist => playlist.type === 'mid');
    const finalquestionBank = questionBank.filter(playlist => playlist.type === 'final');


    const midOther = other.filter(playlist => playlist.type === 'mid');
    const finalOther = other.filter(playlist => playlist.type === 'final');


    
   const handleBookMark=async(item) => {
    const id = uuidv4();
    const resource = {id,...item}
   
    const userBookmark = await axiosPublic.patch(`/users/bookmark/${user?.email}`,{resource})
    console.log(userBookmark)
    if(userBookmark.data.result.modifiedCount>0){
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `Bookmarked resources!`,
        showConfirmButton: false,
        timer: 1500
      });

    }
   }


   //Like functionality are added
   const handleLike = async (courseCode,contentType, playlistId,authorEmail) => {
    try {
        let currentPlaylist ;
        if(contentType === 'Playlist'){
         currentPlaylist = Playlist.find(p => p.id === playlistId);
        }
        else if(contentType === 'Note'){
            currentPlaylist = Note.find(p => p.id === playlistId);
        }
        else if(contentType === 'questionBank'){
            currentPlaylist = questionBank.find(p => p.id === playlistId);
        }
        else if(contentType === 'other'){
            currentPlaylist = other.find(p => p.id === playlistId);
        }

        const liked = currentPlaylist?.likes?.includes(user.email);
        if (liked) {
            await axiosPublic.delete(`/coursesPharma/${courseCode}/${contentType}/${playlistId}/unlike`, {
                data: { email: user.email,authorEmail:authorEmail }
            });
            setStars(currentPlaylist.star - 1);
            setLiked(false);
        } else {
            await axiosPublic.post(`/coursesPharma/${courseCode}/${contentType}/${playlistId}/like`, {
                email: user.email,authorEmail:authorEmail
            });
            setStars(currentPlaylist.star + 1);
            setLiked(true);
        }
        fetch('https://note-nest-server-three.vercel.app/pharmaCourses')
            .then(response => response.json())
            .then(data => setResourceCse(data));
    } catch (error) {
        console.error('Error updating like status:', error);
    }
};


    return (
        <div className="overflow-y-auto max-h-screen">

      <Helmet>
      <title>Note Nest - Pharmacy</title>
      </Helmet>
        

        {/* Heading */}
        <div className="relative border-t border-gray-200 bg-gray-50 mb-2">
            <div className="absolute inset-0 h-36 opacity-90 lg:h-full"
                style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"100\" viewBox=\"0 0 100 100\"%3E%3Cg fill-rule=\"evenodd\"%3E%3Cg fill=\"%23e0e7ff\" fill-opacity=\"1\"%3E%3Cpath opacity=\".5\" d=\"M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z\"/%3E%3Cpath d=\"M6 5V0H5v5H0v1h5v94h1V6h94V5H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}>
            </div>
            <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-12 sm:px-12 lg:pt-14">
                <header className="mx-auto max-w-2xl text-center">
                    <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">{courseCode}</h1>
                    <p className="mt-2 text-sm font-semibold text-gray-400">
                    {courseTitle}
                    </p>
                </header>
            </div>
        </div>




{/* Miiiiid Section here======================================================================================================================= */}


    <div role="tablist" className="tabs tabs-lifted">
        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Mid" checked/>
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-0 md:p-6">


                  
      {/* Mid Term */}
      {/* <details className="p-4 md:p-6 group border-b-2 max-w-80 md:max-w-full "> */}
      <details className="p-4 md:p-6 group border-b-2  ">
        <summary className="flex items-center justify-between cursor-pointer">
          <h5 className="text-lg font-medium text-gray-900 flex items-center gap-2">
            <svg width="30px" height="30px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M27 4H5C3.34315 4 2 5.34315 2 7V25C2 26.6569 3.34315 28 5 28H27C28.6569 28 30 26.6569 30 25V7C30 5.34315 28.6569 4 27 4Z" fill="#B71C1C" />
              <path d="M25 24H7C6.73478 24 6.48043 23.8946 6.29289 23.7071C6.10536 23.5196 6 23.2652 6 23C6 22.7348 6.10536 22.4804 6.29289 22.2929C6.48043 22.1054 6.73478 22 7 22H25C25.2652 22 25.5196 22.1054 25.7071 22.2929C25.8946 22.4804 26 22.7348 26 23C26 23.2652 25.8946 23.5196 25.7071 23.7071C25.5196 23.8946 25.2652 24 25 24Z" fill="#EEEEEE" />
              <path d="M19 25C18.7348 25 18.4804 24.8946 18.2929 24.7071C18.1054 24.5196 18 24.2652 18 24V22C18 21.7348 18.1054 21.4804 18.2929 21.2929C18.4804 21.1054 18.7348 21 19 21C19.2652 21 19.5196 21.1054 19.7071 21.2929C19.8946 21.4804 20 21.7348 20 22V24C20 24.2652 19.8946 24.5196 19.7071 24.7071C19.5196 24.8946 19.2652 25 19 25Z" fill="#EEEEEE" />
              <path d="M20.45 12.67L13.45 9.16996C13.2978 9.09325 13.1285 9.05673 12.9581 9.06386C12.7878 9.071 12.6222 9.12155 12.4769 9.21072C12.3316 9.2999 12.2115 9.42473 12.1281 9.57336C12.0446 9.722 12.0005 9.8895 12 10.06V17.94C12.0013 18.1182 12.0502 18.2928 12.1416 18.4457C12.233 18.5987 12.3637 18.7244 12.52 18.81C12.6648 18.897 12.831 18.942 13 18.94C13.1872 18.9406 13.3709 18.8886 13.53 18.79L20.53 14.41C20.6816 14.3156 20.8051 14.1823 20.8877 14.024C20.9704 13.8658 21.0091 13.6883 21 13.51C20.9905 13.3339 20.9347 13.1635 20.8381 13.0159C20.7415 12.8684 20.6076 12.7491 20.45 12.67Z" fill="#EEEEEE" />
              <path d="M5 4C4.20435 4 3.44129 4.31607 2.87868 4.87868C2.31607 5.44129 2 6.20435 2 7V25C2 25.7956 2.31607 26.5587 2.87868 27.1213C3.44129 27.6839 4.20435 28 5 28H16V4H5Z" fill="#E53935" />
              <path d="M7 22C6.73478 22 6.48043 22.1054 6.29289 22.2929C6.10536 22.4804 6 22.7348 6 23C6 23.2652 6.10536 23.5196 6.29289 23.7071C6.48043 23.8946 6.73478 24 7 24H16V22H7Z" fill="#FAFAFA" />
              <path d="M13.45 9.16996C13.2978 9.09325 13.1285 9.05673 12.9581 9.06386C12.7878 9.071 12.6222 9.12155 12.4769 9.21072C12.3316 9.2999 12.2115 9.42473 12.1281 9.57336C12.0446 9.722 12.0005 9.8895 12 10.06V17.94C12.0013 18.1182 12.0502 18.2928 12.1416 18.4457C12.233 18.5987 12.3637 18.7244 12.52 18.81C12.6648 18.897 12.831 18.942 13 18.94C13.1872 18.9406 13.3709 18.8886 13.53 18.79L16 17.24V10.44L13.45 9.16996Z" fill="#FFEBEE" />
            </svg>
            PlayLists - Tutorials
          </h5>

          <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
            <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
        </summary>

        <div className="mt-4 leading-relaxed text-gray-700">
            {midPlaylist?.length ? midPlaylist?.map((item, i) => {
                const liked = item?.likes?.includes(user?.email);
                return (
                    <div key={i} className="flex flex-col md:flex-row items-center justify-center mb-4 ">
                        <div className="flex flex-col md:flex-row border-2 p-2 md:p-4 items-center justify-between w-full max-w-5xl bg-gray-200 rounded-xl group md:space-x-6 space-x-2 bg-opacity-50 shadow-sm hover:rounded-2xl">
                            {/* <img className="block w-full md:w-1/3 h-56 rounded-lg mx-0" alt="art cover" src={item.imgCover} /> */}
                            <VideoPreview url={item.url} className="block w-full md:w-1/3 h-56 rounded-lg mx-0" />
                           
                            <div className="md:w-2/3 w-full pl-0 p-5">
                                <div className="space-y-2">
                                    <div className="space-y-1">
                                        <h4 className="text-md font-semibold text-cyan-900 text-justify">
                                            {item.title}
                                        </h4>
                                        <p className="break-words">{item.description}</p>
                                        <p className="font-semibold text-sm md:text-md">{courseCode} - {courseTitle}</p>
                                    </div>
                                    <div className="flex items-center space-x-4 justify-between">
                                        <div className="flex items-center gap-3">
                                            <img src={item.authorImg} className="rounded-full h-8 w-8" />
                                            <span className="text-sm">{item.authorName} <br /> <span className="text-xs">Dept. of CSE</span>  </span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col md:flex-row items-center space-x-4 justify-between">
                                   
                                        <div className="flex flex-row items-center space-x-1 ">
                                         {
                                            user?<button onClick={() => handleBookMark(item)} className="font-bold py-2 px-4 rounded ">
                                            <CiBookmark className=" text-3xl" />
                                        </button>:<>
                                        <Link to="/login">
                                        <button className="   font-bold py-2 px-4 rounded ">
                                        <CiBookmark className=" text-3xl"/>
                                        </button>
                                        </Link>
                                        </>
                                         }

                                            <Link to={item.url} target="_blank">
                                                <button className="bg-white hover:bg-[#9A031E] hover:text-white text-slate-600 border-2 border-slate-200 font-bold py-2 px-4 rounded-md mr-[10px] flex justify-between items-center">
                                                    <LiaBullseyeSolid className="mr-1" /> View
                                                </button>
                                            </Link>
                                        {
                                            user? 
                                            <button
                                                onClick={() => handleLike(courseCode,item.contentType, item.id)}
                                                className={`${
                                                    liked ? 'bg-blue-500 text-white' : 'bg-white text-slate-500'
                                                } hover:${
                                                    liked ? 'bg-blue-700' : ''
                                                }  font-bold py-2 px-4 rounded-md flex border-2 border-slate-200 justify-between items-center`}
                                            >
                                                <FaStar />
                                                <span className="ml-1">{item.star}</span>
                                            </button> : <> 
                                            <Link to={{ pathname: '/login', state: { from: location } }}>
                                            
                                            <button
                                                className={`${
                                                    liked ? 'bg-blue-500 text-white' : 'bg-white text-slate-500'
                                                } hover:${
                                                    liked ? 'bg-blue-700' : ''
                                                }  font-bold py-2 px-4 rounded-md flex border-2 border-slate-200 justify-between items-center`}
                                            >
                                                <FaStar />
                                                <span className="ml-1">{item.star}</span>
                                            </button>
                                            </Link>
                                             </>
                                        }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            }) : <p className="text-gray-500">No playlists available.</p>}
        </div>
      </details>
       
        <details className="p-6 group border-b-2" >
          <summary className="flex items-center justify-between cursor-pointer">
            <h5 className="text-lg font-medium text-gray-900 flex items-center gap-2">
            <svg
            height="28px"
            width="28px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 512 512"
            xmlSpace="preserve"
        >
            <path style={{ fill: '#F53635' }} d="M372.832,0H57.642L35.137,255.998L57.642,512h315.189c18.567,0,33.758-15.191,33.758-33.758V33.758 C406.59,15.191,391.399,0,372.832,0z"/>
            <polygon style={{ fill: '#FFD691' }} points="476.863,81.807 499.369,135.944 476.863,158.45 454.358,135.944"/>
            <path style={{ fill: '#F53635' }} d="M499.369,472.615v22.505c0,9.284-7.596,16.879-16.879,16.879h-11.253 c-9.284,0-16.879-7.596-16.879-16.879v-22.505l22.505-22.505L499.369,472.615z"/>
            <rect x="454.352" y="135.944" style={{ fill: '#FAB43E' }} width="45.011" height="336.671"/>
            <rect x="136.406" y="78.769" style={{ fill: '#FDF3C2' }} width="191.409" height="101.275"/>
            <rect x="12.631" style={{ fill: '#C40200' }} width="45.011" height="512"/>
            <g>
                <path style={{ fill: '#F53635' }} d="M294.066,120.963h-123.9c-4.661,0-8.44-3.778-8.44-8.44s3.779-8.44,8.44-8.44h123.898 c4.661,0,8.44,3.778,8.44,8.44S298.727,120.963,294.066,120.963z"/>
                <path style={{ fill: '#F53635' }} d="M294.066,154.721h-123.9c-4.661,0-8.44-3.778-8.44-8.44s3.779-8.44,8.44-8.44h123.898 c4.661,0,8.44,3.778,8.44,8.44C302.504,150.943,298.727,154.721,294.066,154.721z"/>
            </g>
        </svg>Hand Notes
            </h5>

            <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
              <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">           
           {midNote?.length ? midNote?.map((item, i) => {
                const liked = item?.likes?.includes(user?.email);
                return (
                    <div key={i} className="flex flex-col md:flex-row items-center justify-center mb-4 ">
                        <div className="flex flex-col md:flex-row border-2 p-2 md:p-4 items-center justify-between w-full max-w-5xl bg-gray-200 rounded-xl group md:space-x-6 space-x-2 bg-opacity-50 shadow-sm hover:rounded-2xl">
                            <img className="block w-full md:w-1/3 h-56 rounded-lg mx-0" alt="art cover" src={item.imgCover} />
                            <div className="md:w-2/3 w-full pl-0 p-5">
                                <div className="space-y-2">
                                    <div className="space-y-1">
                                        <h4 className="text-md font-semibold text-cyan-900 text-justify">
                                            {item.title}
                                        </h4>
                                        <p className={`${item.description ? 'break-words':'hidden'}`}>{item.description}</p>
                                        <p className="font-semibold text-sm md:text-md">{courseCode} - {courseTitle}</p>
                                    </div>
                                    <div className="flex items-center space-x-4 justify-between">
                                        <div className="flex items-center gap-3">
                                            <img src={item.authorImg} className="rounded-full h-8 w-8" />
                                            <span className="text-sm">{item.authorName} <br /> <span className="text-xs">Dept. of CSE</span>  </span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col md:flex-row items-center space-x-4 justify-between">
                              
                                        <div className="flex flex-row items-center space-x-1 ">
                                         {
                                            user? <button onClick={() => handleBookMark(item)} className="  font-bold py-2 px-4 rounded ">
                                           <CiBookmark className=" text-3xl"/>
                                        </button>:<>
                                        <Link to="/login">
                                        <button  className="  font-bold py-2 px-4 rounded ">
                                        <CiBookmark className=" text-3xl"/>
                                        </button></Link>
                                        </>
                                         }



                                        <Link to={item.url} target="_blank">
                                            <button className="bg-white hover:bg-[#9A031E] hover:text-white text-slate-600 border-2 border-slate-200 font-bold py-2 px-4 rounded-md mr-[10px] flex justify-between items-center">
                                                <LiaBullseyeSolid className="mr-1" /> View
                                                </button>
                                        </Link>
                                        
                                        {
                                            user? <button
                                                onClick={() => handleLike(courseCode,item.contentType, item.id,item.authorEmail)}
                                                className={`${
                                                    liked ? 'bg-blue-500 text-white' : 'bg-white text-slate-500'
                                                } hover:${
                                                    liked ? 'bg-blue-700' : ''
                                                }  font-bold py-2 px-4 rounded-md flex border-2 border-slate-200 justify-between items-center`}
                                            >
                                                <FaStar />
                                                <span className="ml-1">{item.star}</span>
                                            </button>:<>
                                            
                                            <Link to="/login">
                                            <button
                                                className={`${
                                                    liked ? 'bg-blue-500 text-white' : 'bg-white text-slate-500'
                                                } hover:${
                                                    liked ? 'bg-blue-700' : ''
                                                }  font-bold py-2 px-4 rounded-md flex border-2 border-slate-200 justify-between items-center`}
                                            >
                                                <FaStar />
                                                <span className="ml-1">{item.star}</span>
                                            </button></Link>
                                            </>
                                        }

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            }) : <p className="text-gray-500">No Note available.</p>}
          </p>
        </details>


        <details className="p-6 group border-b-2" >
          <summary className="flex items-center justify-between cursor-pointer">
            <h5 className="text-lg font-medium text-gray-900 flex items-center ">
            <svg width="40px" height="40px" viewBox="0 0 1024 1024"   version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M338.3 276.4h173.8v481.4H338.3z" fill="#96C96C" /><path d="M385.1 323.1h80.2v214h-80.2z" fill="#FFFFFF" /><path d="M425.2 664.1m-20.7 0a20.7 20.7 0 1 0 41.4 0 20.7 20.7 0 1 0-41.4 0Z" fill="#FFFFFF" /><path d="M512.1 276.4h173.8v481.4H512.1z" fill="#FAE274" /><path d="M558.9 323.1h80.2v214h-80.2z" fill="#FFFFFF" /><path d="M599 664.1m-20.7 0a20.7 20.7 0 1 0 41.4 0 20.7 20.7 0 1 0-41.4 0Z" fill="#FFFFFF" /><path d="M465.3 316.5h-80.2c-3.7 0-6.7 3-6.7 6.7v214c0 3.7 3 6.7 6.7 6.7h80.2c3.7 0 6.7-3 6.7-6.7v-214c0-3.7-3-6.7-6.7-6.7z m-6.7 213.9h-66.9V329.8h66.9v200.6zM425.2 637.4c-14.7 0-26.7 12-26.7 26.7s12 26.7 26.7 26.7 26.7-12 26.7-26.7-12-26.7-26.7-26.7z m0 41.4c-8.1 0-14.6-6.6-14.6-14.6 0-8.1 6.6-14.6 14.6-14.6 8.1 0 14.6 6.6 14.6 14.6s-6.5 14.6-14.6 14.6z" fill="#211F1E" /><path d="M411.9 369.9h26.8a6.7 6.7 0 0 0 0-13.4h-26.8a6.7 6.7 0 0 0 0 13.4zM411.9 396.6h26.8a6.7 6.7 0 0 0 0-13.4h-26.8a6.7 6.7 0 0 0 0 13.4z" fill="#211F1E" /><path d="M686 263H338.3c-7.4 0-13.4 6-13.4 13.4v481.4c0 7.4 6 13.4 13.4 13.4H686c7.4 0 13.4-6 13.4-13.4V276.4c-0.1-7.4-6-13.4-13.4-13.4z m-334.4 26.7h147.1v454.7H351.6V289.7z m321 454.7H525.5V289.7h147.1v454.7z" fill="#211F1E" /><path d="M558.9 543.8h80.2c3.7 0 6.7-3 6.7-6.7v-214c0-3.7-3-6.7-6.7-6.7h-80.2c-3.7 0-6.7 3-6.7 6.7v214c0 3.7 3 6.7 6.7 6.7z m6.7-214h66.9v200.6h-66.9V329.8zM599 637.4c-14.7 0-26.7 12-26.7 26.7s12 26.7 26.7 26.7 26.7-12 26.7-26.7c0.1-14.7-11.9-26.7-26.7-26.7z m0 41.4c-8.1 0-14.6-6.6-14.6-14.6 0-8.1 6.6-14.6 14.6-14.6 8.1 0 14.6 6.6 14.6 14.6 0.1 8-6.5 14.6-14.6 14.6z" fill="#211F1E" /><path d="M612.5 356.5h-26.8a6.7 6.7 0 0 0 0 13.4h26.8a6.7 6.7 0 0 0 0-13.4zM612.5 383.3h-26.8a6.7 6.7 0 0 0 0 13.4h26.8c3.7 0 6.7-3 6.7-6.7 0-3.8-3-6.7-6.7-6.7z" fill="#211F1E" /></svg>Question Bank
            </h5>

            <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
              <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">
        {midquestionBank?.length ? midquestionBank?.map((item, i) => {
                const liked = item?.likes?.includes(user?.email);
                return (
                    <div key={i} className="flex flex-col md:flex-row items-center justify-center mb-4 ">
                        <div className="flex flex-col md:flex-row border-2 p-2 md:p-4 items-center justify-between w-full max-w-5xl bg-gray-200 rounded-xl group md:space-x-6 space-x-2 bg-opacity-50 shadow-sm hover:rounded-2xl">
                            <img className="block w-full md:w-1/3 h-56 rounded-lg mx-0" alt="art cover" src={item.imgCover} />
                            <div className="md:w-2/3 w-full pl-0 p-5">
                                <div className="space-y-2">
                                    <div className="space-y-1">
                                        <h4 className="text-md font-semibold text-cyan-900 text-justify">
                                            {item.title}
                                        </h4>
                                        <p className="break-words">{item.description}</p>
                                        <p className="font-semibold text-sm md:text-md">{courseCode} - {courseTitle}</p>
                                    </div>
                                    <div className="flex items-center space-x-4 justify-between">
                                        <div className="flex items-center gap-3">
                                            <img src={item.authorImg} className="rounded-full h-8 w-8" />
                                            <span className="text-sm">{item.authorName} <br /> <span className="text-xs">Dept. of CSE</span>  </span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col md:flex-row items-center space-x-4 justify-between">
                            
                                        <div className="flex flex-row items-center space-x-1 ">
                                         {
                                            user ? <button onClick={() => handleBookMark(item)} className="  font-bold py-2 px-4 rounded ">
                                            <CiBookmark className=" text-3xl"/>
                                        </button>:<>  <Link to="/login">
                                        <button  className="  font-bold py-2 px-4 rounded ">
                                        <CiBookmark className=" text-3xl"/>
                                        </button>
                                        </Link>  </>
                                         }

                                            <Link to={item.url} target="_blank">
                                                <button className="bg-white hover:bg-[#9A031E] hover:text-white text-slate-600 border-2 border-slate-200 font-bold py-2 px-4 rounded-md mr-[10px] flex justify-between items-center">
                                                    <LiaBullseyeSolid className="mr-1" /> View
                                                </button>
                                            </Link>

                                        {
                                            user?<button
                                                onClick={() => handleLike(courseCode,item.contentType, item.id)}
                                                className={`${
                                                    liked ? 'bg-blue-500 text-white' : 'bg-white text-slate-500'
                                                } hover:${
                                                    liked ? 'bg-blue-700' : ''
                                                }  font-bold py-2 px-4 rounded-md flex border-2 border-slate-200 justify-between items-center`}
                                            >
                                                <FaStar />
                                                <span className="ml-1">{item.star}</span>
                                            </button>:<>  <Link to="/login">
                                            <button
                                               
                                                className={`${
                                                    liked ? 'bg-blue-500 text-white' : 'bg-white text-slate-500'
                                                } hover:${
                                                    liked ? 'bg-blue-700' : ''
                                                }  font-bold py-2 px-4 rounded-md flex border-2 border-slate-200 justify-between items-center`}
                                            >
                                                <FaStar />
                                                <span className="ml-1">{item.star}</span>
                                            </button>
                                            </Link></>
                                        }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            }) : <p className="text-gray-500">No QuestionBank available.</p>}
          </p>
        </details>


        <details className="p-6 group" >
          <summary className="flex items-center justify-between cursor-pointer">
            <h5 className="text-lg font-medium text-gray-900 flex items-center gap-2">
            <svg width="30px" height="30px" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.25439 4C3.45947 4 2.00439 5.45507 2.00439 7.25V13.8054C3.17187 12.6871 4.7557 12 6.5 12C7.77408 12 8.96255 12.3666 9.96569 13H20.25C20.6642 13 21 13.3358 21 13.75C21 14.1642 20.6642 14.5 20.25 14.5H11.6238C12.191 15.2255 12.6075 16.0745 12.8261 17H18.25C18.6642 17 19 17.3358 19 17.75C19 18.1642 18.6642 18.5 18.25 18.5H13C13 19.6592 12.6966 20.7475 12.1648 21.6899L14.4749 24.0001H22.751C24.5459 24.0001 26.001 22.545 26.001 20.7501V7.25C26.001 5.45507 24.5459 4 22.751 4H5.25439ZM7 9.75C7 9.33579 7.33579 9 7.75 9H15.25C15.6642 9 16 9.33579 16 9.75C16 10.1642 15.6642 10.5 15.25 10.5H7.75C7.33579 10.5 7 10.1642 7 9.75Z" fill="#F53635"/>
            <path d="M10.8833 21.8226C11.5841 20.8996 12 19.7484 12 18.5C12 15.4624 9.53757 13 6.5 13C3.46243 13 1 15.4624 1 18.5C1 21.5376 3.46243 24 6.5 24C7.74835 24 8.89957 23.5841 9.82264 22.8833L12.7197 25.7803C13.0126 26.0732 13.4874 26.0732 13.7803 25.7803C14.0732 25.4874 14.0732 25.0126 13.7803 24.7197L10.8833 21.8226ZM10.5 18.5C10.5 20.7091 8.70914 22.5 6.5 22.5C4.29086 22.5 2.5 20.7091 2.5 18.5C2.5 16.2909 4.29086 14.5 6.5 14.5C8.70914 14.5 10.5 16.2909 10.5 18.5Z" fill="#212121"/>
            </svg>Others
            </h5>

            <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
              <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">
          {midOther?.length ? midOther?.map((item, i) => {
                const liked = item?.likes?.includes(user?.email);
                return (
                    <div key={i} className="flex flex-col md:flex-row items-center justify-center mb-4 ">
                        <div className="flex flex-col md:flex-row border-2 p-2 md:p-4 items-center justify-between w-full max-w-5xl bg-gray-200 rounded-xl group md:space-x-6 space-x-2 bg-opacity-50 shadow-sm hover:rounded-2xl">
                            <img className="block w-full md:w-1/3 h-56 rounded-lg mx-0" alt="art cover" src={item.imgCover} />
                            <div className="md:w-2/3 w-full pl-0 p-5">
                                <div className="space-y-2">
                                    <div className="space-y-1">
                                        <h4 className="text-md font-semibold text-cyan-900 text-justify">
                                            {item.title}
                                        </h4>
                                        <p className="break-words">{item.description}</p>
                                        <p className="font-semibold text-sm md:text-md">{courseCode} - {courseTitle}</p>
                                    </div>
                                    <div className="flex items-center space-x-4 justify-between">
                                        <div className="flex items-center gap-3">
                                            <img src={item.authorImg} className="rounded-full h-8 w-8" />
                                            <span className="text-sm">{item.authorName} <br /> <span className="text-xs">Dept. of CSE</span>  </span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col md:flex-row items-center space-x-4 justify-between">
                                 
                                        <div className="flex flex-row items-center space-x-1 ">           
                                            {user? 
                                            <button onClick={() => handleBookMark(item)} className=" font-bold py-2 px-4 rounded ">
                                             <CiBookmark className=" text-3xl"/>
                                            </button>: <>  <Link to="/login">
                                            
                                            <button  className="   font-bold py-2 px-4 rounded ">
                                            <CiBookmark className=" text-3xl"/>
                                            </button>
                                            </Link> </>}

                                            <Link to={item.url} target="_blank">
                                                <button className="bg-white hover:bg-[#9A031E] hover:text-white text-slate-600 border-2 border-slate-200 font-bold py-2 px-4 rounded-md mr-[10px] flex justify-between items-center">
                                                    <LiaBullseyeSolid className="mr-1" /> View
                                                </button>
                                            </Link>


                                            {
                                                user?                                             <button
                                                onClick={() => handleLike(courseCode,item.contentType, item.id)}
                                                className={`${
                                                    liked ? 'bg-blue-500 text-white' : 'bg-white text-slate-500'
                                                } hover:${
                                                    liked ? 'bg-blue-700' : ''
                                                }  font-bold py-2 px-4 rounded-md flex border-2 border-slate-200 justify-between items-center`}
                                            >
                                                <FaStar />
                                                <span className="ml-1">{item.star}</span>
                                            </button> : <><Link to="/login">
                                            <button
                                               
                                                className={`${
                                                    liked ? 'bg-blue-500 text-white' : 'bg-white text-slate-500'
                                                } hover:${
                                                    liked ? 'bg-blue-700' : ''
                                                }  font-bold py-2 px-4 rounded-md flex border-2 border-slate-200 justify-between items-center`}
                                            >
                                                <FaStar />
                                                <span className="ml-1">{item.star}</span>
                                            </button>
                                            </Link> </>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            }) : <p className="text-gray-500">No Others resource available.</p>}
          </p>
        </details>


    </div>

















{/* Finaaaaaaaaaal Section here======================================================================================================================= */}


  <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Final" />
     <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">

         {/* Final Term */}
         <details className="p-6 group border-b-2" >
          <summary className="flex items-center justify-between cursor-pointer">
            <h5 className="text-lg font-medium text-gray-900 flex items-center gap-2">
            <svg width="30px" height="30px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M27 4H5C3.34315 4 2 5.34315 2 7V25C2 26.6569 3.34315 28 5 28H27C28.6569 28 30 26.6569 30 25V7C30 5.34315 28.6569 4 27 4Z" fill="#B71C1C"/>
                <path d="M25 24H7C6.73478 24 6.48043 23.8946 6.29289 23.7071C6.10536 23.5196 6 23.2652 6 23C6 22.7348 6.10536 22.4804 6.29289 22.2929C6.48043 22.1054 6.73478 22 7 22H25C25.2652 22 25.5196 22.1054 25.7071 22.2929C25.8946 22.4804 26 22.7348 26 23C26 23.2652 25.8946 23.5196 25.7071 23.7071C25.5196 23.8946 25.2652 24 25 24Z" fill="#EEEEEE"/>
                <path d="M19 25C18.7348 25 18.4804 24.8946 18.2929 24.7071C18.1054 24.5196 18 24.2652 18 24V22C18 21.7348 18.1054 21.4804 18.2929 21.2929C18.4804 21.1054 18.7348 21 19 21C19.2652 21 19.5196 21.1054 19.7071 21.2929C19.8946 21.4804 20 21.7348 20 22V24C20 24.2652 19.8946 24.5196 19.7071 24.7071C19.5196 24.8946 19.2652 25 19 25Z" fill="#EEEEEE"/>
                <path d="M20.45 12.67L13.45 9.16996C13.2978 9.09325 13.1285 9.05673 12.9581 9.06386C12.7878 9.071 12.6222 9.12155 12.4769 9.21072C12.3316 9.2999 12.2115 9.42473 12.1281 9.57336C12.0446 9.722 12.0005 9.8895 12 10.06V17.94C12.0013 18.1182 12.0502 18.2928 12.1416 18.4457C12.233 18.5987 12.3637 18.7244 12.52 18.81C12.6648 18.897 12.831 18.942 13 18.94C13.1872 18.9406 13.3709 18.8886 13.53 18.79L20.53 14.41C20.6816 14.3156 20.8051 14.1823 20.8877 14.024C20.9704 13.8658 21.0091 13.6883 21 13.51C20.9905 13.3339 20.9347 13.1635 20.8381 13.0159C20.7415 12.8684 20.6076 12.7491 20.45 12.67Z" fill="#EEEEEE"/>
                <path d="M5 4C4.20435 4 3.44129 4.31607 2.87868 4.87868C2.31607 5.44129 2 6.20435 2 7V25C2 25.7956 2.31607 26.5587 2.87868 27.1213C3.44129 27.6839 4.20435 28 5 28H16V4H5Z" fill="#E53935"/>
                <path d="M7 22C6.73478 22 6.48043 22.1054 6.29289 22.2929C6.10536 22.4804 6 22.7348 6 23C6 23.2652 6.10536 23.5196 6.29289 23.7071C6.48043 23.8946 6.73478 24 7 24H16V22H7Z" fill="#FAFAFA"/>
                <path d="M13.45 9.16996C13.2978 9.09325 13.1285 9.05673 12.9581 9.06386C12.7878 9.071 12.6222 9.12155 12.4769 9.21072C12.3316 9.2999 12.2115 9.42473 12.1281 9.57336C12.0446 9.722 12.0005 9.8895 12 10.06V17.94C12.0013 18.1182 12.0502 18.2928 12.1416 18.4457C12.233 18.5987 12.3637 18.7244 12.52 18.81C12.6648 18.897 12.831 18.942 13 18.94C13.1872 18.9406 13.3709 18.8886 13.53 18.79L16 17.24V10.44L13.45 9.16996Z" fill="#FFEBEE"/>
                </svg>  PlayLists - Tutorials
            </h5>

            <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
              <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">

            {finalPlaylist?.length ? finalPlaylist?.map((item, i) => {
                const liked = item?.likes?.includes(user?.email);
                return (
                    <div key={i} className="flex flex-col md:flex-row items-center justify-center mb-4 ">
                        <div className="flex flex-col md:flex-row border-2 p-2 md:p-4 items-center justify-between w-full max-w-5xl bg-gray-200 rounded-xl group md:space-x-6 space-x-2 bg-opacity-50 shadow-sm hover:rounded-2xl">
                            {/* <img className="block w-full md:w-1/3 h-56 rounded-lg mx-0" alt="art cover" src={item.imgCover} /> */}
                            <VideoPreview url={item.url} className="block w-full md:w-1/3 h-56 rounded-lg mx-0" />
                            <div className="md:w-2/3 w-full pl-0 p-5">
                                <div className="space-y-2">
                                    <div className="space-y-1">
                                        <h4 className="text-md font-semibold text-cyan-900 text-justify">
                                            {item.title}
                                        </h4>
                                        <p className="break-words">{item.description}</p>
                                        <p className="font-semibold text-sm md:text-md">{courseCode} - {courseTitle}</p>
                                    </div>
                                    <div className="flex items-center space-x-4 justify-between">
                                        <div className="flex items-center gap-3">
                                            <img src={item.authorImg} className="rounded-full h-8 w-8" />
                                            <span className="text-sm">{item.authorName} <br /> <span className="text-xs">Dept. of CSE</span>  </span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col md:flex-row items-center space-x-4 justify-between">
                                 
                                        <div className="flex flex-row items-center space-x-1 ">
                                        {
                                            user?<button onClick={() => handleBookMark(item)} className=" text-white  font-bold py-2 px-4 rounded ">
                                            <svg width="45px" height="45px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM16 14.0455V11.5488C16 9.40445 16 8.3323 15.4142 7.66615C14.8284 7 13.8856 7 12 7C10.1144 7 9.17157 7 8.58579 7.66615C8 8.3323 8 9.40445 8 11.5488V14.0455C8 15.5937 8 16.3679 8.32627 16.7062C8.48187 16.8675 8.67829 16.9688 8.88752 16.9958C9.32623 17.0522 9.83855 16.5425 10.8632 15.5229C11.3161 15.0722 11.5426 14.8469 11.8046 14.7875C11.9336 14.7583 12.0664 14.7583 12.1954 14.7875C12.4574 14.8469 12.6839 15.0722 13.1368 15.5229C14.1615 16.5425 14.6738 17.0522 15.1125 16.9958C15.3217 16.9688 15.5181 16.8675 15.6737 16.7062C16 16.3679 16 15.5937 16 14.0455Z"
                                                    fill="#9A031E"
                                                />
                                            </svg>
                                        </button>:<>
                                        <Link to="/login">
                                        <button className=" text-white  font-bold py-2 px-4 rounded ">
                                            <svg width="45px" height="45px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM16 14.0455V11.5488C16 9.40445 16 8.3323 15.4142 7.66615C14.8284 7 13.8856 7 12 7C10.1144 7 9.17157 7 8.58579 7.66615C8 8.3323 8 9.40445 8 11.5488V14.0455C8 15.5937 8 16.3679 8.32627 16.7062C8.48187 16.8675 8.67829 16.9688 8.88752 16.9958C9.32623 17.0522 9.83855 16.5425 10.8632 15.5229C11.3161 15.0722 11.5426 14.8469 11.8046 14.7875C11.9336 14.7583 12.0664 14.7583 12.1954 14.7875C12.4574 14.8469 12.6839 15.0722 13.1368 15.5229C14.1615 16.5425 14.6738 17.0522 15.1125 16.9958C15.3217 16.9688 15.5181 16.8675 15.6737 16.7062C16 16.3679 16 15.5937 16 14.0455Z"
                                                    fill="#9A031E"
                                                />
                                            </svg>
                                        </button>
                                        </Link>
                                        </>
                                         }

                                            <Link to={item.url} target="_blank">
                                                <button className="bg-white hover:bg-red-400 hover:text-white text-slate-600 border-2 border-slate-200 font-bold py-2 px-4 rounded-md mr-[10px] flex justify-between items-center">
                                                    <LiaBullseyeSolid className="mr-1" /> View
                                                </button>
                                            </Link>

                                            {
                                            user? 
                                            <button
                                                onClick={() => handleLike(courseCode,item.contentType, item.id)}
                                                className={`${
                                                    liked ? 'bg-blue-500 text-white' : 'bg-white text-slate-500'
                                                } hover:${
                                                    liked ? 'bg-blue-700' : ''
                                                }  font-bold py-2 px-4 rounded-md flex border-2 border-slate-200 justify-between items-center`}
                                            >
                                                <FaStar />
                                                <span className="ml-1">{item.star}</span>
                                            </button> : <> 
                                            <Link to="/login">
                                            
                                            <button
                                                className={`${
                                                    liked ? 'bg-blue-500 text-white' : 'bg-white text-slate-500'
                                                } hover:${
                                                    liked ? 'bg-blue-700' : ''
                                                }  font-bold py-2 px-4 rounded-md flex border-2 border-slate-200 justify-between items-center`}
                                            >
                                                <FaStar />
                                                <span className="ml-1">{item.star}</span>
                                            </button>
                                            </Link>
                                             </>
                                        }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            }) : <p className="text-gray-500">No playlists available.</p>}
          </p>
        </details>

       
        <details className="p-6 group border-b-2" >
          <summary className="flex items-center justify-between cursor-pointer">
            <h5 className="text-lg font-medium text-gray-900 flex items-center gap-2">
            <svg
            height="28px"
            width="28px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 512 512"
            xmlSpace="preserve"
        >
            <path style={{ fill: '#F53635' }} d="M372.832,0H57.642L35.137,255.998L57.642,512h315.189c18.567,0,33.758-15.191,33.758-33.758V33.758 C406.59,15.191,391.399,0,372.832,0z"/>
            <polygon style={{ fill: '#FFD691' }} points="476.863,81.807 499.369,135.944 476.863,158.45 454.358,135.944"/>
            <path style={{ fill: '#F53635' }} d="M499.369,472.615v22.505c0,9.284-7.596,16.879-16.879,16.879h-11.253 c-9.284,0-16.879-7.596-16.879-16.879v-22.505l22.505-22.505L499.369,472.615z"/>
            <rect x="454.352" y="135.944" style={{ fill: '#FAB43E' }} width="45.011" height="336.671"/>
            <rect x="136.406" y="78.769" style={{ fill: '#FDF3C2' }} width="191.409" height="101.275"/>
            <rect x="12.631" style={{ fill: '#C40200' }} width="45.011" height="512"/>
            <g>
                <path style={{ fill: '#F53635' }} d="M294.066,120.963h-123.9c-4.661,0-8.44-3.778-8.44-8.44s3.779-8.44,8.44-8.44h123.898 c4.661,0,8.44,3.778,8.44,8.44S298.727,120.963,294.066,120.963z"/>
                <path style={{ fill: '#F53635' }} d="M294.066,154.721h-123.9c-4.661,0-8.44-3.778-8.44-8.44s3.779-8.44,8.44-8.44h123.898 c4.661,0,8.44,3.778,8.44,8.44C302.504,150.943,298.727,154.721,294.066,154.721z"/>
            </g>
        </svg>Hand Notes
            </h5>

            <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
              <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">        
        {finalNote?.length ? finalNote?.map((item, i) => {
                const liked = item?.likes?.includes(user?.email);
                return (
                    <div key={i} className="flex flex-col md:flex-row items-center justify-center mb-4 ">
                        <div className="flex flex-col md:flex-row border-2 p-2 md:p-4 items-center justify-between w-full max-w-5xl bg-gray-200 rounded-xl group md:space-x-6 space-x-2 bg-opacity-50 shadow-sm hover:rounded-2xl">
                            <img className="block w-full md:w-1/3 h-56 rounded-lg mx-0" alt="art cover" src={item.imgCover} />
                            <div className="md:w-2/3 w-full pl-0 p-5">
                                <div className="space-y-2">
                                    <div className="space-y-1">
                                        <h4 className="text-md font-semibold text-cyan-900 text-justify">
                                            {item.title}
                                        </h4>
                                        <p className="break-words">{item.description}</p>
                                        <p className="font-semibold text-sm md:text-md">{courseCode} - {courseTitle}</p>
                                    </div>
                                    <div className="flex items-center space-x-4 justify-between">
                                        <div className="flex items-center gap-3">
                                            <img src={item.authorImg} className="rounded-full h-8 w-8" />
                                            <span className="text-sm">{item.authorName} <br /> <span className="text-xs">Dept. of CSE</span>  </span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col md:flex-row items-center space-x-4 justify-between">
                                
                                        <div className="flex flex-row items-center space-x-1 ">
                                        {
                                            user?<button onClick={() => handleBookMark(item)} className=" text-white  font-bold py-2 px-4 rounded ">
                                            <svg width="45px" height="45px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM16 14.0455V11.5488C16 9.40445 16 8.3323 15.4142 7.66615C14.8284 7 13.8856 7 12 7C10.1144 7 9.17157 7 8.58579 7.66615C8 8.3323 8 9.40445 8 11.5488V14.0455C8 15.5937 8 16.3679 8.32627 16.7062C8.48187 16.8675 8.67829 16.9688 8.88752 16.9958C9.32623 17.0522 9.83855 16.5425 10.8632 15.5229C11.3161 15.0722 11.5426 14.8469 11.8046 14.7875C11.9336 14.7583 12.0664 14.7583 12.1954 14.7875C12.4574 14.8469 12.6839 15.0722 13.1368 15.5229C14.1615 16.5425 14.6738 17.0522 15.1125 16.9958C15.3217 16.9688 15.5181 16.8675 15.6737 16.7062C16 16.3679 16 15.5937 16 14.0455Z"
                                                    fill="#9A031E"
                                                />
                                            </svg>
                                        </button>:<>
                                        <Link to="/login">
                                        <button className=" text-white  font-bold py-2 px-4 rounded ">
                                            <svg width="45px" height="45px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM16 14.0455V11.5488C16 9.40445 16 8.3323 15.4142 7.66615C14.8284 7 13.8856 7 12 7C10.1144 7 9.17157 7 8.58579 7.66615C8 8.3323 8 9.40445 8 11.5488V14.0455C8 15.5937 8 16.3679 8.32627 16.7062C8.48187 16.8675 8.67829 16.9688 8.88752 16.9958C9.32623 17.0522 9.83855 16.5425 10.8632 15.5229C11.3161 15.0722 11.5426 14.8469 11.8046 14.7875C11.9336 14.7583 12.0664 14.7583 12.1954 14.7875C12.4574 14.8469 12.6839 15.0722 13.1368 15.5229C14.1615 16.5425 14.6738 17.0522 15.1125 16.9958C15.3217 16.9688 15.5181 16.8675 15.6737 16.7062C16 16.3679 16 15.5937 16 14.0455Z"
                                                    fill="#9A031E"
                                                />
                                            </svg>
                                        </button>
                                        </Link>
                                        </>
                                         }

                                            <Link to={item.url} target="_blank">
                                                <button className="bg-white hover:bg-red-400 hover:text-white text-slate-600 border-2 border-slate-200 font-bold py-2 px-4 rounded-md mr-[10px] flex justify-between items-center">
                                                    <LiaBullseyeSolid className="mr-1" /> View
                                                </button>
                                            </Link>
                                            {
                                            user? 
                                            <button
                                                onClick={() => handleLike(courseCode,item.contentType, item.id)}
                                                className={`${
                                                    liked ? 'bg-blue-500 text-white' : 'bg-white text-slate-500'
                                                } hover:${
                                                    liked ? 'bg-blue-700' : ''
                                                }  font-bold py-2 px-4 rounded-md flex border-2 border-slate-200 justify-between items-center`}
                                            >
                                                <FaStar />
                                                <span className="ml-1">{item.star}</span>
                                            </button> : <> 
                                            <Link to="/login">
                                            
                                            <button
                                                className={`${
                                                    liked ? 'bg-blue-500 text-white' : 'bg-white text-slate-500'
                                                } hover:${
                                                    liked ? 'bg-blue-700' : ''
                                                }  font-bold py-2 px-4 rounded-md flex border-2 border-slate-200 justify-between items-center`}
                                            >
                                                <FaStar />
                                                <span className="ml-1">{item.star}</span>
                                            </button>
                                            </Link>
                                             </>
                                        }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            }) : <p className="text-gray-500">No Note available.</p>}
                    
          </p>
        </details>


        <details className="p-6 group border-b-2" >
          <summary className="flex items-center justify-between cursor-pointer">
            <h5 className="text-lg font-medium text-gray-900 flex items-center ">
            <svg width="40px" height="40px" viewBox="0 0 1024 1024"   version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M338.3 276.4h173.8v481.4H338.3z" fill="#96C96C" /><path d="M385.1 323.1h80.2v214h-80.2z" fill="#FFFFFF" /><path d="M425.2 664.1m-20.7 0a20.7 20.7 0 1 0 41.4 0 20.7 20.7 0 1 0-41.4 0Z" fill="#FFFFFF" /><path d="M512.1 276.4h173.8v481.4H512.1z" fill="#FAE274" /><path d="M558.9 323.1h80.2v214h-80.2z" fill="#FFFFFF" /><path d="M599 664.1m-20.7 0a20.7 20.7 0 1 0 41.4 0 20.7 20.7 0 1 0-41.4 0Z" fill="#FFFFFF" /><path d="M465.3 316.5h-80.2c-3.7 0-6.7 3-6.7 6.7v214c0 3.7 3 6.7 6.7 6.7h80.2c3.7 0 6.7-3 6.7-6.7v-214c0-3.7-3-6.7-6.7-6.7z m-6.7 213.9h-66.9V329.8h66.9v200.6zM425.2 637.4c-14.7 0-26.7 12-26.7 26.7s12 26.7 26.7 26.7 26.7-12 26.7-26.7-12-26.7-26.7-26.7z m0 41.4c-8.1 0-14.6-6.6-14.6-14.6 0-8.1 6.6-14.6 14.6-14.6 8.1 0 14.6 6.6 14.6 14.6s-6.5 14.6-14.6 14.6z" fill="#211F1E" /><path d="M411.9 369.9h26.8a6.7 6.7 0 0 0 0-13.4h-26.8a6.7 6.7 0 0 0 0 13.4zM411.9 396.6h26.8a6.7 6.7 0 0 0 0-13.4h-26.8a6.7 6.7 0 0 0 0 13.4z" fill="#211F1E" /><path d="M686 263H338.3c-7.4 0-13.4 6-13.4 13.4v481.4c0 7.4 6 13.4 13.4 13.4H686c7.4 0 13.4-6 13.4-13.4V276.4c-0.1-7.4-6-13.4-13.4-13.4z m-334.4 26.7h147.1v454.7H351.6V289.7z m321 454.7H525.5V289.7h147.1v454.7z" fill="#211F1E" /><path d="M558.9 543.8h80.2c3.7 0 6.7-3 6.7-6.7v-214c0-3.7-3-6.7-6.7-6.7h-80.2c-3.7 0-6.7 3-6.7 6.7v214c0 3.7 3 6.7 6.7 6.7z m6.7-214h66.9v200.6h-66.9V329.8zM599 637.4c-14.7 0-26.7 12-26.7 26.7s12 26.7 26.7 26.7 26.7-12 26.7-26.7c0.1-14.7-11.9-26.7-26.7-26.7z m0 41.4c-8.1 0-14.6-6.6-14.6-14.6 0-8.1 6.6-14.6 14.6-14.6 8.1 0 14.6 6.6 14.6 14.6 0.1 8-6.5 14.6-14.6 14.6z" fill="#211F1E" /><path d="M612.5 356.5h-26.8a6.7 6.7 0 0 0 0 13.4h26.8a6.7 6.7 0 0 0 0-13.4zM612.5 383.3h-26.8a6.7 6.7 0 0 0 0 13.4h26.8c3.7 0 6.7-3 6.7-6.7 0-3.8-3-6.7-6.7-6.7z" fill="#211F1E" /></svg>Question Bank
            </h5>

            <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
              <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">
                {finalquestionBank?.length ? finalquestionBank?.map((item, i) => {
                const liked = item?.likes?.includes(user?.email);
                return (
                    <div key={i} className="flex flex-col md:flex-row items-center justify-center mb-4 ">
                        <div className="flex flex-col md:flex-row border-2 p-2 md:p-4 items-center justify-between w-full max-w-5xl bg-gray-200 rounded-xl group md:space-x-6 space-x-2 bg-opacity-50 shadow-sm hover:rounded-2xl">
                            <img className="block w-full md:w-1/3 h-56 rounded-lg mx-0" alt="art cover" src={item.imgCover} />
                            <div className="md:w-2/3 w-full pl-0 p-5">
                                <div className="space-y-2">
                                    <div className="space-y-1">
                                        <h4 className="text-md font-semibold text-cyan-900 text-justify">
                                            {item.title}
                                        </h4>
                                        <p className="break-words">{item.description}</p>
                                        <p className="font-semibold text-sm md:text-md">{courseCode} - {courseTitle}</p>
                                    </div>
                                    <div className="flex items-center space-x-4 justify-between">
                                        <div className="flex items-center gap-3">
                                            <img src={item.authorImg} className="rounded-full h-8 w-8" />
                                            <span className="text-sm">{item.authorName} <br /> <span className="text-xs">Dept. of CSE</span>  </span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col md:flex-row items-center space-x-4 justify-between">
                              
                                        <div className="flex flex-row items-center space-x-1 ">
                                        {
                                            user?<button onClick={() => handleBookMark(item)} className=" text-white  font-bold py-2 px-4 rounded ">
                                            <svg width="45px" height="45px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM16 14.0455V11.5488C16 9.40445 16 8.3323 15.4142 7.66615C14.8284 7 13.8856 7 12 7C10.1144 7 9.17157 7 8.58579 7.66615C8 8.3323 8 9.40445 8 11.5488V14.0455C8 15.5937 8 16.3679 8.32627 16.7062C8.48187 16.8675 8.67829 16.9688 8.88752 16.9958C9.32623 17.0522 9.83855 16.5425 10.8632 15.5229C11.3161 15.0722 11.5426 14.8469 11.8046 14.7875C11.9336 14.7583 12.0664 14.7583 12.1954 14.7875C12.4574 14.8469 12.6839 15.0722 13.1368 15.5229C14.1615 16.5425 14.6738 17.0522 15.1125 16.9958C15.3217 16.9688 15.5181 16.8675 15.6737 16.7062C16 16.3679 16 15.5937 16 14.0455Z"
                                                    fill="#9A031E"
                                                />
                                            </svg>
                                        </button>:<>
                                        <Link to="/login">
                                        <button className=" text-white  font-bold py-2 px-4 rounded ">
                                            <svg width="45px" height="45px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM16 14.0455V11.5488C16 9.40445 16 8.3323 15.4142 7.66615C14.8284 7 13.8856 7 12 7C10.1144 7 9.17157 7 8.58579 7.66615C8 8.3323 8 9.40445 8 11.5488V14.0455C8 15.5937 8 16.3679 8.32627 16.7062C8.48187 16.8675 8.67829 16.9688 8.88752 16.9958C9.32623 17.0522 9.83855 16.5425 10.8632 15.5229C11.3161 15.0722 11.5426 14.8469 11.8046 14.7875C11.9336 14.7583 12.0664 14.7583 12.1954 14.7875C12.4574 14.8469 12.6839 15.0722 13.1368 15.5229C14.1615 16.5425 14.6738 17.0522 15.1125 16.9958C15.3217 16.9688 15.5181 16.8675 15.6737 16.7062C16 16.3679 16 15.5937 16 14.0455Z"
                                                    fill="#9A031E"
                                                />
                                            </svg>
                                        </button>
                                        </Link>
                                        </>
                                         }

                                            <Link to={item.url} target="_blank">
                                                <button className="bg-white hover:bg-red-400 hover:text-white text-slate-600 border-2 border-slate-200 font-bold py-2 px-4 rounded-md mr-[10px] flex justify-between items-center">
                                                    <LiaBullseyeSolid className="mr-1" /> View
                                                </button>
                                            </Link>

                                            {
                                            user? 
                                            <button
                                                onClick={() => handleLike(courseCode,item.contentType, item.id)}
                                                className={`${
                                                    liked ? 'bg-blue-500 text-white' : 'bg-white text-slate-500'
                                                } hover:${
                                                    liked ? 'bg-blue-700' : ''
                                                }  font-bold py-2 px-4 rounded-md flex border-2 border-slate-200 justify-between items-center`}
                                            >
                                                <FaStar />
                                                <span className="ml-1">{item.star}</span>
                                            </button> : <> 
                                            <Link to="/login">
                                            
                                            <button
                                                className={`${
                                                    liked ? 'bg-blue-500 text-white' : 'bg-white text-slate-500'
                                                } hover:${
                                                    liked ? 'bg-blue-700' : ''
                                                }  font-bold py-2 px-4 rounded-md flex border-2 border-slate-200 justify-between items-center`}
                                            >
                                                <FaStar />
                                                <span className="ml-1">{item.star}</span>
                                            </button>
                                            </Link>
                                             </>
                                        }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            }) : <p className="text-gray-500">No QuestionBank available.</p>}
          </p>
        </details>


        <details className="p-6 group" >
          <summary className="flex items-center justify-between cursor-pointer">
            <h5 className="text-lg font-medium text-gray-900 flex items-center gap-2">
            <svg width="30px" height="30px" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.25439 4C3.45947 4 2.00439 5.45507 2.00439 7.25V13.8054C3.17187 12.6871 4.7557 12 6.5 12C7.77408 12 8.96255 12.3666 9.96569 13H20.25C20.6642 13 21 13.3358 21 13.75C21 14.1642 20.6642 14.5 20.25 14.5H11.6238C12.191 15.2255 12.6075 16.0745 12.8261 17H18.25C18.6642 17 19 17.3358 19 17.75C19 18.1642 18.6642 18.5 18.25 18.5H13C13 19.6592 12.6966 20.7475 12.1648 21.6899L14.4749 24.0001H22.751C24.5459 24.0001 26.001 22.545 26.001 20.7501V7.25C26.001 5.45507 24.5459 4 22.751 4H5.25439ZM7 9.75C7 9.33579 7.33579 9 7.75 9H15.25C15.6642 9 16 9.33579 16 9.75C16 10.1642 15.6642 10.5 15.25 10.5H7.75C7.33579 10.5 7 10.1642 7 9.75Z" fill="#F53635"/>
<path d="M10.8833 21.8226C11.5841 20.8996 12 19.7484 12 18.5C12 15.4624 9.53757 13 6.5 13C3.46243 13 1 15.4624 1 18.5C1 21.5376 3.46243 24 6.5 24C7.74835 24 8.89957 23.5841 9.82264 22.8833L12.7197 25.7803C13.0126 26.0732 13.4874 26.0732 13.7803 25.7803C14.0732 25.4874 14.0732 25.0126 13.7803 24.7197L10.8833 21.8226ZM10.5 18.5C10.5 20.7091 8.70914 22.5 6.5 22.5C4.29086 22.5 2.5 20.7091 2.5 18.5C2.5 16.2909 4.29086 14.5 6.5 14.5C8.70914 14.5 10.5 16.2909 10.5 18.5Z" fill="#212121"/>
</svg>Others
            </h5>

            <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
              <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">
          {finalOther?.length ? finalOther?.map((item, i) => {
                const liked = item?.likes?.includes(user?.email);
                return (
                    <div key={i} className="flex flex-col md:flex-row items-center justify-center mb-4 ">
                        <div className="flex flex-col md:flex-row border-2 p-2 md:p-4 items-center justify-between w-full max-w-5xl bg-gray-200 rounded-xl group md:space-x-6 space-x-2 bg-opacity-50 shadow-sm hover:rounded-2xl">
                            <img className="block w-full md:w-1/3 h-56 rounded-lg mx-0" alt="art cover" src={item.imgCover} />
                            <div className="md:w-2/3 w-full pl-0 p-5">
                                <div className="space-y-2">
                                    <div className="space-y-1">
                                        <h4 className="text-md font-semibold text-cyan-900 text-justify">
                                            {item.title}
                                        </h4>
                                        <p className="break-words">{item.description}</p>
                                        <p className="font-semibold text-sm md:text-md">{courseCode} - {courseTitle}</p>
                                    </div>
                                    <div className="flex items-center space-x-4 justify-between">
                                        <div className="flex items-center gap-3">
                                            <img src={item.authorImg} className="rounded-full h-8 w-8" />
                                            <span className="text-sm">{item.authorName} <br /> <span className="text-xs">Dept. of CSE</span>  </span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col md:flex-row items-center space-x-4 justify-between">
                               
                                        <div className="flex flex-row items-center space-x-1 ">
                                        {
                                            user?<button onClick={() => handleBookMark(item)} className=" text-white  font-bold py-2 px-4 rounded ">
                                            <svg width="45px" height="45px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM16 14.0455V11.5488C16 9.40445 16 8.3323 15.4142 7.66615C14.8284 7 13.8856 7 12 7C10.1144 7 9.17157 7 8.58579 7.66615C8 8.3323 8 9.40445 8 11.5488V14.0455C8 15.5937 8 16.3679 8.32627 16.7062C8.48187 16.8675 8.67829 16.9688 8.88752 16.9958C9.32623 17.0522 9.83855 16.5425 10.8632 15.5229C11.3161 15.0722 11.5426 14.8469 11.8046 14.7875C11.9336 14.7583 12.0664 14.7583 12.1954 14.7875C12.4574 14.8469 12.6839 15.0722 13.1368 15.5229C14.1615 16.5425 14.6738 17.0522 15.1125 16.9958C15.3217 16.9688 15.5181 16.8675 15.6737 16.7062C16 16.3679 16 15.5937 16 14.0455Z"
                                                    fill="#9A031E"
                                                />
                                            </svg>
                                        </button>:<>
                                        <Link to="/login">
                                        <button className=" text-white  font-bold py-2 px-4 rounded ">
                                            <svg width="45px" height="45px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM16 14.0455V11.5488C16 9.40445 16 8.3323 15.4142 7.66615C14.8284 7 13.8856 7 12 7C10.1144 7 9.17157 7 8.58579 7.66615C8 8.3323 8 9.40445 8 11.5488V14.0455C8 15.5937 8 16.3679 8.32627 16.7062C8.48187 16.8675 8.67829 16.9688 8.88752 16.9958C9.32623 17.0522 9.83855 16.5425 10.8632 15.5229C11.3161 15.0722 11.5426 14.8469 11.8046 14.7875C11.9336 14.7583 12.0664 14.7583 12.1954 14.7875C12.4574 14.8469 12.6839 15.0722 13.1368 15.5229C14.1615 16.5425 14.6738 17.0522 15.1125 16.9958C15.3217 16.9688 15.5181 16.8675 15.6737 16.7062C16 16.3679 16 15.5937 16 14.0455Z"
                                                    fill="#9A031E"
                                                />
                                            </svg>
                                        </button>
                                        </Link>
                                        </>
                                         }

                                            <Link to={item.url} target="_blank">
                                                <button className="bg-white hover:bg-red-400 hover:text-white text-slate-600 border-2 border-slate-200 font-bold py-2 px-4 rounded-md mr-[10px] flex justify-between items-center">
                                                    <LiaBullseyeSolid className="mr-1" /> View
                                                </button>
                                            </Link>

                                            {
                                            user? 
                                            <button
                                                onClick={() => handleLike(courseCode,item.contentType, item.id)}
                                                className={`${
                                                    liked ? 'bg-blue-500 text-white' : 'bg-white text-slate-500'
                                                } hover:${
                                                    liked ? 'bg-blue-700' : ''
                                                }  font-bold py-2 px-4 rounded-md flex border-2 border-slate-200 justify-between items-center`}
                                            >
                                                <FaStar />
                                                <span className="ml-1">{item.star}</span>
                                            </button> : <> 
                                            <Link to="/login">
                                            
                                            <button
                                                className={`${
                                                    liked ? 'bg-blue-500 text-white' : 'bg-white text-slate-500'
                                                } hover:${
                                                    liked ? 'bg-blue-700' : ''
                                                }  font-bold py-2 px-4 rounded-md flex border-2 border-slate-200 justify-between items-center`}
                                            >
                                                <FaStar />
                                                <span className="ml-1">{item.star}</span>
                                            </button>
                                            </Link>
                                             </>
                                        }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            }) : <p className="text-gray-500">No Others resource available.</p>}
          </p>
        </details>



                    
                </div>
            </div>
        </div>
    );
};

export default PharmaContent;
