import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Logout() {
  const [authUser, setAuthUser] = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    try {
      console.log("Logging out user:", authUser);

      // Update authentication state before navigating
      setAuthUser(undefined);
      localStorage.removeItem("users");
      toast.success("Logout Successfully");

      // Delay navigation to ensure auth state updates first
      setTimeout(() => {
        navigate("/");
      }, 100); // Short delay to allow state update

    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <button
        className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
