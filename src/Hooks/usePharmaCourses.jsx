import { useEffect, useState } from "react";


const usePharmaCourses = () => {
    const [pharma,setPharma] = useState([]);
    useEffect(()=>{
        fetch('https://note-nest-server-three.vercel.app/pharmaCourses')
        .then(response => response.json())
        .then(data=>setPharma(data));
    },[])
    return [pharma];
};

export default usePharmaCourses;