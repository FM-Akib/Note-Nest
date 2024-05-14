import { useEffect, useState } from "react";


const useCseCourses = () => {
    const [cse,setCse] = useState([]);
    useEffect(()=>{
        fetch('/course.json')
        .then(response => response.json())
        .then(data=>setCse(data));
    },[])
    return [cse];
};

export default useCseCourses;