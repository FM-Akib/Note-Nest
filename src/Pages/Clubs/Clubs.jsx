import { useEffect, useState } from "react";
import { FaFacebook } from "react-icons/fa";
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
    <div className="grid gap-8 md:grid-cols-2 lg:gap-10 p-6 md:p-10 mt-12">
    
        {
            clubs.map((club,i)=>     <Link  to={club.pageLink} key={i}
            className="flex flex-col p-6 space-y-6 transition-all duration-500 bg-white border border-indigo-100 rounded-lg shadow hover:shadow-xl lg:p-8 lg:flex-row lg:space-y-0 lg:space-x-6">
            <div
                className="flex items-center justify-center w-16 h-16 bg-green-100 border border-green-200 rounded-full shadow-inner lg:h-20 lg:w-20">
                {/* <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z">
                    </path>
                </svg> */}
                <img src={club.img} alt="" />
            </div>
            <div className="flex-1">
                <h5 className="mb-3 text-xl font-bold lg:text-xl">{club.clubName}</h5>
                <p className="mb-6 text-sm text-gray-600">{club.description}</p>
                <span className="flex items-baseline text-lg font-bold text-indigo-600">
                 <Link to={club.pageLink}><FaFacebook className="text-2xl mr-3 hover:text-orange-500"  /></Link>
                 <Link to={club.groupLink}><RiGroup2Fill  className="text-2xl hover:text-orange-500" /></Link>
                  {/* <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg> */}
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