import React from "react";
import whatWeOfferImg from "../assets/Images/wo.svg";
import { FaQuoteLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';

const AboutUs = () => {
  const keywords = [
    {
      label: "Innovate",
      desc: "Inspire creativity and curiosity.",
      color: "text-yellow-500",
      border: "border-yellow-400",
      angle: 0,
    },
    {
      label: "Engage",
      desc: "Interactive lessons & collaboration.",
      color: "text-pink-500",
      border: "border-pink-400",
      angle: 90,
    },
    {
      label: "Enrich",
      desc: "Beyond conventional learning.",
      color: "text-orange-500",
      border: "border-orange-400",
      angle: 180,
    },
    {
      label: "Upskill",
      desc: "Empowered with latest skills.",
      color: "text-purple-500",
      border: "border-purple-400",
      angle: 270,
    },
  ];
  const features = [
  {
    title: "Future-Ready Learning",
    desc: "Dive into courses crafted to equip you with the latest skills demanded by the industry. These are your perfect career partners.",
    bg: "from-pink-100 to-pink-50",
  },
  {
    title: "Expert Guidance",
    desc: "Learn from industry experts who bring real-world insights, ensuring your journey is guided by practical knowledge.",
    bg: "from-violet-100 to-violet-50",
  },
  {
    title: "Flexibility for Your Lifestyle",
    desc: "Life is busy, and we get that. Our flexible learning options let you upskill at your own pace, fitting seamlessly into your life.",
    bg: "from-yellow-100 to-yellow-50",
  },
  {
    title: "Career Transformation",
    desc: "Elevate your resume with our comprehensive programs and courses that will add a plus to your skillset and transform your career.",
    bg: "from-blue-100 to-blue-50",
  },
  {
    title: "Recognition of Achievements",
    desc: "Earn certificates that validate your achievements and experiences, showcasing your newfound skills to employers.",
    bg: "from-teal-100 to-teal-50",
  },
  {
    title: "Stay Ahead of Trends",
    desc: "Our courses are designed to keep you ahead of industry trends, ensuring you remain a valuable asset in a competitive job market.",
    bg: "from-emerald-100 to-emerald-50",
  },
];

  const getPositionStyle = (angle, radius = 180) => {
    const rad = (angle * Math.PI) / 180;
    const x = Math.cos(rad) * radius;
    const y = Math.sin(rad) * radius;
    return {
      transform: `translate(${x}px, ${y}px)`,
    };
  };

  return (
    <>
      {/* Section 1: Who We Are */}
      <section className="bg-blue-100 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
              Who we are
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mt-3 rounded-full shadow" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-10">
            {/* Left Column */}
            <div>
              <h3 className="text-3xl font-semibold text-blue-800 mb-4 leading-snug">
                Empowering Minds, <br className="hidden md:block" />
                Enriching Futures
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                <strong className="text-blue-600">SkillNova</strong> is a trailblazing ed-tech platform under{" "}
                <strong>Knowifty Global InfoSolutions Pvt. Ltd.</strong>, offering a wide range of online certification courses. We are committed to accessible and remote education across:
              </p>
              <ul className="mt-6 space-y-3 text-blue-600 font-medium">
                {["Web Development", "Trading & Finance", "SEO", "Digital Marketing"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-xl">🚀</span> {item}
                  </li>
                ))}
              </ul>
             <Link to="/contact">
  <button className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition duration-300">
    Contact Us
  </button>
</Link>

            </div>

            {/* Right Circular Graphic */}
            <div className="relative w-full h-[500px] flex items-center justify-center">
              <div className="absolute z-20">
                <div className="w-28 h-28 bg-yellow-100 rounded-full flex items-center justify-center shadow-2xl border-4 border-yellow-300 animate-pulse">
                  <span className="text-5xl text-yellow-500">💡</span>
                </div>
                <h1 className="mt-4 font-extrabold text-2xl text-blue-800 tracking-wide text-center">
                  SkillNova
                </h1>
              </div>

              {/* Circular Keywords */}
              {keywords.map((item, index) => (
                <div
                  key={index}
                  style={getPositionStyle(item.angle)}
                  className={`absolute w-40 p-4 bg-white ${item.border} border-t-4 shadow-lg rounded-xl text-center transform transition duration-300 hover:scale-110 z-10`}
                >
                  <h4 className={`font-semibold text-lg ${item.color} mb-1`}>
                    {item.label}
                  </h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Divider */}
      <div className="w-full h-16 bg-gradient-to-r from-purple-200 via-blue-200 to-purple-200"></div>

      {/* Section 2: Why Choose Us */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <div className="bg-gray-100 rounded-3xl shadow-xl p-6 mb-5">
              <img src={whatWeOfferImg} alt="What We Offer" className="rounded-xl w-full object-contain" />
            </div>

            {/* Right - Text */}
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Why Choose Us?</h2>
              <p className="text-gray-600 mb-8 text-lg">
                Choose SkillNova for a transformative learning experience that goes beyond the ordinary.
                Our commitment to excellence is reflected in expertly crafted courses led by industry
                professionals, ensuring you acquire in-demand skills aligned with the latest trends.
              </p>

              {/* Features */}
              <div className="space-y-6">
                {[
                  {
                    icon: "📡",
                    title: "Remote Learning",
                    color: "bg-red-100",
                    desc: "Our classes are scheduled at your convenience so that no personal commitments are missed. Remote learning makes education accessible and knows no geographical bounds.",
                  },
                  {
                    icon: "🚀",
                    title: "Opportunity to work on Live Projects",
                    color: "bg-green-100",
                    desc: "We ensure students learn by gaining real-world experience through live projects. This enhances understanding of how things work.",
                  },
                  {
                    icon: "💼",
                    title: "6 Months Internship",
                    color: "bg-yellow-100",
                    desc: "We offer job assistance with 6-month internships after course completion, working on real projects with expert guidance.",
                  },
                  {
                    icon: "🎓",
                    title: "Advance Curriculum",
                    color: "bg-blue-100",
                    desc: "Our curriculum is designed based on the most demanded industry skills, ensuring students stay competitive and job-ready.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className={`p-3 text-2xl rounded-xl ${item.color}`}>{item.icon}</div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-r from-purple-200 via-blue-200 to-purple-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
          Our Distinguished Features
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-6 bg-gradient-to-br ${item.bg} shadow-md border border-gray-300 hover:shadow-xl transition duration-300 group`}
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="text-2xl text-purple-500 group-hover:text-purple-700 transition">
                  <FaQuoteLeft />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default AboutUs;
