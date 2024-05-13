import { useState } from "react";


const Landing = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

    return (
        // <div className="">
        //   <h1 className="pt-16">Laaaaaaaaaaaaaaaanding  </h1>



        // </div>
      <div className="relative flex h-screen mt-7 min-w-full">
        {/* Navigation */}
        <div className={`bg-gray-800 text-white w-full md:w-1/4 z-10 ${isNavOpen ? 'absolute' : 'hidden'} md:block`}>
          <div className="p-4">
            <h1 className="text-xl font-bold">Dashboard</h1>
            <ul className="mt-4">
              <li className="py-2" onClick={closeNav}>Link 1</li>
              <li className="py-2" onClick={closeNav}>Link 2</li>
              <li className="py-2" onClick={closeNav}>Link 3</li>
              {/* Add more navigation links as needed */}
            </ul>
          </div>
        </div>
  
        {/* Content */}
        <div className="w-full md:w-3/4">
          {/* Toggle Button for Mobile */}
          <button
            className="md:hidden fixed bottom-4 right-4 z-20 bg-gray-800 text-white rounded-full p-3"
            onClick={toggleNav}
          >
            {isNavOpen ? 'Close' : 'Menu'}
          </button>
  
          <div className="p-4">
            {/* Main Content Goes Here */}
            <h1 className="text-2xl font-bold">Welcome to the Dashboard</h1>
            <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          </div>
        </div>
      </div>
    );
};

export default Landing;