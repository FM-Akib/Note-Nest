import Marquee from "react-fast-marquee";
import useAllusers from "../../Hooks/useAllusers";
import { RiMedalFill } from "react-icons/ri";
import '../../App.css';

const TopContributor = () => {
    const { isLoading, isError, users, error } = useAllusers();

    if (isLoading) return <div className="flex items-center justify-center min-h-screen min-w-screen"><span className="loading text-red-700 loading-dots loading-lg"></span></div> ;
    if (isError) return <div>Error: {error.message}</div>;
    console.log(users) 
    const calculateTotalStars = (contributions) => {
        return contributions.reduce((total, contribution) => total + (contribution.star || 0), 0);
      };
    return (
        <div className="md:px-2 mt-16 md:mt-24 lg:mt-32">


            <div className="flex items-center justify-center py-10 ">
            <RiMedalFill className="text-[#EFCA08] text-3xl mr-1" />
                <h1 className="exo-font font-bold text-xl md:text-2xl ">Top Contributors</h1>
            </div>


            <div className="py-4 bg-white border-[1px]  shadow-xl border-slate-300 rounded-xl flex ">
            <Marquee >
                {
                    users?.map(auser=>  <div key={auser._id}  className="flex items-center flex-col ml-4 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6 p-4 border-e-2 ">
                    {/* <img className="object-cover w-20 h-20 mt-3 mr-3 rounded-full" src="https://www.fakepersongenerator.com/Face/male/male20171086011485596.jpg" /> */}
                    <div className="avatar">
                        <div className="w-14 rounded-full ring ring-red-600 ring-offset-base-100 ring-offset-2">
                            <img src={auser.image} />
                        </div>
                        </div>
                    <div>
                        <p className="font-display mb-1 text-lg font-semibold text-black" >
                            <a href="#" rel="author">{auser.name}</a>
                        </p>
                        <div className=" prose prose-sm text-gray-400">
                            <p className="font-semibold">Total Stars - {calculateTotalStars(auser.myContribution)}</p>
                        </div>
         
                    </div>
                </div>)
                }
                </Marquee>
            </div>
        </div>
    );
};

export default TopContributor;