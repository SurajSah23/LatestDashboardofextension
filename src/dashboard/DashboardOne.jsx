import { useState } from "react";

function DashboardOne() {
  const [activeTab, setActiveTab] = useState("recent");

  return (
    <div className="w-[685px] h-[390px] rounded-[20px] border-[1px] mt-4 shadow-lg ml-4">
      <div className="w-[249px] h-[42px] gap-[18]">
        {/* Tabs */}
        <div className="flex space-x-6 border-gray-100 mb-8 p-[20px] whitespace-nowrap">
          <button
            onClick={() => setActiveTab("recent")}
            className={`pb-4 px-2 text-sm font-medium transition-colors duration-200 ${
              activeTab === "recent"
                ? "text-blue-500 border-b-2 border-blue-500"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Recent Search
          </button>
          <button
            onClick={() => setActiveTab("saved")}
            className={`pb-4 px-2 text-sm font-medium transition-colors duration-200 ${
              activeTab === "saved"
                ? "text-blue-500 border-b-2 border-blue-500"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Saved Search
          </button>
        </div>

        {/* Empty State */}
        <div className="absolute left-[120px] text-center">
          <div className="inline-flex justify-center pt-1">
            <img
              src="https://i.ibb.co/Ns17HnS/Illustration.png"
              alt=""
              className="h-1/2 w-32 ml-9 mb-3 translate-y-[-30px]"
            />
          </div>
          <br />
          <br />

          <h3 className="text-lg font-semibold text-gray-900 mb-2 translate-y-[-40px]">
            No Recent Search
          </h3>
          <p className="text-sm text-gray-500 mb-6 max-w-xs mx-auto translate-y-[-40px]">
            Your search &quot; Landing page design &quot; did not match any
            projects. try again.
          </p>

          <button className="inline-flex items-center px-4 py-2 text-black border rounded-lg transition-colors duration-200 translate-y-[-40px]">
            New Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default DashboardOne;
