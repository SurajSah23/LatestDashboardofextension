function DashboardFive() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Suggest For You Section */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6">
          <div className="space-y-4">
            <h2 className="text-gray-900 text-lg font-semibold">
              Suggest For You
            </h2>
            {/* Chrome Extension Items */}
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors duration-200">
                <div className="flex items-center gap-3">
                  <img
                    src="https://i.ibb.co/FJLVz9R/chrome.png"
                    alt="Chrome"
                    className="w-6 h-6"
                  />
                  <div>
                    <p className="text-gray-900 font-medium text-sm">
                      Install chrome extension
                    </p>
                    <p className="text-gray-500 text-xs">Work across the web</p>
                  </div>
                </div>
                <img
                  src="https://i.ibb.co/6HYwCzm/Icon-1.png"
                  alt="Plus icon"
                  className="w-5 h-5 text-gray-400"
                />
              </div>

              <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors duration-200">
                <div className="flex items-center gap-3">
                  <img
                    src="https://i.ibb.co/Yky23KS/Layer-1.png"
                    alt="Sheet icon"
                    className="w-6 h-6 text-green-600"
                  />
                  <div>
                    <p className="text-gray-900 font-medium text-sm">
                      Install chrome extension
                    </p>
                    <p className="text-gray-500 text-xs">Work across the web</p>
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
        </div>

        {/* Team Section */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-gray-900 text-lg font-semibold">Team</h2>
              <button className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg text-sm font-medium transition-colors duration-200">
                Invite Team Member
              </button>
            </div>
            <div className="text-center py-8">
              <p className="text-gray-500 text-sm">No team members yet</p>
            </div>
          </div>
        </div>

        {/* Integrations Section */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6">
          <div className="space-y-4">
            <h2 className="text-gray-900 text-lg font-semibold">Integrations</h2>

            {/* Google Sheets Items */}
            <div className="space-y-3">
              {[1, 2, 3].map((index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors duration-200"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src="https://i.ibb.co/Yky23KS/Layer-1.png"
                      alt="Sheet icon"
                      className="w-6 h-6 text-green-600"
                    />
                    <div>
                      <p className="text-gray-900 font-medium text-sm">Google Sheets</p>
                      <p className="text-gray-500 text-xs">Spreadsheets</p>
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
      </div>
    </div>
  );
}

export default DashboardFive;
