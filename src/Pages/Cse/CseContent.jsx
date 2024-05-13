import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { GoVideo } from "react-icons/go";

const CseContent = () => {
    const {id} = useParams();
    const [resourceCse, setResourceCse] = useState([]);

    
    useEffect(() => {
        fetch('/cse.json')
        .then(response => response.json())
        .then(data => setResourceCse(data));
    }, []);

    if (resourceCse.length === 0) return <div>Loading...</div>;
    
    console.log(resourceCse)

    const course = resourceCse?.filter(course => course.courseCode === id);
    
    if (!course || course.length === 0) {
        return <div>Course not found</div>;
    }

    const {other,questionBank,Note,Playlist,courseCode,courseTitle} = course[0];

    const midPlaylist = Playlist.filter(playlist => playlist.type === 'mid');
    const finalPlaylist = Playlist.filter(playlist => playlist.type === 'final');

    const midNote = Note.filter(playlist => playlist.type === 'mid');
    const finalNote = Note.filter(playlist => playlist.type === 'final');
    

    const midquestionBank = questionBank.filter(playlist => playlist.type === 'mid');
    const finalquestionBank = questionBank.filter(playlist => playlist.type === 'final');


    const midOther = other.filter(playlist => playlist.type === 'mid');
    const finalOther = other.filter(playlist => playlist.type === 'final');


    

   



    return (
        <div className="overflow-y-auto max-h-screen">

        {/* Heading */}
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




{/* Miiiiid Section */}


    <div role="tablist" className="tabs tabs-lifted">
        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Mid" checked/>
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                  

        {/* Mid Term */}

       <details className="p-6 group border-b-2" >
          <summary className="flex items-center justify-between cursor-pointer">
            <h5 className="text-lg font-medium text-gray-900 flex items-center gap-2">
            <svg width="30px" height="30px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27 4H5C3.34315 4 2 5.34315 2 7V25C2 26.6569 3.34315 28 5 28H27C28.6569 28 30 26.6569 30 25V7C30 5.34315 28.6569 4 27 4Z" fill="#B71C1C"/>
<path d="M25 24H7C6.73478 24 6.48043 23.8946 6.29289 23.7071C6.10536 23.5196 6 23.2652 6 23C6 22.7348 6.10536 22.4804 6.29289 22.2929C6.48043 22.1054 6.73478 22 7 22H25C25.2652 22 25.5196 22.1054 25.7071 22.2929C25.8946 22.4804 26 22.7348 26 23C26 23.2652 25.8946 23.5196 25.7071 23.7071C25.5196 23.8946 25.2652 24 25 24Z" fill="#EEEEEE"/>
<path d="M19 25C18.7348 25 18.4804 24.8946 18.2929 24.7071C18.1054 24.5196 18 24.2652 18 24V22C18 21.7348 18.1054 21.4804 18.2929 21.2929C18.4804 21.1054 18.7348 21 19 21C19.2652 21 19.5196 21.1054 19.7071 21.2929C19.8946 21.4804 20 21.7348 20 22V24C20 24.2652 19.8946 24.5196 19.7071 24.7071C19.5196 24.8946 19.2652 25 19 25Z" fill="#EEEEEE"/>
<path d="M20.45 12.67L13.45 9.16996C13.2978 9.09325 13.1285 9.05673 12.9581 9.06386C12.7878 9.071 12.6222 9.12155 12.4769 9.21072C12.3316 9.2999 12.2115 9.42473 12.1281 9.57336C12.0446 9.722 12.0005 9.8895 12 10.06V17.94C12.0013 18.1182 12.0502 18.2928 12.1416 18.4457C12.233 18.5987 12.3637 18.7244 12.52 18.81C12.6648 18.897 12.831 18.942 13 18.94C13.1872 18.9406 13.3709 18.8886 13.53 18.79L20.53 14.41C20.6816 14.3156 20.8051 14.1823 20.8877 14.024C20.9704 13.8658 21.0091 13.6883 21 13.51C20.9905 13.3339 20.9347 13.1635 20.8381 13.0159C20.7415 12.8684 20.6076 12.7491 20.45 12.67Z" fill="#EEEEEE"/>
<path d="M5 4C4.20435 4 3.44129 4.31607 2.87868 4.87868C2.31607 5.44129 2 6.20435 2 7V25C2 25.7956 2.31607 26.5587 2.87868 27.1213C3.44129 27.6839 4.20435 28 5 28H16V4H5Z" fill="#E53935"/>
<path d="M7 22C6.73478 22 6.48043 22.1054 6.29289 22.2929C6.10536 22.4804 6 22.7348 6 23C6 23.2652 6.10536 23.5196 6.29289 23.7071C6.48043 23.8946 6.73478 24 7 24H16V22H7Z" fill="#FAFAFA"/>
<path d="M13.45 9.16996C13.2978 9.09325 13.1285 9.05673 12.9581 9.06386C12.7878 9.071 12.6222 9.12155 12.4769 9.21072C12.3316 9.2999 12.2115 9.42473 12.1281 9.57336C12.0446 9.722 12.0005 9.8895 12 10.06V17.94C12.0013 18.1182 12.0502 18.2928 12.1416 18.4457C12.233 18.5987 12.3637 18.7244 12.52 18.81C12.6648 18.897 12.831 18.942 13 18.94C13.1872 18.9406 13.3709 18.8886 13.53 18.79L16 17.24V10.44L13.45 9.16996Z" fill="#FFEBEE"/>
</svg>  PlayLists - Tutorials
            </h5>

            <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
              <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">
           
          {midPlaylist.map((playlist, i) => (<div key={i} className='flex items-center justify-center  mb-4'>
                            <div className="p-4 items-center justify-between w-full bg-gray-200 rounded-xl group sm:flex space-x-6  bg-opacity-50 shadow-xl hover:rounded-2xl">
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
                                        </div>
                                        <div className="flex items-center space-x-4 justify-between">
                                            <div className="text-grey-500 flex flex-row space-x-1 my-4">
                                                <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                <p className="text-xs">2 hours ago</p>
                                            </div>
                                            <div className="flex flex-row space-x-1">

                                                <button className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded mr-2">
                                                View
                                                </button>
                                                
                                                <button className="bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded flex justify-between items-center">
                                                <svg stroke="currentColor" fill="currentColor" viewBox="0 0 1024 1024" className="text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M885.9 533.7c16.8-22.2 26.1-49.4 26.1-77.7 0-44.9-25.1-87.4-65.5-111.1a67.67 67.67 0 0 0-34.3-9.3H572.4l6-122.9c1.4-29.7-9.1-57.9-29.5-79.4A106.62 106.62 0 0 0 471 99.9c-52 0-98 35-111.8 85.1l-85.9 311H144c-17.7 0-32 14.3-32 32v364c0 17.7 14.3 32 32 32h601.3c9.2 0 18.2-1.8 26.5-5.4 47.6-20.3 78.3-66.8 78.3-118.4 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7-.2-12.6-2-25.1-5.6-37.1zM184 852V568h81v284h-81zm636.4-353l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 22.4-13.2 42.6-33.6 51.8H329V564.8l99.5-360.5a44.1 44.1 0 0 1 42.2-32.3c7.6 0 15.1 2.2 21.1 6.7 9.9 7.4 15.2 18.6 14.6 30.5l-9.6 198.4h314.4C829 418.5 840 436.9 840 456c0 16.5-7.2 32.1-19.6 43z"></path></svg>
                                                    <span className="ml-1">{playlist.stars}</span>
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
          </p>
        </details>

       
        <details className="p-6 group border-b-2" >
          <summary className="flex items-center justify-between cursor-pointer">
            <h5 className="text-lg font-medium text-gray-900 flex items-center gap-2">
            <svg
            height="28px"
            width="28px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 512 512"
            xmlSpace="preserve"
        >
            <path style={{ fill: '#F53635' }} d="M372.832,0H57.642L35.137,255.998L57.642,512h315.189c18.567,0,33.758-15.191,33.758-33.758V33.758 C406.59,15.191,391.399,0,372.832,0z"/>
            <polygon style={{ fill: '#FFD691' }} points="476.863,81.807 499.369,135.944 476.863,158.45 454.358,135.944"/>
            <path style={{ fill: '#F53635' }} d="M499.369,472.615v22.505c0,9.284-7.596,16.879-16.879,16.879h-11.253 c-9.284,0-16.879-7.596-16.879-16.879v-22.505l22.505-22.505L499.369,472.615z"/>
            <rect x="454.352" y="135.944" style={{ fill: '#FAB43E' }} width="45.011" height="336.671"/>
            <rect x="136.406" y="78.769" style={{ fill: '#FDF3C2' }} width="191.409" height="101.275"/>
            <rect x="12.631" style={{ fill: '#C40200' }} width="45.011" height="512"/>
            <g>
                <path style={{ fill: '#F53635' }} d="M294.066,120.963h-123.9c-4.661,0-8.44-3.778-8.44-8.44s3.779-8.44,8.44-8.44h123.898 c4.661,0,8.44,3.778,8.44,8.44S298.727,120.963,294.066,120.963z"/>
                <path style={{ fill: '#F53635' }} d="M294.066,154.721h-123.9c-4.661,0-8.44-3.778-8.44-8.44s3.779-8.44,8.44-8.44h123.898 c4.661,0,8.44,3.778,8.44,8.44C302.504,150.943,298.727,154.721,294.066,154.721z"/>
            </g>
        </svg>Hand Notes
            </h5>

            <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
              <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">
          {midNote.map((item, i) => (<div key={i} className='flex items-center justify-center mb-4'>
                            <div className="p-4 bg-gray-200 items-center justify-between w-full rounded-xl group sm:flex space-x-6  bg-opacity-50 shadow-xl hover:rounded-2xl">
                                <img className="block w-3/12 h-40 rounded-lg mx-0" alt="art cover" src='https://picsum.photos/seed/2/2000/1000' />
                                <div className="sm:w-9/12 pl-0 p-5">
                                    <div className="space-y-2">
                                        <div className="space-y-1">
                                            <h4 className="text-md font-semibold text-cyan-900 text-justify">
                                                {item.NoteTitle}
                                            </h4>
                                            <p className="">{item.Description}</p>
                                            <p className="font-semibold">{courseCode} - {courseTitle}</p>
                                        </div>
                                        <div className="flex items-center space-x-4 justify-between">
                                            <div className="flex items-center gap-3 ">
                                                <img src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" className="rounded-full h-8 w-8" />
                                                <span className="text-sm">{item.authorName} <br /> <span className="text-xs">3AM</span>  </span>
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
                                                    <span>{item.stars}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
          </p>
        </details>


        <details className="p-6 group border-b-2" >
          <summary className="flex items-center justify-between cursor-pointer">
            <h5 className="text-lg font-medium text-gray-900 flex items-center ">
            <svg width="40px" height="40px" viewBox="0 0 1024 1024"   version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M338.3 276.4h173.8v481.4H338.3z" fill="#96C96C" /><path d="M385.1 323.1h80.2v214h-80.2z" fill="#FFFFFF" /><path d="M425.2 664.1m-20.7 0a20.7 20.7 0 1 0 41.4 0 20.7 20.7 0 1 0-41.4 0Z" fill="#FFFFFF" /><path d="M512.1 276.4h173.8v481.4H512.1z" fill="#FAE274" /><path d="M558.9 323.1h80.2v214h-80.2z" fill="#FFFFFF" /><path d="M599 664.1m-20.7 0a20.7 20.7 0 1 0 41.4 0 20.7 20.7 0 1 0-41.4 0Z" fill="#FFFFFF" /><path d="M465.3 316.5h-80.2c-3.7 0-6.7 3-6.7 6.7v214c0 3.7 3 6.7 6.7 6.7h80.2c3.7 0 6.7-3 6.7-6.7v-214c0-3.7-3-6.7-6.7-6.7z m-6.7 213.9h-66.9V329.8h66.9v200.6zM425.2 637.4c-14.7 0-26.7 12-26.7 26.7s12 26.7 26.7 26.7 26.7-12 26.7-26.7-12-26.7-26.7-26.7z m0 41.4c-8.1 0-14.6-6.6-14.6-14.6 0-8.1 6.6-14.6 14.6-14.6 8.1 0 14.6 6.6 14.6 14.6s-6.5 14.6-14.6 14.6z" fill="#211F1E" /><path d="M411.9 369.9h26.8a6.7 6.7 0 0 0 0-13.4h-26.8a6.7 6.7 0 0 0 0 13.4zM411.9 396.6h26.8a6.7 6.7 0 0 0 0-13.4h-26.8a6.7 6.7 0 0 0 0 13.4z" fill="#211F1E" /><path d="M686 263H338.3c-7.4 0-13.4 6-13.4 13.4v481.4c0 7.4 6 13.4 13.4 13.4H686c7.4 0 13.4-6 13.4-13.4V276.4c-0.1-7.4-6-13.4-13.4-13.4z m-334.4 26.7h147.1v454.7H351.6V289.7z m321 454.7H525.5V289.7h147.1v454.7z" fill="#211F1E" /><path d="M558.9 543.8h80.2c3.7 0 6.7-3 6.7-6.7v-214c0-3.7-3-6.7-6.7-6.7h-80.2c-3.7 0-6.7 3-6.7 6.7v214c0 3.7 3 6.7 6.7 6.7z m6.7-214h66.9v200.6h-66.9V329.8zM599 637.4c-14.7 0-26.7 12-26.7 26.7s12 26.7 26.7 26.7 26.7-12 26.7-26.7c0.1-14.7-11.9-26.7-26.7-26.7z m0 41.4c-8.1 0-14.6-6.6-14.6-14.6 0-8.1 6.6-14.6 14.6-14.6 8.1 0 14.6 6.6 14.6 14.6 0.1 8-6.5 14.6-14.6 14.6z" fill="#211F1E" /><path d="M612.5 356.5h-26.8a6.7 6.7 0 0 0 0 13.4h26.8a6.7 6.7 0 0 0 0-13.4zM612.5 383.3h-26.8a6.7 6.7 0 0 0 0 13.4h26.8c3.7 0 6.7-3 6.7-6.7 0-3.8-3-6.7-6.7-6.7z" fill="#211F1E" /></svg>Question Bank
            </h5>

            <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
              <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">
          {midquestionBank.map((item, i) => (<div key={i} className='flex items-center justify-center mb-4'>
                            <div className="p-4 bg-gray-200 items-center justify-between w-full rounded-xl group sm:flex space-x-6  bg-opacity-50 shadow-xl hover:rounded-2xl">
                                <img className="block w-3/12 h-40 rounded-lg mx-0" alt="art cover" src='https://picsum.photos/seed/2/2000/1000' />
                                <div className="sm:w-9/12 pl-0 p-5">
                                    <div className="space-y-2">
                                        <div className="space-y-1">
                                            <h4 className="text-md font-semibold text-cyan-900 text-justify">
                                                {item.questionTitle}
                                            </h4>
                                            <p className="">{item.Description}</p>
                                            <p className="font-semibold">{courseCode} - {courseTitle}</p>
                                        </div>
                                        <div className="flex items-center space-x-4 justify-between">
                                            <div className="flex items-center gap-3 ">
                                                <img src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" className="rounded-full h-8 w-8" />
                                                <span className="text-sm">{item.authorName} <br /> <span className="text-xs">3AM</span>  </span>
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
                                                    <span>{item.stars}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
          </p>
        </details>


        <details className="p-6 group" >
          <summary className="flex items-center justify-between cursor-pointer">
            <h5 className="text-lg font-medium text-gray-900 flex items-center gap-2">
            <svg width="30px" height="30px" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.25439 4C3.45947 4 2.00439 5.45507 2.00439 7.25V13.8054C3.17187 12.6871 4.7557 12 6.5 12C7.77408 12 8.96255 12.3666 9.96569 13H20.25C20.6642 13 21 13.3358 21 13.75C21 14.1642 20.6642 14.5 20.25 14.5H11.6238C12.191 15.2255 12.6075 16.0745 12.8261 17H18.25C18.6642 17 19 17.3358 19 17.75C19 18.1642 18.6642 18.5 18.25 18.5H13C13 19.6592 12.6966 20.7475 12.1648 21.6899L14.4749 24.0001H22.751C24.5459 24.0001 26.001 22.545 26.001 20.7501V7.25C26.001 5.45507 24.5459 4 22.751 4H5.25439ZM7 9.75C7 9.33579 7.33579 9 7.75 9H15.25C15.6642 9 16 9.33579 16 9.75C16 10.1642 15.6642 10.5 15.25 10.5H7.75C7.33579 10.5 7 10.1642 7 9.75Z" fill="#F53635"/>
<path d="M10.8833 21.8226C11.5841 20.8996 12 19.7484 12 18.5C12 15.4624 9.53757 13 6.5 13C3.46243 13 1 15.4624 1 18.5C1 21.5376 3.46243 24 6.5 24C7.74835 24 8.89957 23.5841 9.82264 22.8833L12.7197 25.7803C13.0126 26.0732 13.4874 26.0732 13.7803 25.7803C14.0732 25.4874 14.0732 25.0126 13.7803 24.7197L10.8833 21.8226ZM10.5 18.5C10.5 20.7091 8.70914 22.5 6.5 22.5C4.29086 22.5 2.5 20.7091 2.5 18.5C2.5 16.2909 4.29086 14.5 6.5 14.5C8.70914 14.5 10.5 16.2909 10.5 18.5Z" fill="#212121"/>
</svg>Others
            </h5>

            <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
              <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">
          {midOther.map((item, i) => (<div key={i} className='flex items-center justify-center mb-4'>
                            <div className="p-4 bg-gray-200 items-center justify-between w-full rounded-xl group sm:flex space-x-6  bg-opacity-50 shadow-xl hover:rounded-2xl">
                                <img className="block w-3/12 h-40 rounded-lg mx-0" alt="art cover" src='https://picsum.photos/seed/2/2000/1000' />
                                <div className="sm:w-9/12 pl-0 p-5">
                                    <div className="space-y-2">
                                        <div className="space-y-1">
                                            <h4 className="text-md font-semibold text-cyan-900 text-justify">
                                                {item.Title}
                                            </h4>
                                            <p className="">{item.Description}</p>
                                            <p className="font-semibold">{courseCode} - {courseTitle}</p>
                                        </div>
                                        <div className="flex items-center space-x-4 justify-between">
                                            <div className="flex items-center gap-3 ">
                                                <img src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" className="rounded-full h-8 w-8" />
                                                <span className="text-sm">{item.authorName} <br /> <span className="text-xs">3AM</span>  </span>
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
                                                    <span>{item.stars}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
          </p>
        </details>


    </div>






{/* Finaaaaaaaaaal Section */}


  <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Final" />
     <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">

         {/* Final Term */}
         <details className="p-6 group border-b-2" >
          <summary className="flex items-center justify-between cursor-pointer">
            <h5 className="text-lg font-medium text-gray-900 flex items-center gap-2">
            <svg width="30px" height="30px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27 4H5C3.34315 4 2 5.34315 2 7V25C2 26.6569 3.34315 28 5 28H27C28.6569 28 30 26.6569 30 25V7C30 5.34315 28.6569 4 27 4Z" fill="#B71C1C"/>
<path d="M25 24H7C6.73478 24 6.48043 23.8946 6.29289 23.7071C6.10536 23.5196 6 23.2652 6 23C6 22.7348 6.10536 22.4804 6.29289 22.2929C6.48043 22.1054 6.73478 22 7 22H25C25.2652 22 25.5196 22.1054 25.7071 22.2929C25.8946 22.4804 26 22.7348 26 23C26 23.2652 25.8946 23.5196 25.7071 23.7071C25.5196 23.8946 25.2652 24 25 24Z" fill="#EEEEEE"/>
<path d="M19 25C18.7348 25 18.4804 24.8946 18.2929 24.7071C18.1054 24.5196 18 24.2652 18 24V22C18 21.7348 18.1054 21.4804 18.2929 21.2929C18.4804 21.1054 18.7348 21 19 21C19.2652 21 19.5196 21.1054 19.7071 21.2929C19.8946 21.4804 20 21.7348 20 22V24C20 24.2652 19.8946 24.5196 19.7071 24.7071C19.5196 24.8946 19.2652 25 19 25Z" fill="#EEEEEE"/>
<path d="M20.45 12.67L13.45 9.16996C13.2978 9.09325 13.1285 9.05673 12.9581 9.06386C12.7878 9.071 12.6222 9.12155 12.4769 9.21072C12.3316 9.2999 12.2115 9.42473 12.1281 9.57336C12.0446 9.722 12.0005 9.8895 12 10.06V17.94C12.0013 18.1182 12.0502 18.2928 12.1416 18.4457C12.233 18.5987 12.3637 18.7244 12.52 18.81C12.6648 18.897 12.831 18.942 13 18.94C13.1872 18.9406 13.3709 18.8886 13.53 18.79L20.53 14.41C20.6816 14.3156 20.8051 14.1823 20.8877 14.024C20.9704 13.8658 21.0091 13.6883 21 13.51C20.9905 13.3339 20.9347 13.1635 20.8381 13.0159C20.7415 12.8684 20.6076 12.7491 20.45 12.67Z" fill="#EEEEEE"/>
<path d="M5 4C4.20435 4 3.44129 4.31607 2.87868 4.87868C2.31607 5.44129 2 6.20435 2 7V25C2 25.7956 2.31607 26.5587 2.87868 27.1213C3.44129 27.6839 4.20435 28 5 28H16V4H5Z" fill="#E53935"/>
<path d="M7 22C6.73478 22 6.48043 22.1054 6.29289 22.2929C6.10536 22.4804 6 22.7348 6 23C6 23.2652 6.10536 23.5196 6.29289 23.7071C6.48043 23.8946 6.73478 24 7 24H16V22H7Z" fill="#FAFAFA"/>
<path d="M13.45 9.16996C13.2978 9.09325 13.1285 9.05673 12.9581 9.06386C12.7878 9.071 12.6222 9.12155 12.4769 9.21072C12.3316 9.2999 12.2115 9.42473 12.1281 9.57336C12.0446 9.722 12.0005 9.8895 12 10.06V17.94C12.0013 18.1182 12.0502 18.2928 12.1416 18.4457C12.233 18.5987 12.3637 18.7244 12.52 18.81C12.6648 18.897 12.831 18.942 13 18.94C13.1872 18.9406 13.3709 18.8886 13.53 18.79L16 17.24V10.44L13.45 9.16996Z" fill="#FFEBEE"/>
</svg>  PlayLists - Tutorials
            </h5>

            <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
              <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">
           
          {finalPlaylist.map((playlist, i) => (<div key={i} className='flex items-center justify-center  mb-4'>
                            <div className="p-4 items-center justify-between w-full bg-gray-200 rounded-xl group sm:flex space-x-6  bg-opacity-50 shadow-xl hover:rounded-2xl">
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
                                                    <span>{playlist.stars}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
          </p>
        </details>

       
        <details className="p-6 group border-b-2" >
          <summary className="flex items-center justify-between cursor-pointer">
            <h5 className="text-lg font-medium text-gray-900 flex items-center gap-2">
            <svg
            height="28px"
            width="28px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 512 512"
            xmlSpace="preserve"
        >
            <path style={{ fill: '#F53635' }} d="M372.832,0H57.642L35.137,255.998L57.642,512h315.189c18.567,0,33.758-15.191,33.758-33.758V33.758 C406.59,15.191,391.399,0,372.832,0z"/>
            <polygon style={{ fill: '#FFD691' }} points="476.863,81.807 499.369,135.944 476.863,158.45 454.358,135.944"/>
            <path style={{ fill: '#F53635' }} d="M499.369,472.615v22.505c0,9.284-7.596,16.879-16.879,16.879h-11.253 c-9.284,0-16.879-7.596-16.879-16.879v-22.505l22.505-22.505L499.369,472.615z"/>
            <rect x="454.352" y="135.944" style={{ fill: '#FAB43E' }} width="45.011" height="336.671"/>
            <rect x="136.406" y="78.769" style={{ fill: '#FDF3C2' }} width="191.409" height="101.275"/>
            <rect x="12.631" style={{ fill: '#C40200' }} width="45.011" height="512"/>
            <g>
                <path style={{ fill: '#F53635' }} d="M294.066,120.963h-123.9c-4.661,0-8.44-3.778-8.44-8.44s3.779-8.44,8.44-8.44h123.898 c4.661,0,8.44,3.778,8.44,8.44S298.727,120.963,294.066,120.963z"/>
                <path style={{ fill: '#F53635' }} d="M294.066,154.721h-123.9c-4.661,0-8.44-3.778-8.44-8.44s3.779-8.44,8.44-8.44h123.898 c4.661,0,8.44,3.778,8.44,8.44C302.504,150.943,298.727,154.721,294.066,154.721z"/>
            </g>
        </svg>Hand Notes
            </h5>

            <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
              <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">
          {finalNote.map((item, i) => (<div key={i} className='flex items-center justify-center mb-4'>
                            <div className="p-4 bg-gray-200 items-center justify-between w-full rounded-xl group sm:flex space-x-6  bg-opacity-50 shadow-xl hover:rounded-2xl">
                                <img className="block w-3/12 h-40 rounded-lg mx-0" alt="art cover" src='https://picsum.photos/seed/2/2000/1000' />
                                <div className="sm:w-9/12 pl-0 p-5">
                                    <div className="space-y-2">
                                        <div className="space-y-1">
                                            <h4 className="text-md font-semibold text-cyan-900 text-justify">
                                                {item.NoteTitle}
                                            </h4>
                                            <p className="">{item.Description}</p>
                                            <p className="font-semibold">{courseCode} - {courseTitle}</p>
                                        </div>
                                        <div className="flex items-center space-x-4 justify-between">
                                            <div className="flex items-center gap-3 ">
                                                <img src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" className="rounded-full h-8 w-8" />
                                                <span className="text-sm">{item.authorName} <br /> <span className="text-xs">3AM</span>  </span>
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
                                                    <span>{item.stars}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
          </p>
        </details>


        <details className="p-6 group border-b-2" >
          <summary className="flex items-center justify-between cursor-pointer">
            <h5 className="text-lg font-medium text-gray-900 flex items-center ">
            <svg width="40px" height="40px" viewBox="0 0 1024 1024"   version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M338.3 276.4h173.8v481.4H338.3z" fill="#96C96C" /><path d="M385.1 323.1h80.2v214h-80.2z" fill="#FFFFFF" /><path d="M425.2 664.1m-20.7 0a20.7 20.7 0 1 0 41.4 0 20.7 20.7 0 1 0-41.4 0Z" fill="#FFFFFF" /><path d="M512.1 276.4h173.8v481.4H512.1z" fill="#FAE274" /><path d="M558.9 323.1h80.2v214h-80.2z" fill="#FFFFFF" /><path d="M599 664.1m-20.7 0a20.7 20.7 0 1 0 41.4 0 20.7 20.7 0 1 0-41.4 0Z" fill="#FFFFFF" /><path d="M465.3 316.5h-80.2c-3.7 0-6.7 3-6.7 6.7v214c0 3.7 3 6.7 6.7 6.7h80.2c3.7 0 6.7-3 6.7-6.7v-214c0-3.7-3-6.7-6.7-6.7z m-6.7 213.9h-66.9V329.8h66.9v200.6zM425.2 637.4c-14.7 0-26.7 12-26.7 26.7s12 26.7 26.7 26.7 26.7-12 26.7-26.7-12-26.7-26.7-26.7z m0 41.4c-8.1 0-14.6-6.6-14.6-14.6 0-8.1 6.6-14.6 14.6-14.6 8.1 0 14.6 6.6 14.6 14.6s-6.5 14.6-14.6 14.6z" fill="#211F1E" /><path d="M411.9 369.9h26.8a6.7 6.7 0 0 0 0-13.4h-26.8a6.7 6.7 0 0 0 0 13.4zM411.9 396.6h26.8a6.7 6.7 0 0 0 0-13.4h-26.8a6.7 6.7 0 0 0 0 13.4z" fill="#211F1E" /><path d="M686 263H338.3c-7.4 0-13.4 6-13.4 13.4v481.4c0 7.4 6 13.4 13.4 13.4H686c7.4 0 13.4-6 13.4-13.4V276.4c-0.1-7.4-6-13.4-13.4-13.4z m-334.4 26.7h147.1v454.7H351.6V289.7z m321 454.7H525.5V289.7h147.1v454.7z" fill="#211F1E" /><path d="M558.9 543.8h80.2c3.7 0 6.7-3 6.7-6.7v-214c0-3.7-3-6.7-6.7-6.7h-80.2c-3.7 0-6.7 3-6.7 6.7v214c0 3.7 3 6.7 6.7 6.7z m6.7-214h66.9v200.6h-66.9V329.8zM599 637.4c-14.7 0-26.7 12-26.7 26.7s12 26.7 26.7 26.7 26.7-12 26.7-26.7c0.1-14.7-11.9-26.7-26.7-26.7z m0 41.4c-8.1 0-14.6-6.6-14.6-14.6 0-8.1 6.6-14.6 14.6-14.6 8.1 0 14.6 6.6 14.6 14.6 0.1 8-6.5 14.6-14.6 14.6z" fill="#211F1E" /><path d="M612.5 356.5h-26.8a6.7 6.7 0 0 0 0 13.4h26.8a6.7 6.7 0 0 0 0-13.4zM612.5 383.3h-26.8a6.7 6.7 0 0 0 0 13.4h26.8c3.7 0 6.7-3 6.7-6.7 0-3.8-3-6.7-6.7-6.7z" fill="#211F1E" /></svg>Question Bank
            </h5>

            <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
              <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">
          {finalquestionBank.map((item, i) => (<div key={i} className='flex items-center justify-center mb-4'>
                            <div className="p-4 bg-gray-200 items-center justify-between w-full rounded-xl group sm:flex space-x-6  bg-opacity-50 shadow-xl hover:rounded-2xl">
                                <img className="block w-3/12 h-40 rounded-lg mx-0" alt="art cover" src='https://picsum.photos/seed/2/2000/1000' />
                                <div className="sm:w-9/12 pl-0 p-5">
                                    <div className="space-y-2">
                                        <div className="space-y-1">
                                            <h4 className="text-md font-semibold text-cyan-900 text-justify">
                                                {item.questionTitle}
                                            </h4>
                                            <p className="">{item.Description}</p>
                                            <p className="font-semibold">{courseCode} - {courseTitle}</p>
                                        </div>
                                        <div className="flex items-center space-x-4 justify-between">
                                            <div className="flex items-center gap-3 ">
                                                <img src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" className="rounded-full h-8 w-8" />
                                                <span className="text-sm">{item.authorName} <br /> <span className="text-xs">3AM</span>  </span>
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
                                                    <span>{item.stars}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
          </p>
        </details>


        <details className="p-6 group" >
          <summary className="flex items-center justify-between cursor-pointer">
            <h5 className="text-lg font-medium text-gray-900 flex items-center gap-2">
            <svg width="30px" height="30px" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.25439 4C3.45947 4 2.00439 5.45507 2.00439 7.25V13.8054C3.17187 12.6871 4.7557 12 6.5 12C7.77408 12 8.96255 12.3666 9.96569 13H20.25C20.6642 13 21 13.3358 21 13.75C21 14.1642 20.6642 14.5 20.25 14.5H11.6238C12.191 15.2255 12.6075 16.0745 12.8261 17H18.25C18.6642 17 19 17.3358 19 17.75C19 18.1642 18.6642 18.5 18.25 18.5H13C13 19.6592 12.6966 20.7475 12.1648 21.6899L14.4749 24.0001H22.751C24.5459 24.0001 26.001 22.545 26.001 20.7501V7.25C26.001 5.45507 24.5459 4 22.751 4H5.25439ZM7 9.75C7 9.33579 7.33579 9 7.75 9H15.25C15.6642 9 16 9.33579 16 9.75C16 10.1642 15.6642 10.5 15.25 10.5H7.75C7.33579 10.5 7 10.1642 7 9.75Z" fill="#F53635"/>
<path d="M10.8833 21.8226C11.5841 20.8996 12 19.7484 12 18.5C12 15.4624 9.53757 13 6.5 13C3.46243 13 1 15.4624 1 18.5C1 21.5376 3.46243 24 6.5 24C7.74835 24 8.89957 23.5841 9.82264 22.8833L12.7197 25.7803C13.0126 26.0732 13.4874 26.0732 13.7803 25.7803C14.0732 25.4874 14.0732 25.0126 13.7803 24.7197L10.8833 21.8226ZM10.5 18.5C10.5 20.7091 8.70914 22.5 6.5 22.5C4.29086 22.5 2.5 20.7091 2.5 18.5C2.5 16.2909 4.29086 14.5 6.5 14.5C8.70914 14.5 10.5 16.2909 10.5 18.5Z" fill="#212121"/>
</svg>Others
            </h5>

            <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
              <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">
          {finalOther.map((item, i) => (<div key={i} className='flex items-center justify-center mb-4'>
                            <div className="p-4 bg-gray-200 items-center justify-between w-full rounded-xl group sm:flex space-x-6  bg-opacity-50 shadow-xl hover:rounded-2xl">
                                <img className="block w-3/12 h-40 rounded-lg mx-0" alt="art cover" src='https://picsum.photos/seed/2/2000/1000' />
                                <div className="sm:w-9/12 pl-0 p-5">
                                    <div className="space-y-2">
                                        <div className="space-y-1">
                                            <h4 className="text-md font-semibold text-cyan-900 text-justify">
                                                {item.Title}
                                            </h4>
                                            <p className="">{item.Description}</p>
                                            <p className="font-semibold">{courseCode} - {courseTitle}</p>
                                        </div>
                                        <div className="flex items-center space-x-4 justify-between">
                                            <div className="flex items-center gap-3 ">
                                                <img src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" className="rounded-full h-8 w-8" />
                                                <span className="text-sm">{item.authorName} <br /> <span className="text-xs">3AM</span>  </span>
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
                                                    <span>{item.stars}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
          </p>
        </details>



                    
                </div>
            </div>
        </div>
    );
};

export default CseContent;
