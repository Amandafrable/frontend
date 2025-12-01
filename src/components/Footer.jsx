import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <h4 className="font-bold text-lg">ockatrust</h4>
          <p className="text-sm opacity-80 mt-3">
            A trusted financial partner committed to better banking.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold mb-3 text-lg">Quick Links</h4>
          <ul className="space-y-2 opacity-90 text-sm">
            <li>
              <Link to="/about" className="hover:text-gray-300">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/careers" className="hover:text-gray-300">
                Careers
              </Link>
            </li>
            <li>
              <Link to="/security" className="hover:text-gray-300">
                Security Tips
              </Link>
            </li>
            <li>
              <Link to="/support" className="hover:text-gray-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold mb-3 text-lg">Get in Touch</h4>
          <p className="text-sm opacity-90">support@ockatrust.com</p>
        </div>

      </div>

      <div className="text-center text-xs text-gray-300 mt-10">
        © {new Date().getFullYear()} ockatrust Bank. All rights reserved.
      </div>
    </footer>
  );
}
