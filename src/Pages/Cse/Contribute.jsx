import { useForm } from "react-hook-form";
import useCseCourses from "../../Hooks/useCseCourses";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { v4 as uuidv4 } from 'uuid';
import { GiRoundStar } from "react-icons/gi";



const image_hosting_key= import.meta.env.VITE_apiKey_Image;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const Contribute = () => {
  const [cse] = useCseCourses()


  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const {user} = useContext(AuthContext)
  console.log(user)
  const axiosPublic = useAxiosPublic();

  const onSubmit = async(data) => {
    const imageFile = {image: data.imgCover[0]}
    const res = await axiosPublic.post(image_hosting_api,imageFile,{
        headers: {
          'content-type': 'multipart/form-data',
        }
    })
    if(res.data.success){
      const contentType = data.content;
      const courseCode = data.courseCode;
      const id = uuidv4();

      const resource = {
        id,
        title: data.title,
        type: data.exam,
        star: 20,
        url: data.url,
        imgCover: res.data.data.display_url,
        semseter: data.semester,
        description: data.description,
        authorName: user.displayName,
        authorImg: user.photoURL,
        contentType: data.content,
        courseCode: data.courseCode,
      }
      console.log(resource)
      const result = await axiosPublic.patch(`/courses/${courseCode}`,{contentType, resource})
       console.log(result)

      if(result.data.result.modifiedCount>0){
        
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Thank You for your contribution!`,
          showConfirmButton: false,
          timer: 1500
        });


        //resource add to cse database done 
        //Now user my contribution handle
        const userResult = await axiosPublic.patch(`/users/${user?.email}`,{resource})
         
        console.log(userResult)
      }
     
    
    }
    // console.log(data)
   
  };

// if(errors){
//   console.log(errors)
// }


  return (
  <div className="h-screen overflow-y-scroll">

{/* Heading */}
<div className="relative border-t border-gray-200 bg-gray-50 mb-2">
            <div className="absolute inset-0 h-36 opacity-90 lg:h-full"
                style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"100\" viewBox=\"0 0 100 100\"%3E%3Cg fill-rule=\"evenodd\"%3E%3Cg fill=\"%23e0e7ff\" fill-opacity=\"1\"%3E%3Cpath opacity=\".5\" d=\"M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z\"/%3E%3Cpath d=\"M6 5V0H5v5H0v1h5v94h1V6h94V5H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}>
            </div>
            <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-12 sm:px-12 lg:pt-14">
                <header className="mx-auto max-w-2xl text-center">
                    <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl flex items-center justify-center gap-2">
                        Contribution
                        <svg className="mr-1" width="50px"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.5" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" fill="#1C274C"/>
<path d="M10.4127 8.49812L10.5766 8.20419C11.2099 7.06807 11.5266 6.5 12 6.5C12.4734 6.5 12.7901 7.06806 13.4234 8.20419L13.5873 8.49813C13.7672 8.82097 13.8572 8.98239 13.9975 9.0889C14.1378 9.19541 14.3126 9.23495 14.6621 9.31402L14.9802 9.38601C16.2101 9.66428 16.825 9.80341 16.9713 10.2739C17.1176 10.7443 16.6984 11.2345 15.86 12.215L15.643 12.4686C15.4048 12.7472 15.2857 12.8865 15.2321 13.0589C15.1785 13.2312 15.1965 13.4171 15.2325 13.7888L15.2653 14.1272C15.3921 15.4353 15.4554 16.0894 15.0724 16.3801C14.6894 16.6709 14.1137 16.4058 12.9622 15.8756L12.6643 15.7384C12.337 15.5878 12.1734 15.5124 12 15.5124C11.8266 15.5124 11.663 15.5878 11.3357 15.7384L11.0378 15.8756C9.88633 16.4058 9.31059 16.6709 8.92757 16.3801C8.54456 16.0894 8.60794 15.4353 8.7347 14.1272L8.76749 13.7888C8.80351 13.4171 8.82152 13.2312 8.76793 13.0589C8.71434 12.8865 8.59521 12.7472 8.35696 12.4686L8.14005 12.215C7.30162 11.2345 6.88241 10.7443 7.02871 10.2739C7.17501 9.80341 7.78994 9.66427 9.01977 9.38601L9.33794 9.31402C9.68743 9.23495 9.86217 9.19541 10.0025 9.0889C10.1428 8.98239 10.2328 8.82097 10.4127 8.49812Z" fill="#EFCA08"/>
</svg>
                   </h1>
                    <p className="mt-2 text-lg font-semibold text-gray-400 ">
                    Share your own notes or contribute YouTube playlists or question solves that will benefit others.
                    </p>
                </header>
            </div>
</div>


 <div className="mx-2 mt-10 border-2 border-slate-200 rounded-lg">
  <div className="mt-10 text-center font-bold flex justify-center items-center"><GiRoundStar className="mr-1 text-[#EFCA08]"/> For every contribution you have 20 points</div>
  {/* <div className="mt-3 text-center text-4xl font-bold">Make an Appointment</div> */}


  <form onSubmit={handleSubmit(onSubmit)} className="p-2 md:p-8">

<div className="md:flex gap-4 items-center">
   <label className="block w-full md:w-1/2 text-sm font-semibold text-gray-700 mb-2">
    Title for your contribution *
    <input  {...register("title", { required: true })}  type="text" name="title" className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-4 placeholder-red-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 sm:text-sm" placeholder="Add a meaningful title..." />
    {errors.title && <p className="text-red-500">{errors.title.message}</p>}
  </label>
  
  <label className="block w-full md:w-1/2 text-sm font-semibold text-gray-700 mb-2">
    Select your content semester *
    <select {...register("semester", { required: true })} defaultChecked={false} className=" mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-4 font-semibold text-gray-500 shadow-sm focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 sm:text-sm">
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
    <select {...register("courseCode", { required: true })} defaultChecked={false} className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-4 font-semibold text-gray-500 shadow-sm focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 sm:text-sm">
      {cse.map(item => <option key={item.id} value={item.courseCode}>{item.courseCode}</option>)}
    </select>
    {errors.courseCode && <span className="text-red-500">{errors.courseCode.message}</span>}
  </label>

  <label className="block w-1/2 text-sm font-semibold text-gray-700 mb-2">
    Exam *
    <select {...register("exam", { required: true })} defaultChecked={false} className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-4 font-semibold text-gray-500 shadow-sm focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 sm:text-sm">
      <option value="mid">Mid Term</option>
      <option value="final">Final Term</option>
    </select>
    {errors.exam && <span className="text-red-500">{errors.exam.message}</span>}
  </label>

  <label className="block w-1/2 text-sm font-semibold text-gray-700 mb-2">
    Content About
    <select {...register("content", { required: true })} defaultChecked={false} className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-4 font-semibold text-gray-500 shadow-sm focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 sm:text-sm">
      <option value="Playlist">PlayList</option>
      <option value="Note">Note</option>
      <option value="questionBank">Question Bank</option>
      <option value="other">Other</option>
    </select>
    {errors.exam && <span className="text-red-500">{errors.exam.message}</span>}
  </label>



</div>

<div className="my-6">
  
  <input {...register("url", { required: true })} type="url" className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-4 placeholder-red-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 sm:text-sm" placeholder="URL: Upload your file in Google Drive or YouTube then Submit your shareable drive link or YouTube link*" />
    {errors.url && <span className="text-red-500">{errors.url.message}</span>}
</div>

<div className="my-6">
  <label htmlFor="cover" className="block text-sm font-semibold text-gray-700 mb-2">
    Cover Image for your contribution *
    <input {...register("imgCover", { required: true })} type="file" className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-4 placeholder-red-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 sm:text-sm" />
    {errors.imgCover && <span className="text-red-500">{errors.imgCover.message}</span>}
  </label>
</div>

<div className="my-6">
    <textarea {...register("description", { required: true })} cols="30" rows="10" className="mb-10 h-40 w-full resize-none rounded-md border border-gray-300 p-5 font-semibold text-gray-400" placeholder="Description: Write a short instruction on how to read the given resource, how much to read and how much of the syllabus is covered."></textarea>
    {errors.description && <span className="text-red-500">{errors.description.message}</span>}

</div>

<div className="flex justify-center items-center">
  <button type="submit" className="cursor-pointer rounded-lg bg-[#9a031e] px-8 py-5 tracking-widest text-sm font-semibold text-white" placeholder="Contribute">Contribute</button>
</div>

</form>


</div>


</div>
    );
};

export default Contribute;