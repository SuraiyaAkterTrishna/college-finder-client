import { Link } from "react-router-dom";
import { useColleges } from "../../../hooks/useColleges";

const Admission = () => {
    const [colleges] = useColleges();
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-4 md:my-5 lg:my-8">
              {(colleges.map((college) => (
                <Link
                  to={`/admission/${college._id}`}
                  key={college?._id}
                  className="card card-compact bg-base-100 shadow-xl border rounded-lg"
                >
                  <figure>
                    <img
                      className="w-full h-36"
                      src={college?.collegeImage}
                      alt="college"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className=" font-bold card-title">
                      {college?.collegeName}
                    </h2>
                  </div>
                </Link>
              )))}
            </div>
        </div>
    );
};

export default Admission;