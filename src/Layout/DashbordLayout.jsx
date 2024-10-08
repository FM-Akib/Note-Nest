
import { useContext, useState } from "react";
import {  NavLink, Outlet, useNavigate } from "react-router-dom";
import NavBar from "../components/Shared/NavBar";
import { AuthContext } from "../Providers/AuthProvider";
import useUserInfo from "../Hooks/useUserInfo";
import toast, { Toaster } from "react-hot-toast";

const loggedOutNotify = () =>{
  toast.success('Logged Out!!')
}

const DashbordLayout = () => {
    const [isNavOpen,setIsNavOpen] = useState(false);
    const {logOut} = useContext(AuthContext)
    const {userInfo} = useUserInfo();
    const {bookmarked,myContribution} = userInfo;

    const navigate = useNavigate()
    
   const handleLogout = () => {
       logOut()
       .then(() => {
        loggedOutNotify ()
       })
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
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
      <NavBar></NavBar>
       <div className="relative flex h-screen min-w-full ">
   
        {/* Navigation */}
        <div className={`bg-[#9A031E] text-white w-full pt-14 md:w-1/5 z-10 ${isNavOpen ? 'absolute' : 'hidden'} md:block`}>
          <div className="p-6 ">
            <h1 className="text-xl font-bold">Dashboard</h1>

            <ul className="mt-4 pb-10 ">
              
             <NavLink to="/dashboard/home" > <li className={`${location.pathname === "/dashboard/home"? "bg-white text-red-600" : "hover:bg-white hover:text-red-600"
                } flex items-center mb-1  py-2 transition duration-300 ease-in-out font-semibold px-4 rounded-sm`} onClick={closeNav}>
             <svg className="mr-1"  height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path  d="M2.33537 7.87495C1.79491 9.00229 1.98463 10.3208 2.36407 12.9579L2.64284 14.8952C3.13025 18.2827 3.37396 19.9764 4.54903 20.9882C5.72409 22 7.44737 22 10.8939 22H13.1061C16.5526 22 18.2759 22 19.451 20.9882C20.626 19.9764 20.8697 18.2827 21.3572 14.8952L21.6359 12.9579C22.0154 10.3208 22.2051 9.00229 21.6646 7.87495C21.1242 6.7476 19.9738 6.06234 17.6731 4.69181L16.2882 3.86687C14.199 2.62229 13.1543 2 12 2C10.8457 2 9.80104 2.62229 7.71175 3.86687L6.32691 4.69181C4.02619 6.06234 2.87583 6.7476 2.33537 7.87495ZM12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V15C11.25 14.5858 11.5858 14.25 12 14.25C12.4142 14.25 12.75 14.5858 12.75 15V18C12.75 18.4142 12.4142 18.75 12 18.75Z" fill="#EFCA08"/>
              </svg>User Home </li></NavLink>


            <NavLink to="/dashboard/myContribution"><li className={`${location.pathname === "/dashboard/myContribution"? "bg-white text-red-600" : "hover:bg-white hover:text-red-600"
                } mb-1  flex items-center py-2 transition duration-300 ease-in-out font-semibold px-4 rounded-sm`} onClick={closeNav}>
            <svg className="mr-1" width="25px"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.5" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" fill="#1C274C"/>
            <path d="M10.4127 8.49812L10.5766 8.20419C11.2099 7.06807 11.5266 6.5 12 6.5C12.4734 6.5 12.7901 7.06806 13.4234 8.20419L13.5873 8.49813C13.7672 8.82097 13.8572 8.98239 13.9975 9.0889C14.1378 9.19541 14.3126 9.23495 14.6621 9.31402L14.9802 9.38601C16.2101 9.66428 16.825 9.80341 16.9713 10.2739C17.1176 10.7443 16.6984 11.2345 15.86 12.215L15.643 12.4686C15.4048 12.7472 15.2857 12.8865 15.2321 13.0589C15.1785 13.2312 15.1965 13.4171 15.2325 13.7888L15.2653 14.1272C15.3921 15.4353 15.4554 16.0894 15.0724 16.3801C14.6894 16.6709 14.1137 16.4058 12.9622 15.8756L12.6643 15.7384C12.337 15.5878 12.1734 15.5124 12 15.5124C11.8266 15.5124 11.663 15.5878 11.3357 15.7384L11.0378 15.8756C9.88633 16.4058 9.31059 16.6709 8.92757 16.3801C8.54456 16.0894 8.60794 15.4353 8.7347 14.1272L8.76749 13.7888C8.80351 13.4171 8.82152 13.2312 8.76793 13.0589C8.71434 12.8865 8.59521 12.7472 8.35696 12.4686L8.14005 12.215C7.30162 11.2345 6.88241 10.7443 7.02871 10.2739C7.17501 9.80341 7.78994 9.66427 9.01977 9.38601L9.33794 9.31402C9.68743 9.23495 9.86217 9.19541 10.0025 9.0889C10.1428 8.98239 10.2328 8.82097 10.4127 8.49812Z" fill="#EFCA08"/>
            </svg>My Contribution {myContribution?.length?`(${myContribution.length})`:''}</li></NavLink> 


            <NavLink to="/dashboard/bookmarked"><li className={`${location.pathname === "/dashboard/bookmarked"? "bg-white text-red-600" : "hover:bg-white hover:text-red-600"
                } mb-1  flex items-center py-2 transition duration-300 ease-in-out font-semibold px-4 rounded-sm`} onClick={closeNav}>
            <svg className="mr-1" width="25px"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.5" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#1C274D"/>
            <path d="M16 14.0455V11.5488C16 9.40445 16 8.3323 15.4142 7.66615C14.8284 7 13.8856 7 12 7C10.1144 7 9.17157 7 8.58579 7.66615C8 8.3323 8 9.40445 8 11.5488V14.0455C8 15.5937 8 16.3679 8.32627 16.7062C8.48187 16.8675 8.67829 16.9688 8.88752 16.9958C9.32623 17.0522 9.83855 16.5425 10.8632 15.5229C11.3161 15.0722 11.5426 14.8469 11.8046 14.7875C11.9336 14.7583 12.0664 14.7583 12.1954 14.7875C12.4574 14.8469 12.6839 15.0722 13.1368 15.5229L13.1368 15.5229C14.1615 16.5425 14.6738 17.0522 15.1125 16.9958C15.3217 16.9688 15.5181 16.8675 15.6737 16.7062C16 16.3679 16 15.5937 16 14.0455Z" fill="#EFCA08"/>
            </svg>
                Bookmarked {bookmarked?.length?`(${bookmarked.length})`:''}</li></NavLink> 



            <NavLink to="/dashboard/myprojects"><li className={`${location.pathname === "/dashboard/myprojects"? "bg-white text-red-600" : "hover:bg-white hover:text-red-600"
            } mb-1  flex items-center py-2 transition duration-300 ease-in-out font-semibold px-4 rounded-sm`} onClick={closeNav}>
            <svg className="mr-2" width="25px" viewBox="0 0 14 14" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#000000">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
              <g id="SVGRepo_iconCarrier">
              <path fill="#5c5c5c" d="M1.00000006 2.33333338v9.33333324c0 .73333333.6 1.33333332 1.33333332 1.33333332h9.33333324c.73333333 0 1.33333332-.6 1.33333332-1.33333332V2.33333338c0-.73333333-.6-1.33333332-1.33333332-1.33333332H2.33333338c-.73333333 0-1.33333332.6-1.33333332 1.33333332z"/>
              <path fill="#ffc71f" d="M1.20000006 1.66666672L3.20000004 3.6666667c-.13333333.2-.2.43333333-.2.66666666 0 .73333333.6 1.33333332 1.33333332 1.33333332.73333333 0 1.33333332-.6 1.33333332-1.33333332 0-.73333333-.6-1.33333332-1.33333332-1.33333332-.23333333 0-.46666666.06666667-.66666666.2L1.66666672 1.20000006c-.2.1-.36666666.26666666-.46666666.46666666zm3.1333333 2.16666664c.26666666 0 .5.23333334.5.5s-.23333334.5-.5.5-.5-.23333334-.5-.5.23333334-.5.5-.5zm8.46666658 8.49999992l-1.99999998-1.99999998c.13333333-.2.2-.43333333.2-.66666666 0-.73333333-.6-1.33333332-1.33333332-1.33333332-.73333333 0-1.33333332.6-1.33333332 1.33333332 0 .73333333.6 1.33333332 1.33333332 1.33333332.23333333 0 .46666666-.06666667.66666666-.2l1.99999998 1.99999998c.2-.1.36666666-.26666666.46666666-.46666666zm-3.1333333-2.16666665c-.26666666 0-.5-.23333333-.5-.49999999s.23333334-.5.5-.5.5.23333334.5.5-.23333334.5-.5.5zm-5.33333328.83333333c.73333333 0 1.33333332-.6 1.33333332-1.33333332 0-.23333333-.06666667-.46666666-.2-.66666666l3.5333333-3.5333333c.2.13333333.43333333.2.66666666.2.73333333 0 1.33333332-.6 1.33333332-1.33333332 0-.73333333-.6-1.33333332-1.33333332-1.33333332-.73333333 0-1.33333332.6-1.33333332 1.33333332 0 .23333333.06666667.46666666.2.66666666l-3.5333333 3.5333333c-.2-.13333333-.43333333-.2-.66666666-.2-.73333333 0-1.33333332.6-1.33333332 1.33333332 0 .73333333.6 1.33333332 1.33333332 1.33333332zm5.33333328-7.1666666c.26666666 0 .5.23333334.5.5s-.23333334.5-.5.5-.5-.23333334-.5-.5.23333334-.5.5-.5zM4.33333336 9.16666664c.26666666 0 .5.23333334.5.5s-.23333334.5-.5.5-.5-.23333334-.5-.5.23333334-.5.5-.5z"/>
              </g>
              </svg>My Components </li></NavLink> 


            <NavLink to="/dashboard/sellprojects"><li className={`${location.pathname === "/dashboard/sellprojects"? "bg-white text-red-600" : "hover:bg-white hover:text-red-600"
            } mb-1  flex items-center py-2 transition duration-300 ease-in-out font-semibold px-4 rounded-sm`} onClick={closeNav}>
            <svg className="mr-2" width="25px" viewBox="0 0 1024 1024"   version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M732.1 399.3C534.6 356 696.5 82.1 425.9 104.8s-527.2 645.8-46.8 791.7 728-415 353-497.2z" fill="#464BD8" /><path d="M539.5 838.8c-1.4 0-2.9-0.3-4.2-1L330.1 730.3a8.95 8.95 0 0 1-3.8-12.1L529 331.1a8.92 8.92 0 0 1 8-4.8c1.4 0 2.9 0.3 4.2 1l205.2 107.5c4.4 2.3 6.1 7.7 3.8 12.1L547.4 834a8.92 8.92 0 0 1-7.9 4.8z" fill="#514DDF" /><path d="M537 335.3l205.2 107.5-202.7 387-205.2-107.4L537 335.3m0-17.9c-1.8 0-3.6 0.3-5.3 0.8-4.5 1.4-8.3 4.6-10.5 8.8L318.4 714.1a17.9 17.9 0 0 0 7.6 24.2l205.2 107.5c2.6 1.4 5.4 2 8.3 2 1.8 0 3.6-0.3 5.3-0.8 4.5-1.4 8.3-4.6 10.5-8.8L758.1 451a17.88 17.88 0 0 0-7.6-24.1L545.3 319.4c-2.5-1.3-5.4-2-8.3-2z" fill="#151B28" /><path d="M538.4 835.5c-1 0-2-0.2-2.9-0.5l-254-87a8.98 8.98 0 0 1-5.6-11.4L440 257.4c1.3-3.7 4.7-6.1 8.5-6.1 1 0 1.9 0.2 2.9 0.5l254 87c2.2 0.8 4.1 2.4 5.1 4.5s1.2 4.6 0.4 6.8l-164 479.3c-0.8 2.2-2.4 4.1-4.5 5.1-1.3 0.7-2.6 1-4 1z" fill="#FFFFFF" /><path d="M448.6 260.4l254 87-164.2 479.1-254-87 164.2-479.1m0-17.9c-2.7 0-5.4 0.6-7.9 1.8a18.1 18.1 0 0 0-9.1 10.3L267.5 733.7c-3.2 9.4 1.8 19.5 11.1 22.7l254 87c1.9 0.6 3.8 1 5.8 1 2.7 0 5.4-0.6 7.9-1.8 4.3-2.1 7.5-5.8 9.1-10.3l164.1-479.2c3.2-9.4-1.8-19.5-11.1-22.7l-254-87c-1.9-0.6-3.9-0.9-5.8-0.9z" fill="#151B28" /><path d="M448.6 323c-6.9 0-13.7-1.1-20.3-3.4-2.2-0.8-4.1-2.4-5.1-4.5s-1.2-4.6-0.4-6.8l17.4-50.8c1.3-3.7 4.7-6.1 8.5-6.1 1 0 1.9 0.2 2.9 0.5l50.8 17.4c2.2 0.8 4.1 2.4 5.1 4.5s1.2 4.6 0.4 6.8a62.83 62.83 0 0 1-59.3 42.4z" fill="#FFFFFF" /><path d="M448.6 260.4l50.8 17.4a53.82 53.82 0 0 1-50.8 36.3c-5.8 0-11.6-0.9-17.4-2.9l17.4-50.8m0-17.9c-7.4 0-14.4 4.7-16.9 12.1l-17.4 50.8c-1.5 4.5-1.2 9.4 0.9 13.7 2.1 4.3 5.8 7.5 10.3 9.1 7.5 2.6 15.3 3.9 23.2 3.9a71.6 71.6 0 0 0 67.7-48.4c1.5-4.5 1.2-9.4-0.9-13.7a18.1 18.1 0 0 0-10.3-9.1l-50.8-17.4c-2-0.7-3.9-1-5.8-1z" fill="#151B28" /><path d="M685.1 407.1c-1 0-2-0.2-2.9-0.5a62.74 62.74 0 0 1-39-79.6c1.3-3.7 4.7-6.1 8.5-6.1 1 0 1.9 0.2 2.9 0.5l50.8 17.4c4.7 1.6 7.2 6.7 5.6 11.4L693.6 401c-0.8 2.2-2.4 4.1-4.5 5.1-1.3 0.7-2.6 1-4 1z" fill="#FFFFFF" /><path d="M651.7 330l50.8 17.4-17.4 50.8a53.8 53.8 0 0 1-33.4-68.2m0-17.9c-2.7 0-5.4 0.6-7.9 1.8a18.1 18.1 0 0 0-9.1 10.3c-12.8 37.3 7.2 78.1 44.5 90.9 1.9 0.7 3.9 1 5.8 1 7.4 0 14.4-4.7 16.9-12.1l17.4-50.8c1.5-4.5 1.2-9.4-0.9-13.7a18.1 18.1 0 0 0-10.3-9.1L657.5 313c-1.8-0.6-3.8-0.9-5.8-0.9z" fill="#151B28" /><path d="M335.3 765.9c-1 0-2-0.2-2.9-0.5L281.6 748c-2.2-0.8-4.1-2.4-5.1-4.5s-1.2-4.6-0.4-6.8l17.4-50.8c0.8-2.2 2.4-4.1 4.5-5.1a8.9 8.9 0 0 1 6.8-0.4 62.74 62.74 0 0 1 39 79.6c-0.8 2.2-2.4 4.1-4.5 5.1-1.3 0.5-2.7 0.8-4 0.8z" fill="#FFFFFF" /><path d="M301.9 688.8c28.1 9.6 43 40.1 33.4 68.2l-50.8-17.4 17.4-50.8m0-17.9c-2.7 0-5.4 0.6-7.9 1.8a18.1 18.1 0 0 0-9.1 10.3l-17.4 50.8c-3.2 9.4 1.8 19.5 11.1 22.7l50.8 17.4c1.9 0.6 3.8 1 5.8 1 2.7 0 5.4-0.6 7.9-1.8 4.3-2.1 7.5-5.8 9.1-10.3 6.2-18.1 5-37.5-3.4-54.7-8.4-17.2-23-30-41.1-36.2-1.9-0.7-3.9-1-5.8-1z" fill="#151B28" /><path d="M538.4 835.5c-1 0-1.9-0.2-2.9-0.5l-50.8-17.4c-2.2-0.8-4.1-2.4-5.1-4.5s-1.2-4.6-0.4-6.8a62.75 62.75 0 0 1 59.2-42.4c6.9 0 13.8 1.1 20.4 3.4 2.2 0.8 4.1 2.4 5.1 4.5s1.2 4.6 0.4 6.8l-17.4 50.8a9.01 9.01 0 0 1-8.5 6.1z" fill="#FFFFFF" /><path d="M538.4 772.8c5.8 0 11.7 0.9 17.5 2.9l-17.4 50.8-50.8-17.4a53.56 53.56 0 0 1 50.7-36.3m0-17.9v17.9-17.9a71.6 71.6 0 0 0-67.7 48.4c-3.2 9.4 1.8 19.5 11.1 22.7l50.8 17.4c1.9 0.6 3.8 1 5.8 1 2.7 0 5.4-0.6 7.9-1.8 4.3-2.1 7.5-5.8 9.1-10.3l17.4-50.8c3.2-9.4-1.8-19.5-11.1-22.7-7.6-2.6-15.4-3.9-23.3-3.9z" fill="#151B28" /><path d="M493.6 692.4c-16.4 0-32.6-2.7-48.3-8.1-1-0.4-2.2-0.7-3.4-1.3a148.5 148.5 0 0 1-97.2-143c0-0.8 0.2-1.7 0.4-2.4l27.6-80.6c0.3-0.8 0.7-1.5 1.2-2.2 27.9-37.8 72.7-60.3 119.7-60.3 16.4 0 32.6 2.7 48.2 8.1 51.5 17.6 89.2 61.9 98.4 115.5 1.7 9.5 2.5 19.2 2.3 28.8 0 0.8-0.2 1.6-0.4 2.4l-27.6 80.6c-0.3 0.8-0.7 1.5-1.2 2.2-28 37.7-72.7 60.3-119.7 60.3z" fill="#FFFFFF" /><path d="M493.5 402.6c15.1 0 30.5 2.5 45.6 7.6 50.3 17.2 84.6 60.1 93 109.2 1.6 8.9 2.4 18.1 2.2 27.2l-27.6 80.6a141.19 141.19 0 0 1-113.1 57.1c-15.1 0-30.5-2.5-45.7-7.6-1-0.3-2-0.7-3-1.2-0.1 0-0.2-0.1-0.2-0.1-57.7-21.3-93.3-76.6-91.9-135.2l27.6-80.6c26.4-35.8 68.7-57 113.1-57m0-16.3c-49.6 0-96.8 23.8-126.3 63.6-1 1.3-1.8 2.8-2.3 4.4l-27.6 80.6c-0.5 1.6-0.8 3.2-0.9 4.9a156.78 156.78 0 0 0 102.3 150.7l3.8 1.5c16.5 5.7 33.6 8.5 50.9 8.5 49.6 0 96.7-23.8 126.2-63.6 1-1.3 1.8-2.8 2.3-4.4l27.6-80.6c0.5-1.6 0.8-3.2 0.9-4.9 0.3-10.1-0.6-20.4-2.4-30.5a156.69 156.69 0 0 0-103.8-121.7c-16.3-5.6-33.4-8.5-50.7-8.5z" fill="#151B28" /><path d="M634.3 546.6l-27.6 80.6c-35.5 48-99.2 69.8-158.8 49.4-1-0.3-2-0.7-3-1.2-0.1 0-0.2-0.1-0.2-0.1-43.1-31.7-62.9-88.9-44.6-142.2 22.5-65.7 94-100.7 159.6-78.3a125.1 125.1 0 0 1 72.5 64.4 140 140 0 0 1 2.1 27.4z" fill="#2AEFC8" /><path d="M456.5 496.9c-11 5.4-18 10.7-22.3 23.3-4.8 14.1 1.3 26.5 14.5 31 34.1 11.7 45.7-54.8 94.4-38.1 21.3 7.3 31.1 25.7 26.7 47.7l22.3 7.6-4.2 12.2-22.1-7.6c-6.4 14-18.5 25.7-30.3 32l-8.6-11.7c11.4-6.4 22.1-15.5 26.9-29.6 5.9-17.3-0.5-29.3-15.1-34.3-38.1-13.1-50.7 53.1-94.9 37.9-19.7-6.7-29.4-24.9-25.7-44.9l-22.3-7.6 4.2-12.2 22.1 7.6c6.3-13.8 16.3-20.7 27.4-25.6l7 12.3z" fill="" /></svg>
            Sell Components </li></NavLink> 



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
          {/* <button className="md:hidden fixed bottom-4 right-4 z-20  text-white rounded-full p-3 shadow-2xl shadow-black border-2 border-slate-400"
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
          </button> */}

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
                 <button
                    className="text-white flex flex-col items-center"
                    onClick={toggleNav}
                >
                    {isNavOpen ? (
                        <svg
                            width="24px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M16 8L7.99997 16M7.99999 8L16 16"
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
                          d="M10 2H14V6H10V2ZM2 10H6V14H2V10ZM18 10H22V14H18V10ZM10 18H14V22H10V18ZM4 4H9V9H4V4ZM15 4H20V9H15V4ZM15 15H20V20H15V15ZM4 15H9V20H4V15Z"
                          fill="#FFFFFF"
                      />
                  </svg>
                    )}
                    <span className="text-xs">Dashboard</span>
                </button>
            </div>
  




          <div className="p-4 bg-[#F8F0FB] pb-20 md:pb-0">
           <Outlet></Outlet>
          </div>


          
        </div>
      </div></>
    );
};

export default DashbordLayout;