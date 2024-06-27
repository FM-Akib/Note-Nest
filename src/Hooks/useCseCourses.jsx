import { useEffect, useState } from "react";


const useCseCourses = () => {
    const [cse,setCse] = useState([]);
    useEffect(()=>{
        fetch('https://note-nest-server-three.vercel.app/cseCourses')
        .then(response => response.json())
        .then(data=>setCse(data));
    },[])
    return [cse];
};

export default useCseCourses;