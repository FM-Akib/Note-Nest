import { useState } from "react";
import { TbCoinTaka } from "react-icons/tb";
import useProjects from "../../Hooks/useProjects";
import { NavLink } from "react-router-dom";
import { MdComputer, MdSportsVolleyball } from "react-icons/md";
import { GoProjectSymlink } from "react-icons/go";
import { GiElectric } from "react-icons/gi";


const Projects = () => {
    // const [components,setComponents] =  useState([])
   
        const [isDrawerOpen, setIsDrawerOpen] = useState(false);
        const toggleDrawer = () => {
            setIsDrawerOpen(!isDrawerOpen);
        };

        const handleNavLinkClick = () => {
            // setIsNavOpen(false);
            setIsDrawerOpen(false);
        };

    // useEffect(() => {
    //     fetch('https://note-nest-server-three.vercel.app/components')
    //     .then(response => response.json())
    //     .then(data => {setComponents(data)});
    // }, []);
    // console.log(components)
     
    const {components} = useProjects()

    const [selectedComponent, setSelectedComponent] = useState(null);

    const openModal = (component) => {
        setSelectedComponent(component);
        document.getElementById('my_modal_6').checked = true;
    };

    const closeModal = () => {
        setSelectedComponent(null);
        document.getElementById('my_modal_6').checked = false;
    };

    return (
        <div className="mt-8 ">
            

        <div className="relative border-t border-gray-200 bg-gray-50">
        <div
                className="absolute inset-0 h-36 opacity-90 lg:h-48"
                style={{
                    backgroundImage:
                        'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\' viewBox=\'0 0 100 100\'%3E%3Cg fill-rule=\'evenodd\'%3E%3Cg fill=\'%23e0e7ff\' fill-opacity=\'1\'%3E%3Cpath opacity=\'.5\' d=\'M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z\'/%3E%3Cpath d=\'M6 5V0H5v5H0v1h5v94h1V6h94V5H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
                }}
            />
            <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-12 sm:px-12 lg:pt-24">
                <header className="mx-auto max-w-2xl text-center">
                    <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-4xl flex items-center justify-center gap-3">
                    <svg height="45px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve">
                    <path style={{ fill: '#A5A5A5' }} d="M512,77.913v33.391H0V77.913c0-24.588,19.933-44.522,44.522-44.522h422.957C492.066,33.391,512,53.325,512,77.913z"/>
                    <path style={{ fill: '#777777' }} d="M397.913,66.226v1.113c0,4.61-3.738,8.348-8.348,8.348c-4.61,0-8.348-3.738-8.348-8.348v-1.113c0-4.61,3.738-8.348,8.348-8.348C394.175,57.878,397.913,61.616,397.913,66.226z M422.957,57.878c-4.61,0-8.348,3.738-8.348,8.348v1.113c0,4.61,3.738,8.348,8.348,8.348c4.61,0,8.348-3.738,8.348-8.348v-1.113C431.304,61.616,427.567,57.878,422.957,57.878z M456.348,57.878c-4.61,0-8.348,3.738-8.348,8.348v1.113c0,4.61,3.738,8.348,8.348,8.348s8.348-3.738,8.348-8.348v-1.113C464.696,61.616,460.958,57.878,456.348,57.878z"/>
                    <path style={{ fill: '#FFE6AE' }} d="M512,100.174v311.652c0,24.588-19.933,44.522-44.522,44.522H44.522C19.933,456.348,0,436.414,0,411.826V100.174h66.783V22.261C66.783,9.966,76.749,0,89.043,0h89.043c12.295,0,22.261,9.966,22.261,22.261v77.913H512z"/>
                    <path style={{ fill: '#FFD880' }} d="M456.348,261.565V384c0,12.295-9.966,22.261-22.261,22.261H77.913c-12.295,0-22.261-9.966-22.261-22.261V261.565c0-12.295,9.966-22.261,22.261-22.261h356.174C446.382,239.304,456.348,249.271,456.348,261.565z M77.913,194.783h100.174c12.295,0,22.261-9.966,22.261-22.261c0-12.295-9.966-22.261-22.261-22.261H77.913c-12.295,0-22.261,9.966-22.261,22.261C55.652,184.816,65.618,194.783,77.913,194.783z M256,194.783h178.087c12.295,0,22.261-9.966,22.261-22.261c0-12.295-9.966-22.261-22.261-22.261H256c-12.295,0-22.261,9.966-22.261,22.261C233.739,184.816,243.705,194.783,256,194.783z"/>
                    <path style={{ fill: '#FCC159' }} d="M200.348,22.261v77.913H66.783V22.261C66.783,9.966,76.749,0,89.043,0h89.043C190.382,0,200.348,9.966,200.348,22.261z"/>
                    <path style={{ fill: '#FFA522' }} d="M178.087,38.957v22.261c0,6.147-4.983,11.13-11.13,11.13h-66.783c-6.147,0-11.13-4.983-11.13-11.13V38.957c0-6.147,4.983-11.13,11.13-11.13h66.783C173.104,27.826,178.087,32.809,178.087,38.957z"/>
                    <path style={{ fill: '#D0F7D6' }} d="M456.348,262.678v204.8c0,24.588-19.934,44.522-44.522,44.522h-136.99c-24.588,0-44.522-19.933-44.522-44.522v-204.8c0-24.588,19.934-44.522,44.522-44.522h136.99C436.414,218.157,456.348,238.09,456.348,262.678z"/>
                    <path style={{ fill: '#A3CCAA' }} d="M332.026,218.157L230.314,436.279v-173.6c0-24.588,19.933-44.522,44.522-44.522H332.026zM450.386,240.435L348.753,458.389h-74.82l112.022-240.233h-28.989L241.025,466.794h-10.711v0.685c0,24.588,19.934,44.522,44.522,44.522h136.99c24.588,0,44.522-19.933,44.522-44.522v-204.8C456.348,254.573,454.171,246.981,450.386,240.435z"/>
                    <path style={{ fill: '#777777' }} d="M456.348,451.724v15.754c0,24.588-19.934,44.522-44.522,44.522h-136.99c-24.588,0-44.522-19.933-44.522-44.522v-15.754H456.348z"/>
                    <path style={{ fill: '#D0F7D6' }} d="M366.748,481.862c0,4.61-3.738,8.348-8.348,8.348h-30.138c-4.61,0-8.348-3.738-8.348-8.348c0-4.61,3.738-8.348,8.348-8.348H358.4C363.01,473.514,366.748,477.252,366.748,481.862z"/>
                   </svg> 

                        Project Components</h1>
                    <p className="mt-2 text-sm font-semibold text-gray-400">
                    A student marketplace for project components
                    </p>
                </header>
            </div>
        </div>

            <div className="grid md:grid-cols-3 gap-8  px-4  md:px-20 mt-7">
                {components?.map(component => (
                    <div key={component.id} className="relative flex flex-col justify-between bg-white rounded-lg overflow-hidden shadow-lg ring-4 ring-blue-300 ring-opacity-40 max-w-sm hover:ring-red-300">
                        <div className="relative">
                            <img className="w-full " src={component.projectImg} alt={component.title} />
                            <div className={`${component?.sale==='Sold-out'?'bg-red-500':'bg-emerald-500'} absolute top-0 right-0  text-white px-2 py-1 m-2 rounded-md text-sm font-medium`}>{component.sale?component.sale:'Available'}</div>
                        </div>
                        <div className="p-4 w-full">
                            <h3 className="text-lg font-medium mb-2">{component.title}</h3>
                            <p className="text-gray-600 text-sm mb-2">{component.description}</p>
                            <p className="text-gray-600 text-sm mb-3"> <span className="text-gray-600 font-semibold">Own by </span> - {component.authorName}</p>
                            <div className="flex items-center justify-between">
                                <span className="font-bold text-lg flex items-center">BDT- {component.price} <TbCoinTaka className="ml-1 text-xl" /></span>
                                <button
                                    className={`${component?.sale==='Sold-out'?'hidden':''} bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded`}
                                    onClick={() => openModal(component)}
                                >
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* The modal */}
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Confirm Purchase</h3>
                    {selectedComponent && (
                        <div>
                            <p className="py-4">To buy this component contact <strong>{selectedComponent.contact}</strong> or message. </p>
                            <div className="modal-action">
                                {/* <button className="btn bg-green-500 hover:bg-green-600 text-white" onClick={closeModal}>Confirm</button> */}
                                <button className="btn bg-red-500 hover:bg-red-600 text-white" onClick={closeModal}>Cancel</button>
                            </div>
                        </div>
                    )}
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

export default Projects;