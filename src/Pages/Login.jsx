import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";

export default function LoginPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => setIsOpen(false);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#1e1e2f]/80 via-[#111827]/90 to-[#1f2937]/80 backdrop-blur-xl transition-opacity duration-500 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`relative w-full max-w-lg p-10 bg-[#121829]/90 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-xl border border-blue-500/30 transition-all duration-500 ${
          isOpen ? "scale-100" : "scale-75"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-white text-xl transition"
        >
          <FaTimes />
        </button>

        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="rounded-full p-1 bg-gradient-to-tr from-blue-500 to-purple-600 shadow-lg shadow-blue-400/30">
            <div className="text-2xl font-bold text-gray-800">
          SKill<span className="text-yellow-500">Nova</span>
        </div>

          </div>
        </div>

        {/* Form */}
        <form className="space-y-6">
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


