import { Link } from "react-router-dom";
import { Phone, PhoneCall, MapPin, Building, ArrowLeft } from "lucide-react";

export default function ContactSection() {
  return (
    <div className="w-full bg-gray-50 py-12 px-4 flex flex-col items-center gap-10">

      {/* Back Home Button */}
      <div className="w-full max-w-5xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-blue-600 font-medium hover:underline"
        >
          <ArrowLeft className="w-5 h-5" />
          Back Home
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {/* Left Card */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border">
          <h2 className="text-2xl font-semibold mb-4">We are ready to help</h2>

          <div className="mt-4">
            <p className="font-medium text-gray-900">Operating Hours:</p>
            <p className="text-gray-700">Monday - Friday: 8:30am to 4:30pm</p>
          </div>

          <div className="mt-4">
            <p className="font-medium text-gray-900">Report Unethical Behaviour:</p>
            <p className="text-gray-700">Tel: 0800 113 237</p>
            <p className="text-blue-600 underline cursor-pointer">
              whistleblowingline@tip-offs.com
            </p>
          </div>
        </div>

        {/* Right Card */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border">
          <h2 className="text-2xl font-semibold mb-4">Talk to us</h2>

          <div className="mb-6">
            <p className="font-medium text-gray-900">Individual Clients:</p>
            <p className="text-gray-700">Customer Contact Centre: 0000000000</p>
            <p className="text-blue-600 underline cursor-pointer">
              customercare@ockatrust.com.gh
            </p>
          </div>

          <div>
            <p className="font-medium text-gray-900">Business Clients:</p>
            <p className="text-gray-700">
              Enterprise Direct: 0302610690, 0556760683, 0556760686
            </p>
            <p className="text-blue-600 underline cursor-pointer">
              mybusinesscentre@ockatrust.com
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
        <button className="flex items-center gap-3 bg-white p-5 border rounded-2xl shadow-sm hover:shadow transition">
          <Phone className="w-6 h-6" />
          <span className="text-lg font-medium">Give us a call</span>
        </button>

        <button className="flex items-center gap-3 bg-white p-5 border rounded-2xl shadow-sm hover:shadow transition">
          <PhoneCall className="w-6 h-6" />
          <span className="text-lg font-medium">Call me back</span>
        </button>

        <button className="flex items-center gap-3 bg-white p-5 border rounded-2xl shadow-sm hover:shadow transition">
          <MapPin className="w-6 h-6" />
          <span className="text-lg font-medium">Branches and ATMs</span>
        </button>

        <button className="flex items-center gap-3 bg-white p-5 border rounded-2xl shadow-sm hover:shadow transition">
          <Building className="w-6 h-6" />
          <span className="text-lg font-medium">Enterprise Direct</span>
        </button>
      </div>
    </div>
  );
}
