import React, { useEffect, useState } from "react";
import bgImg from "../assets/Images/bg.jpeg";
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const courses = [
    {
      title: "Digital Marketing",
      duration: "6 months",
      hours: "270 hours",
      price: "₹19999",
      image: "https://www.edulfin.com/_next/static/media/Direct%20marketing.a1437833.webp",
      description:
        "Master the art of reaching potential customers, and learn strategies & tactics for effective marketing campaigns.",
      tags: ["Marketing", "Strategy", "Campaigns"],
    },
    {
      title: "Search Engine Optimisation",
      duration: "3 months",
      hours: "90 hours",
      price: "₹9999",
      image: "https://www.edulfin.com/_next/static/media/SEO.7cbca8eb.webp",
      description:
        "Learn the techniques to enhance the visibility of websites in search engine results pages, driving organic traffic and improving online presence.",
      tags: ["SEO", "Keywords", "Optimization"],
    },
    {
      title: "UI/UX",
      duration: "3 months",
      hours: "90 hours",
      price: "₹24999",
      image: "https://www.edulfin.com/_next/static/media/UI%20UX.771462ea.webp",
      description:
        "Develop skills in designing user interfaces and experiences, focusing on creating intuitive and visually appealing digital products.",
      tags: ["UI", "UX", "Design"],
    },
    {
      title: "Capital Market",
      duration: "2 months",
      hours: "60 hours",
      price: "₹14999",
      image: "https://www.edulfin.com/_next/static/media/Capital%20Market.6006c0ff.webp",
      description:
        "Understand capital markets, trading, and investing with in-depth insights into financial operations.",
      tags: ["Stocks", "Finance", "Trading"],
    },
    {
      title: "Understanding the Finance",
      duration: "3 months",
      hours: "90 hours",
      price: "₹10000",
      image: "https://www.edulfin.com/_next/static/media/Understanding%20the%20Finance.b5228103.webp",
      description:
        "Build a solid foundation in finance, including budgeting, investment, and financial decision-making.",
      tags: ["Finance", "Budget", "Investment"],
    },
    {
      title: "Financial Modeling",
      duration: "4 months",
      hours: "120 hours",
      price: "₹18999",
      image: "https://www.edulfin.com/_next/static/media/Financial%20Modeling.220bafc8.webp",
      description:
        "Learn how to build financial models used in business planning, valuation, forecasting, and analysis.",
      tags: ["Excel", "Finance", "Modeling"],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[80vh] flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>

        {/* Content */}
        <div
          className={`relative z-10 text-center px-4 max-w-4xl transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <p className="text-lg font-semibold text-teal-400 tracking-wide mb-3 uppercase">
            Knowledge is Power
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-5 leading-tight">
            Grow your career
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
            Through cutting-edge technologies and a learner-centric approach, we aspire to bridge educational gaps, cultivate curiosity, and inspire a lifelong pursuit of knowledge.
          </p>
         <Link to="/about">
  <button className="px-7 py-3 bg-teal-500 text-white font-semibold rounded-md hover:bg-teal-600 transition-all duration-300 shadow-lg hover:scale-105">
    Learn More
  </button>
</Link>

        </div>
      </section>

      {/* Courses Section */}
      <section className="py-12 px-4 md:px-12 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-10 flex justify-center items-center gap-3">
          Courses We Offer <span role="img" aria-label="graduation-cap">🎓</span>
        </h2>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-2 justify-items-center">


  {courses.map((course, index) => (
    <div key={index} className="w-full max-w-md">
      <div className="bg-white w-full rounded-xl shadow-md overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-5">
          <div className="flex items-center text-sm text-gray-500 mb-2 space-x-2">
            <span>{course.duration}</span>
            <span>•</span>
            <span>{course.hours}</span>
            <span className="bg-blue-100 text-blue-700 font-semibold px-2 py-1 rounded-full text-xs">
              {course.price}
            </span>
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            {course.title}
          </h3>
          <p className="text-sm text-gray-600 mb-3">{course.description}</p>
          <div className="flex flex-wrap gap-2">
            {course.tags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-gray-100 text-sm px-2 py-1 rounded-full text-blue-600 font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  ))}
</div>
      </section>
    </div>
  );
};

export default HeroSection;
