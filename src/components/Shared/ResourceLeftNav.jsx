import  { useEffect, useState } from 'react';
// import useCseResources from '../../Hooks/useCseResources';
import { Link } from 'react-router-dom';

const ResourceLeftNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };


    const [cse,setCse] = useState([]);
    useEffect(()=>{
        fetch('/course.json')
        .then(response => response.json())
        .then(data=>setCse(data));
    },[])
    
     const firstSemester = cse.filter(course=>course.semester===1)
     const secondSemester = cse.filter(course=>course.semester===2)
     const thirdSemester = cse.filter(course=>course.semester===3)
     const fourthSemester = cse.filter(course=>course.semester===4)
     const fifthSemester = cse.filter(course=>course.semester===5)
     const sixthSemester = cse.filter(course=>course.semester===6)
     const seventhSemester = cse.filter(course=>course.semester===7)
     const eightSemester = cse.filter(course=>course.semester===8)
    


    return (
        <div className="h-screen bg-[#9A031E] p-4 text-white overflow-y-scroll">
            <ul className="flex flex-col gap-3 max-w-[280px] mx-auto mt-4  ">

            <li>
                    <details className="group ">
                        <summary
                            className="bg-white text-gray-700 rounded-sm flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer"
                            onClick={toggleOpen}>
                            <span className="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                    stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                                </svg>
                                <span>
                                   Contribute
                                </span>
                            </span>
                         
                        </summary>
                       
                    </details>
                </li>
                
                <li>
                    <details className="group ">
                        <summary
                            className="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer"
                            onClick={toggleOpen}>
                            <span className="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                    stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                                </svg>
                                <span>
                                   First Semester
                                </span>
                            </span>
                            <svg className={`w-5 h-5  text-white transition-all ${isOpen ? 'group-open:rotate-90' : ''}`} xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16">
                                <path fillRule="evenodd"
                                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                                </path>
                            </svg>
                        </summary>
                        <article className="px-2 pb-4 ">
                            <ul className="flex flex-col gap-1 pl-2 mt-4 ">
                               {
                                firstSemester.map(course=>  <li key={course.courseCode}
                                 className="flex items-center gap-2 transition duration-300 ease-in-out hover:bg-white hover:text-red-600 py-2  px-4 rounded-sm ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                    stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z">
                                    </path>
                                </svg>
                                <Link to={`/resources/content/${course.courseCode}`}>
                                    {course.courseCode}
                                </Link>
                               </li>)
                               }
                               
                            </ul>
                        </article>
                    </details>
                </li>

                <li>
                    <details className="group">
                        <summary
                            className="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
                            <span className="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                    stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                                </svg>
                                <span>
                                   Second Semester
                                </span>
                            </span>
                            <svg className="w-5 h-5 text-white transition-all group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16">
                                <path fillRule="evenodd"
                                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                                </path>
                            </svg>
                        </summary>
                        <article className="px-2 pb-4">
                            <ul className="flex flex-col gap-1 pl-2 mt-4 ">
                            {
                                secondSemester.map(course=>  <li key={course.courseCode}
                                 className="flex gap-2 transition duration-300 ease-in-out hover:bg-white hover:text-red-600 py-2  px-4 rounded-sm ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                    stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z">
                                    </path>
                                </svg>
                                <Link to={`/resources/content/${course.courseCode}`}>
                                    {course.courseCode}
                                </Link>
                               </li>)
                               }
                            </ul>
                        </article>
                    </details>
                </li>

                <li>
                    <details className="group">
                        <summary
                            className="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
                            <span className="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                    stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                                </svg>
                                <span>
                                   Third Semester
                                </span>
                            </span>
                            <svg className="w-5 h-5 text-white transition-all group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16">
                                <path fillRule="evenodd"
                                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                                </path>
                            </svg>
                        </summary>
                        <article className="px-2 pb-4">
                            <ul className="flex flex-col gap-1 pl-2 mt-4 ">
                            {
                                thirdSemester.map(course=>  <li key={course.courseCode}
                                 className="flex gap-2 transition duration-300 ease-in-out hover:bg-white hover:text-red-600 py-2  px-4 rounded-sm ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                    stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z">
                                    </path>
                                </svg>
                                <Link to={`/resources/content/${course.courseCode}`}>
                                    {course.courseCode}
                                </Link>
                               </li>)
                               }
                            </ul>
                        </article>
                    </details>
                </li>

                <li>
                    <details className="group">
                        <summary
                            className="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
                            <span className="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                    stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                                </svg>
                                <span>
                                   Fourth Semester
                                </span>
                            </span>
                            <svg className="w-5 h-5 text-white transition-all group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16">
                                <path fillRule="evenodd"
                                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                                </path>
                            </svg>
                        </summary>
                        <article className="px-2 pb-4">
                            <ul className="flex flex-col gap-1 pl-2 mt-4 ">
                            {
                                fourthSemester.map(course=>  <li key={course.courseCode}
                                 className="flex gap-2 transition duration-300 ease-in-out hover:bg-white hover:text-red-600 py-2  px-4 rounded-sm ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                    stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z">
                                    </path>
                                </svg>
                                <Link to={`/resources/content/${course.courseCode}`}>
                                    {course.courseCode}
                                </Link>
                               </li>)
                               }
                            </ul>
                        </article>
                    </details>
                </li>

                <li>
                    <details className="group">
                        <summary
                            className="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
                            <span className="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                    stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                                </svg>
                                <span>
                                   Fifth Semester
                                </span>
                            </span>
                            <svg className="w-5 h-5 text-white transition-all group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16">
                                <path fillRule="evenodd"
                                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                                </path>
                            </svg>
                        </summary>
                        <article className="px-2 pb-4">
                            <ul className="flex flex-col gap-1 pl-2 mt-4 ">
                            {
                                fifthSemester.map(course=>  <li key={course.courseCode}
                                 className="flex gap-2 transition duration-300 ease-in-out hover:bg-white hover:text-red-600 py-2  px-4 rounded-sm ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                    stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z">
                                    </path>
                                </svg>
                                <Link to={`/resources/content/${course.courseCode}`}>
                                    {course.courseCode}
                                </Link>
                               </li>)
                               }
                            </ul>
                        </article>
                    </details>
                </li>

                <li>
                    <details className="group">
                        <summary
                            className="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
                            <span className="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                    stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                                </svg>
                                <span>
                                   Sixth Semester
                                </span>
                            </span>
                            <svg className="w-5 h-5 text-white transition-all group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16">
                                <path fillRule="evenodd"
                                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                                </path>
                            </svg>
                        </summary>
                        <article className="px-2 pb-4">
                            <ul className="flex flex-col gap-1 pl-2 mt-4 ">
                            {
                                sixthSemester.map(course=>  <li key={course.courseCode}
                                 className="flex gap-2 transition duration-300 ease-in-out hover:bg-white hover:text-red-600 py-2  px-4 rounded-sm ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                    stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z">
                                    </path>
                                </svg>
                                <Link to={`/resources/content/${course.courseCode}`}>
                                    {course.courseCode}
                                </Link>
                               </li>)
                               }
                            </ul>
                        </article>
                    </details>
                </li>

                <li>
                    <details className="group">
                        <summary
                            className="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
                            <span className="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                    stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                                </svg>
                                <span>
                                   Seventh Semester
                                </span>
                            </span>
                            <svg className="w-5 h-5 text-white transition-all group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16">
                                <path fillRule="evenodd"
                                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                                </path>
                            </svg>
                        </summary>
                        <article className="px-2 pb-4">
                            <ul className="flex flex-col gap-1 pl-2 mt-4 ">
                            {
                                seventhSemester.map(course=>  <li key={course.courseCode}
                                 className="flex gap-2 transition duration-300 ease-in-out hover:bg-white hover:text-red-600 py-2  px-4 rounded-sm ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                    stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z">
                                    </path>
                                </svg>
                                <Link to={`/resources/content/${course.courseCode}`}>
                                    {course.courseCode}
                                </Link>
                               </li>)
                               }
                            </ul>
                        </article>
                    </details>
                </li>

                <li>
                    <details className="group">
                        <summary
                            className="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
                            <span className="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                    stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                                </svg>
                                <span>
                                   Eighth Semester
                                </span>
                            </span>
                            <svg className="w-5 h-5 text-white transition-all group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16">
                                <path fillRule="evenodd"
                                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                                </path>
                            </svg>
                        </summary>
                        <article className="px-2 pb-4">
                            <ul className="flex flex-col gap-1 pl-2 mt-4 ">
                            {
                                eightSemester.map(course=>  <li key={course.courseCode}
                                 className="flex gap-2 transition duration-300 ease-in-out hover:bg-white hover:text-red-600 py-2  px-4 rounded-sm ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                    stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z">
                                    </path>
                                </svg>
                                <Link to={`/resources/content/${course.courseCode}`}>
                                    {course.courseCode}
                                </Link>
                               </li>)
                               }
                            </ul>
                        </article>
                    </details>
                </li>

{/* 
                <li>
                    <details className="group">
                        <summary
                            className="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
                            <span className="flex gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                    stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                                </svg>
                                <span>
                                    Popular courses
                                </span>
                            </span>
                            <svg className="w-5 h-5 text-white transition-all group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16">
                                <path fillRule="evenodd"
                                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                                </path>
                            </svg>
                        </summary>
                        <article className="px-2 pb-4">
                            <ul className="flex flex-col gap-1 pl-2">
                                <li><a href="">Course title</a></li>
                                <li><a href="">Course title</a></li>
                                <li><a href="">Course title</a></li>
                            </ul>
                        </article>
                    </details>
                </li> */}
            </ul>
        </div>
    );
};

export default ResourceLeftNav;
