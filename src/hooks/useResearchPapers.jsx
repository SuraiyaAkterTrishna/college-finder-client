import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


export const useResearchPapers = () => {
    const axiosPublic = useAxiosPublic();
    const {data: researchPapers = [], isPending: loading, refetch} = useQuery({
        queryKey: ['research-papers'], 
        queryFn: async() =>{
            const res = await axiosPublic.get(`/research-papers`);
            return res.data;
        }
    })


    return [researchPapers, loading, refetch]
}