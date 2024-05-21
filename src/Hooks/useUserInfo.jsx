import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const useUserInfo = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useContext(AuthContext);

    const { isLoading, isError, data: userInfo = {}, error, refetch } = useQuery({
        queryKey: ['User', user?.email],
        queryFn: async () => {
            if (!user?.email) return;
            const res = await axiosPublic.get(`/users/${user.email}`);
            return res.data;
        },
        enabled: !!user?.email, // Ensure query only runs when user.email is available
    });

    return { isLoading, isError, userInfo, error, refetch };
};

export default useUserInfo;
