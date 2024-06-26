
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


export const useColleges = () => {
    const axiosPublic = useAxiosPublic();
    const {data: colleges = [], isPending: loading, refetch} = useQuery({
        queryKey: ['colleges'], 
        queryFn: async() =>{
            const res = await axiosPublic.get(`/colleges`);
            return res.data;
        }
    })


    return [colleges, loading, refetch]
}

export const useCollege = (id) => {
    const axiosPublic = useAxiosPublic();
    
    const { data: college = {}, isLoading: loading, refetch } = useQuery({
      queryKey: ['college', id], // Include id in the query key
      queryFn: async () => {
        const res = await axiosPublic.get(`/colleges/${id}`);
        return res.data;
      },
      enabled: !!id, // Ensure the query is enabled only if id is present
    });
  
    return [college, loading, refetch];
  };