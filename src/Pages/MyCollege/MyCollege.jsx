import { useContext } from "react";
import { useAdmission } from "../../hooks/useAdmission";
import { AuthContext } from "../../providers/AuthProviders";
import { useCollege } from "../../hooks/useColleges";
import { Link } from "react-router-dom";
import FeedbackForm from "./FeedbackForm";
import { useReview } from "../../hooks/useReviews";

const MyCollege = () => {
  const { user } = useContext(AuthContext);
  const [admissions] = useAdmission(user?.uid);
  const [review] = useReview(user?.uid);
  const [college] = useCollege(admissions?.collegeId);
  let content;

  if (!user) {
    content = (
      <div className="flex justify-center items-center min-h-screen">
        <h1 className="text-2xl text-rose-600 font-bold">
          Please login for see your college!
        </h1>
      </div>
    );
  } else if (user && admissions?.length === 0) {
    content = (
      <div className="flex justify-center items-center min-h-screen">
        <h1 className="text-2xl text-rose-600 font-bold">
          You are not admitted to any college yet!
        </h1>
      </div>
    );
  } else {
    content = (
      <div className="flex flex-col lg:flex-row justify-center items-center w-full gap-5 my-10">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={admissions?.candidateImage}
            className="max-w-xs md:max-w-sm rounded-lg shadow-2xl"
            alt="image"
          />
          <div>
            <h1 className="text-2xl lg:text-5xl font-bold">{college?.collegeName}</h1>
            <div className="grid grid-cols-1 capitalize my-5">
              <p>Name: {admissions?.candidateName}</p>
              <p>subject: {admissions?.subject}</p>
              <p>Email: {admissions?.candidateEmail}</p>
              <p>Phone: {admissions?.candidatePhone}</p>
              <p>Address: {admissions?.candidateAddress}</p>
              <p>date of Birth: {admissions?.candidateBirthday}</p>
            </div>
            <Link
              to={`/colleges/${college?._id}`}
              className="btn btn-primary rounded-sm"
            >
              College Details
            </Link>
          </div>
        </div>
        {!review && <FeedbackForm reviewer={admissions?.candidateName} image={admissions?.candidateImage} college={college?.collegeName} uid={user?.uid} />}
      </div>
    );
  }

  return content;
};

export default MyCollege;
