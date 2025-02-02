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
              <div className="mb-4 sm:w-[350px] w-full">
                <label className="block text-gray-600 mb-2">Lead Name</label>
                <input
                  type="text"
                  placeholder="Enter Lead Name"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-400"
                />
              </div>
              <div className="mb-6 sm:w-[350px] w-full">
                <label className="block text-gray-600 mb-2">Enter Domain</label>
                <input
                  type="text"
                  placeholder="Enter Domain"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-400"
                />
              </div>
            </div>
          </>
        );
      case "company":
        return (
          <div className="mb-6 w-full sm:w-[350px]">
            <label className="block text-gray-600 mb-2">Enter Domain</label>
            <input
              type="text"
              placeholder="Enter Domain"
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-400"
            />
          </div>
        );
      case "linkedin":
        return (
          <div className="mb-6 w-full sm:w-[350px]">
            <label className="block text-gray-600 mb-2">LinkedIn url</label>
            <input
              type="text"
              placeholder="Enter LinkedIn url"
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-400"
            />
          </div>
        );
      case "email":
        return (
          <div className="mb-6 w-full sm:w-[350px]">
            <label className="block text-gray-600 mb-2">Enter Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-400"
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex flex-wrap justify-start sm:justify-center space-x-0 sm:space-x-6 border-b border-gray-200 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-4 px-2 text-sm sm:text-base ${
                activeTab === tab.id
                  ? "text-blue-500 border-b-2 border-blue-500 -mb-[1px]"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <form className="space-y-4">
          {renderContent()}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Find Lead
          </button>
        </form>
      </div>
    </div>
  );
}

export default EnrichOne;
