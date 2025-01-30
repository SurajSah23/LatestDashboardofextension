import { NavLink } from "react-router-dom";

const Navbar = () => {
  const getNavLinkClass = ({ isActive }) =>
    isActive
      ? "text-white bg-sky-500 px-3 py-1 rounded"
      : "text-gray-200 hover:text-white px-3 py-1 rounded";

  return (
    <nav className="bg-blue-500 text-white p-4 flex flex-wrap justify-between items-center">
      <div className="flex items-center w-full md:w-auto">
        {/* Logo */}
        <span className="font-bold mr-4">LOGO</span>

        {/* Navigation Links */}
        <div className="flex flex-wrap w-full md:w-auto justify-center md:justify-start">
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
      </div>

      {/* Right-Side Elements */}
      <div className="flex items-center w-full md:w-auto justify-between md:justify-start mt-4 md:mt-0">
        {/* Search Bar */}
        <div className="relative mr-4 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search"
            className="p-2 rounded-md pl-10 text-black w-full"
          />
          <img
            src="https://i.ibb.co/x3mnq4y/search-lg.png"
            alt="Search Icon"
            className="absolute left-2 top-1/2 transform -translate-y-1/2"
            width="20"
            height="20"
          />
        </div>

        {/* Settings Button */}
        <button className="mr-4">
          <img
            className="w-6 h-6"
            src="https://i.ibb.co/4t3c3JS/settings-01.png"
            alt="Settings"
          />
        </button>

        {/* Notifications */}
        <div className="rounded-full w-10 h-10 flex items-center justify-center mr-4">
          <img
            src="https://i.ibb.co/Tc8hLSF/bell-01.png"
            alt="Notifications"
            className="w-6 h-6"
          />
        </div>

        {/* User Avatar */}
        <div className="rounded-full bg-gray-300 w-10 h-10 flex items-center justify-center">
          <img
            src="https://i.ibb.co/GHTDfm2/Avatar-7.png"
            alt="User"
            className="rounded-full w-8 h-8"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
