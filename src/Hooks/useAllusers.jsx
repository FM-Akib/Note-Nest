
import { useQuery } from "@tanstack/react-query"; // Ensure correct import based on the React Query version
import useAxiosPublic from "./useAxiosPublic";


const useAllusers = () => {
    const axiosPublic = useAxiosPublic();
   

    const { isLoading, isError, data: user = [], error, refetch } = useQuery({
        queryKey: ['Alluser'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/users`);
            return res.data;
        },
    });
    
    const calculateTotalStars = (contributions) => {
        return contributions.reduce((total, contribution) => total + (contribution.star || 0), 0);
      };
    
      // Sort users based on the total star value of their contributions
      const users = user?.sort((a, b) => {
        const aTotalStars = calculateTotalStars(a.myContribution);
        const bTotalStars = calculateTotalStars(b.myContribution);
        return bTotalStars - aTotalStars;
      }).slice(0, 15); 

    return { isLoading, isError, users, error, refetch };
};

export default useAllusers;
