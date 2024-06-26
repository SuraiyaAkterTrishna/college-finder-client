import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import img from "../../assets/images/login/login.svg";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const navigate = useNavigate();
  const { createUser } = useContext(AuthContext);
  const [err, setErr] = useState('');

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);
  
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        return updateProfile(user, { displayName: name })
          .then(() => {
            console.log(user);
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "User Signup successful",
              showConfirmButton: false,
              timer: 1500
            });
            navigate("/");
          });
      })
      .catch((error) => {
        console.log(error);
        setErr(error?.message);
      });
  };
  return (
    <div className="hero bg-base-200 mb-8">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 mr-12">
          <img src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold">Register</h1>
            <form onSubmit={handleSignUp}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="text"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Register"
                />
              </div>
            </form>
            {err && <p className="text-red-600 text-sm">{err}</p>}
            <p className="my-4 text-center">
              Already Have an Account?{" "}
              <Link className="text-orange-600 font-bold" to="/login">
                Please Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
