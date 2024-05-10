import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoPlayForwardCircle } from "react-icons/io5";
import { GoVideo } from "react-icons/go";

const CseContent = () => {
    const {id} = useParams();
    const [resourceCse, setResourceCse] = useState([]);
    
    useEffect(() => {
        fetch('/cse.json')
        .then(response => response.json())
        .then(data => setResourceCse(data));
    }, []);

    if (resourceCse.length === 0) {
        // Return a loading indicator or placeholder while data is being fetched
        return <div>Loading...</div>;
    }
    console.log(resourceCse)

    const course = resourceCse?.filter(course => course.courseCode === id);
    
    if (!course || course.length === 0) {
        // Return a message indicating that the course with the specified ID was not found
        return <div>Course not found</div>;
    }

    const {Playlist,courseCode,courseTitle} = course[0];

    const midPlaylist = Playlist.filter(playlist => playlist.type === 'mid');
    const finalPlaylist = Playlist.filter(playlist => playlist.type === 'final');
    
    return (
        <div>




<div className="relative border-t border-gray-200 bg-gray-50 mb-2">
    <div className="absolute inset-0 h-36 opacity-90 lg:h-full"
        style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"100\" viewBox=\"0 0 100 100\"%3E%3Cg fill-rule=\"evenodd\"%3E%3Cg fill=\"%23e0e7ff\" fill-opacity=\"1\"%3E%3Cpath opacity=\".5\" d=\"M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z\"/%3E%3Cpath d=\"M6 5V0H5v5H0v1h5v94h1V6h94V5H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}>
    </div>
    <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-12 sm:px-12 lg:pt-14">
        <header className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">{courseCode}</h1>
            <p className="mt-2 text-sm font-semibold text-gray-400">
            {courseTitle}
            </p>
        </header>
    </div>
</div>






            <div role="tablist" className="tabs tabs-lifted">
                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Mid" checked/>
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    {/* Mid Term */}
                    <div className="">
                        <h1 className="my-4 flex items-center font-semibold bg-red-600 w-28 py-2 px-4 rounded-md text-white text-center"><IoPlayForwardCircle className="mr-1 text-2xl" />Playlist </h1>
                    </div>

                    {midPlaylist.map((playlist, i) => (
                        <div key={i} className='flex items-center justify-center mb-4'>
                            <div className="p-4 items-center justify-between w-full rounded-xl group sm:flex space-x-6 bg-gray-200 bg-opacity-50 shadow-xl hover:rounded-2xl">
                                <img className="block w-3/12 h-40 rounded-lg mx-0" alt="art cover" src='https://picsum.photos/seed/2/2000/1000' />
                                <div className="sm:w-9/12 pl-0 p-5">
                                    <div className="space-y-2">
                                        <div className="space-y-1">
                                            <h4 className="text-md font-semibold text-cyan-900 text-justify">
                                                {playlist.PlaylistTitle}
                                            </h4>
                                            <p className="">{playlist.Description}</p>
                                            <p className="font-semibold">{courseCode} - {courseTitle}</p>
                                        </div>
                                        <div className="flex items-center space-x-4 justify-between">
                                            <div className="flex items-center gap-3 ">
                                                <img src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" className="rounded-full h-8 w-8" />
                                                <span className="text-sm">{playlist.authorName} <br /> <span className="text-xs">3AM</span>  </span>
                                            </div>
                                            <div className="px-3 py-1 rounded-lg flex space-x-2 flex-row">
                                                <div className="cursor-pointer text-center text-md justify-center items-center flex">
                                                    <svg stroke="currentColor" fill="currentColor" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" className="text-md"><path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"></path></svg>
                                                    <span className="text-md mx-1">80</span>
                                                </div>
                                                <div className="cursor-pointer text-center text-md justify-center items-center flex">
                                                    <svg stroke="currentColor" fill="currentColor" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" className="text-md"><path d="M20 2H4c-1.103 0-2 .897-2 2v18l5.333-4H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14H6.667L4 18V4h16v12z"></path><circle cx="15" cy="10" r="2"></circle><circle cx="9" cy="10" r="2"></circle></svg>
                                                    <span className="text-md mx-1">80</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-4 justify-between">
                                            <div className="text-grey-500 flex flex-row space-x-1 my-4">
                                                <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                <p className="text-xs">2 hours ago</p>
                                            </div>
                                            <div className="flex flex-row space-x-1">
                                                <div className="bg-red-500 shadow-lg shadow-red-600 text-white cursor-pointer px-3 py-1 text-center justify-center items-center rounded-xl flex space-x-2 flex-row">

                                                    <span className="flex items-center ">  <GoVideo className="mr-1"/>View</span>
                                                </div>
                                                <div className="bg-green-500 shadow-lg shadow-green-600 text-white cursor-pointer px-3 text-center justify-center items-center py-1 rounded-xl flex space-x-2 flex-row">
                                                    <svg stroke="currentColor" fill="currentColor" viewBox="0 0 1024 1024" className="text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M885.9 533.7c16.8-22.2 26.1-49.4 26.1-77.7 0-44.9-25.1-87.4-65.5-111.1a67.67 67.67 0 0 0-34.3-9.3H572.4l6-122.9c1.4-29.7-9.1-57.9-29.5-79.4A106.62 106.62 0 0 0 471 99.9c-52 0-98 35-111.8 85.1l-85.9 311H144c-17.7 0-32 14.3-32 32v364c0 17.7 14.3 32 32 32h601.3c9.2 0 18.2-1.8 26.5-5.4 47.6-20.3 78.3-66.8 78.3-118.4 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7-.2-12.6-2-25.1-5.6-37.1zM184 852V568h81v284h-81zm636.4-353l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 22.4-13.2 42.6-33.6 51.8H329V564.8l99.5-360.5a44.1 44.1 0 0 1 42.2-32.3c7.6 0 15.1 2.2 21.1 6.7 9.9 7.4 15.2 18.6 14.6 30.5l-9.6 198.4h314.4C829 418.5 840 436.9 840 456c0 16.5-7.2 32.1-19.6 43z"></path></svg>
                                                    <span>23</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>



                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Final" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    {/* Final Term */}
                    <div className="">
                        <h1 className="my-4 flex items-center font-semibold bg-red-600 w-28 py-2 px-4 rounded-md text-white text-center"><IoPlayForwardCircle className="mr-1 text-2xl" />Playlist </h1>
                    </div>

                    {finalPlaylist.map((playlist, i) => (
                        <div key={i} className='flex items-center justify-center mb-4'>
                            <div className="p-4 items-center justify-between w-full rounded-xl group sm:flex space-x-6 bg-gray-200 bg-opacity-50 shadow-xl hover:rounded-2xl">
                                <img className="block w-3/12 h-40 rounded-lg mx-0" alt="art cover" src='https://picsum.photos/seed/2/2000/1000' />
                                <div className="sm:w-9/12 pl-0 p-5">
                                    <div className="space-y-2">
                                        <div className="space-y-1">
                                            <h4 className="text-md font-semibold text-cyan-900 text-justify">
                                                {playlist.PlaylistTitle}
                                            </h4>
                                            <p className="">{playlist.Description}</p>
                                            <p className="font-semibold">{courseCode} - {courseTitle}</p>
                                        </div>
                                        <div className="flex items-center space-x-4 justify-between">
                                            <div className="flex items-center gap-3 ">
                                                <img src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" className="rounded-full h-8 w-8" />
                                                <span className="text-sm">{playlist.authorName} <br /> <span className="text-xs">3AM</span>  </span>
                                            </div>
                                            <div className="px-3 py-1 rounded-lg flex space-x-2 flex-row">
                                                <div className="cursor-pointer text-center text-md justify-center items-center flex">
                                                    <svg stroke="currentColor" fill="currentColor" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" className="text-md"><path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"></path></svg>
                                                    <span className="text-md mx-1">80</span>
                                                </div>
                                                <div className="cursor-pointer text-center text-md justify-center items-center flex">
                                                    <svg stroke="currentColor" fill="currentColor" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" className="text-md"><path d="M20 2H4c-1.103 0-2 .897-2 2v18l5.333-4H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14H6.667L4 18V4h16v12z"></path><circle cx="15" cy="10" r="2"></circle><circle cx="9" cy="10" r="2"></circle></svg>
                                                    <span className="text-md mx-1">80</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-4 justify-between">
                                            <div className="text-grey-500 flex flex-row space-x-1 my-4">
                                                <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                <p className="text-xs">2 hours ago</p>
                                            </div>
                                            <div className="flex flex-row space-x-1">
                                                <div className="bg-red-500 shadow-lg shadow-red-600 text-white cursor-pointer px-3 py-1 text-center justify-center items-center rounded-xl flex space-x-2 flex-row">

                                                    <span>View</span>
                                                </div>
                                                <div className="bg-green-500 shadow-lg shadow-green-600 text-white cursor-pointer px-3 text-center justify-center items-center py-1 rounded-xl flex space-x-2 flex-row">
                                                    <svg stroke="currentColor" fill="currentColor" viewBox="0 0 1024 1024" className="text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M885.9 533.7c16.8-22.2 26.1-49.4 26.1-77.7 0-44.9-25.1-87.4-65.5-111.1a67.67 67.67 0 0 0-34.3-9.3H572.4l6-122.9c1.4-29.7-9.1-57.9-29.5-79.4A106.62 106.62 0 0 0 471 99.9c-52 0-98 35-111.8 85.1l-85.9 311H144c-17.7 0-32 14.3-32 32v364c0 17.7 14.3 32 32 32h601.3c9.2 0 18.2-1.8 26.5-5.4 47.6-20.3 78.3-66.8 78.3-118.4 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7-.2-12.6-2-25.1-5.6-37.1zM184 852V568h81v284h-81zm636.4-353l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 22.4-13.2 42.6-33.6 51.8H329V564.8l99.5-360.5a44.1 44.1 0 0 1 42.2-32.3c7.6 0 15.1 2.2 21.1 6.7 9.9 7.4 15.2 18.6 14.6 30.5l-9.6 198.4h314.4C829 418.5 840 436.9 840 456c0 16.5-7.2 32.1-19.6 43z"></path></svg>
                                                    <span>23</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CseContent;
