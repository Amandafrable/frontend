import React from "react";
import { CreditCard } from "lucide-react";

export default function AccountCard({ account }) {
  const isDormant = account?.dormant === true;

  return (
    <div
      className={`p-6 rounded-2xl border shadow-sm bg-white relative
        ${isDormant ? "opacity-80" : ""}
      `}
    >
      {/* Dormant Badge */}
      {isDormant && (
        <span className="absolute top-3 right-3 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
          Dormant
        </span>
      )}

      <div className="flex items-center gap-3 mb-4">
        <CreditCard className="w-7 h-7 text-blue-700" />
        <h3 className="text-lg font-semibold">{account.name}</h3>
      </div>

      <p className="text-gray-600 text-sm mb-1">Account ending · {account.last4}</p>

      <p className="text-2xl font-bold text-gray-900">
        ${account.balance.toLocaleString()}
      </p>

      {isDormant && (
        <p className="text-xs text-red-600 mt-2">
          This account hasn’t been active for a long time.
        </p>
      )}
    </div>
  );
}
