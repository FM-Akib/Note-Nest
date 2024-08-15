import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaFacebook } from "react-icons/fa";
import { IoIosMedical } from "react-icons/io";
import { RiGroup2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import MobileNav from "../../components/Shared/MobileNav";
import { Helmet } from "react-helmet";


import pattern from '../../assets/pattern9.png'


const Clubs = () => {
    const [clubs,setClubs] =  useState([])
    const [filterclubs,setFilterClubs] =  useState([clubs])
    const [filterhead,setFilterHead] = useState(['All'])
    const {
        register,
        handleSubmit,
      } = useForm();


    console.log(clubs);
    console.log(filterclubs);
    useEffect(() => {
        fetch('clubs.json')
        .then(response => response.json())
        .then(data => {setClubs(data)
            setFilterClubs(data)
        });
    }, []);
 
   
    const onSubmit = async(data) => {
        console.log(data.filter)
        if(data.filter==='Departmental'){
        const updated_clubs = clubs.filter(club=>club.category==='Departmental')
        setFilterClubs(updated_clubs);
        setFilterHead('Departmental')
        }
        if(data.filter==='Needful'){
            const updated_clubs = clubs.filter(club=>club.category==='Needful')
            setFilterClubs(updated_clubs);
            setFilterHead('Needful')
        }
        if(data.filter==='International'){
            const updated_clubs = clubs.filter(club=>club.category==='International')
            setFilterClubs(updated_clubs);
            setFilterHead('International')
        }
        if(data.filter==='Sports'){
            const updated_clubs = clubs.filter(club=>club.category==='Sports')
            setFilterClubs(updated_clubs);
            setFilterHead('Sports')
        }
        if(data.filter==='All'){
            setFilterClubs(clubs);
            setFilterHead('All')
        }
       
    }
    return (
        <div>

        <Helmet>
        <title>Note Nest - Clubs</title>
        </Helmet>

            {/* club Heading */}
         <div className="relative h-[350px] overflow-hidden bg-[url('https://i.ibb.co/bWhXSZL/Untitled-design.png')] bg-cover bg-[50%] bg-no-repeat">
            <div
            className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black/50 bg-fixed">
            <div className="flex h-full items-center justify-center">
                <div className="px-6 text-center text-white md:px-12">
                <h1 className="mb-2 md:mb-6 text-3xl md:text-5xl font-bold">University Clubs</h1>
                <h3 className="mb-8 text-lg md:text-xl font-bold">All departments club and necessary group link are here</h3>
                </div>
            </div>
            </div>
        </div>
        

    <div className="md:bg-cover md:bg-center " style={{backgroundImage:`url(${pattern})`}}>
    <div className="bg-[#F8F0FB]/90">

     <div className="w-full max-w-3xl py-4 mx-auto p-2 ">

<div className="border border-[#5fffb4] p-4 md:p-6 rounded-lg text-center bg-white">  
    <p className="text-md md:text-lg mb-4 text-gray-700">       
    💡Discover the clubs and groups that match your interests and needs right here!
    </p>

    <div className="w-full">
    <form onSubmit={handleSubmit(onSubmit)}>
    <select {...register("filter", { required: true })} defaultChecked={false}
		className="mr-3 h-10 border-2 border-[#41ef9e] focus:outline-none focus:border-sky-500 text-emerald-500-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider">
		<option value="All" selected="">All</option>
		<option value="Departmental">Departmental</option>
		<option value="Needful">Needful</option>
		<option value="International">International</option>
		<option value="Sports">Sports</option>
	</select>
    <button type="submit" className="tracking-wider font-bold inline-block bg-indigo-100 text-[#20794f] py-2 px-4 rounded-lg hover:bg-indigo-100 transition duration-300 ease-in-out">
        Filter
    </button>
    </form>
    </div>
</div>

<div className="flex justify-center items-center mt-6">
        <span 
        className="border flex items-center border-slate-500 bg-white  rounded-lg py-2 px-4 text-white-400 0 text-sm  transition duration-300 ease-in-out hover:text-gray-500 ">
        <IoIosMedical className="mr-2 text-orange-500" />{filterhead} <IoIosMedical className="ml-2 text-orange-500" />
        </span>
   </div>  
  

     </div>


     <div className="grid gap-8 md:grid-cols-2 lg:gap-10 p-6 md:p-10 ">
    
        {
            filterclubs?.map((club,i)=>     <Link  to={club.pageLink} key={i}
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








    <MobileNav/>



    </div>
    );
};

export default Clubs;