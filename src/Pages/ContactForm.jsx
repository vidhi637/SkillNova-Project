import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const ContactPage = () => {
  return (
    <div className="min-h-[80vh] bg-gradient-to-br from-white via-gray-50 to-green-50 px-6 py-20 flex flex-col md:flex-row items-center justify-center gap-16">

      {/* Contact Info */}
      <div className="w-full max-w-md space-y-6 mt-10">
        <h2 className="text-4xl font-extrabold text-gray-900">Get in Touch</h2>
        <p className="text-lg text-gray-700">
          We'd love to hear from you! Reach out to us for any inquiries, feedback, or just to say hello.
        </p>

        <p className="text-lg text-gray-700">
          Email us at: <br />
          <a href="mailto:contact@edulfin.com" className="font-semibold text-green-600 underline hover:text-green-800 transition">
            contact@edulfin.com
          </a>
        </p>

        {/* Social Media Icons */}
        <div>
          <p className="font-semibold text-gray-800 mb-2">Follow us:</p>
          <div className="flex gap-5 text-2xl">
            <a href="https://facebook.com" className="text-blue-600 hover:text-blue-800 transition transform hover:scale-110">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://linkedin.com" className="text-blue-700 hover:text-blue-900 transition transform hover:scale-110">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://instagram.com" className="text-pink-500 hover:text-pink-700 transition transform hover:scale-110">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://messenger.com" className="text-purple-600 hover:text-purple-800 transition transform hover:scale-110">
              <i className="fab fa-facebook-messenger"></i>
            </a>
            <a href="https://twitter.com" className="text-blue-400 hover:text-blue-600 transition transform hover:scale-110">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="w-full max-w-xl bg-white/70 backdrop-blur-md shadow-2xl rounded-3xl p-10 space-y-6 border border-gray-200 hover:shadow-green-200 transition-all duration-300">
        <h2 className="text-3xl font-bold text-gray-900">Send Us a Message</h2>
        <form className="space-y-5">
          <div>
            <label className="block mb-1 font-medium text-gray-700">Your Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-white/80 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Your Email</label>
            <input
              type="email"
              placeholder="john@example.com"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-white/80 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Your Message</label>
            <textarea
              rows="5"
              placeholder="Type your message here..."
              className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-white/80 focus:outline-none focus:ring-2 focus:ring-green-400 transition resize-none"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-green-600 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-green-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
          >
            <i className="fas fa-paper-plane"></i> Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
