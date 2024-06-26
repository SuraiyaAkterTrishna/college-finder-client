import { Link } from "react-router-dom";
import Badge from "./Badge";

const CollegeCard = ({ college }) => {
  const {
    _id,
    collegeImage,
    collegeName,
    admissionDates,
    events,
    researchHistory,
    sports,
  } = college;

  const collegeEvent = events.map((data) => (
    <Badge key={data.name} data={data.name} />
  ));
  const collegeSport = sports.map((data) => data.sportsList.map((s) => <Badge key={s} data={s} />));
  return (
    <div className="card card-compact bg-base-100 shadow-xl border rounded-sm">
      <figure>
        <img className="w-full h-60" src={collegeImage} alt="college" />
      </figure>
      <div className="card-body">
        <h2 className=" font-bold card-title">{collegeName}</h2>
        <div className="text-justify flex flex-col gap-2">
          <div>
            <p className="font-bold">Admission:</p>
            <p className="font-bold text-xs flex justify-between text-yellow-600">
              <span className="block">
                Start: {admissionDates?.applicationStart}{" "}
              </span>
              <span className="block">
                End: {admissionDates?.applicationEnd}{" "}
              </span>
              <span className="block">
                Decision Release: {admissionDates?.decisionRelease}{" "}
              </span>
            </p>
          </div>

          <div className="flex justify-start">
            <span className="font-bold mr-2">Events:</span>
            <ul className="flex justify-center gap-1.5 flex-wrap">
              {collegeEvent}
            </ul>
          </div>

          <div className="">
            <p className="font-bold mr-2">Sports:</p>
            <ul className="flex gap-1.5 flex-wrap">{collegeSport}</ul>
          </div>

          <div>
            <p className="font-bold">Research History:</p>
            <p>{researchHistory?.slice(0, 400)}</p>
          </div>
        </div>
      </div>
      <div className="card-actions justify-center pb-4 mx-8">
        <Link
          className="btn uppercase text-xl btn-warning rounded-none font-bold w-full"
          to={`/colleges/${_id}`}
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default CollegeCard;
