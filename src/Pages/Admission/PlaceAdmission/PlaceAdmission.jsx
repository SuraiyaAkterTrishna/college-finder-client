import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProviders";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useAdmission } from "../../../hooks/useAdmission";

const PlaceAdmission = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useContext(AuthContext);
  const [admissions] = useAdmission(user?.uid);
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    if(user){
      const admissionInfo = {
        candidateName: data.candidateName,
        subject: data.subject,
        candidateEmail: data.candidateEmail,
        candidatePhone: data.candidatePhone,
        candidateAddress: data.candidateAddress,
        candidateBirthday: data.candidateBirthday,
        candidateImage: data.candidateImage,
        collegeId: id,
        uid: user?.uid,
      };
      if (admissions) {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: `you already admitted!`,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(`/my-college`);
      } else {
        const admissionRes = await axiosPublic.post("/admissions", admissionInfo);
      console.log(admissionRes.data);
      if (admissionRes.data.insertedId) {
        reset();
        //show success popup
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `admission successfully added`,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(`/my-college`);
      }
      }
      
    } else {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Please login first",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/login");
    }
  };

  return (
    <div className="bg-[#F4F3F0] p-8 lg:p-24 mb-4">
      <h2 className="text-2xl lg:text-5xl font-extrabold">Admission Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* candidateName  */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Candidate Name*</span>
          </label>
          <input
            type="text"
            placeholder="Type here..."
            {...register("candidateName", { required: true })}
            className="input input-bordered w-full"
          />
        </div>
        {/* subject */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text capitalize">subject*</span>
          </label>
          <select
            defaultValue="default"
            {...register("subject", { required: true })}
            className="select select-bordered w-full"
          >
            <option disabled value="default">
              Select a Subject?
            </option>
            <option disabled className="font-bold">
              Engineering:
            </option>
            <option value="Computer Science">Computer Science</option>
            <option value="Mechanical Engineering">
              Mechanical Engineering
            </option>
            <option value="Electrical Engineering">
              Electrical Engineering
            </option>
            <option value="Civil Engineering">Civil Engineering</option>
            <option value="Chemical Engineering">Chemical Engineering</option>
            <option value="Aerospace Engineering">Aerospace Engineering</option>
            <option value="Biomedical Engineering">
              Biomedical Engineering
            </option>
            <option disabled className="font-bold">
              Arts and Humanities:
            </option>
            <option value="Literature">Literature</option>
            <option value="History">History</option>
            <option value="Philosophy">Philosophy</option>
            <option value="Languages">Languages</option>
            <option value="Art History">Art History</option>
            <option value="Theater and Drama">Theater and Drama</option>
            <option disabled className="font-bold">
              Science:
            </option>
            <option value="Biology">Biology</option>
            <option value="Chemistry">Chemistry</option>
            <option value="Physics">Physics</option>
            <option value="Mathematics">Mathematics</option>
            <option value="Environmental Science">Environmental Science</option>
            <option value="Geology">Geology</option>
            <option value="Astronomy">Astronomy</option>
            <option disabled className="font-bold">
              Business:
            </option>
            <option value="Business Administration">
              Business Administration
            </option>
            <option value="Finance">Finance</option>
            <option value="Marketing">Marketing</option>
            <option value="Management">Management</option>
            <option value="Accounting">Accounting</option>
            <option value="International Business">
              International Business
            </option>
            <option value="Entrepreneurship">Entrepreneurship</option>
            <option disabled className="font-bold">
              Social Sciences:
            </option>
            <option value="Psychology">Psychology</option>
            <option value="Sociology">Sociology</option>
            <option value="Political Science">Political Science</option>
            <option value="Economics">Economics</option>
            <option value="Anthropology">Anthropology</option>
            <option value="Geography">Geography</option>
            <option value="Social Work">Social Work</option>
            <option disabled className="font-bold">
              Health Sciences:
            </option>
            <option value="Medicine">Medicine</option>
            <option value="Nursing">Nursing</option>
            <option value="Public Health">Public Health</option>
            <option value="Pharmacy">Pharmacy</option>
            <option value="Dentistry">Dentistry</option>
            <option value="Veterinary Science">Veterinary Science</option>
            <option value="Nutrition and Dietetics">
              Nutrition and Dietetics
            </option>
            <option disabled className="font-bold">
              Law:
            </option>
            <option value="International Law">International Law</option>
            <option value="Corporate Law">Corporate Law</option>
            <option value="Criminal Law">Criminal Law</option>
            <option value="Environmental Law">Environmental Law</option>
            <option value="Human Rights Law">Human Rights Law</option>
            <option value="Intellectual Property Law">
              Intellectual Property Law
            </option>
            <option value="Tax Law">Tax Law</option>
          </select>
        </div>
        {/* candidateEmail  */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Candidate Email*</span>
          </label>
          <input
            type="email"
            placeholder="Type here..."
            {...register("candidateEmail", { required: true })}
            className="input input-bordered w-full"
          />
        </div>
        {/* candidatePhone  */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Candidate Phone*</span>
          </label>
          <input
            type="text"
            placeholder="Type here..."
            {...register("candidatePhone", { required: true })}
            className="input input-bordered w-full"
          />
        </div>
        {/* candidateAddress  */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Candidate Address*</span>
          </label>
          <input
            type="text"
            placeholder="Type here..."
            {...register("candidateAddress", { required: true })}
            className="input input-bordered w-full"
          />
        </div>
        {/* candidateBirthday */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Date of Birth*</span>
          </label>
          <input
            type="date"
            placeholder="Type here..."
            {...register("candidateBirthday", { required: true })}
            className="input input-bordered w-full"
          />
        </div>
        {/* candidateImage */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Candidate Image Link*</span>
          </label>
          <input
            type="text"
            placeholder="Type here..."
            {...register("candidateImage", { required: true })}
            className="input input-bordered w-full"
          />
        </div>
        {/* submit */}
        <div className="form-control w-full mt-6">
          <input
            type="submit"
            value="Submit"
            className="btn btn-primary w-full"
          />
        </div>
      </form>
    </div>
  );
};

export default PlaceAdmission;


