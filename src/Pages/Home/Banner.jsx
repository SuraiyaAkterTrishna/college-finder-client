import { useState } from "react";
import { useColleges } from "../../hooks/useColleges";
import { Link } from "react-router-dom";

const Banner = () => {
  const [colleges] = useColleges();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredColleges, setFilteredColleges] = useState(colleges);

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    const filtered = colleges.filter((college) =>
      college?.collegeName?.toLowerCase().includes(term?.toLowerCase())
    ).slice(0, 5);

    setFilteredColleges(filtered);
  };

  return (
    <div className="hero bg-[#36348E] rounded">
      <div className="z-0 flex items-start justify-between w-full gap-1 flex-col-reverse xl:flex-row-reverse pb-24 lg:pb-36">
        <img
          src="https://themephi.net/template/eduan/eduan/assets/img/banner/4/bg.png"
          className="rounded-lg w-full"
        />
        <div className="mx-auto my-auto px-8">
          <h1 className="text-5xl lg:text-7xl text-white my-5">
            Build your <span className="text-warning font-bold">Skills</span> to
            achieve your Goals
          </h1>

          {/* Search box */}
          <label className="input input-bordered flex items-center gap-2 rounded-full">
            <input
              type="text"
              className="grow"
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearch}
            />
            <button className="btn btn-sm btn-warning rounded-full">
              Find College
            </button>
          </label>
          {/* Display filtered colleges */}
          <div className="mt-5 z-50">
            {searchTerm && (filteredColleges.length > 0 ? (
              <ul>
                {filteredColleges.map((college) => (
                  <Link to={`colleges/${college?._id}`}><li className="px-5 py-2 my-1 bg-white font-bold rounded-full text-md lg:text-xl hover:bg-yellow-500 hover:text-white transition-all cursor-pointer" key={college?._id}>
                    {college?.collegeName}
                  </li></Link>
                ))}
              </ul>
            ) : (
              <p className="text-white text-center">No colleges found</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
