import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const navigate = useNavigate();  // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.message) {
      setStatus("Please fill out all required fields.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/contact/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Your message has been sent successfully!");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          message: "",
        });

        // Redirect to the dashboard after successful form submission
        navigate("/dashboard"); 
      } else {
        setStatus("Failed to send your message. Please try again later.");
      }
    } catch (error) {
      setStatus("Error: Could not send message. Please try again later.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h1 className="text-3xl font-semibold text-center mb-6">Contact Us</h1>
      <p className="text-lg text-gray-600 mb-6 text-center">
        Please fill out the form below, and our support team will get back to you as soon as possible.
      </p>

      {status && <p className="text-center text-lg text-gray-600 mb-4">{status}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name */}
        <div className="flex flex-col">
          <label htmlFor="full-name" className="font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            id="full-name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            placeholder="Enter your full name"
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="email" className="font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email address"
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Phone Number */}
        <div className="flex flex-col">
          <label htmlFor="phone" className="font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col">
          <label htmlFor="message" className="font-medium text-gray-700">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Type your message here"
            rows="4"
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
