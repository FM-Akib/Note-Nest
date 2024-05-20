import { useEffect, useState } from "react";


const useCseCourses = () => {
    const [cse,setCse] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/cseCourses')
        .then(response => response.json())
        .then(data=>setCse(data));
    },[])
    return [cse];
};

export default useCseCourses;