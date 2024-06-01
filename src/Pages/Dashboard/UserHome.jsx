import { TbHomeStar } from "react-icons/tb";
import useUserInfo from "../../Hooks/useUserInfo";
import HeadDash from "./HeadDash";

const UserHome = () => {
    
   const {userInfo} = useUserInfo()
   console.log(userInfo);
   const {myContribution} = userInfo;
   const totalStar =  myContribution?.reduce((sum,acontribution) => sum + acontribution.star,0)


    return (
        <div className="pt-20 ">

       <HeadDash icn={<TbHomeStar className="text-[#EFCA08]" />} head="Your Nest" subHead="Welcome to your Nest."></HeadDash>

      {/* user home state */}
       <div className="flex justify-center">
       <div className="stats shadow-lg border-2  w-5/6 px-4  ">
  
        <div className="stat">
            <div className="stat-figure text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
            </div>
            <div className="stat-title">Total Stars</div>
            <div className="stat-value text-primary">{totalStar?totalStar:'0' }</div>
            <div className="stat-desc">By Contribution you earned</div>
        </div>
        
        <div className="stat">
            <div className="stat-figure text-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <div className="stat-title">Total Contribution</div>
            <div className="stat-value text-secondary">{myContribution?.length?myContribution?.length : '0'}</div>
            <div className="stat-desc">Thank you for your contribution</div>
        </div>
        
        <div className="stat">
            <div className="stat-figure text-secondary">
            <div className="avatar online">
                <div className="w-16 rounded-full">
                <img src={userInfo.image} />
                </div>
            </div>
            </div>
            <div className="stat-value">Hi,</div>
            <div className="stat-title">{userInfo.name}</div>
            <div className="stat-desc text-secondary">{userInfo.email}</div>
        </div>
        
    </div>
       </div>    



        <div className="px-10">
        <div className="bg-white rounded-3xl mx-4 md:mx-auto  border-2 border-gray-400 mt-10">
        <div className="px-8 py-6 md:p-10">
            <h1 className="text-4xl md:text-4xl font-medium leading-tight text-gray-800 mb-6"> go,  Google I/O</h1>
            <p className="text-base md:text-lg font-normal leading-normal text-gray-800 mb-6">Join us online on May 10, 2023</p>
            <p className="text-base md:text-lg font-normal leading-normal text-gray-800 mt-6">Hi Young,</p>
            <p className="text-sm md:text-base font-normal leading-normal text-gray-800 mt-2">Google I/O 2023 is around the
                corner! Tune in to watch the livestreamed keynotes at 10am PT, then dive into 100+ technical sessions,
                codelabs, and more, on demand. Learn about...
            </p>
            </div>
        </div>
        </div>

    </div>
    );
};

export default UserHome;