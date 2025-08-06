import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { setEmail, setPassword, setRole } from "../../redux/authSlice";

const Login = () => {
  const { role, email, password } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    alert("Login Successfully");
  };

  const isFormValid = email.trim() !== "" && password.trim() !== "";

  return (
    <div className="bg-gradient-to-r from-emerald-100 to-emerald-800 flex items-center justify-center min-h-screen p-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md mt-10">
        
        <h2 className="text-3xl font-bold text-emerald-800 text-center mb-2">
          Login to Career Compass
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Welcome back! Please sign in to continue.
        </p>

        {/* Role Selection */}
        <div className="flex justify-center gap-4 mb-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="role"
              value="student"
              checked={role === "student"}
              onChange={() => dispatch(setRole("student"))}
              className="accent-emerald-500"
            />
            Job Seeker / Student
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="role"
              value="vendor"
              checked={role === "vendor"}
              onChange={() => dispatch(setRole("vendor"))}
              className="accent-emerald-500"
            />
            Vendor
          </label>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">
              {role === "vendor" ? "Vendor ID" : "Email"}
            </label>
            <input
              type={role === "vendor" ? "text" : "email"}
              placeholder={role === "vendor" ? "Enter your Vendor ID" : "Enter your email"}
              pattern={role === "vendor" ? "[0-9]{10}" : "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$"}
              value={email}
              onChange={(e) => dispatch(setEmail(e.target.value))}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => dispatch(setPassword(e.target.value))}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>

          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-emerald-500" /> Remember me
            </label>
            <a href="#" className="text-emerald-600 hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            disabled={!isFormValid}
            className={`w-full py-2 rounded-lg transition ${
              isFormValid
                ? "bg-emerald-500 text-white hover:bg-emerald-600"
                : "bg-gray-400 text-gray-200 cursor-not-allowed"
            }`}
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Don't have an account?{" "}
          <Link to='/signup' className="text-emerald-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
