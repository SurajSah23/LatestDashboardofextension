import { useState } from "react";

const companies = [
  {
    id: 1,
    name: "Catalog",
    website: "catalogapp.io",
    logo: "https://i.ibb.co/yYbRRGs/Avatar-9.png",
    employeeCount: 22,
    contact: {
      name: "Phoenix Baker",
      role: "Co-Founder",
      location: "United State",
      avatar: "https://i.ibb.co/zXpvP7n/Avatar-15.png",
    },
  },
  {
    id: 2,
    name: "Circooles",
    website: "getcirooles.com",
    logo: "https://i.ibb.co/NVdthvs/Avatar-10.png",
    employeeCount: 22,
    contact: {
      name: "Lana Steiner",
      role: "Co-Founder",
      location: "UK",
      avatar: "https://i.ibb.co/D8h1ns4/Avatar-16.png",
    },
  },
  {
    id: 3,
    name: "Command+R",
    website: "cmdr.ai",
    logo: "https://i.ibb.co/Z6GQFCr/Avatar-11.png",
    employeeCount: 22,
    contact: {
      name: "Demi Wilkinson",
      role: "Co-Founder",
      location: "India",
      avatar: "https://i.ibb.co/bBr7Cnb/Avatar-17.png",
    },
  },
  {
    id: 4,
    name: "Hourglass",
    website: "hourglass.app",
    logo: "https://i.ibb.co/7WBVbKs/Avatar-12.png",
    employeeCount: 22,
    contact: {
      name: "Candice Wu",
      role: "Co-Founder",
      location: "India",
      avatar: "https://i.ibb.co/3YTXpbz/Avatar-18.png",
    },
  },
  {
    id: 5,
    name: "Layers",
    website: "getlayers.io",
    logo: "https://i.ibb.co/T8VMBVQ/Avatar-13.png",
    employeeCount: 22,
    contact: {
      name: "Natali Craig",
      role: "Co-Founder",
      location: "US",
      avatar: "https://i.ibb.co/0X0RBbJ/Avatar-19.png",
    },
  },
  {
    id: 6,
    name: "Quotient",
    website: "quotient.co",
    logo: "https://i.ibb.co/CB3skXt/Avatar-22.png",
    employeeCount: 22,
    contact: {
      name: "Drew Cano",
      role: "Co-Founder",
      location: "New York, US",
      avatar: "https://i.ibb.co/Sf33rjp/Avatar-21.png",
    },
  },
  {
    id: 7,
    name: "Sisyphus",
    website: "sisyphus.com",
    logo: "https://i.ibb.co/L5NXSMJ/Avatar-14.png",
    employeeCount: 22,
    contact: {
      name: "Orlando Diggs",
      role: "Co-Founder",
      location: "India",
      avatar: "https://i.ibb.co/5579dVd/Avatar-20.pngp",
    },
  },
  {
    id: 8,
    name: "Hourglass Pro",
    website: "hourglasspro.app",
    logo: "https://i.ibb.co/L5NXSMJ/Avatar-14.png",
    employeeCount: 22,
    contact: {
      name: "Drew Baker",
      role: "Co-Founder",
      location: "UK",
      avatar: "https://i.ibb.co/5579dVd/Avatar-20.png",
    },
  },
  {
    id: 9,
    name: "Quotient Plus",
    website: "quotientplus.co",
    logo: "https://i.ibb.co/L5NXSMJ/Avatar-14.png",
    employeeCount: 22,
    contact: {
      name: "Kate Morrison",
      role: "Co-Founder",
      location: "India",
      avatar: "https://i.ibb.co/5579dVd/Avatar-20.png",
    },
  },
];

// Generate more companies to fill 90 items (10 pages * 9 items)
companies.push(...Array.from({ length: 81 }, (_, i) => ({
  id: i + 10,
  name: `Company ${i + 10}`,
  website: `company${i + 10}.com`,
  logo: 'https://images.unsplash.com/photo-1633409361618-c73427e4e206?w=40&h=40&fit=crop',
  employeeCount: 22,
  contact: {
    name: `Contact ${i + 10}`,
    role: 'Co-Founder',
    location: ['US', 'UK', 'India'][Math.floor(Math.random() * 3)],
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop'
  }
})));

function SearchTwo() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const totalPages = Math.ceil(companies.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCompanies = companies.slice(startIndex, endIndex);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="w-full bg-white border border-gray-200 rounded-2xl shadow-lg p-6">
      {/* Header */}
      <div className="flex flex-wrap items-center gap-4 mb-6 border-b border-gray-200 pb-4">
        <div className="text-blue-600 font-medium">New(16.0M)</div>
        <div className="text-gray-500">Saved (0)</div>
        <div className="text-gray-500">Total(16.0M)</div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        {/* Table Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 px-4 lg:px-6 py-4 border-b border-gray-200 bg-gray-50">
          <div className="text-sm text-gray-600 flex items-center gap-3">
            <img src="https://i.ibb.co/DPcLRcSt/Checkbox-base.png" alt="Select all" className="w-4 h-4" />
            <span>Company</span>
          </div>
          <div className="text-sm text-gray-600 lg:border-l lg:border-gray-200 lg:pl-6 mt-2 lg:mt-0">
            Contact
          </div>
        </div>

        {/* Table Body */}
        <div className="divide-y divide-gray-200">
          {currentCompanies.map((company) => (
            <div
              key={company.id}
              className="grid grid-cols-1 lg:grid-cols-2 lg:divide-x lg:divide-gray-200 hover:bg-gray-50 transition-colors duration-200"
            >
              {/* Company Section */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 px-4 lg:px-6 py-4">
                <div className="flex items-center gap-3 flex-1">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="w-10 h-10 rounded-lg object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-gray-900 truncate">
                      {company.name}
                    </div>
                    <div className="text-sm text-gray-500 truncate">
                      {company.website}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                  <img
                    src="https://i.ibb.co/rGHWJ9Cw/tdesign-member-filled-1.png"
                    alt="Employees"
                    className="w-4 h-4"
                  />
                  <span className="text-sm">{company.employeeCount}</span>
                </div>
              </div>

              {/* Contact Section */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-4 lg:px-6 py-4 lg:border-l lg:border-gray-200">
                <div className="flex items-center gap-3 flex-1">
                  <img
                    src={company.contact.avatar}
                    alt={company.contact.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-gray-900 truncate">
                      {company.contact.name}
                    </div>
                    <div className="text-sm text-gray-500 truncate">
                      {company.contact.role}
                    </div>
                    <div className="text-sm text-gray-500 truncate">
                      {company.contact.location}
                    </div>
                  </div>
                </div>
                <button className="px-4 py-2 border border-blue-200 hover:bg-blue-50 text-blue-600 rounded-lg text-sm font-medium transition-colors duration-200 whitespace-nowrap">
                  Show Mail
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 px-4 lg:px-6 py-4">
        <button
          className="flex items-center px-4 py-2 text-sm text-gray-600 bg-white rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <div className="text-sm text-gray-600">
          Page {currentPage} of {totalPages}
        </div>
        <button
          className="flex items-center px-4 py-2 text-sm text-gray-600 bg-white rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default SearchTwo;
