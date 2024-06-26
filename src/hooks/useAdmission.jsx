import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


export const useAdmission = (uid) => {
    const axiosPublic = useAxiosPublic();
    const {data: admissions = [], isPending: loading, refetch} = useQuery({
        queryKey: ['admissions',uid], 
        queryFn: async() =>{
            const res = await axiosPublic.get(`/admissions/${uid}`);
            return res.data;
        },
        enabled: !!uid,
    })


    return [admissions, loading, refetch]
}