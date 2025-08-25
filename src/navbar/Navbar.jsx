import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getNavLinkClass = ({ isActive }) =>
    isActive
      ? "text-white bg-sky-500 px-3 py-2 rounded-lg transition-colors duration-200"
      : "text-gray-200 hover:text-white hover:bg-sky-400 px-3 py-2 rounded-lg transition-colors duration-200";

  return (
    <nav className="bg-blue-500 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <span className="font-bold text-xl">LOGO</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            <NavLink to="/dashboard" className={getNavLinkClass}>
              Dashboard
            </NavLink>
            <NavLink to="/search" className={getNavLinkClass}>
              Search
            </NavLink>
            <NavLink to="/contacts" className={getNavLinkClass}>
              Contacts
            </NavLink>
            <NavLink to="/lists" className={getNavLinkClass}>
              Lists
            </NavLink>
            <NavLink to="/companies" className={getNavLinkClass}>
              Companies
            </NavLink>
            <NavLink to="/enrich" className={getNavLinkClass}>
              Enrich
            </NavLink>
            <NavLink to="/verify" className={getNavLinkClass}>
              Verify
            </NavLink>
          </div>

          {/* Desktop Right Side */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="p-2 rounded-lg pl-10 text-black w-64 focus:outline-none focus:ring-2 focus:ring-sky-300"
              />
              <img
                src="https://i.ibb.co/x3mnq4y/search-lg.png"
                alt="Search Icon"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
              />
            </div>

            {/* Settings Button */}
            <NavLink to="/settings" className="p-2 hover:bg-sky-400 rounded-lg transition-colors duration-200">
              <img
                className="w-6 h-6"
                src="https://i.ibb.co/4t3c3JS/settings-01.png"
                alt="Settings"
              />
            </NavLink>

            {/* Notifications */}
            <NavLink to="/notifications" className="p-2 hover:bg-sky-400 rounded-lg transition-colors duration-200">
              <img
                src="https://i.ibb.co/Tc8hLSF/bell-01.png"
                alt="Notifications"
                className="w-6 h-6"
              />
            </NavLink>

            {/* User Avatar */}
            <div className="rounded-full bg-gray-300 w-10 h-10 flex items-center justify-center">
              <img
                src="https://i.ibb.co/GHTDfm2/Avatar-7.png"
                alt="User"
                className="rounded-full w-8 h-8"
              />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 hover:bg-sky-400 rounded-lg transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-sky-400 py-4">
            {/* Mobile Search */}
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search"
                className="p-3 rounded-lg pl-10 text-black w-full focus:outline-none focus:ring-2 focus:ring-sky-300"
              />
              <img
                src="https://i.ibb.co/x3mnq4y/search-lg.png"
                alt="Search Icon"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
              />
            </div>

            {/* Mobile Navigation Links */}
            <div className="flex flex-col space-y-2">
              <NavLink 
                to="/dashboard" 
                className={getNavLinkClass}
                onClick={() => setIsMenuOpen(false)}
              >
                Dashboard
              </NavLink>
              <NavLink 
                to="/search" 
                className={getNavLinkClass}
                onClick={() => setIsMenuOpen(false)}
              >
                Search
              </NavLink>
              <NavLink 
                to="/contacts" 
                className={getNavLinkClass}
                onClick={() => setIsMenuOpen(false)}
              >
                Contacts
              </NavLink>
              <NavLink 
                to="/lists" 
                className={getNavLinkClass}
                onClick={() => setIsMenuOpen(false)}
              >
                Lists
              </NavLink>
              <NavLink 
                to="/companies" 
                className={getNavLinkClass}
                onClick={() => setIsMenuOpen(false)}
              >
                Companies
              </NavLink>
              <NavLink 
                to="/enrich" 
                className={getNavLinkClass}
                onClick={() => setIsMenuOpen(false)}
              >
                Enrich
              </NavLink>
              <NavLink 
                to="/verify" 
                className={getNavLinkClass}
                onClick={() => setIsMenuOpen(false)}
              >
                Verify
              </NavLink>
            </div>

            {/* Mobile Right Side Icons */}
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-sky-400">
              <NavLink to="/settings" className="p-2 hover:bg-sky-400 rounded-lg transition-colors duration-200">
                <img
                  className="w-6 h-6"
                  src="https://i.ibb.co/4t3c3JS/settings-01.png"
                  alt="Settings"
                />
              </NavLink>
              <NavLink to="/notifications" className="p-2 hover:bg-sky-400 rounded-lg transition-colors duration-200">
                <img
                  src="https://i.ibb.co/Tc8hLSF/bell-01.png"
                  alt="Notifications"
                  className="w-6 h-6"
                />
              </NavLink>
              <div className="rounded-full bg-gray-300 w-10 h-10 flex items-center justify-center">
                <img
                  src="https://i.ibb.co/GHTDfm2/Avatar-7.png"
                  alt="User"
                  className="rounded-full w-8 h-8"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
