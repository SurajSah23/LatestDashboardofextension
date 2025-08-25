import { useState } from "react";

function DashboardOne() {
  const [activeTab, setActiveTab] = useState("recent");

  return (
    <div className="w-full bg-white rounded-2xl border border-gray-200 shadow-lg p-6">
      <div className="h-full flex flex-col">
        {/* Tabs */}
        <div className="flex flex-wrap gap-4 mb-6">
          <button
            onClick={() => setActiveTab("recent")}
            className={`pb-3 px-3 text-sm font-medium transition-colors duration-200 border-b-2 ${
              activeTab === "recent"
                ? "text-blue-500 border-blue-500"
                : "text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Recent Search
          </button>
          <button
            onClick={() => setActiveTab("saved")}
            className={`pb-3 px-3 text-sm font-medium transition-colors duration-200 border-b-2 ${
              activeTab === "saved"
                ? "text-blue-500 border-blue-500"
                : "text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Saved Search
          </button>
        </div>

        {/* Empty State */}
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <div className="mb-6">
            <img
              src="https://i.ibb.co/Ns17HnS/Illustration.png"
              alt="No Search"
              className="w-24 h-24 sm:w-32 sm:h-32 mx-auto"
            />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
            No Recent Search
          </h3>
          <p className="text-sm text-gray-500 mb-6 max-w-sm mx-auto px-4">
            Your search &quot;Landing page design&quot; did not match any
            projects. Try again.
          </p>

          <button className="inline-flex items-center px-6 py-3 text-black border border-gray-300 rounded-lg transition-colors duration-200 font-semibold hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            New Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default DashboardOne;
