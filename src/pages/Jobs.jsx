import React from 'react'
import { 
  MdOutlineEngineering, 
  MdDesignServices, 
  MdOutlineSupportAgent, 
  MdOutlinePhoneIphone 
} from "react-icons/md";
import { GrAnnounce, GrUserExpert } from "react-icons/gr";
import { FaChartLine, FaProjectDiagram, FaDatabase, FaPenNib, FaLaptopCode } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import { RiShieldUserLine } from "react-icons/ri";
import { BsCloudCheck } from "react-icons/bs";
import { FaRegChartBar } from "react-icons/fa6";
import { GiArtificialHive } from "react-icons/gi";
import { BiServer } from "react-icons/bi";
import { SiJenkins } from "react-icons/si";

const Jobs = () => {
  const path = [
    {
      job: "Software Engineer",
      icon: <MdOutlineEngineering  />,
      vacancies: "5,000+",
      salary: "₹6–18 LPA",
      skills: ["Java", "DSA", "SQL", "Spring Boot"],
      description: "Design, develop, and maintain software applications and systems."
    },
    {
      job: "Digital Marketer",
      icon: <GrAnnounce />,
      vacancies: "3,200+",
      salary: "₹4–10 LPA",
      skills: ["SEO", "Google Ads", "Content Marketing", "Analytics"],
      description: "Promote brands through digital channels to drive engagement and sales."
    },
    {
      job: "Data Scientist",
      icon: <GrUserExpert/>,
      vacancies: "2,800+",
      salary: "₹8–22 LPA",
      skills: ["Python", "Machine Learning", "Statistics", "SQL"],
      description: "Analyze large volumes of structured and unstructured data to uncover trends and  make data-driven decisions."

    },
    {
      job: "UI/UX Designer",
      icon: <MdDesignServices  />,
      vacancies: "1,500+",
      salary: "₹5–12 LPA",
      skills: ["Figma", "Wireframing", "Prototyping", "User Research"],
      description: "Create intuitive and visually appealing user interfaces and experiences."
    },
    {
      job: "Sales Analyst",
      icon: <FaChartLine />,
      vacancies: "1,800+",
      salary: "₹4–9 LPA",
      skills: ["Excel", "SQL", "Tableau", "Business Intelligence"],
      description: "Evaluate sales data and performance metrics to identify trends, and growth planning."

    },
    {
      job: "Project Manager",
      icon: <FaProjectDiagram />,
      vacancies: "1,200+",
      salary: "₹10–20 LPA",
      skills: ["Agile", "JIRA", "Leadership", "Communication"],
      description: "Oversee projects from initiation to completion, ensuring deadlines and goals."
    },
    {
      job: "Technical Support",
      icon: <MdOutlineSupportAgent />,
      vacancies: "2,000+",
      salary: "₹3–7 LPA",
      skills: ["Troubleshooting", "Communication", "Networking", "Customer Handling"],
      description: "Assist users and clients in resolving technical issues and concerns."
    },
    {
      job: "Database Administrator",
      icon: <FaDatabase />,
      vacancies: "1,000+",
      salary: "₹6–14 LPA",
      skills: ["SQL", "Oracle", "Backup & Recovery", "Performance Tuning"],
      description: "Manage and maintain database systems to ensure data integrity and performance."
    },
    {
      job: "Intern / Fresher",
      icon: <PiStudentFill/>,
      vacancies: "10,000+",
      salary: "₹2–5 LPA",
      skills: ["Basic Programming", "Communication", "Curiosity", "Teamwork"],
      description: "Gain real-world experience and grow in a learning-based environment."
    },
   {
  job: "Cybersecurity Analyst",
  icon: <RiShieldUserLine />,
  vacancies: "2,300+",
  salary: "₹7–15 LPA",
  skills: ["Network Security", "Ethical Hacking", "Firewalls", "Incident Response"],
  description: "Protect systems and networks from digital attacks and ensure data security."
},
{
  job: "Cloud Engineer",
  icon: <BsCloudCheck />,
  vacancies: "2,600+",
  salary: "₹8–20 LPA",
  skills: ["AWS", "Azure", "DevOps", "Linux"],
  description: "Build and maintain scalable cloud infrastructure and services."
},
{
  job: "Business Analyst",
  icon: <FaRegChartBar />,
  vacancies: "3,000+",
  salary: "₹5–12 LPA",
  skills: ["Requirement Gathering", "Data Analysis", "UML", "Stakeholder Management"],
  description: "Bridge the gap between business needs and technology solutions."
},
{
  job: "AI/ML Engineer",
  icon: <GiArtificialHive />,
  vacancies: "1,700+",
  salary: "₹10–25 LPA",
  skills: ["Python", "TensorFlow", "Neural Networks", "Data Science"],
  description: "Develop machine learning models and AI-powered systems."
},
{
  job: "Frontend Developer",
  icon: <FaLaptopCode />,
  vacancies: "4,500+",
  salary: "₹5–14 LPA",
  skills: ["React", "JavaScript", "HTML/CSS", "Responsive Design"],
  description: "Create interactive user interfaces for websites and web apps."
},
{
  job: "Backend Developer",
  icon: <BiServer />,
  vacancies: "4,200+",
  salary: "₹6–16 LPA",
  skills: ["Node.js", "Express", "Databases", "API Development"],
  description: "Develop server-side logic, databases, and APIs for applications."
},
{
  job: "Mobile App Developer",
  icon: <MdOutlinePhoneIphone />,
  vacancies: "2,500+",
  salary: "₹5–13 LPA",
  skills: ["Flutter", "React Native", "Kotlin", "App Deployment"],
  description: " develop mobile applications for Android and iOS  that are user-friendly and scalable to meet customer needs."

},
{
  job: "DevOps Engineer",
  icon: <SiJenkins />,
  vacancies: "2,900+",
  salary: "₹8–18 LPA",
  skills: ["CI/CD", "Docker", "Kubernetes", "Cloud Services"],
  description: "Automate software development workflows and manage infrastructure."
},
{
  job: "Content Writer",
  icon: <FaPenNib />,
  vacancies: "3,500+",
  salary: "₹3–8 LPA",
  skills: ["SEO", "Writing", "Editing", "Content Strategy"],
  description: "Create engaging and informative content across digital platforms."
}

  ];

  return (
    <div className='mt-20 text-center'>
      <div className="py-5 px-6 mb-12 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-6 text-emerald-600">Find Your <span className='text-emerald-900'>Suitable Job</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
          {path.map((career, index) => (
           <div
                key={index}
                className="bg-white p-6 rounded-xl shadow  border transition duration-300 hover:scale-105">

              <div className='bg-emerald-100  p-3 mb-4 rounded-full flex justify-center items-center gap-2'>
                <div>
                    <icon className="text-3xl sm:text-2xl text-emerald-900 mb-4">{career.icon }</icon>
                </div>
                <div>
                    <h3 className="text-xl  font-semibold mb-2sm:text-sm">{career.job}</h3>
                </div>
            
              </div>
              <p className="text-sm mb-2 text-gray-700">{career.description}</p>
              <div className="text-left mt-4 text-sm">
                <p><span className="font-semibold">Vacancies:</span> {career.vacancies}</p>
                <p><span className="font-semibold">Average Salary:</span> {career.salary}</p>
                <p><span className="font-semibold">Top Skills:</span> {career.skills.join(', ')}</p>
              </div>
              <button className="mt-6 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-lg transition duration-300">
                    Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
};

export default Jobs;
