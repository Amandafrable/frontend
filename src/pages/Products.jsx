import { Shield, CreditCard, Wallet, Briefcase } from "lucide-react";

export default function ProductsServices() {
  return (
    <div className="w-full bg-gray-50 py-12 px-4 flex flex-col items-center">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">

        {/* Savings */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border hover:shadow transition">
          <Wallet className="w-10 h-10 text-blue-700 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Savings Accounts</h2>
          <p className="text-gray-700 text-sm">
            Flexible savings options designed to help individuals grow their funds easily.
          </p>
        </div>

        {/* Loans */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border hover:shadow transition">
          <CreditCard className="w-10 h-10 text-blue-700 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Loans & Credit</h2>
          <p className="text-gray-700 text-sm">
            Personal and business loans with competitive interest rates and flexible terms.
          </p>
        </div>

        {/* Insurance */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border hover:shadow transition">
          <Shield className="w-10 h-10 text-blue-700 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Insurance Services</h2>
          <p className="text-gray-700 text-sm">
            Comprehensive insurance solutions that protect you and your assets.
          </p>
        </div>

        {/* Business Banking */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border hover:shadow transition">
          <Briefcase className="w-10 h-10 text-blue-700 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Business Banking</h2>
          <p className="text-gray-700 text-sm">
            Banking solutions for SMEs and large enterprises to support growth.
          </p>
        </div>

      </div>
    </div>
  );
}
