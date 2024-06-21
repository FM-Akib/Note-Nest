import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useProjects = () => {
    const axiosPublic = useAxiosPublic();
   

    const { isLoading, isError, data: components = [], error, refetch } = useQuery({
        queryKey: ['components'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/components`);
            return res.data;
        },
    });

    if(isLoading){
        <div className="flex justify-center items-center h-screen">
        <div className="relative inline-flex">
            <div className="w-8 h-8 bg-red-500 rounded-full"></div>
            <div className="w-8 h-8 bg-red-500 rounded-full absolute top-0 left-0 animate-ping"></div>
            <div className="w-8 h-8 bg-red-500 rounded-full absolute top-0 left-0 animate-pulse"></div>
        </div>
    </div> 
    }
    return {  isError, components, error, refetch };
};

export default useProjects;