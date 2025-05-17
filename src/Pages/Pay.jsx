import { useState } from "react";
import {
  FaRegCreditCard,
  FaCcVisa,
  FaCcMastercard,
  FaLock,
} from "react-icons/fa";

export default function PaymentForm() {
  const [formData, setFormData] = useState({
    name: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
  });

  // Format card number as 1234 5678 9012 3456
  const formatCardNumber = (value) =>
    value
      .replace(/\D/g, "")
      .replace(/(.{4})/g, "$1 ")
      .trim()
      .slice(0, 19);

  // Format expiry as MM/YY
  const formatExpiry = (value) =>
    value
      .replace(/\D/g, "")
      .replace(/^(\d{2})(\d{1,2})?/, (_, m, y) => (y ? `${m}/${y}` : m))
      .slice(0, 5);

  const handleChange = (e) => {
    const { name, value } = e.target;

    let formattedValue = value;

    if (name === "cardNumber") formattedValue = formatCardNumber(value);
    if (name === "expiry") formattedValue = formatExpiry(value);

    setFormData((prev) => ({ ...prev, [name]: formattedValue }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Payment submitted (demo only)");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-300 via-purple-300 to-pink-500 p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-3xl shadow-2xl max-w-xl w-full p-10 space-y-8"
      >
        <h2 className="text-3xl font-bold text-gray-800 text-center">
          Secure Payment
        </h2>

        {/* Name on Card */}
        <div className="relative">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            autoComplete="name"
            className="peer w-full border-b-2 border-gray-300 focus:outline-none focus:border-indigo-600 py-3 text-lg placeholder-transparent"
            placeholder="Name on Card"
          />
          <label className="absolute left-0 -top-4 text-gray-600 text-base transition-all">
            Name on Card
          </label>
        </div>

        {/* Card Number */}
        <div className="relative">
          <input
            type="tel"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            required
            maxLength="19"
            inputMode="numeric"
            pattern="\d{4} \d{4} \d{4} \d{4}"
            className="peer w-full border-b-2 border-gray-300 focus:outline-none focus:border-indigo-600 py-2 placeholder-transparent"
            placeholder="Card Number"
          />
          <label className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600">
            Card Number
          </label>
          <div className="absolute right-0 top-2 text-indigo-600 text-xl">
            <FaCcVisa className="inline mr-1" />
            <FaCcMastercard className="inline" />
          </div>
        </div>

        {/* Expiry & CVC */}
        <div className="flex space-x-4">
          {/* Expiry */}
          <div className="relative w-1/2">
            <input
              type="tel"
              name="expiry"
              value={formData.expiry}
              onChange={handleChange}
              required
              inputMode="numeric"
              placeholder="MM/YY"
              className="peer w-full border-b-2 border-gray-300 focus:outline-none focus:border-indigo-600 py-2 placeholder-transparent"
            />
            <label className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600">
              Expiry
            </label>
          </div>

          {/* CVC */}
          <div className="relative w-1/2">
            <input
              type="tel"
              name="cvc"
              value={formData.cvc}
              onChange={handleChange}
              required
              maxLength="4"
              inputMode="numeric"
              placeholder="CVC"
              className="peer w-full border-b-2 border-gray-300 focus:outline-none focus:border-indigo-600 py-2 placeholder-transparent"
            />
            <label className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600">
              CVC
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white py-4 rounded-full font-semibold text-xl hover:bg-indigo-700 transition-transform transform hover:scale-105 shadow-lg"
        >
          <FaLock /> Pay Now
        </button>
      </form>
    </div>
  );
}
