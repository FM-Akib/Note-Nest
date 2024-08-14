import HeadDash from "./HeadDash";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { v4 as uuidv4 } from 'uuid';
import {  AiOutlineControl } from "react-icons/ai";
import { Helmet } from "react-helmet";
import { MdPostAdd } from "react-icons/md";




const image_hosting_key= import.meta.env.VITE_apiKey_Image;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const Sellcomponents = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const [loading,setLoading] = useState(false);
  const {user} = useContext(AuthContext)
  const axiosPublic = useAxiosPublic();

  const onSubmit = async(data) => {
    setLoading(true);


    const imageFile = {image: data.image[0]}
    const res = await axiosPublic.post(image_hosting_api,imageFile,{
        headers: {
            'content-type': 'multipart/form-data',
        }
    })
    if(res.data.success){
      const id = uuidv4();


      const components = {
        id,
        title: data.title,
        price: data.price,
        contact: data.contact,
        description: data.description,
        sale:'Available',
        authorName: user.displayName,
        authorImg: user.photoURL,
        projectImg: res.data.data.display_url,
      }
      const result = await axiosPublic.patch(`/users/components/${user.email}`,{components})

      if(result.data.result.modifiedCount>0){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Components added for sale!`,
          showConfirmButton: false,
          timer: 1500
        });


      
       const componentsResult = await axiosPublic.post(`/components`,{components})
         
       console.log(componentsResult)
       setLoading(false);

      }    

    }

     
      
 

        
  };
  
    return (
  
  <div className="pt-20 md:px-20 px-0 overflow-y-auto min-h-screen max-h-screen">
    <Helmet>
      <title>Note Nest - Sell Components</title>
    </Helmet>

  
  {/* loading */}

  <div className={`${loading? 'block':'hidden'}   absolute bg-white bg-opacity-60 z-10 h-full w-full flex items-center justify-center `}>
       <div className="flex items-center">
         <span className="text-3xl mr-4">Loading</span>
         <svg className="animate-spin h-8 w-8 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none"
           viewBox="0 0 24 24">
           <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
           <path className="opacity-75" fill="currentColor"
             d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
           </path>
         </svg>
       </div>
  </div>
     
  
  <HeadDash icn={<AiOutlineControl className="text-[#EFCA08] text-4xl" />} head="Sell Components" subHead="Sell your project components"></HeadDash>
  

  <div className=" flex items-center">
    <div className="w-full pb-10">
        {/* <h2 className="text-center text-blue-400 font-bold text-2xl uppercase mb-10">Fill out our form</h2> */}
        <div className="bg-[url(https://i.ibb.co/VSJFpBb/texture-pattern.jpg)] p-4 md:p-10 rounded-lg shadow md:w-4/4 mx-auto lg:w-2/2">
           
           <form onSubmit={handleSubmit(onSubmit)} className="p-2 md:p-8">

                <div className="mb-5">
                    <label  className="block mb-2 font-bold text-gray-600">Components Name</label>
                    <input {...register("title", { required: true })} type="text" placeholder="Sell components name." className="border border-gray-300 shadow p-3 w-full rounded mb-"/>
                    {errors.title && <p className="text-sm text-red-400 mt-2">Component name is required*.</p>}
                </div>


                <div className="w-full flex flex-col md:flex-row md:gap-4">
                <div className="mb-5 md:w-1/2">
                    <label className="block mb-2 font-bold text-gray-600">Price</label>
                    <input {...register("price", { required: true })} placeholder="Enter a price." className="border border-gray-300 shadow p-3 w-full rounded mb-"/>
                    {errors.price && <p className="text-sm text-red-400 mt-2">Price is required*.</p>}

                </div>

                <div className="mb-5 md:w-1/2">
                    <label className="block mb-2 font-bold text-gray-600">Contact</label>
                    <input {...register("contact", { required: true })} placeholder="Give a contact number." className="border border-gray-300 shadow p-3 w-full rounded mb-"/>
                    {errors.contact && <p className="text-sm text-red-400 mt-2">Contact info is required*.</p>}
                  
                </div>
                </div>
                <div className="mb-5">
                    <label  className="block mb-2 font-bold text-gray-600">Component Image</label>
                    <input {...register("image", { required: true })} type="file"  className=" shadow p-3 w-full rounded mb-"/>
                    {errors.image && <p className="text-sm text-red-400 mt-2">Image is required*.</p>}

                </div>
                
                <div className="mb-5">
                    <label  className="block mb-2 font-bold text-gray-600">Short description</label>
                    <textarea {...register("description", { required: true })} type="text" placeholder="Short description about your components." className="border border-gray-300 shadow p-3 w-full rounded mb-"/>
                    {errors.description && <p className="text-sm text-red-400 mt-2">Description is required*.</p>}
                </div>


                <button className="w-full bg-[#9A031E] text-white font-semibold p-3 rounded-lg flex items-center justify-center gap-1">Submit <MdPostAdd className="text-xl" />
                </button>
         </form>   
        </div>
    </div>
</div>
        </div>
    );
};

export default Sellcomponents;