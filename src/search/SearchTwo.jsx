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
    <div className="rounded-lg border border-gray-200 p-8 lg:translate-x-6 w-[1000px] lg:-translate-y-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center space-x-6 mb-6 border-b border-gray-200 pb-4">
          <div className="text-blue-500 font-medium">New(16.0M)</div>
          <div className="text-gray-500">Saved (0)</div>
          <div className="text-gray-500">Total(16.0M)</div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow">
          {/* Table Header */}
          <div className="grid grid-cols-2 px-6 py-4 border-b border-gray-200">
            <div className="text-sm text-gray-500">Company</div>
            <div className="text-sm text-gray-500 border-l border-gray-200 pl-6">
              Contact
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-200">
            {currentCompanies.map((company) => (
              <div
                key={company.id}
                className="grid grid-cols-2 divide-x divide-gray-200"
              >
                <div className="flex items-center space-x-4 px-6 py-4">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="w-10 h-10 rounded-lg"
                  />
                  <div>
                    <div className="font-medium text-gray-900 w-[100px] whitespace-nowrap">
                      {company.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {company.website}
                    </div>
                  </div>
                  <div className="flex items-center text-gray-500 relative right-8 lg:translate-x-40">
                    <img
                      src="https://i.ibb.co/rGHWJ9Cw/tdesign-member-filled-1.png"
                      alt=""
                    />
                    <span className="text-sm ml-4">{company.employeeCount}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <img
                      src={company.contact.avatar}
                      alt={company.contact.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <div className="font-medium text-gray-900">
                        {company.contact.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {company.contact.role}
                      </div>
                      <div className="text-sm text-gray-500">
                        {company.contact.location}
                      </div>
                    </div>
                  </div>
                  <button className="px-4 py-2 border border-blue-200 hover:bg-blue-500 text-blue-400 rounded-lg text-sm">
                    Show Mail
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-4 px-6 py-4">
          <button
            className="flex items-center px-4 py-2 text-sm text-gray-600 bg-white rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <div className="text-sm text-gray-600">
            Page {currentPage} of {totalPages}
          </div>
          <button
            className="flex items-center px-4 py-2 text-sm text-gray-600 bg-white rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchTwo;
