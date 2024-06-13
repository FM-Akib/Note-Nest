
import { Link } from 'react-router-dom';
import '../../App.css';
const CseHome = () => {
    return (
        <div>
                   {/* Heading */}
        <div className="relative border-t border-gray-200 bg-gray-50 mb-2">
            <div className="absolute inset-0 h-36 opacity-90 lg:h-full"
                style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"100\" viewBox=\"0 0 100 100\"%3E%3Cg fillRule=\"evenodd\"%3E%3Cg fill=\"%23e0e7ff\" fill-opacity=\"1\"%3E%3Cpath opacity=\".5\" d=\"M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z\"/%3E%3Cpath d=\"M6 5V0H5v5H0v1h5v94h1V6h94V5H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}>
            </div>
            <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-12 sm:px-12 lg:pt-14">
                <header className="mx-auto max-w-2xl text-center">
                    <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Computer Science & Engineering</h1>
                    <p className="mt-2 text-lg font-semibold text-gray-400 tiro-bangla-regular">
                    &quot;আঁরা বেজ্ঞুন সি এস ই ইঞ্জিনিয়ার&quot;
                    </p>
                </header>
            </div>
        </div>

  

<div className="relative mx-auto mt-5">
    <div className="rounded-xl p-1" style={{backgroundImage: "linear-gradient(to right bottom, rgb(79, 70, 229) 0%, rgb(165, 56, 164) 50%, rgb(220, 38, 38) 100%)"}}>
        <div className="rounded-lg bg-white backdrop-blur">
            <div className="flex w-full flex-wrap items-center justify-between gap-4 px-8 py-10 sm:px-16 lg:flex-nowrap">
                <div className="lg:max-w-xl">
                    <h2 className="block w-full pb-2 bg-gradient-to-b from-white to-gray-800 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
                        Contribute in this resource hub 
                    </h2>
                    <p className="my-4 bg-transparent font-medium leading-relaxed tracking-wide text-gray-600">
                    This <span className="mx-2 text-emerald-600 font-semibold text-xl">Note Nest</span> journey is to ensure that your own PDF of notes, your favorite YouTube playlists or question solves do not get lost and help juniors. Contribute them and become a note hero!!
                    </p>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-6 ">
                   <Link to="/resources/contribute"> <button className="bg-[#9a031e] hover:bg-[#181313] text-white font-semibold button-text flex items-center justify-center whitespace-nowrap rounded-md transition-all duration-300 px-8 py-3 text-xs sm:text-sm tracking-widest">Contribute</button></Link>
                    <button className="flex items-center justify-center whitespace-nowrap rounded-md border border-zinc-700 bg-zinc-900 text-center text-white backdrop-blur transition-all hover:bg-zinc-800 px-8 py-3 text-xs sm:text-sm">Learn More</button>
                </div>
            </div>
        </div>
    </div>
</div>



<div className="mt-10 p-5 pt-8 border ignore border-gray-200 not-prose  relative bg-gray-50 ">
    <div
        className="text-center absolute w-auto rounded-b-lg border-b uppercase -translate-y-px tracking-wide leading-none border-l border-r border-gray-200  shadow-sm top-0 left-1/2 -translate-x-1/2 px-3 pt-1 pb-2 bg-white  text-gray-400 text-[0.65rem]">
        🤩 Some joss resource Hub from CSE 👇</div>
    <div className="max-w-5xl mx-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-3 sm:gap-5 not-prose">
           
            <a href="https://t.me/cse_7th_resourses/303" target="_blank"
                className="hover:shadow-lg mt-6 md:mt-0 relative flex flex-col items-start justify-between p-6 overflow-hidden rounded-xl border border-gray-200   bg-white group">
                <span className="absolute w-full h-full bg-white  inset-0   bg-opacity-30"></span>
                <div className="flex items-center justify-between w-full mb-4 ">
                    <img src="https://i.ibb.co/MD30nHp/Cse-Resources.png"  className="relative rounded-md h-10 md:h-11"/>
                    {/* <h1 className='text-gray-800 font-semibold'>Cse Resources</h1> */}
                    <span className="  flex-shrink-0 translate-x-0 py-1 px-2.5 text-[0.6rem] opacity-100 transition-all ease-out duration-200 rounded-full bg-blue-50   text-blue-500 flex items-center justify-center">
                        <span>View Website</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                        className="w-3 translate-x-0.5 h-3">
                        <path fillRule="evenodd"
                            d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                            clipRule="evenodd"></path>
                    </svg>
                    </span>
                </div>
                <span className="relative text-xs md:text-sm text-gray-600 ">Stay updated with the latest and most comprehensive resources for IIUC CSE students of their semesters. </span>
            </a>

            <a href="https://t.me/+Fx6j4mqFhPUzYTk1" target="_blank"
                className="hover:shadow-lg relative flex flex-col items-start justify-between p-6 overflow-hidden rounded-xl border border-gray-200   bg-white group">
                <span className="absolute w-full h-full bg-white  inset-0   bg-opacity-30"></span>
                <div className="flex items-center justify-between w-full mb-4 ">
                    <img src="https://i.ibb.co/WtYxwB5/Cse-Resources-1.png"  className="relative rounded-md h-10 md:h-11"/>
                    {/* <h1 className='text-gray-800 font-semibold'>Cse Resources</h1> */}
                    <span className="  flex-shrink-0 translate-x-0 py-1 px-2.5 text-[0.6rem] opacity-100 transition-all ease-out duration-200 rounded-full bg-blue-50   text-blue-500 flex items-center justify-center">
                        <span>View Website</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                        className="w-3 translate-x-0.5 h-3">
                        <path fillRule="evenodd"
                            d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                            clipRule="evenodd"></path>
                    </svg>
                    </span>
                </div>
                <span className="relative text-xs md:text-sm text-gray-600 ">A simple, powerful and flexible AI-Powered Telegram bot that helps your IIUC lifestyle.🔥🎉</span>
            </a>

            <a href="https://t.me/quesbankofcse" target="_blank"
                className="hover:shadow-lg relative flex flex-col items-start justify-between p-6 overflow-hidden rounded-xl border border-gray-200   bg-white group">
                <span className="absolute w-full h-full bg-white  inset-0   bg-opacity-30"></span>
                <div className="flex items-center justify-between w-full mb-4 ">
                    <img src="https://i.ibb.co/vqqn7fS/Cse-Resources-2.png"  className="relative rounded-md h-10 md:h-11"/>
                    {/* <h1 className='text-gray-800 font-semibold'>Cse Resources</h1> */}
                    <span className="  flex-shrink-0 translate-x-0 py-1 px-2.5 text-[0.6rem] opacity-100 transition-all ease-out duration-200 rounded-full bg-blue-50   text-blue-500 flex items-center justify-center">
                        <span>View Website</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                        className="w-3 translate-x-0.5 h-3">
                        <path fillRule="evenodd"
                            d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                            clipRule="evenodd"></path>
                    </svg>
                    </span>
                </div>
                <span className="relative text-xs md:text-sm text-gray-600 ">Access a vast collection of past papers, sample questions, and study materials to excel in your CSE courses. </span>
            </a>

        </div>
    </div>
</div>
    

    </div>
    );
};

export default CseHome;