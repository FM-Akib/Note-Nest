import { Link } from 'react-router-dom';
import competionHubLogo from '../../assets/competitonHublogo.png'
import '../../App.css';
import heroLeft from '../../assets/HeroLeftWhite.png'
import { motion } from 'framer-motion';


const Hero = () => {
    return (
        <div className=" relative pt-10 pb-20 lg:pt-6 ">
        <div className="relative xl:container m-auto px-4 md:px-12 lg:px-6">
       
          <div className="flex  items-center justify-start bg-gradient-to-tr pt-4 md:pt-10">
            <div className="w-max">
                <h1
                className="exo-font animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-[#F50057] pr-5 text-xl md:text-2xl text-[#F50057] font-bold">
                A note sharing flatform ...
                </h1>
            </div>
            </div>
          <div className="lg:flex">
            <div className="relative mt-4 md:mt-10 space-y-8 sm:w-10/12 md:w-2/3 lg:ml-0 sm:mx-auto text-center lg:text-left lg:mr-auto lg:w-7/12">
              <motion.p
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ duration: 1 }}
              className="sm:text-lg text-gray-700 dark:text-gray-600 lg:w-11/12">
              A platform for IIUC students to share and access academic resources like notes and papers. It&apos;s organized by courses, allows users to contribute materials, search and filter content, bookmark resources, and receive notifications. It fosters collaborative learning among students.
              </motion.p>
              <span className="block font-semibold text-gray-500 dark:text-gray-500">
                Our collaboration partner,
              </span>
              <div className="grid grid-cols-1 space-x-4 md:space-x-6 md:flex md:justify-center lg:justify-start">
                <Link
                  aria-label="add to slack"
                  to="https://m.facebook.com/groups/1134953564340876/?ref=share&mibextid=NSMWBT" target="_blank"
                  className="p-3 md:p-4 border border-gray-400 bg-white   hover:bg-[#fdf8f8]  rounded-lg duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-600/20 dark:hover:border-cyan-300/30"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  className="flex justify-center items-center space-x-4 px-2">
                    <img
                      className="w-8 h-8"
                      src={competionHubLogo}
                      alt="slack logo"
                      loading="lazy"
                      width="128"
                      height="128"
                    />
                    <span className=" font-medium md:block text-gray-700 ">IIUC Competition Hub</span>
                  </motion.div>
                </Link>


                {/* <a
                  aria-label="add to chat"
                  href="#"
                  className="p-4 border border-gray-200 dark:bg-gray-800  dark:border-gray-700 rounded-full duration-300 hover:border-green-400 hover:shadow-lg hover:shadow-lime-600/20 dark:hover:border-green-300/30"
                >
                  <div className="flex justify-center space-x-4">
                    <img
                      className="w-6 h-6"
                      src="https://tailus.io/sources/blocks/tech-startup/preview/images/chat.png"
                      alt="chat logo"
                      loading="lazy"
                      width="128"
                      height="128"
                    />
                    <span className="hidden font-medium md:block dark:text-white">Google Chat</span>
                  </div>
                </a> */}
                {/* <a
                  aria-label="add to zoom"
                  href="#"
                  className="p-4 border border-gray-200 dark:bg-gray-800  dark:border-gray-700 rounded-full duration-300 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-600/20 dark:hover:border-blue-300/30"
                >
                  <div className="flex justify-center space-x-4">
                    <img
                      className="w-6 h-6"
                      src="https://tailus.io/sources/blocks/tech-startup/preview/images/zoom.png"
                      alt="zoom logo"
                      loading="lazy"
                      width="128"
                      height="128"
                    />
                    <span className="hidden font-medium md:block dark:text-white">Zoom</span>
                  </div>
                </a> */}
              </div>
  
              <div className="dark:text-gray-600 text-sm md:text-lg">
                🔥🌟 <span>A product by iiuc team <span className="font-semibold">Hatti Matim Tim</span> .</span>
                {/* <a href="#" className="font-semibold text-gray-700 ">Discord,</a>
                <a href="#" className="font-semibold text-gray-700 ">Telegram</a> */}
              </div>
  
              <div className="md:pt-12 flex gap-6 lg:gap-12 justify-between grayscale lg:w-2/3">
                {/* <img
                  src="https://tailus.io/sources/blocks/tech-startup/preview/images/clients/airbnb.svg"
                  className="h-8 sm:h-10 w-auto lg:h-12"
                  alt="Airbnb logo"
                />
                <img
                  src="https://tailus.io/sources/blocks/tech-startup/preview/images/clients/ge.svg"
                  className="h-8 sm:h-10 w-auto lg:h-12"
                  alt="GE logo"
                />
                <img
                  src="https://tailus.io/sources/blocks/tech-startup/preview/images/clients/coty.svg"
                  className="h-8 sm:h-10 w-auto lg:h-12"
                  alt="Coty logo"
                />
                <img
                  src="https://tailus.io/sources/blocks/tech-startup/preview/images/clients/microsoft.svg"
                  className="h-8 sm:h-10 w-auto lg:h-12"
                  alt="Microsoft logo"
                /> */}
              </div>


              
            </div>
            <div className="mt-12 md:mt-0 lg:absolute -right-10 lg:w-7/12">
              <div className="relative w-full">
                <div
                  aria-hidden="true"
                  className="absolute scale-75 md:scale-110 inset-0 m-auto w-full h-full md:w-96 md:h-96 rounded-full rotate-45 bg-gradient-to-r from-sky-500 to-cyan-300 blur-3xl"
                ></div>
                <img
                  // src="https://tailus.io/sources/blocks/tech-startup/preview/images/globalization-cuate.svg"
                  src={heroLeft}
                  className="relative w-full"
                  alt="wath illustration"
                  loading="lazy"
                  width="320"
                  height="280"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Hero;