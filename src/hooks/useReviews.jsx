import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


export const useReviews = () => {
    const axiosPublic = useAxiosPublic();
    const {data: reviews = [], isPending: loading, refetch} = useQuery({
        queryKey: ['reviews'], 
        queryFn: async() =>{
            const res = await axiosPublic.get(`/reviews`);
            return res.data;
        }
    })


    return [reviews, loading, refetch]
}

export const useReview = (uid) => {
    const axiosPublic = useAxiosPublic();
    
    const { data: review = {}, isLoading: loading, refetch } = useQuery({
      queryKey: ['reviews', uid],
      queryFn: async () => {
        const res = await axiosPublic.get(`/reviews/${uid}`);
        return res.data;
      },
      enabled: !!uid,
    });
  
    return [review, loading, refetch];
  };