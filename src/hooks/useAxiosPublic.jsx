import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://college-finder-server-psi.vercel.app/'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;