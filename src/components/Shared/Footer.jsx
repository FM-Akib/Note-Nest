import { FaLinkedin } from "react-icons/fa";
import { MdGroups2 } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="w-full py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
               
                <Link to="/" className=" text-xl flex justify-center">
                    <img className="w-52" src="https://i.ibb.co/DfKg1f3/1.png" alt="" /></Link>
        
                    <ul className="text-lg flex items-center justify-center flex-col gap-7 md:flex-row md:gap-12 transition-all duration-500 py-10 mb-10 border-b border-gray-200">
                        <li><a href="#" className="text-gray-800 hover:text-gray-900">Pagedone</a></li>
                        <li><a href="#" className=" text-gray-800 hover:text-gray-900">Products</a></li>
                        <li><a href="#" className=" text-gray-800 hover:text-gray-900">Resources</a></li>
                        <li><a href="#" className=" text-gray-800 hover:text-gray-900">Blogs</a></li>
                        <li><a href="#" className=" text-gray-800 hover:text-gray-900">Support</a></li>
                    </ul>
                    <div className="flex space-x-10 justify-center items-center mb-14">
                        <a href="#" className="block  text-gray-900 transition-all duration-500 hover:text-indigo-600 ">
                          <MdGroups2 className=" text-4xl" />
                        </a>
                        <a href="#" className="block  text-gray-900 transition-all duration-500 hover:text-indigo-600 ">
                        <FaLinkedin className=" text-3xl" />
                                
                        </a>
                        <a href="#" className="block  text-gray-900 transition-all duration-500 hover:text-indigo-600 ">
                            <svg className="w-[0.938rem] h-[1.625rem]" viewBox="0 0 15 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.7926 14.4697L14.5174 9.86889H10.0528V6.87836C10.0528 5.62033 10.6761 4.39105 12.6692 4.39105H14.7275V0.473179C13.5289 0.282204 12.3177 0.178886 11.1037 0.164062C7.42917 0.164062 5.0302 2.37101 5.0302 6.36077V9.86889H0.957031V14.4697H5.0302V25.5979H10.0528V14.4697H13.7926Z" fill="currentColor"/>
                                </svg>
                                
                        </a>
                        <a href="#" className="block  text-gray-900 transition-all duration-500 hover:text-indigo-600 ">
                            <svg className="w-[1.875rem] h-[1.375rem]" viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M26.3106 1.27838C27.5782 1.62071 28.5745 2.61957 28.9113 3.88573C29.524 6.18356 29.524 10.9809 29.524 10.9809C29.524 10.9809 29.524 15.7782 28.9113 18.076C28.5698 19.3469 27.5735 20.3457 26.3106 20.6834C24.0186 21.2977 14.8226 21.2977 14.8226 21.2977C14.8226 21.2977 5.63122 21.2977 3.33456 20.6834C2.06695 20.3411 1.07063 19.3422 0.73385 18.076C0.121094 15.7782 0.121094 10.9809 0.121094 10.9809C0.121094 10.9809 0.121094 6.18356 0.73385 3.88573C1.07531 2.61488 2.07162 1.61602 3.33456 1.27838C5.63122 0.664062 14.8226 0.664062 14.8226 0.664062C14.8226 0.664062 24.0186 0.664062 26.3106 1.27838ZM19.5234 10.9809L11.885 15.403V6.55872L19.5234 10.9809Z" fill="currentColor"/>
                                </svg>
                                
                        </a>
                    </div>
                    <span className="text-lg text-gray-500 text-center block">©<a href="https://pagedone.io/">Note Nest</a> 2024, All rights reserved.</span>
            </div>
        </div>
    </footer>
    );
};

export default Footer;