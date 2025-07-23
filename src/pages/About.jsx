import React from 'react';
import { FaQuestionCircle, FaLightbulb, FaUserGraduate, FaRocket } from 'react-icons/fa';

const About = () => {
  return (
    <div className="bg-gradient-to-br from-emerald-50 to-white min-h-screen  px-6 sm:px-12">

      <div className="max-w-6xl mx-auto text-center">
         <div className="bg-[url('/guide5.jpg')] bg-cover bg-center h-screen justify-center text-center items-center mb-12 shadow-lg rounded-xl mt-24">
            <h1 className="text-4xl sm:text-5xl font-bold text-emerald-700 mb-6 pt-12 ">
              About Career Compass
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 mb-10">
              Empowering students and freshers to discover the right career path based on their interests, strengths, and personality traits.
            </p>
          </div>
  

        {/* Why We Built This */}
        <div className="bg-white shadow-lg rounded-xl p-6 sm:p-10 mb-10">
          <h2 className="text-2xl font-semibold text-emerald-600 mb-4 flex items-center justify-center gap-2">
            <FaLightbulb className="text-yellow-500" /> Why We Built This
          </h2>
          <p className="text-gray-700 text-base sm:text-lg">
            Choosing a career can be overwhelming. Many students follow the crowd without understanding what truly suits them. We wanted to build a tool that provides personalized guidance based on how you think, what you like, and how you behave — helping you take a confident first step toward your dream career.
          </p>
        </div>

        {/* How it Works */}
        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold text-emerald-600 mb-2 flex items-center gap-2">
              <FaQuestionCircle className="text-blue-500" /> Answer Quick Questions
            </h3>
            <p className="text-gray-700">
              You’ll be presented with simple, engaging multiple-choice questions about your preferences and behavior.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold text-emerald-600 mb-2 flex items-center gap-2">
              <FaUserGraduate className="text-purple-500" /> Discover Your Path
            </h3>
            <p className="text-gray-700">
              Based on your responses, we analyze which career domain (techie, creative, leader, etc.) fits you the best.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold text-emerald-600 mb-2 flex items-center gap-2">
              <FaRocket className="text-red-500" /> Get Suggestions
            </h3>
            <p className="text-gray-700">
              You'll receive a list of ideal career options and domains to help you plan your future wisely.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold text-emerald-600 mb-2 flex items-center gap-2">
              🎯 Built for You
            </h3>
            <p className="text-gray-700">
              Whether you're in school, college, or exploring new paths — Career Compass is designed to help **you** take control of your journey.
            </p>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-gray-600 mt-10 text-sm">
          © {new Date().getFullYear()} Career Compass | Built with  to guide your future.
        </div>
      </div>
    </div>
  );
};

export default About;
