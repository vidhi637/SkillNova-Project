import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, IndianRupee } from 'lucide-react';
import { FaTimes, FaCode, FaChartLine, FaSearch, FaBullhorn, FaPaintBrush, FaMedal } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function LoginPopup({ onClose }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      onClose?.(); // Safe optional chaining
    }, 500);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#1e1e2f]/80 via-[#111827]/90 to-[#1f2937]/80 backdrop-blur-xl transition-opacity duration-500 ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div
        className={`relative w-full max-w-lg p-10 bg-[#121829]/90 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-xl border border-blue-500/30 transition-all duration-500 ${
          isOpen ? 'scale-100' : 'scale-75'
        }`}
      >
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-white text-xl transition"
        >
          <FaTimes />
        </button>

        
          <div className="flex justify-center mb-8">
          <div className="rounded-full p-1 bg-gradient-to-tr from-blue-500 to-purple-600 shadow-lg shadow-blue-400/30">
            <div className="text-2xl font-bold text-gray-800">
          SKill<span className="text-yellow-500">Nova</span>
        </div>

          
        </div>

        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-5 py-3 bg-white/10 text-white placeholder-gray-400 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-md"
            />
          </div>

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your full name"
              className="w-full px-5 py-3 bg-white/10 text-white placeholder-gray-400 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-md"
            />
          </div>

          <div>
            <label htmlFor="contact" className="block text-sm font-medium text-white mb-1">
              Contact
            </label>
            <input
              type="text"
              id="contact"
              placeholder="Your contact number"
              className="w-full px-5 py-3 bg-white/10 text-white placeholder-gray-400 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-md"
            />
          </div>

          <div className="flex items-center space-x-2 text-white">
            <input type="checkbox" id="policy" className="accent-blue-600 w-4 h-4" />
            <label htmlFor="policy" className="text-sm">Please accept the policy</label>
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-xl"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default function Home() {
  const [showPopup, setShowPopup] = useState(true);

  const cards = [
      {
        icon: <BookOpen className="text-white w-6 h-6" />,
        value: "6000+ Hours",
        label: "Guiding learners from various domains",
        bg: "bg-purple-500",
      },
      {
        icon: <GraduationCap className="text-white w-6 h-6" />,
        value: "4000+ Students",
        label: "Cracked dream roles at top MNCs",
        bg: "bg-rose-500",
      },
      {
        icon: <IndianRupee className="text-white w-6 h-6" />,
        value: "Affordable Programs",
        label: "Upskill without burning your pocket",
        bg: "bg-gray-600",
      },
    ];
    const icons = {
    Development: <FaCode className="text-blue-400 text-xl" />,
    'Trading & Finance': <FaChartLine className="text-green-400 text-xl" />,
    SEO: <FaSearch className="text-purple-400 text-xl" />,
    'Digital Marketing': <FaBullhorn className="text-pink-400 text-xl" />,
    'UI & UX': <FaPaintBrush className="text-orange-400 text-xl" />,
    Entrepreneurship: <FaMedal className="text-yellow-400 text-xl" />,
  };
  
  const activeCourse = 'Development';
  const courseData = [
    {
      title: 'MERN FULL STACK DEVELOPMENT',
      description:
        'Get hands-on experience in MongoDB, Express.js, React.js and Node.js.',
      duration: '6 months',
      image: '/src/assets/Images/mern.png', // Replace with your actual image path
    },
    {
      title: 'FRONT END DEVELOPMENT',
      description:
        'Learn and master the basics of HTML, CSS, Tailwind-CSS, Javascript and GSAP.',
      duration: '4 months',
      image: '/src/assets/Images/frontend.jpg', // Replace with your actual image path
    },
    {
      title: 'BACK END DEVELOPMENT',
      description:
        'Explore technologies like Node.js, Express.js, MongoDB and Authentication and authorisation for websites.',
      duration: '6 months',
      image: '/src/assets/Images/backend.jpg', // Replace with your actual image path
    },
  ];
  
    return (
      
      <div>
        {showPopup && <LoginPopup onClose={() => setShowPopup(false)} />}
  
        {/* First Section - Background with Heading and Form */}
        <div className="h-[85vh] bg-[url('https://png.pngtree.com/thumb_back/fh260/back_our/20190621/ourmid/pngtree-teacher-s-college-classroom-coaching-course-poster-background-image_188494.jpg')] bg-cover bg-center flex items-center justify-center px-6">
          <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Text */}
            <div className="text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 leading-tight mb-8">
                <span className="relative inline-block">
                  <span className="absolute inset-0 bg-yellow-400 rounded-full w-16 h-16 -z-10"></span>
                  Y
                </span>
                our Go-to Partner <br /> for all <span className="text-yellow-500">Upskilling</span> needs
              </h1>
            </div>
            {/* Right side - Description and Form */}
            <div className="text-gray-700">
              <p className="text-lg md:text-xl mb-8 leading-relaxed">
                SkillNova is a growing Ed-tech company across India. <br />
                We provide a broad range of specialised and affordable online courses for learners belonging to various streams.
              </p>
              <h2 className="font-semibold text-xl mb-6">Let's get started with us</h2>
              <form className="flex flex-col sm:flex-row items-center gap-4">
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="w-full sm:w-auto flex-1 px-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-base"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-gray-800 text-white font-semibold rounded-full hover:bg-gray-700 transition text-base"
                >
                  Start A Course
                </button>
              </form>
            </div>
          </div>
        </div>
  {/* Second Section - Workshop Details */}
        <div className="h-[50vh] bg-[url('https://img.freepik.com/premium-photo/dark-black-wall-background-vintage-style-graphic-design-wallpaper-ai-generated_1145931-2482.jpg')] bg-cover bg-center flex flex-col items-center justify-center text-center text-white px-4">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Level Up with SkillNova's FREE GIT Hub Workshop!
          </h1>
          
          {/* Description */}
          <p className="max-w-2xl text-lg md:text-xl mb-8">
            Get a complete overview of GIT and GitHub concepts, basic GIT commands and working with remote repositories. 
            Don't miss out the best practices and easy tips taught in the workshop.
          </p>
  
          {/* Date and Time Box */}
          <div className="bg-black bg-opacity-50 rounded-lg px-6 py-4 mb-6">
            <p className="text-lg font-semibold">15 May 2025, Thursday</p>
            <p className="text-base">4:00 PM - 6:00 PM</p>
          </div>
  
          {/* Enroll Button */}
           <Link to="/login">
  <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
    Enroll now
  </button>
