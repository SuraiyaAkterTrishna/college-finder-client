import CollegeCard from "./CollegeCard";
import {useColleges} from "../../hooks/useColleges";

const Colleges = () => {
    const [colleges] = useColleges();
    return (
        <div>
            <h2 className="text-2xl md:text-4xl lg:text-7xl font-bold text-center py-4">All Colleges</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto py-12">
            {
                colleges?.map(college => <CollegeCard 
                    key={college._id} 
                    college={college} 
                ></CollegeCard>)
            }
        </div>
        </div>
    );
};

export default Colleges;