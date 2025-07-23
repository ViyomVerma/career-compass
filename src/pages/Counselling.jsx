import { useLocation } from "react-router-dom";

const Counselling = () => {
  const location = useLocation();
  const { topDomain } = location.state || {};

  const recommendations = {
    techie: {
      title: "Tech Enthusiast",
      roles: "Software Developer, Web Developer, Data Analyst",
    },
    creative: {
      title: "Creative Mind",
      roles: "Graphic Designer, Writer, UI/UX Designer",
    },
    social: {
      title: "People Person",
      roles: "Teacher, Psychologist, Social Worker",
    },
    analytical: {
      title: "Logical Thinker",
      roles: "Data Scientist, Accountant, Researcher",
    },
    leader: {
      title: "Natural Leader",
      roles: "Manager, Entrepreneur, Sales Head",
    },
  };

  if (!topDomain || !recommendations[topDomain]) {
    return (
      <div className="text-center mt-24">
        <h2 className="text-2xl font-bold text-red-600">Oops! No result found.</h2>
        <button
          className="mt-4 bg-emerald-600 text-white px-6 py-2 rounded hover:bg-emerald-700"
          onClick={() => window.location.href = "/quiz"}
        >
          Take the Quiz Again
        </button>
      </div>
    );
  }

  const { title, roles } = recommendations[topDomain];

  // Sample experts
  const experts = [
    {
      name: "Dr. Neha Sharma",
      title: "Career Psychologist",
      image: "/guide7.png",
      description: "Guides students based on personality and strengths.",
    },
    {
      name: "Rahul Verma",
      title: "Tech Industry Mentor",
      image: "/guide6.png",
      description: "Helps you build a path into the software world.",
    },
    {
      name: "Sakshi Mehta",
      title: "Soft Skills Coach",
      image: "/guide7.png",
      description: "Prepares you for interviews and personality growth.",
    },
  ];

  return (
    <div className="pt-24 px-4 pb-12 bg-emerald-50 min-h-screen text-center">
      <h1 className="text-4xl font-bold text-emerald-700 mb-4">Career Counselling</h1>
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-lg mb-10">
        You're best suited for: <span className="font-semibold">{roles}</span>
      </p>

      {/* Experts Section */}
      <section className="mt-12">
        <h2 className="text-3xl font-bold text-emerald-700 mb-10">Meet Our Career Experts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {experts.map((expert, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition duration-300"
            >
              <img
                src={expert.image}
                alt={expert.name}
                className="w-28 h-28 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">{expert.name}</h3>
              <p className="text-emerald-600 font-medium">{expert.title}</p>
              <p className="text-gray-600 mt-2 text-sm">{expert.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Counselling;
