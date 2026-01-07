import React from "react";
import { Search, Bell } from "lucide-react";

export default function Topbar() {
  return (
    <header className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-end">
        <div className="flex items-center gap-4">
          <button className="relative">
            <Bell className="w-5 h-5 text-gray-600" />
            <span className="absolute -top-1 -right-2 inline-flex items-center justify-center px-1.5 py-0.5 text-xs bg-red-600 text-white rounded-full">3</span>
          </button>

          <div className="flex items-center gap-3">
            <div className="text-right">
              <div className="text-sm font-medium">Deborah Douglas</div>
              <div className="text-xs text-gray-500">Personal</div>
            </div>
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">JD</div>
          </div>
        </div>
      </div>
    </header>
  );
}
