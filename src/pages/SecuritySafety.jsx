import { ShieldCheck, Lock, Bell, SmartphoneNfc } from "lucide-react";

export default function SecuritySafety() {
  return (
    <div className="w-full bg-gray-50 py-12 px-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-blue-900 mb-8 text-center">
        Security & Safety
      </h1>

      <p className="max-w-2xl text-gray-700 text-center mb-10">
        Your safety is our priority. Explore our security features and learn how to protect your accounts and digital banking activities.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">

        {/* Card 1 */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border hover:shadow transition">
          <ShieldCheck className="w-10 h-10 text-blue-700 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Fraud Protection</h2>
          <p className="text-gray-700 text-sm">
            We monitor all transactions in real time to detect and prevent unauthorized activities.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border hover:shadow transition">
          <Lock className="w-10 h-10 text-blue-700 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Secure Login</h2>
          <p className="text-gray-700 text-sm">
            Strong encryption and multi-level authentication keep your information protected.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border hover:shadow transition">
          <Bell className="w-10 h-10 text-blue-700 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Instant Alerts</h2>
          <p className="text-gray-700 text-sm">
            Get real-time notifications for every transaction to stay informed and secure.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border hover:shadow transition">
          <SmartphoneNfc className="w-10 h-10 text-blue-700 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Safe Mobile Banking</h2>
          <p className="text-gray-700 text-sm">
            Our mobile app uses advanced security technology to protect your data on the go.
          </p>
        </div>

      </div>
    </div>
  );
}
