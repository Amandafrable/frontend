import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    // Check authToken on mount + when localStorage changes
    useEffect(() => {
        const token = localStorage.getItem("authToken");
        setIsLoggedIn(!!token);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("authToken");
        setIsLoggedIn(false);
        navigate("/login");
    };

    return (
        <>
            {/* NAVBAR */}
            <nav className="bg-blue-900 text-white px-6 py-4 shadow-md">
                <div className="max-w-7xl mx-auto flex justify-between items-center">

                    {/* Logo */}
                    <Link
                        to="/"
                        className="text-2xl font-bold tracking-wide cursor-pointer"
                    >
                        ockatrust
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex space-x-8 text-sm font-light">
                        <li>
                            <Link to="/products" className="hover:text-gray-200">Products & Services</Link>
                        </li>
                        <li>
                            <Link to="/security" className="hover:text-gray-200">Security & Safety</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:text-gray-200">Contact</Link>
                        </li>
                    </ul>

                    {/* Desktop Login / Logout */}
                    {isLoggedIn ? (
                        <button
                            className="hidden md:block bg-red-500 px-2 py-1 rounded-lg hover:bg-red-600"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    ) : (
                        <button
                            className="hidden md:block bg-blue-500 px-4 py-1 rounded-lg hover:bg-blue-600"
                            onClick={() => navigate("/login")}
                        >
                            Login
                        </button>
                    )}

                    {/* Mobile Menu Icon */}
                    <button className="md:hidden text-3xl" onClick={() => setOpen(true)}>
                        ☰
                    </button>
                </div>
            </nav>

            {/* BACKDROP OVERLAY */}
            {open && (
                <div
                    className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden"
                    onClick={() => setOpen(false)}
                />
            )}

            {/* MOBILE MENU PANEL */}
            <div
                className={`fixed top-0 right-0 h-full w-72 bg-white shadow-xl z-50 transform transition-transform duration-300 md:hidden
                    ${open ? "translate-x-0" : "translate-x-full"}
                `}
            >
                <div className="px-6 py-5 flex justify-between items-center border-b">
                    <h3 className="text-xl font-semibold text-blue-900">Menu</h3>
                    <button className="text-3xl text-blue-900" onClick={() => setOpen(false)}>×</button>
                </div>

                <ul className="px-6 py-4 space-y-5 text-blue-900 font-medium">
                     <li className="border-b pb-3">
                        <Link to="/" className="hover:text-blue-600" onClick={() => setOpen(false)}>Home</Link>
                    </li>
                    <li className="border-b pb-3">
                        <Link to="/products" className="hover:text-blue-600" onClick={() => setOpen(false)}>Products & Services</Link>
                    </li>
                    <li className="border-b pb-3">
                        <Link to="/security" className="hover:text-blue-600" onClick={() => setOpen(false)}>Security & Safety</Link>
                    </li>
                    <li className="border-b pb-3">
                        <Link to="/contact" className="hover:text-blue-600" onClick={() => setOpen(false)}>Contact</Link>
                    </li>
                </ul>

                {/* Mobile Login or Logout */}
                <div className="px-6 mt-6">
                    {isLoggedIn ? (
                        <button
                            className="w-full text-white py-1 rounded-md hover:bg-red-700 transition"
                            onClick={() => {
                                setOpen(false);
                                handleLogout();
                            }}
                        >
                            Logout
                        </button>
                    ) : (
                        <button
                            className="w-full text-white py-1 rounded-md hover:bg-blue-950 transition"
                            onClick={() => {
                                setOpen(false);
                                navigate("/login");
                            }}
                        >
                            Login
                        </button>
                    )}
                </div>
            </div>
        </>
    );
}
