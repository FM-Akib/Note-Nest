import { Link } from 'react-router-dom';
import iiuc from '../../assets/iiucLogo.png'
import { FcLink } from 'react-icons/fc';

const UniCard = () => {
    return (
        <div className="w-full   flex justify-start items-center mb-10 ">
    
    <div
        className="relative flex bg-white xl:w-[40%] md:w-[50%] sm:w-[80%] xs:w-[96%] gap-4 items-center p-2 border dark:border-gray-400/30 border-gray-400/30 rounded-lg ">
        <div
            className="absolute flex justify-center  px-2 text-xl font-bold text-center text-green-500  dark:bg-white bg-gray-800 rounded -top-2 -left-2">
            {/* <span className="self-end text-sm text-red-500">#</span> */}
            
        </div>


        <a className="w-full overflow-hidden rounded" style={{ maxWidth: '100px' }} href="https://tailwindflex.com/@sammytg7">
            <img className="object-cover my-auto rounded w-28 h-28" width="200" height="200" src={iiuc} alt=""/>
        </a>


        <div className="flex flex-col justify-between flex-grow gap-3 px-2">
            <div className="w-full">
                <Link to="https://www.iiuc.ac.bd" target="_blank" className="font-semibold md:text-lg text-black">
                International Islamic University Chittagong
                </Link>
                <p className="pt-1 text-sm dark:text-gray-700 two-lines text-gray-300">
                Kumira, Chattogram-4318 | +8802334461900-7
                </p>
            </div>



            <div className="flex items-center justify-between gap-1">
                <div className="text-sm text-gray-700 ">
                    Service provided for iiucans
                </div>
                <Link to="https://www.iiuc.ac.bd">
                <div title="Total points this month"
                    className="flex items-center gap-1 px-2 py-1 text-xs dark:text-gray-700 rounded cursor-pointer dark:bg-gray-300/30 bg-gray-700/90 text-gray-300">
                    <FcLink className='text-lg' />
                    <span className='font-semibold'>
                    Go
                </span>
                </div>
                </Link>
            </div>

        </div>
    </div>
</div>
    );
};

export default UniCard;