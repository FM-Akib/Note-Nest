import {  useParams } from "react-router-dom";
import useUserInfo from "../../Hooks/useUserInfo";
import HeadDash from "./HeadDash";
import { RiShieldStarFill } from "react-icons/ri";
import Swal from "sweetalert2";
import useCseCourses from "../../Hooks/useCseCourses";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext } from "react";
import { GiRoundStar } from "react-icons/gi";



const image_hosting_key= import.meta.env.VITE_apiKey_Image;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const EditMyContribution = () => {
    const {id}= useParams()
    // console.log(id)


    const {userInfo} = useUserInfo()
    // console.log(userInfo)
    const {myContribution} = userInfo;

    const aContribution = myContribution?.filter(item=>item.id===id)[0]
    // console.log(aContribution);
    
    const [cse] = useCseCourses()


    const {
      register,
      handleSubmit,
      formState: { errors }
    } = useForm();
  
    const {user} = useContext(AuthContext)
    // console.log(user)
    const axiosPublic = useAxiosPublic();
  
    const onSubmit = async(data) => {
    //   const imageFile = {image: data.imgCover[0]}
    //   const res = await axiosPublic.post(image_hosting_api,imageFile,{
    //       headers: {
    //         'content-type': 'multipart/form-data',
    //       }
    //   })
    //   if(res.data.success){
        // const contentType = data.content;
        // const courseCode = data.courseCode;
        // const id = uuidv4();
  
        const resource = {
          id,
          title: data.title,
          type: data.exam,
          star: 20,
          url: data.url,
        //   imgCover: res.data.data.display_url,
          semseter: data.semester,
          description: data.description,
          authorName: user.displayName,
          authorImg: user.photoURL,
          contentType: data.content,
          courseCode: data.courseCode,
        }
        console.log(resource)
        // const result = await axiosPublic.patch(`/users/${courseCode}`,{contentType, resource})
        //  console.log(result)
  
        // if(result.data.result.modifiedCount>0){
          
        //   Swal.fire({
        //     position: "top-end",
        //     icon: "success",
        //     title: `Thank You for your contribution!`,
        //     showConfirmButton: false,
        //     timer: 1500
        //   });
  
  
          //resource add to cse database done 
          //Now user my contribution handle
        //   const userResult = await axiosPublic.patch(`/users/${user?.email}`,{resource})
           
        //   console.log(userResult)
        // }
       
      
    //   }
      // console.log(data)
     
    };
  
  // if(errors){
  //   console.log(errors)
  // }

    return (
        <div className="pt-20 md:px-20 px-2 overflow-y-auto max-h-screen">
            <HeadDash icn={<RiShieldStarFill className="text-[#EFCA08]" />} head="Edit Contribution" subHead="Edit your contribution and re-submit it."></HeadDash>


            <div className="mx-2 mt-10 border-2 border-slate-200 rounded-lg">
  <div className="mt-10 text-center font-bold flex justify-center items-center"><GiRoundStar className="mr-1 text-[#EFCA08]"/> Make sure all selector are select perfectfully.</div>
  {/* <div className="mt-3 text-center text-4xl font-bold">Make an Appointment</div> */}


<form onSubmit={handleSubmit(onSubmit)} className="p-2 md:p-8">

<div className="md:flex gap-4 items-center">
   <label className="block w-full md:w-1/2 text-sm font-semibold text-gray-700 mb-2">
    Title for your contribution *
    <input  {...register("title", { required: true })} defaultValue={aContribution?.title}  type="text" name="title" className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-4 placeholder-red-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 sm:text-sm" placeholder="Add a meaningful title..." />
    {errors.title && <p className="text-red-500">{errors.title.message}</p>}
  </label>
  
  <label className="block w-full md:w-1/2 text-sm font-semibold text-gray-700 mb-2">
    Select your content semester *
    <select {...register("semester", { required: true })} defaultValue={aContribution?.semester} className=" mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-4 font-semibold text-gray-500 shadow-sm focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 sm:text-sm">
      <option value="1st">1st</option>
      <option value="2nd">2nd</option>
      <option value="3rd">3rd</option>
      <option value="4th">4th</option>
      <option value="5th">5th</option>
      <option value="6th">6th</option>
      <option value="7th">7th</option>
      <option value="8th">8th</option>
    </select>
    {errors.semester && <p className="text-red-500">{errors.semester.message}</p>}
  </label>
</div>



<div className="my-6 flex gap-4">
  <label className="block w-1/2 text-sm font-semibold text-gray-700 mb-2">
    Course Code *
    <select {...register("courseCode", { required: true })} defaultValue={aContribution?.courseCode} defaultChecked={false} className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-4 font-semibold text-gray-500 shadow-sm focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 sm:text-sm">
      {cse.map(item => <option key={item.id} value={item.courseCode}>{item.courseCode}</option>)}
    </select>
    {errors.courseCode && <span className="text-red-500">{errors.courseCode.message}</span>}
  </label>

  <label className="block w-1/2 text-sm font-semibold text-gray-700 mb-2">
    Exam *
    <select {...register("exam", { required: true })} defaultChecked={aContribution?.type} className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-4 font-semibold text-gray-500 shadow-sm focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 sm:text-sm">
      <option value="mid">Mid Term</option>
      <option value="final">Final Term</option>
    </select>
    {errors.exam && <span className="text-red-500">{errors.exam.message}</span>}
  </label>

  <label className="block w-1/2 text-sm font-semibold text-gray-700 mb-2">
    Content About
    <select {...register("content", { required: true })} defaultValue={aContribution?.contentType} defaultChecked={false} className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-4 font-semibold text-gray-500 shadow-sm focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 sm:text-sm">
      <option value="Playlist">PlayList</option>
      <option value="Note">Note</option>
      <option value="questionBank">Question Bank</option>
      <option value="other">Other</option>
    </select>
    {errors.exam && <span className="text-red-500">{errors.exam.message}</span>}
  </label>



</div>

<div className="my-6">
  
  <input {...register("url", { required: true })} defaultValue={aContribution?.url} type="url" className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-4 placeholder-red-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 sm:text-sm" placeholder="URL: Upload your file in Google Drive or YouTube then Submit your shareable drive link or YouTube link*" />
    {errors.url && <span className="text-red-500">{errors.url.message}</span>}
</div>

<div className="my-6">
  <label htmlFor="cover" className="block text-sm font-semibold text-gray-700 mb-2">
    Cover Image for your contribution *
    <input {...register("imgCover", { required: true })} defaultValue={aContribution?.imgCover} type="file" className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-4 placeholder-red-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 sm:text-sm" />
    {errors.imgCover && <span className="text-red-500">{errors.imgCover.message}</span>}
  </label>
</div>

<div className="my-6">
    <textarea {...register("description", { required: true })} defaultValue={aContribution?.description} cols="30" rows="10" className="mb-10 h-40 w-full resize-none rounded-md border border-gray-300 p-5 font-semibold text-gray-400" placeholder="Description: Write a short instruction on how to read the given resource, how much to read and how much of the syllabus is covered."></textarea>
    {errors.description && <span className="text-red-500">{errors.description.message}</span>}

</div>

<div className="flex justify-center items-center">
  <button type="submit" className="cursor-pointer rounded-lg bg-[#9a031e] px-8 py-5 tracking-widest text-sm font-semibold text-white" placeholder="Contribute">Edit Contribute</button>
</div>

</form>


</div>



        </div>
    );
};

export default EditMyContribution;