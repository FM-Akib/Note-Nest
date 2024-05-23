
import { useQuery } from "@tanstack/react-query"; // Ensure correct import based on the React Query version
import useAxiosPublic from "./useAxiosPublic";


const useAllusers = () => {
    const axiosPublic = useAxiosPublic();
   

    const { isLoading, isError, data: users = [], error, refetch } = useQuery({
        queryKey: ['Alluser'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/users`);
            return res.data;
        },
    });

    return { isLoading, isError, users, error, refetch };
};

export default useAllusers;
