import React, { useState } from "react";
import { Home, CreditCard, PieChart, Bell, LogOut, Menu, HelpCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    sessionStorage.removeItem("token");
    setOpen(false);
    window.location.href = "/";
  };

  return (
    <>
      <aside
        className={`fixed md:static top-0 left-0 h-full w-72 bg-white border-r p-6 z-40 transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <div className="mb-8 flex justify-between items-center">
          <button className="md:hidden text-3xl" onClick={() => setOpen(false)}>
            ×
          </button>
        </div>

        <nav className="flex-1 space-y-1">
          {/* Dashboard Link */}
          <Link to="/dashboard" className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-50">
            <Home className="w-5 h-5 text-blue-700" /> Overview
          </Link>

          {/* Accounts Link */}
          <Link to="/accounts" className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-50">
            <CreditCard className="w-5 h-5 text-blue-700" /> Accounts
          </Link>

          {/* Payments Link */}
          <Link to="/payments" className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-50">
            <PieChart className="w-5 h-5 text-blue-700" /> Payments
          </Link>

          {/* Notifications Link */}
          <Link to="/notifications" className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-50">
            <Bell className="w-5 h-5 text-blue-700" /> Notifications
          </Link>

          {/* Get Help Link */}
          <Link to="/support" className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-50">
            <HelpCircle className="w-5 h-5 text-blue-700" /> Support
          </Link>
        </nav>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="w-full mt-6 flex items-center gap-3 p-3 rounded-md hover:bg-gray-50"
        >
          <LogOut className="w-5 h-5 text-red-600" />
          <span className="text-sm text-red-600">Sign out</span>
        </button>
      </aside>

      {/* Mobile Backdrop */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden z-30"
        />
      )}
    </>
  );
}
