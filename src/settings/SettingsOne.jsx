
function SettingsOne() {
  return (
    <div className="bg-white">
      {/* Header with breadcrumb navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 -translate-y-6">
        <nav
          className="flex items-center space-x-1 text-sm sm:text-base"
          aria-label="Breadcrumb"
        >
          <a href="#" className="text-gray-400 hover:text-gray-600">
            <img
              src="https://i.ibb.co/BHZkFgCz/Breadcrumb-button-base-1.png"
              alt="Home"
              className="w-4 h-4 sm:w-5 sm:h-5"
            />
          </a>
          <img
            src="https://i.ibb.co/Vd62D8s/chevron-right-1.png"
            alt="Arrow"
            className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300"
          />
          <a href="#" className="text-gray-500 hover:text-gray-700">
            Dashboard
          </a>
          <img
            src="https://i.ibb.co/Vd62D8s/chevron-right-1.pngg"
            alt="Arrow"
            className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300"
          />
          <span className="text-gray-900 font-medium">Settings</span>
        </nav>

        {/* Settings Header */}
        <div className="mt-6 sm:mt-8">
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900">
            Settings
          </h1>
        </div>
      </div>

      {/* Content area */}
      <div className=" mt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Add your settings content here */}
          <p className="text-gray-600"></p>
        </div>
      </div>
    </div>
  );
}

export default SettingsOne;
