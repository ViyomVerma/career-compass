import React from 'react'
import { useDispatch , useSelector } from 'react-redux';
import { setEmail , setPassword , setRole } from '../../redux/authSlice';

const Signup = () => {

    const dispatch = useDispatch();
    const { email , password , role} = useSelector((state) => state.auth);
    
      const handleSubmit = (e) => {
            e.preventDefault();
            alert("Signup Successful!");
            console.log("User Data:", { email, password, role });
        };


  return (
    <>
    <div className=" flex items-center justify-center min-h-screen p-4  gap-20 mt-4">

       <div className="hidden md:block ">
            <img 
                src={`${import.meta.env.BASE_URL}signup.png`} 
                className="w-full h-auto object-cover"  
                loading="lazy"
            />
        </div>

       <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md mt-11">
          {/* Title */}
        <h2 className="text-3xl font-bold text-emerald-800 text-center mb-2">
          Sign Up to Career Compass
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Welcome! Please sign up to continue.
        </p>

        <form>
           <div className="flex gap-3">
                <input
                    type="text"
                    placeholder="First Name"
                    className="w-1/2 border rounded px-3 py-2"
                    required
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    className="w-1/2 border rounded px-3 py-2"
                    required
                />
            </div> 

            <div className="flex justify-center gap-4 mb-6 mt-6">
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
             <div className="mb-4">
            <input
              type={role === "vendor" ? "text" : "email"}
              placeholder={
                role === "vendor" ? "Enter your Vendor ID" : "Enter your email"
              }
              pattern={
                role === "vendor"
                  ? "[0-9]{10}"
                  : "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$"
              }
              value={email}
              onChange={(e) => dispatch(setEmail(e.target.value))}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => dispatch(setPassword(e.target.value))}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-500 text-white py-2 rounded-lg hover:bg-emerald-600 transition"
          >
            Sign Up
          </button>

        </form>
         <div className="mt-6 text-sm text-gray-500">
          <p>
            <strong>As a Job Seeker:</strong> Find jobs, take career quizzes, and get counseling guidance.
          </p>
          <p className="mt-2">
            <strong>As a Vendor:</strong> Post job openings, track applications, and connect with talent.
          </p>
        </div>
       </div> 
    </div>
    </>
  )
}

export default Signup