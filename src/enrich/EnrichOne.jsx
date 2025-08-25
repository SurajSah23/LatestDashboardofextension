import { useState } from "react";

function EnrichOne() {
  const [activeTab, setActiveTab] = useState("lead");

  const tabs = [
    { id: "lead", label: "Find Lead" },
    { id: "company", label: "Find Company" },
    { id: "linkedin", label: "Find data by linkedin URL" },
    { id: "email", label: "Email lookup" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "lead":
        return (
          <>
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <div className="mb-4 w-full sm:w-1/2">
                <label className="block text-gray-600 mb-2 text-sm font-medium">Lead Name</label>
                <input
                  type="text"
                  placeholder="Enter Lead Name"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                />
              </div>
              <div className="mb-6 w-full sm:w-1/2">
                <label className="block text-gray-600 mb-2 text-sm font-medium">Enter Domain</label>
                <input
                  type="text"
                  placeholder="Enter Domain"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                />
              </div>
            </div>
          </>
        );
      case "company":
        return (
          <div className="mb-6 w-full">
            <label className="block text-gray-600 mb-2 text-sm font-medium">Enter Domain</label>
            <input
              type="text"
              placeholder="Enter Domain"
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            />
          </div>
        );
      case "linkedin":
        return (
          <div className="mb-6 w-full">
            <label className="block text-gray-600 mb-2 text-sm font-medium">LinkedIn url</label>
            <input
              type="text"
              placeholder="Enter LinkedIn url"
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            />
          </div>
        );
      case "email":
        return (
          <div className="mb-6 w-full">
            <label className="block text-gray-600 mb-2 text-sm font-medium">Enter Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full bg-white border border-gray-200 rounded-2xl shadow-lg p-6">
      <div className="flex flex-wrap justify-start sm:justify-center gap-4 border-b border-gray-200 mb-6 pb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`pb-2 px-3 text-sm sm:text-base font-medium transition-colors duration-200 ${
              activeTab === tab.id
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <form className="space-y-4">
        {renderContent()}

        <div className="flex justify-center sm:justify-start">
          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
          >
            Find Lead
          </button>
        </div>
      </form>
    </div>
  );
}

export default EnrichOne;