</Link>
        </div>
        {/* ✅ New Section - Courses Highlights */}
        <div className="bg-white py-16 px-6">
          {/* Top Highlights Bar */}
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-white mb-12">
            <div className="bg-[#0C1120] px-6 py-3 rounded-full flex items-center gap-2">
              <i className="text-blue-500 text-xl fas fa-briefcase"></i>
              <span className="font-semibold">
                Jobs in 500+ <span className="text-sm font-normal">MNCs</span>
              </span>
            </div>
            <div className="bg-[#0C1120] px-6 py-3 rounded-full flex items-center gap-2">
              <i className="text-blue-500 text-xl fas fa-building"></i>
              <span className="font-semibold">
                5000+ <span className="text-sm font-normal">Students Enrolled</span>
              </span>
            </div>
            <div className="bg-[#0C1120] px-6 py-3 rounded-full flex items-center gap-2">
              <i className="text-blue-500 text-xl fas fa-graduation-cap"></i>
              <span className="font-semibold">
                100% <span className="text-sm font-normal">Placed in their Dream Companies</span>
              </span>
            </div>
          </div>
  
          {/* Explore Button */}
          <div className="text-center mb-10">
  <Link to="/courses">
    <button className="bg-gray-200 shadow-md px-8 py-3 rounded-full font-medium hover:bg-gray-300 transition">
      Explore Our Courses
    </button>
  </Link>
</div>

  
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">
            Learn today’s most in-demand skills and kick-start your new career
          </h2>
  
          {/* Stats Grid */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center text-black">
            <div className="bg-gray-100 p-6 rounded-md shadow-sm">
              <h3 className="text-3xl font-bold">5 LPA</h3>
              <p className="text-sm mt-2">Minimum Salary</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-md shadow-sm">
              <h3 className="text-3xl font-bold">6</h3>
              <p className="text-sm mt-2">Months Internship</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-md shadow-sm">
              <h3 className="text-3xl font-bold">25+</h3>
              <p className="text-sm mt-2">Certification Courses</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-md shadow-sm">
              <h3 className="text-3xl font-bold">10</h3>
              <p className="text-sm mt-2">Mock Interviews</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-md shadow-sm">
              <h3 className="text-3xl font-bold">1:1</h3>
              <p className="text-sm mt-2">Mentorship Program</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-md shadow-sm">
              <h3 className="text-3xl font-bold">5+</h3>
              <p className="text-sm mt-2">Live Projects</p>
            </div>
          </div>
        </div>
        <div className="bg-[#0C1120] text-white py-20 px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold leading-tight"
          >
            5 years of <br /> growing with <br /> passionate learners
          </motion.h2>
        </div>
  
        <div className="max-w-5xl mx-auto grid gap-12 md:grid-cols-3 items-start justify-center">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div
                className={`w-14 h-14 rounded-lg flex items-center justify-center mb-5 shadow-lg ${card.bg}`}
              >
                {card.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-1">{card.value}</h3>
              <p className="text-sm text-gray-300 max-w-xs">{card.label}</p>
            </motion.div>
          ))}
        </div>
         <div className="bg-[#0f172a] text-white flex flex-col items-center justify-center px-4 py-14">
        <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-20">
          <span className="relative inline-block" style={{ WebkitTextStroke: '1px white', color: 'transparent' }}>
            We offer Courses in
          </span>
        </h2>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
          {Object.entries(icons).map(([title, icon]) => (
            <div
              key={title}
              className={`flex items-center gap-4 px-6 py-4 rounded-md border ${
                title === activeCourse ? 'bg-gray-700 border-gray-600' : 'bg-[#0f172a] border-gray-600'
              } hover:bg-gray-700 transition duration-300`}
            >
              {icon}
              <span className="text-lg font-medium">{title}</span>
            </div>
          ))}
        </div>
      </div>
        <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-semibold text-black mb-1">Our Courses :</h2>
          <p className="text-gray-400 font-medium text-[17px]">For Passionate Learners</p>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {courseData.map((course, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl overflow-hidden flex flex-col transition hover:scale-[1.01]"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-semibold underline mb-2">{course.title}</h3>
                  <p className="text-sm text-gray-800 mb-2">{course.description}</p>
                  <p className="text-sm text-black font-medium">Duration : {course.duration}</p>
                </div>
                <div className="mt-4">
                  <button className="bg-[#1b2430] text-white text-sm px-6 py-1.5 rounded-full hover:scale-105 transition">
                    Enroll
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
  
        <div className="text-center mt-10">
  <Link to="/courses">
    <button className="bg-[#e6e6e6] hover:bg-[#ddd] text-black px-6 py-2 rounded-full shadow-md flex items-center justify-center gap-2 mx-auto transition">
      View More{' '}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </button>
  </Link>
</div>

      </section>
      
      </div>
      </div>
    );
  };