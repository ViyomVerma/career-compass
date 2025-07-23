import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // 🚨 Import navigate

const questions = [
  {
    question: "Which subject do you enjoy the most?",
    options: [
      { text: "Math", domain: "analytical" },
      { text: "Science", domain: "techie" },
      { text: "Literature", domain: "creative" },
      { text: "Psychology", domain: "social" },
      { text: "Business Studies", domain: "leader" },
    ],
  },
  {
    question: "What kind of activities do you enjoy?",
    options: [
      { text: "Building apps or websites", domain: "techie" },
      { text: "Writing stories or designing", domain: "creative" },
      { text: "Helping others", domain: "social" },
      { text: "Solving problems with logic", domain: "analytical" },
      { text: "Organizing events", domain: "leader" },
    ],
  },
];

const Quiz = () => {
  const navigate = useNavigate(); // ✅ Hook for navigating
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState({
    techie: 0,
    creative: 0,
    social: 0,
    analytical: 0,
    leader: 0,
  });

  const handleOptionClick = (domain) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = domain;
    setAnswers(updatedAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      const resultScore = {
        techie: 0,
        creative: 0,
        social: 0,
        analytical: 0,
        leader: 0,
      };

      answers.forEach((domain) => {
        resultScore[domain]++;
      });

      setScore(resultScore);
      setSubmitted(true);
    }
  };

  const getResult = () => {
    const topDomain = Object.keys(score).reduce((a, b) =>
      score[a] > score[b] ? a : b
    );

    const recommendations = {
      techie: "Software Developer, Web Developer, Data Analyst",
      creative: "Graphic Designer, Writer, UI/UX Designer",
      social: "Teacher, Psychologist, Social Worker",
      analytical: "Data Scientist, Accountant, Researcher",
      leader: "Manager, Entrepreneur, Sales Head",
    };

    return (
      <div className="p-6 text-center bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4 text-emerald-700">
          You are best suited for:
        </h2>
        <h3 className="text-2xl font-semibold capitalize text-emerald-600">
          {topDomain} careers
        </h3>
        <p className="mt-4 text-lg">
          <strong>Suggested roles:</strong> {recommendations[topDomain]}
        </p>

        <div className="mt-6">
          <button
            onClick={() => navigate("/counselling", { state: { topDomain } })}
            className="inline-block bg-emerald-500 text-white px-6 py-2 rounded hover:bg-emerald-600"
          >
            Get Career Counselling
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="p-6 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8 text-emerald-800 mt-24">
        Career Quiz
      </h1>

      {!submitted ? (
        <>
          <div className="bg-white p-6 shadow-md rounded-lg mb-4">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">
              {questions[currentQuestion].question}
            </h2>
            <div className="grid gap-3">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionClick(option.domain)}
                  className={`p-3 rounded-md border transition-all duration-200 text-left ${
                    answers[currentQuestion] === option.domain
                      ? "bg-emerald-300 font-bold border-emerald-700"
                      : "bg-emerald-100 hover:bg-emerald-200"
                  }`}
                >
                  {option.text}
                </button>
              ))}
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={handleNext}
              disabled={!answers[currentQuestion]}
              className="bg-emerald-500 text-white py-2 px-6 rounded hover:bg-emerald-600 disabled:bg-gray-400"
            >
              {currentQuestion < questions.length - 1 ? "Next" : "Submit"}
            </button>
          </div>
        </>
      ) : (
        getResult()
      )}
    </div>
  );
};

export default Quiz;
