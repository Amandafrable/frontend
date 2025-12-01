import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.message) {
      setStatus("Please fill out all required fields.");
      return;
    }

    const data = {
      access_key: "765b5cfc-574b-4f9b-a90d-94c34912defd",
      ...formData,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setModalOpen(true); // open the popup

        setFormData({
          fullName: "",
          email: "",
          phone: "",
          message: "",
        });

        // Auto redirect after closing popup
        setTimeout(() => {
          setModalOpen(false);
          navigate("/dashboard");
        }, 3000);
      } else {
        setStatus(result.message || "Failed to send your message.");
      }
    } catch (error) {
      setStatus("Error: Could not send message. Try again later.");
    }
  };

  return (
    <div className="relative">
      {/* Popup Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm text-center animate-fadeIn">
            <h2 className="text-2xl font-semibold mb-2">Message Sent!</h2>
            <p className="text-gray-700 mb-4">
              Thank you for contacting us. A bank representative will get back to you within <strong>24–48 hours</strong>.
            </p>

            <button
              onClick={() => {
                setModalOpen(false);
                navigate("/dashboard");
              }}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              OK
            </button>
          </div>
        </div>
      )}

      {/* Contact Form */}
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

    </div>
  );
}
