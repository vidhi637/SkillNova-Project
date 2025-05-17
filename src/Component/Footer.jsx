import React from 'react';
import './Marquee.css';
import { Link } from 'react-router-dom';

import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaPinterestP,
  FaEnvelope,
  FaWhatsapp,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#162828] text-white px-6 py-12">
     {/* Newsletter Section */}
<div className="max-w-6xl mx-auto mb-12">
  <h2 className="text-2xl font-semibold mb-4">Newsletter :</h2>
  <div className="flex flex-col md:flex-row items-center gap-4 bg-[#213838] p-6 rounded-md shadow-2xl shadow-black/40">

    
  <input
  type="email"
  placeholder="Your Email Here"
  className="flex-1 bg-[#1c3232] border border-white/30 rounded-md px-4 py-2 text-white placeholder-white/80 backdrop-blur-md shadow-lg shadow-green-200/30 transition duration-300 focus:outline-none focus:ring-2 focus:black/40"
/>


    <button className="bg-[#B5FF6D] text-black font-semibold px-8 py-2 rounded-full hover:bg-green-300 transition">
      Subscribe
    </button>
    
  </div>
</div>


      {/* Learner Support */}
      <div className="max-w-6xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-2">SkillNova Learner Support :</h2>
        <p className="font-semibold underline underline-offset-4 mb-1">Are you thinking of upskilling?</p>
        <p className="mb-6">
          If you are a passionate learner and wish to upscale your abilities, you have arrived at the right destination. Upskilling is your ticket to boosting your professional journey with industry-recognised certificates and top-demanded skills.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Email Box */}
          <div className="bg-[#213838] p-6 rounded-md shadow-xl shadow-black/40">
  <p className="text-center text-lg mb-4">Our Official Email</p>
  <hr className="border-gray-500 mb-4" />
  <div className="flex items-center gap-2 justify-center text-lg">
    <FaEnvelope /> <span className="font-semibold">marketing@edulfin.com</span>
  </div>
</div>


          {/* WhatsApp Box */}
          <div className="bg-[#1c3232] p-6 rounded-md  shadow-xl shadow-black/40">
            <p className="text-center text-lg mb-4">Our Whatsapp</p>
            <hr className="border-gray-500 mb-4" />
            <div className="flex items-center gap-2 justify-center text-lg">
              <FaWhatsapp /> <span className="font-semibold">+91 88477-07762</span>
            </div>
          </div>
        </div>

        <p className="mt-6">
          To help you choose the best course for you, our team is always available to assist you. Feel free to reach out, we are waiting to transform your career dramatically!
        </p>
      </div>

      {/* Scrolling Disclaimer - placed between Learner Support and Main Footer */}
      <div className="bg-[#b8e0f0] text-black py-2 overflow-hidden relative mb-12 flex items-center">
  <span className="bg-black text-white px-3 py-1 rounded-full ml-4 mr-6 shrink-0">
    DISCLAIMER
  </span>
  <div className="marquee-container overflow-hidden">
    <div className="marquee font-medium text-sm">
      SkillNova, a leading ed-tech platform, is committed to providing a transformative learning experience. On our website you will experience industry updates, improvements,  or changes to enhance your educational journey. We appreciate your engagement and enthusiasm.
    </div>
  </div>
</div>

      {/* Main Footer */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6">LET'S GROW TOGETHER!</h1>
       <Link to="/contact">
  <button className="bg-[#B5FF6D] text-black font-semibold px-8 py-3 rounded-md mb-6">
    Get In Touch
  </button>
</Link>

        <div className="flex justify-center gap-6 mb-6 flex-wrap">
          <span>HOME</span>
          <span>COURSES</span>
          <span>ABOUT</span>
          <span>PAY NOW</span>
          <span>CONTACT US</span>
        </div>

        <div className="flex justify-center gap-6 mb-4 flex-wrap text-sm">
          <span>Privacy Policy</span>
          <span>Terms & Conditions</span>
          <span>Refund Policy</span>
        </div>

        <div className="flex justify-center gap-6 text-2xl mb-6">
          <FaInstagram />
          <FaFacebookF />
          <FaTwitter />
          <FaLinkedinIn />
          <FaYoutube />
          <FaPinterestP />
        </div>

        <p className="max-w-2xl mx-auto text-sm mb-4">
          Get a chance to learn and upskill with pro educators. Hands-on experience on live projects and 6 months internship with job assistance. Hope on this rollercoaster ride and give us a chance to transform your career.
        </p>

        <p className="text-sm font-semibold">Copyright © SkillNova. All rights reserved.</p>
        <p className="text-sm mb-4">A unit of Knowify Global InfoSolutions Pvt Ltd.</p>

        <div className="flex justify-between items-center max-w-6xl mx-auto mt-4 text-xs">
          <span className="flex items-center gap-1">
            <span className="h-2 w-2 bg-[#B5FF6D]  rounded-full" /> COPYRIGHT
          </span>
          <span className="flex items-center gap-1">
            POLICY <span className="h-2 w-2 bg-[#B5FF6D]  rounded-full" />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
