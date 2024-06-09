import { useEffect, useState } from "react";
import { FaFacebook } from "react-icons/fa";
// import { IoIosMedical } from "react-icons/io";
import { RiGroup2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Clubs = () => {
    const [clubs,setClubs] =  useState([])
    useEffect(() => {
        fetch('clubs.json')
        .then(response => response.json())
        .then(data => setClubs(data));
    }, []);
    console.log(clubs)
    // const departmental = clubs.filter(club=>club.category==='Departmental')
    return (
        <div>
            {/* club Heading */}
         <div className="relative h-[350px] overflow-hidden bg-[url('https://i.ibb.co/bWhXSZL/Untitled-design.png')] bg-cover bg-[50%] bg-no-repeat">
            <div
            className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black/60 bg-fixed">
            <div className="flex h-full items-center justify-center">
                <div className="px-6 text-center text-white md:px-12">
                <h1 className="mb-6 text-5xl font-bold">University Clubs</h1>
                <h3 className="mb-8 text-2xl font-bold">All departments club and necessary group link are here</h3>
                </div>
            </div>
            </div>
        </div>
        

    <div className="">

    {/* <div className="flex justify-center items-center mt-6">
        <span 
        className="border flex items-center border-slate-500 bg-white  rounded-lg py-2 px-4 text-white-400 0 text-sm  transition duration-300 ease-in-out hover:text-gray-500 ">
        <IoIosMedical className="mr-2 text-orange-500" />Department Clubs <IoIosMedical className="ml-2 text-orange-500" />
        </span>
   </div>   */}
  

  <div className="w-full max-w-2xl my-4 mx-auto p-2">

<div className="border border-indigo-500 p-4 md:p-6 rounded-lg text-center">
    {/* <h2 className="text-2xl md:text-3xl font-bold mb-4">We need your help!</h2> */}

    <p className="text-lg mb-4 text-gray-700">
        developing a website for <strong>study materials for students</strong>.
        <br/>
        We would love to hear your answers to some of the questions.
    </p>

    <a href="#"
        className="font-bold inline-block bg-indigo-100 text-indigo-700 py-2 px-4 rounded-lg hover:bg-indigo-100 transition duration-300 ease-in-out">
        Take Survey
    </a>

    {/* <p className="text-sm py-2 text-gray-500">
        You will be rewarded for completing survey
    </p> */}
</div>

</div>


    <div className="grid gap-8 md:grid-cols-2 lg:gap-10 p-6 md:p-10 ">
    
        {
            clubs.map((club,i)=>     <Link  to={club.pageLink} key={i}
            className="flex flex-col p-6 space-y-6 transition-all duration-500 bg-white border border-indigo-100 rounded-lg shadow hover:shadow-xl lg:p-8 lg:flex-row lg:space-y-0 lg:space-x-6">
            <div
                className="flex items-center justify-center w-16 h-16 bg-green-100 border border-green-200 rounded-full shadow-inner lg:h-20 lg:w-20">
                <img src={club.img} alt="" />
            </div>
            <div className="flex-1">
                <h5 className="mb-3 text-xl font-bold lg:text-xl">{club.clubName}</h5>
                <p className="mb-6 text-sm text-gray-600">{club.description}</p>
                <span className="flex items-baseline text-lg font-bold text-indigo-600">
                 <Link to={club.pageLink}><FaFacebook className="text-2xl mr-3 hover:text-orange-500"  /></Link>
                 <Link to={club.groupLink}><RiGroup2Fill  className="text-2xl hover:text-orange-500" /></Link>
                </span>
            </div>
        </Link>)
        }
    
    </div> 

    </div>

    </div>
    );
};

export default Clubs;