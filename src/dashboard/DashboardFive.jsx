function DashboardFive() {
  return (
    <div className="h-[600px] w-full max-w-[280px] bg-white border rounded-xl shadow-sm p-6 space-y-6 absolute top-3/4 left-3/4 mt-64 mr-1 ml-7 mb-10">
      {/* Suggest For You Section */}
      <div className="space-y-3">
        <h2 className="text-[#1d2b4e] text-lg font-semibold">
          Suggest For You
        </h2>

        {/* Chrome Extension Items */}
        <div className="space-y-2">
          <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
            <div className="flex items-center gap-3">
              <img
                src="https://i.ibb.co/FJLVz9R/chrome.png"
                alt="Chrome"
                className="w-6 h-6"
              />
              <div>
                <p className="text-[#1d2b4e] font-medium">
                  Install chrome extension
                </p>
                <p className="text-gray-400 text-sm">Work across the web</p>
              </div>
            </div>
            <img
              src="https://i.ibb.co/6HYwCzm/Icon-1.png"
              alt="Plus icon"
              className="w-5 h-5 text-gray-400"
            />
          </div>

          <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
            <div className="flex items-center gap-3">
              <img
                src="https://i.ibb.co/Yky23KS/Layer-1.png"
                alt="Sheet icon"
                className="w-6 h-6 text-[#0F9D58]"
              />
              <div>
                <p className="text-[#1d2b4e] font-medium">
                  Install chrome extension
                </p>
                <p className="text-gray-400 text-sm">Work across the web</p>
              </div>
            </div>
            <img
              src="https://i.ibb.co/6HYwCzm/Icon-1.png"
              alt="Plus icon"
              className="w-5 h-5 text-gray-400"
            />
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-[#1d2b4e] text-lg font-semibold">Team</h2>
          <button className="px-4 py-2 text-blue-500 hover:bg-blue-50 rounded-lg text-sm">
            Invite Team Member
          </button>
        </div>
      </div>

      {/* Integrations Section */}
      <div className="space-y-3">
        <h2 className="text-[#1d2b4e] text-lg font-semibold">Integrations</h2>

        {/* Google Sheets Items */}
        <div className="space-y-2">
          {[1, 2, 3].map((index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <img
                  src="https://i.ibb.co/Yky23KS/Layer-1.png"
                  alt="Sheet icon"
                  className="w-6 h-6 text-[#0F9D58]"
                />
                <div>
                  <p className="text-[#1d2b4e] font-medium">Google Sheets</p>
                  <p className="text-gray-400 text-sm">Spreadsheets</p>
                </div>
              </div>
              <img
                src="https://i.ibb.co/6HYwCzm/Icon-1.png"
                alt="Plus icon"
                className="w-5 h-5 text-gray-400"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DashboardFive;
