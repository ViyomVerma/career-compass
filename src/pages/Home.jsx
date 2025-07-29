import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaUserCheck, FaChartLine, FaComments } from "react-icons/fa";
import { MdOutlineEngineering } from "react-icons/md";
import { GrAnnounce, GrUserExpert } from "react-icons/gr";



const Home = () => {
  const navigate = useNavigate();
      const choose=
      [
          {
            head :"Personalized Guidance" ,
            para: "We assess your interests to recommend the best career paths." ,
            icon: <FaUserCheck className="text-3xl text-emerald-600 mb-4" />,
          },
          {
            head :"In-Depth Analysis" , 
            para: "View detailed reports and resources for every career option.",
            icon: <FaChartLine className="text-3xl text-emerald-600 mb-4" />,
          },
          {
            head :"Expert Advice" ,
            para: "Learn from professionals via blog, tips, and interviews.",
            icon: <FaComments className="text-3xl text-emerald-600 mb-4" />,
          },
      ];

      const path=
      [
        {
          job:"Software Engineer",
          icon: <MdOutlineEngineering className="text-4xl text-emerald-900 mb-4  " />
        },
        {
          job:"Digital Marketer",
          icon: <GrAnnounce className="text-4xl text-emerald-900 mb-4" />
        },
        {
          job:"Data Scientist",
          icon: <GrUserExpert className="text-3xl text-emerald-900 mb-4" />
        },
      ];

     const student = 
     [
        {
          para: "This platform helped me find my true passion!",
          name: "-Riya Sharma",
          image: `${import.meta.env.BASE_URL}career2.jpg`,
        },
        {
          para: "The quiz results matched my interests perfectly!",
          name: "-Aarav Mehta",
          image: `${import.meta.env.BASE_URL}career3.jpg`,
        },
        {
          para: "This platform helped me find my true passion!",
          name: "-Riya Sharma",
          image: `${import.meta.env.BASE_URL}career2.jpg`,
        },
        {
          para: "The quiz results matched my interests perfectly!",
          name: "-Aarav Mehta",
          image: `${import.meta.env.BASE_URL}career3.jpg`,
        },
      ];


  return (
    <>
        <div className='max-h-7xl bg-gradient-to-r from-emerald-100 to-emerald-800 flex flex-col md:flex-row mt-14 md:mt-18'>
            {/* Image Section */}
            <div className='w-full md:w-3/4 h-auto'>
             <img src={`${import.meta.env.BASE_URL}career5.avif`} className="w-full h-auto object-cover"  loading="lazy"/>
            </div>

            {/* Text Section */}
            <div className='text-center px-4 py-10 md:pt-60 flex flex-col justify-center items-center'>
              <h1 className='text-3xl font-bold text-white pb-5'>Welcome to Career Compass</h1>
              <p className='text-white max-w-md'>
                Discover your ideal career path based on your interests, strengths, and goals.
              </p>
              <Link to='/quiz'>
                <button className='rounded-2xl bg-emerald-300 py-3 px-10 mt-8 font-semibold hover:bg-emerald-400'>
                  Apply for Quiz
                </button>
              </Link>
            </div>
          </div>


      <div className="bg-emerald-50 py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-10 text-emerald-900">
        Why Choose <span className="text-emerald-600">Career Compass?</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {choose.map((item, index) => (
          <div
            key={index}
            className="p-8 border rounded-2xl shadow-md bg-white hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <div className="flex justify-center">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-3 mt-3 text-emerald-800">
              {item.head}
            </h3>
            <p className="text-gray-600">{item.para}</p>
          </div>
        ))}
      </div>
    </div>


    <div className="py-5 px-6 mb-12 bg-gray-50 text-center cursor-pointer"  onClick={() => navigate("/jobs")}>
        <h2 className="text-3xl font-bold mb-6 text-emerald-600">Popular <span className='text-emerald-900'> Career Paths</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
              {path.map((career, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow hover:scale-105 transition ">
                          <div className='bg-emerald-100 pt-2 mb-7  rounded-full justify-between px-11 text-center items-center  flex '>
                            {career.icon}
                            <h3 className="text-xl font-semibold mb-2">{career.job}</h3>
                          </div>
                          <p className="text-sm">Explore how to enter this field and what skills are needed.</p>
                    </div>
              ))}
        </div>
    </div>


  <div className="bg-emerald-50 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10 text-emerald-900">
          What Students Say?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center text-center">
          {student.map((stud, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center justify-center gap-6 max-w-4xl"
            >
              <img
                src={stud.image}
                alt={stud.name}
                className="w-32 h-32 rounded-full object-cover shadow-md"
              />
              <div className="p-6 border rounded shadow bg-white text-center">
                <p className="text-lg italic">"{stud.para}"</p>
                <span className="block mt-2 font-semibold text-emerald-800">
                  {stud.name}
                </span>
              </div>
            </div>
          ))}
        </div>
  </div>

    </>
)
};

export default Home