import { useColleges } from "../../hooks/useColleges";
import CollegeCard from "../Colleges/CollegeCard";

const TopColleges = () => {
    const [colleges] = useColleges();
    return (
        <div>
            <h1 className="text-2xl md:text-4xl lg:text-7xl font-bold text-center mt-8">Top Colleges</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-4 lg:my-12">
            {
                colleges.map(college => <CollegeCard 
                    key={college._id} 
                    college={college} 
                    />).slice(0, 3)
            }
        </div>
        </div>
    );
};

export default TopColleges;