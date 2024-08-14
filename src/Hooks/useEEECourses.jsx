import { useEffect, useState } from "react";


const useEEECourses = () => {
    const [eee,setEee] = useState([]);
    useEffect(()=>{
        fetch('https://note-nest-server-three.vercel.app/eeeCourses')
        .then(response => response.json())
        .then(data=>setEee(data));
    },[])
    return [eee];
};

export default useEEECourses;