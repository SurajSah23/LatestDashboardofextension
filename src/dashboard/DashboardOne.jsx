import { useState } from "react";

function DashboardOne() {
  const [activeTab, setActiveTab] = useState("recent");

  return (
    <div className="lg:w-[600px] lg:h-[390px] lg:ml-6 rounded-[20px] border-[1px] mt-4 shadow-lg p-4 lg:translate-x-1">
      <div className="">
        {/* Tabs */}
        <div className="flex flex-wrap space-x-5 mb-8 p-4 sm:p-6">
          <button
            onClick={() => setActiveTab("recent")}
            className={`pb-4 px-2 text-sm font-medium transition-colors duration-200 ${
              activeTab === "recent"
                ? "text-[#039FFE] border-b-2 border-blue-500"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Recent Search
          </button>
          <button
            onClick={() => setActiveTab("saved")}
            className={`pb-4 px-2 text-sm font-medium transition-colors duration-200 ${
              activeTab === "saved"
                ? "text-[#039FFE] border-b-2 border-blue-500"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Saved Search
          </button>
        </div>

        {/* Empty State */}
        <div className="text-center">
          <div className="inline-flex justify-center pt-1">
            <img
              src="https://i.ibb.co/Ns17HnS/Illustration.png"
              alt="No Search"
              className="w-full sm:w-32 h-auto mb-3 translate-y-[-30px]"
            />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2 translate-y-[-40px]">
            No Recent Search
          </h3>
          <p className="text-sm text-gray-500 mb-6 max-w-xs mx-auto translate-y-[-40px]">
            Your search &quot; Landing page design &quot; did not match any
            projects. Try again.
          </p>

          <button className="inline-flex items-center px-4 py-2 text-black border rounded-lg transition-colors duration-200 translate-y-[-40px] font-semibold">
            New Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default DashboardOne;
