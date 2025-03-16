import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo / Brand */}
          <div className="text-lg font-semibold">YourBrand</div>

          {/* Navigation Links */}
          <nav className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-500">
              Home
            </a>
            <a href="#" className="hover:text-gray-500">
              About
            </a>
            <a href="#" className="hover:text-gray-500">
              Services
            </a>
            <a href="#" className="hover:text-gray-500">
              Contact
            </a>
          </nav>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 mt-6 text-sm">
          © {new Date().getFullYear()} YourBrand. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
