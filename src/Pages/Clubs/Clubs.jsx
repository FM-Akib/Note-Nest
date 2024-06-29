import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaFacebook } from "react-icons/fa";
import { GiElectric } from "react-icons/gi";
import { GoProjectSymlink } from "react-icons/go";
import { IoIosMedical } from "react-icons/io";
import { MdComputer, MdSportsVolleyball } from "react-icons/md";
import { RiGroup2Fill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";

const Clubs = () => {
    const [clubs,setClubs] =  useState([])
    const [filterclubs,setFilterClubs] =  useState([clubs])
    const [filterhead,setFilterHead] = useState(['All'])
    const {
        register,
        handleSubmit,
      } = useForm();
    



      const [isDrawerOpen, setIsDrawerOpen] = useState(false);

      // const toggleNav = () => {
      //     setIsNavOpen(!isNavOpen);
      // };
  
      const toggleDrawer = () => {
          setIsDrawerOpen(!isDrawerOpen);
      };
  
      const handleNavLinkClick = () => {
          // setIsNavOpen(false);
          setIsDrawerOpen(false);
      };









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
            {/* club Heading */}
         <div className="relative h-[350px] overflow-hidden bg-[url('https://i.ibb.co/bWhXSZL/Untitled-design.png')] bg-cover bg-[50%] bg-no-repeat">
            <div
            className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black/60 bg-fixed">
            <div className="flex h-full items-center justify-center">
                <div className="px-6 text-center text-white md:px-12">
                <h1 className="mb-2 md:mb-6 text-3xl md:text-5xl font-bold">University Clubs</h1>
                <h3 className="mb-8 text-lg md:text-2xl font-bold">All departments club and necessary group link are here</h3>
                </div>
            </div>
            </div>
        </div>
        

    <div className="">



  <div className="w-full max-w-3xl my-4 mx-auto p-2 ">

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






          {/* Bottom Navigation Bar for Mobile */}
          <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#1E2D24] z-20 border-t-2 border-slate-400 shadow-2xl shadow-black flex justify-around items-center py-2">
                <NavLink to="/" className="text-white flex flex-col items-center">
                    <svg
                        width="24px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12 3L2 12h3v8h6V15h2v5h6v-8h3L12 3z"
                            stroke="#FFFFFF"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <span className="text-xs">Home</span>
                </NavLink>

                <NavLink to="/clubs" className="text-white flex flex-col items-center" onClick={handleNavLinkClick}>
                    <MdSportsVolleyball className="text-2xl" />
                    <span className="text-xs">Clubs</span>
                </NavLink>

                <NavLink to="/projects" className="text-white flex flex-col items-center" onClick={handleNavLinkClick}>
                    <GoProjectSymlink className="text-2xl" />
                    <span className="text-xs">Projects</span>
                </NavLink>
                
                <button className="text-white flex flex-col items-center" onClick={toggleDrawer}>
                    {isDrawerOpen ? (
                        <svg
                            width="24px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M16 8L8 16M8 8L16 16"
                                stroke="#FFFFFF"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    ) : (
                        <svg
                            width="24px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447ZM12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13ZM9 12C9 12.5523 8.55228 13 8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12ZM16 13C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11C15.4477 11 15 11.4477 15 12C15 12.5523 15.4477 13 16 13Z"
                                fill="#FFFFFF"
                            />
                        </svg>
                    )}
                    <span className="text-xs">Menu</span>
                </button>
            </div>

          
            {/* Drawer for Departments */}
          
            {isDrawerOpen && (
                <div className="fixed bottom-16 left-0 right-0 bg-[#1E2D24] z-30 border-t-2 border-slate-400 shadow-2xl shadow-black p-4">
                    <NavLink to="/resources/cse" className="text-white flex items-center mb-2" onClick={handleNavLinkClick}>
                        <MdComputer className="text-2xl mr-2" />
                        <span className="text-base">CSE</span>
                    </NavLink>
                    <NavLink to="/eee" className="text-white flex items-center mb-2" onClick={handleNavLinkClick}>
                        <GiElectric className="text-2xl mr-2" />
                        <span className="text-base">EEE</span>
                    </NavLink>
                    <NavLink to="/pharmacy" className="text-white flex items-center mb-2" onClick={handleNavLinkClick}>
                        <svg
                            width="24px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="mr-2"
                        >
                            <path
                                d="M5 21h14V7H5v14zM19 3h-2V1h-2v2H9V1H7v2H5v4h14V3z"
                                fill="#FFFFFF"
                            />
                        </svg>
                        <span className="text-base">Pharmacy</span>
                    </NavLink>
                </div>
            )}





    </div>
    );
};

export default Clubs;