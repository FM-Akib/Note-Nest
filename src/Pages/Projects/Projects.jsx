import { useEffect, useState } from "react";


const Projects = () => {
    const [components,setComponents] =  useState([])
   
    

    useEffect(() => {
        fetch('http://localhost:5000/components')
        .then(response => response.json())
        .then(data => {setComponents(data)});
    }, []);
    console.log(components)


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
        <div className="mt-12 px-4 md:px-20">
            


            <div className="grid md:grid-cols-3 gap-6 md:gap-0">
                {components?.map(component => (
                    <div key={component.id} className="bg-white rounded-lg overflow-hidden shadow-lg ring-4 ring-blue-300 ring-opacity-40 max-w-sm hover:ring-red-300">
                        <div className="relative">
                            <img className="w-full" src={component.projectImg} alt={component.title} />
                            <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">SALE</div>
                        </div>
                        <div className="p-4">
                            <h3 className="text-lg font-medium mb-2">{component.title}</h3>
                            <p className="text-gray-600 text-sm mb-4">{component.description}</p>
                            <p className="text-gray-600 text-sm mb-4"> <span className="text-gray-600 font-semibold">Own by </span> - {component.authorName}</p>
                            <div className="flex items-center justify-between">
                                <span className="font-bold text-lg">BDT- {component.price}</span>
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