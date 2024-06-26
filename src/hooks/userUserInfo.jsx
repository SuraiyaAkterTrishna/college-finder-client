import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


export const useUserInfo = (uid) => {
    const axiosPublic = useAxiosPublic();
    const {data: userInfo = [], isPending: loading, refetch} = useQuery({
        queryKey: ['userInfo'], 
        queryFn: async() =>{
            const res = await axiosPublic.get(`/user/${uid}`);
            return res.data;
        },
        enabled: !!uid,
    })


    return [userInfo, loading, refetch]
}