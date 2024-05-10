// import { useQuery } from "react-query";

import { useEffect, useState } from "react";

const useCseResources = () => {

    // const { isPending, error, data:cse=[] ,refetch} = useQuery({
    //     queryKey: ['cse'],
    //     queryFn: async() =>{
    //         const res = await axioSecure.get(`/carts?email=${user?.email}`)
    //         return res.data;
    //     }
    //   })
    //   if (isPending) return 'Loading...'
    
    //   if (error) return 'An error has occurred: ' + error.message
    //   return [cse, refetch]
    const [cse,setCse] = useState([]);
    useEffect(()=>{
        fetch('/cse.json')
        .then(response => response.json())
        .then(data=>setCse(data));
    },[])

    return [cse]
};

export default useCseResources;