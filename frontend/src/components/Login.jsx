import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./style.css";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthProvider";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [authUser, setAuthUser] = useAuth();
  const navigate = useNavigate();

  //  State for password visibility
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post("http://localhost:3000/login", userInfo);
      if (res.data) {
        console.log(res.data);
        toast.success("Login Successfully!");
        localStorage.setItem("users", JSON.stringify(res.data.user));
        setAuthUser(res.data.user);

        handleClose();

        setTimeout(() => {
          navigate("/");
        }, 100);
      }
    } catch (error) {
      console.log("Error:", error);
      if (error.response) {
        toast.error(error.response.data.message);
      }
    }
  };

  const handleClose = () => {
    document.getElementById("my_modal_1").close();
    reset();
  };

  return (
    <div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box dark:bg-slate-900">
          <Link
            to="/"
            onClick={handleClose}
            className="btn btn-sm btn-circle outline-none absolute right-2 top-2"
          >
            ✕
          </Link>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="dark:bg-slate-900 dark:text-white"
          >
            <h3 className="font-bold text-lg">Login!</h3>
            <div className="mt-4 space-y-2 dark:bg-slate-900 dark:text-white">
              {/* Email Field */}
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border outline-none"
                {...register("email", { required: "Email is required" })}
              />
              <br />
              {errors.email && (
                <span className="text-sm text-red-600 font-semibold">
                  {errors.email.message}
                </span>
              )}

              {/* Password Field with Eye Icon */}
              <br />
              <span>Password</span>
              <br />
              <div className="relative w-80">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full px-3 py-1 border outline-none pr-10"
                  {...register("password", { required: "Password is required" })}
                />
                <span
                  className="absolute right-3 top-2 cursor-pointer text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "👁️" : "🙈"}
                </span>
              </div>
              {errors.password && (
                <span className="text-sm text-red-600 font-semibold">
                  {errors.password.message}
                </span>
              )}
            </div>

            {/* Buttons */}
            <div className="mt-3 flex justify-between">
              <button
                className="bg-pink-600 text-white rounded-md px-3 py-2"
                type="submit"
              >
                Login
              </button>

              <p>
                Not registered?
                <Link
                  to="/signup"
                  className="underline text-blue-700 cursor-pointer"
                >
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
