import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import Swal from "sweetalert2";

const Login = () => {
  const emailRef = useRef(null);
  const { signIn, signInWithGoogle, signInWithGithub, resetPassword } =
    useContext(AuthContext); // Ensure signInWithFacebook is included
    const [err, setErr] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state || "/";
  console.log(location.state);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        if (result.user) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User login successful",
            showConfirmButton: false,
            timer: 1500
          });
          navigate(from, { replace: true });
        }
      })
      .catch((error) => setErr(error.message));
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        if (loggedUser) {
          Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User login successful",
                showConfirmButton: false,
                timer: 1500
              });
          navigate(from, { replace: true });
        }
      })
      .catch((error) => {
        setErr(error.message);
      });
  };
  const handleGithubSignIn = () => {
    signInWithGithub()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        console.log("click");
        if (loggedUser) {
          Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User login successful",
                showConfirmButton: false,
                timer: 1500
              });
          navigate(from, { replace: true });
        }
      })
      .catch((error) => {
        setErr(error.message);
      });
  };

  const handleForgotPassword = (event) => {
    event.preventDefault();
    resetPassword(emailRef.current.value)
    .then((result) => {
      console.log(result);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Password reset email sent",
        showConfirmButton: false,
        timer: 1500
      });
    })
    .catch((error) => {
      setErr(error.message);
    });
  }
  
  return (
    <div className="hero bg-base-200 py-4 mb-8">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 mr-12">
          <img src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold">Login</h1>
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  ref={emailRef}
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <button onClick={(event) => handleForgotPassword(event)} className="label-text-alt link link-hover">
                    Forgot password?
                  </button>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            {err && <p className="text-red-600 text-sm">{err}</p>}
            <p className="my-4 text-center">
              New to College?
              <Link className="text-orange-600 font-bold" to="/register">
                Please Register
              </Link>
            </p>
            <div>
              <button
                onClick={handleGoogleSignIn}
                className="btn btn-primary mr-4"
              >
                Google
              </button>
              <button onClick={handleGithubSignIn} className="btn btn-primary">
                Github
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
