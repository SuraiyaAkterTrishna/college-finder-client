import { Link, useParams } from "react-router-dom";
import { useCollege, useColleges } from "../../hooks/useColleges";
import Badge from "../Colleges/Badge";
import { useEffect } from "react";

const CollegeDetails = () => {
  const { id } = useParams();

  const [colleges] = useColleges();
  const [college, loading, refetch] = useCollege(id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  },[])

  const handleRefetch = () => {
    // refetch();
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const shuffleArray = (array) => {
    return array?.filter(data => data?.key !== id)?.sort(() => Math.random() - 0.5);
  };  

  const {
    _id,
    collegeImage,
    collegeName,
    admissionDates,
    admissionProcess,
    events,
    researchHistory,
    researchWorks,
    sports,
  } = college;

  return (
    <section>
      <main className="pt-5 pb-5 lg:pt-8 lg:pb-8 bg-white dark:bg-gray-900 antialiased">
        <div className="flex flex-col md:flex-row justify-between px-4 mx-auto max-w-screen-2xl">
          <div className="px-4 mx-auto max-w-screen-2xl">
            {loading ? (
              <div className=""> Loading... </div>
            ) : (
              <div className="">
                <h1 className="text-2xl md:text-4xl lg:text-7xl font-bold py-5 lg:py-10">
                  {collegeName}
                </h1>
                <img
                  src={collegeImage}
                  className="w-full max-h-[800px] object-cover"
                  alt="college"
                  loading="lazy"
                />

                <p className="text-gray-500 dark:text-gray-400 italic">
                  {collegeName}
                </p>

                <div>
                  <h1 className="font-bold bg-slate-200 my-4 px-2 text-xl lg:text-2xl">
                    Admission Time:
                  </h1>
                  <p className="font-bold text-xs flex justify-between text-yellow-600">
                    <span className="block">
                      Start: {admissionDates?.applicationStart}
                    </span>
                    <span className="block">
                      End: {admissionDates?.applicationEnd}
                    </span>
                    <span className="block">
                      Decision Release: {admissionDates?.decisionRelease}
                    </span>
                  </p>
                </div>

                <div>
                  <p className="font-bold bg-slate-200 my-4 px-2 text-xl lg:text-2xl">
                    Admission Process:
                  </p>
                  <div className="flex justify-between gap-4">
                    <div className="flex-1">
                      <p className="font-bold border-b-2 border-slate-200">
                        Steps:
                      </p>
                      <ul>
                        {admissionProcess?.steps?.map((process) => (
                          <li key={process}>
                            <span className="text-warning">&#10022;</span>{" "}
                            {process}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex-1">
                      <p className="font-bold border-b-2 border-slate-200">
                        Requirements:
                      </p>
                      <ul>
                        {admissionProcess?.requirements?.map((requirement) => (
                          <li key={requirement}>
                            <span className="text-warning">&#10022;</span>{" "}
                            {requirement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="font-bold bg-slate-200 my-4 px-2 text-xl lg:text-2xl">
                    Events Details:
                  </p>
                  <div className="flex justify-between gap-4">
                    {events?.map((event) => (
                      <article
                        key={event?.name}
                        className="w-full bg-purple-100 py-2 px-4 rounded-lg"
                      >
                        <h2 className="mb-2 text-xl lg:text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                          {event?.name}
                        </h2>
                        <p className="font-semibold">
                          Event Date:{" "}
                          <span className="text-yellow-600 italic">
                            {event?.date}
                          </span>
                        </p>
                        <p className="mb-4 text-gray-500 dark:text-gray-400 text-justify">
                          {event?.description}
                        </p>
                      </article>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="font-bold bg-slate-200 my-4 px-2 text-xl lg:text-2xl capitalize">
                    research works:
                  </p>
                  <div className="flex justify-between gap-4">
                    {researchWorks?.map((work) => (
                      <article
                        key={work?.title}
                        className="w-full bg-blue-100 py-2 px-4 rounded-lg"
                      >
                        <h2 className="mb-2 text-xl lg:text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                          {work?.title}
                        </h2>
                        <p className="mb-4 text-gray-500 dark:text-gray-400 text-justify">
                          {work?.description}
                        </p>
                      </article>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="font-bold bg-slate-200 my-4 px-2 text-xl lg:text-2xl capitalize">
                    sports categories:
                  </p>
                  <div className="flex gap-4 flex-col md:flex-row justify-between">
                    {sports?.map((sport) => (
                      <div key={sport?.category} className="flex-1">
                        <h3 className="text-lg lg:text-xl font-semibold border-b-2 border-slate-200">
                          {sport?.category}
                        </h3>
                        <ul className="flex gap-3 py-2">
                          {sport?.sportsList?.map((s) => (
                            <Badge key={s} data={s} />
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="px-4 mx-auto max-w-screen-md mt-2 lg:mt-20">
            <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
              Related Colleges
            </h2>
            <div className="flex flex-col gap-2">
              {shuffleArray(colleges.map((college) => (
                <Link
                  to={`/colleges/${college?._id}`}
                  key={college?._id}
                  onClick={handleRefetch}
                  className="card card-compact bg-base-100 shadow-xl border rounded-sm"
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
        </div>
      </main>
    </section>
  );
};

export default CollegeDetails;
