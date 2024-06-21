import { useState } from "react";
import { TbCoinTaka } from "react-icons/tb";
import useProjects from "../../Hooks/useProjects";


const Projects = () => {
    // const [components,setComponents] =  useState([])
   
    

    // useEffect(() => {
    //     fetch('http://localhost:5000/components')
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

            <div className="grid md:grid-cols-3 gap-6 md:gap-0 px-4 md:px-20 mt-7">
                {components?.map(component => (
                    <div key={component.id} className="relative flex flex-col justify-between bg-white rounded-lg overflow-hidden shadow-lg ring-4 ring-blue-300 ring-opacity-40 max-w-sm hover:ring-red-300">
                        <div className="relative">
                            <img className="w-full " src={component.projectImg} alt={component.title} />
                            <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">{component.sale?component.sale:'Available'}</div>
                        </div>
                        <div className="p-4 w-full">
                            <h3 className="text-lg font-medium mb-2">{component.title}</h3>
                            <p className="text-gray-600 text-sm mb-2">{component.description}</p>
                            <p className="text-gray-600 text-sm mb-3"> <span className="text-gray-600 font-semibold">Own by </span> - {component.authorName}</p>
                            <div className="flex items-center justify-between">
                                <span className="font-bold text-lg flex items-center">BDT- {component.price} <TbCoinTaka className="ml-1 text-xl" /></span>
                                <button
                                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
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




        </div>
    );
};

export default Projects;