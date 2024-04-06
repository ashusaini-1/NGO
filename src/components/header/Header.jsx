import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-gray-800 p-4" style={{ position: "sticky", top: 0 }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a href="/" className="text-white text-xl font-bold">
              Your Logo
            </a>

            {/* Hamburger menu button for mobile */}
            <button
              className="md:hidden text-white focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>

            {/* Navbar links */}
            <div
              className={`md:flex ${isOpen ? "block" : "hidden"} mt-4 md:mt-0`}
            >
              <a href="/" className="text-white hover:text-gray-400">
                Home
              </a>
              <a href="/about" className="text-white hover:text-gray-400 ml-4">
                About
              </a>
              <a href="#" className="text-white hover:text-gray-400 ml-4">
                Services
              </a>
              <a href="/contact" className="text-white hover:text-gray-400 ml-4">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
