
import { useContext, useState } from "react";
import {  NavLink, Outlet, useNavigate } from "react-router-dom";
import NavBar from "../components/Shared/NavBar";
import { AuthContext } from "../Providers/AuthProvider";
import useUserInfo from "../Hooks/useUserInfo";

const DashbordLayout = () => {
    const [isNavOpen,setIsNavOpen] = useState(false);
    const {logOut} = useContext(AuthContext)
    const {userInfo} = useUserInfo();
    const {bookmarked,myContribution} = userInfo;

    const navigate = useNavigate()
    
   const handleLogout = () => {
       logOut()
       .then(() => {})
       .catch(err => console.log(err));
       navigate('/')
   }


    const toggleNav=()=>{
        setIsNavOpen(!isNavOpen);
    }
    const closeNav=()=>{
        setIsNavOpen(false);
    }

    return (
    <>
      <NavBar></NavBar>
       <div className="relative flex h-screen min-w-full ">
   
        {/* Navigation */}
        <div className={`bg-[#9A031E] text-white w-full pt-14 md:w-1/5 z-10 ${isNavOpen ? 'absolute' : 'hidden'} md:block`}>
          <div className="p-6 ">
            <h1 className="text-xl font-bold">Dashboard</h1>

            <ul className="mt-4 pb-10 ">
              
             <NavLink to="/dashboard/home" > <li className=" flex items-center py-2 transition duration-300 ease-in-out hover:bg-white hover:text-red-600 font-semibold  px-4 rounded-sm " onClick={closeNav}>
             <svg className="mr-1"  height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path  d="M2.33537 7.87495C1.79491 9.00229 1.98463 10.3208 2.36407 12.9579L2.64284 14.8952C3.13025 18.2827 3.37396 19.9764 4.54903 20.9882C5.72409 22 7.44737 22 10.8939 22H13.1061C16.5526 22 18.2759 22 19.451 20.9882C20.626 19.9764 20.8697 18.2827 21.3572 14.8952L21.6359 12.9579C22.0154 10.3208 22.2051 9.00229 21.6646 7.87495C21.1242 6.7476 19.9738 6.06234 17.6731 4.69181L16.2882 3.86687C14.199 2.62229 13.1543 2 12 2C10.8457 2 9.80104 2.62229 7.71175 3.86687L6.32691 4.69181C4.02619 6.06234 2.87583 6.7476 2.33537 7.87495ZM12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V15C11.25 14.5858 11.5858 14.25 12 14.25C12.4142 14.25 12.75 14.5858 12.75 15V18C12.75 18.4142 12.4142 18.75 12 18.75Z" fill="#EFCA08"/>
              </svg>User Home </li></NavLink>

            <NavLink to="/dashboard/myContribution"><li className="flex items-center py-2 transition duration-300 ease-in-out hover:bg-white hover:text-red-600 font-semibold  px-4 rounded-sm " onClick={closeNav}>
            <svg className="mr-1" width="25px"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.5" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" fill="#1C274C"/>
<path d="M10.4127 8.49812L10.5766 8.20419C11.2099 7.06807 11.5266 6.5 12 6.5C12.4734 6.5 12.7901 7.06806 13.4234 8.20419L13.5873 8.49813C13.7672 8.82097 13.8572 8.98239 13.9975 9.0889C14.1378 9.19541 14.3126 9.23495 14.6621 9.31402L14.9802 9.38601C16.2101 9.66428 16.825 9.80341 16.9713 10.2739C17.1176 10.7443 16.6984 11.2345 15.86 12.215L15.643 12.4686C15.4048 12.7472 15.2857 12.8865 15.2321 13.0589C15.1785 13.2312 15.1965 13.4171 15.2325 13.7888L15.2653 14.1272C15.3921 15.4353 15.4554 16.0894 15.0724 16.3801C14.6894 16.6709 14.1137 16.4058 12.9622 15.8756L12.6643 15.7384C12.337 15.5878 12.1734 15.5124 12 15.5124C11.8266 15.5124 11.663 15.5878 11.3357 15.7384L11.0378 15.8756C9.88633 16.4058 9.31059 16.6709 8.92757 16.3801C8.54456 16.0894 8.60794 15.4353 8.7347 14.1272L8.76749 13.7888C8.80351 13.4171 8.82152 13.2312 8.76793 13.0589C8.71434 12.8865 8.59521 12.7472 8.35696 12.4686L8.14005 12.215C7.30162 11.2345 6.88241 10.7443 7.02871 10.2739C7.17501 9.80341 7.78994 9.66427 9.01977 9.38601L9.33794 9.31402C9.68743 9.23495 9.86217 9.19541 10.0025 9.0889C10.1428 8.98239 10.2328 8.82097 10.4127 8.49812Z" fill="#EFCA08"/>
</svg>
                My Contribution {myContribution?.length?`(${myContribution.length})`:''}</li></NavLink> 

            <NavLink to="/dashboard/bookmarked"><li className="flex items-center py-2 transition duration-300 ease-in-out hover:bg-white hover:text-red-600 font-semibold  px-4 rounded-sm " onClick={closeNav}>
            <svg className="mr-1" width="25px"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.5" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#1C274D"/>
<path d="M16 14.0455V11.5488C16 9.40445 16 8.3323 15.4142 7.66615C14.8284 7 13.8856 7 12 7C10.1144 7 9.17157 7 8.58579 7.66615C8 8.3323 8 9.40445 8 11.5488V14.0455C8 15.5937 8 16.3679 8.32627 16.7062C8.48187 16.8675 8.67829 16.9688 8.88752 16.9958C9.32623 17.0522 9.83855 16.5425 10.8632 15.5229C11.3161 15.0722 11.5426 14.8469 11.8046 14.7875C11.9336 14.7583 12.0664 14.7583 12.1954 14.7875C12.4574 14.8469 12.6839 15.0722 13.1368 15.5229L13.1368 15.5229C14.1615 16.5425 14.6738 17.0522 15.1125 16.9958C15.3217 16.9688 15.5181 16.8675 15.6737 16.7062C16 16.3679 16 15.5937 16 14.0455Z" fill="#EFCA08"/>
            </svg>
                Bookmarked {bookmarked?.length?`(${bookmarked.length})`:''}</li></NavLink> 



           <button onClick={handleLogout}> <li className="absolute bottom-0 mb-10 flex items-center py-2 transition duration-300 ease-in-out hover:bg-white hover:text-red-600 font-semibold  px-4 rounded-sm " onClick={closeNav}>
                <svg  height="25px"  className="mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.6" d="M15 2H14C11.1716 2 9.75736 2 8.87868 2.87868C8 3.75736 8 5.17157 8 8V16C8 18.8284 8 20.2426 8.87868 21.1213C9.75736 22 11.1716 22 14 22H15C17.8284 22 19.2426 22 20.1213 21.1213C21 20.2426 21 18.8284 21 16V8C21 5.17157 21 3.75736 20.1213 2.87868C19.2426 2 17.8284 2 15 2Z" fill="#EFCA08"/>
<path opacity="0.4" d="M8 8C8 6.46249 8 5.34287 8.14114 4.5H8C5.64298 4.5 4.46447 4.5 3.73223 5.23223C3 5.96447 3 7.14298 3 9.5V14.5C3 16.857 3 18.0355 3.73223 18.7678C4.46447 19.5 5.64298 19.5 8 19.5H8.14114C8 18.6571 8 17.5375 8 16V12.75V11.25V8Z" fill="#EFCA08"/>
<path  d="M4.46967 11.4697C4.17678 11.7626 4.17678 12.2374 4.46967 12.5303L6.46967 14.5303C6.76256 14.8232 7.23744 14.8232 7.53033 14.5303C7.82322 14.2374 7.82322 13.7626 7.53033 13.4697L6.81066 12.75L14 12.75C14.4142 12.75 14.75 12.4142 14.75 12C14.75 11.5858 14.4142 11.25 14 11.25L6.81066 11.25L7.53033 10.5303C7.82322 10.2374 7.82322 9.76256 7.53033 9.46967C7.23744 9.17678 6.76256 9.17678 6.46967 9.46967L4.46967 11.4697Z" fill="#fafafa"/>
</svg>
                Logout</li></button>  
              {/* Add more navigation links as needed */}
            </ul>


          </div>
        </div>
  
        {/* Content */}
        <div className="w-full md:w-4/5">

          {/* Toggle Button for Mobile */}
          <button className="md:hidden fixed bottom-4 right-4 z-20  text-white rounded-full p-3 shadow-2xl shadow-black border-2 border-slate-400"
            onClick={toggleNav}>
            {isNavOpen ? <svg
                width="30px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                d="M16 8L7.99997 16M7.99999 8L16 16"
                stroke="#9A031E"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                />
  </svg> : <svg width="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447ZM12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13ZM9 12C9 12.5523 8.55228 13 8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12ZM16 13C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11C15.4477 11 15 11.4477 15 12C15 12.5523 15.4477 13 16 13Z"
      fill="#9A031E"
    />
  </svg>}
          </button>
  




          <div className="p-4 bg-[#F8F0FB]">
           <Outlet></Outlet>
          </div>


          
        </div>
      </div></>
    );
};

export default DashbordLayout;