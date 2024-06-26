import { useContext, useEffect } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useUserInfo } from "../../hooks/userUserInfo";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Profile = () => {
  const { register, handleSubmit, reset, setValue } = useForm();
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);
  const [userInfo, , refetch] = useUserInfo(user?.uid);

  const onSubmit = async (data) => {
    const userObject = {
      username: data.displayName,
      image: data.photoURL,
      email: data.email,
      university: data.university,
      address: data.address,
      uid: user?.uid,
    };

    if (userInfo != []) {
      const userRes = await axiosPublic.put(`/user/${user.uid}`, userObject);
      if (userRes.data.acknowledged) {
        closeModal();
        refetch();
        //show success popup
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `user successfully updated`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } else {
      const userRes = await axiosPublic.post("/user", userObject);
      if (userRes.data.insertedId) {
        closeModal();
        refetch();
        //show success popup
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `user successfully updated`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };

  useEffect(() => {
    if (user) {
      setValue("displayName", userInfo?.username || user?.displayName);
      setValue("photoURL", userInfo?.image || user?.photoURL);
      setValue("email", userInfo?.email || user?.email);
      setValue("university", userInfo?.university);
      setValue("address", userInfo?.address);
    }
  }, [user, userInfo, setValue]);

  // Close modal function
  const closeModal = () => {
    document.getElementById("my_modal_3").close();
  };

  return (
    <>
      <section className="flex justify-center items-center h-screen bg-gray-200">
        {/* <!--Profile card start--> */}
        <div className="card bg-white max-w-96 overflow-hidden rounded-lg shadow-lg flex flex-col">
          <div className="card-image">
            <img
              src="https://images.unsplash.com/photo-1627398362552-6a029c1f583c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Image"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="flex justify-end">
              <button
                className="btn btn-link"
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                Edit
              </button>
            </div>
          </div>
          <div className="profile-image">
            <img
              src={userInfo?.image ? userInfo?.image : user?.photoURL}
              alt=""
              className="z-10 w-24 h-24 relative mx-auto -mt-16 block rounded-full border-4 border-white transition-transform duration-400 transform hover:scale-110"
            />
          </div>
          <div className="card-content py-4">
            <h3 className="text-2xl font-semibold text-center">
              {userInfo?.username ? userInfo?.username : user?.displayName}
            </h3>
            <div className="">
              {(userInfo?.email || user?.email) && (
                <p className="text-md px-5">
                  Email:{" "}
                  <span className="font-semibold">
                    {userInfo?.email ? userInfo?.email : user?.email}
                  </span>
                </p>
              )}
              {userInfo?.university && (
                <p className="text-md px-5">
                  University:{" "}
                  <span className="font-semibold">{userInfo?.university}</span>
                </p>
              )}
              {userInfo?.address && (
                <p className="text-md px-5">
                  Address:{" "}
                  <span className="font-semibold">{userInfo?.address}</span>
                </p>
              )}
            </div>
          </div>
        </div>
        {/* <!--Profile card end--> */}
      </section>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg ml-5">Update User Profile</h3>
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            {/* displayName  */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text capitalize">Name</span>
              </label>
              <input
                type="text"
                placeholder="Type here..."
                {...register("displayName", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
            {/* photoURL  */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text capitalize">photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Type here..."
                {...register("photoURL", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
            {/* email  */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text capitalize">email</span>
              </label>
              <input
                type="text"
                placeholder="Type here..."
                {...register("email", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
            {/* university  */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text capitalize">university</span>
              </label>
              <input
                type="text"
                placeholder="Type here..."
                {...register("university", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
            {/* address  */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text capitalize">address</span>
              </label>
              <input
                type="text"
                placeholder="Type here..."
                {...register("address", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
            {/* submit */}
            <div className="form-control w-full mt-6">
              <input
                type="submit"
                value="Save"
                className="btn btn-primary w-full"
              />
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default Profile;
