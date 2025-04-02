import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import { useForm } from "react-hook-form";
import Login from "./Login";
import axios from "axios";
import toast from "react-hot-toast";
function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset, // Function to reset the form
  } = useForm();

   const navigate=useNavigate();

  // Function to handle form submission
    //  State for password visibility
  const [showPassword, setShowPassword] = useState(false);
  const onSubmit = async(data) => {
    console.log("Form Data:", data);
    const userInfo={
      fullname:data.fullname,
      email:data.email,
      password:data.password,
    };
    try {
      const res=await axios.post("http://localhost:3000/signup",userInfo);
      if(res.data){
        console.log(res.data);
        toast.success("Signup Successfully!");
        localStorage.setItem("users",JSON.stringify(res.data.user));
        setTimeout(() => {
          navigate("/");
        }, 100);
      }
    } catch (error) {
      console.log("Error:",error);
      if(error.response){
      toast.error(error.response.data.message);
        }  }
    
  };

  return (
    <div className="h-screen flex justify-center items-center dark:bg-slate-900 dark:text-white">
      <div className="border outline-none relative p-5">
        {/* Close button */}
        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </Link>
        
        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)}>  
          <h3 className="font-bold text-lg">Signup!</h3>
          
          <div className="mt-4 space-y-2">
            {/* Name Input */}
            <span>Name</span>
            <br />
            <input
              type="text"
              placeholder="Enter your fullname"
              className="w-80 px-3 py-1 border outline-none"
              {...register("fullname", { required: "Name is required" })}
            />
            {errors.name && (
              <span className="text-sm text-red-600 font-semibold">
                <br />
                {errors.fullname.message}
              </span>
            )}

            {/* Email Input */}
            <br />
            <span>Email</span>
            <br />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-80 px-3 py-1 border outline-none"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <span className="text-sm text-red-600 font-semibold">
                <br />
                {errors.email.message}
              </span>
            )}

            {/* Password Input */}
            <br />
            
            <span>Password</span>
            <br />
            <div className="relative">
            <input
              type={showPassword? "text":"password"}
              placeholder="Enter your password"
              className="w-80 px-3 py-1 border outline-none "
              {...register("password", { required: "Password is required" })}
            />
             <span
                  className="absolute right-3 top-2 cursor-pointer text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "👁️" : "🙈"}
              </span>
            {errors.password && (
              <span className="text-sm text-red-600 font-semibold">
                <br />
                {errors.password.message}
              </span>
            )}
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-3 flex justify-between">
            <button className="bg-pink-600 text-white rounded-md px-3 py-2" type="submit">
              Signup
            </button>
            <p className="px-3 py-2">
              Have an account?
              <a className="underline text-blue-700 cursor-pointer" onClick={() => { document.getElementById("my_modal_1").showModal() }}>
                Login
              </a>
            </p>
          </div>
        </form>
        <Login/>
      </div>
    </div>
  );
}

export default Signup;
