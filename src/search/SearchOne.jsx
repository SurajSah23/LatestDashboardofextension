function SearchOne() {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-2xl shadow-lg p-6">
      {/* Header Navigation */}
      <div className="mb-6">
        {/* Breadcrumb and Title */}
        <div className="flex flex-col gap-4">
          {/* Breadcrumb */}
          <div className="flex flex-wrap items-center text-sm text-gray-500">
            <img src="https://i.ibb.co/0MwmJPy/Breadcrumb-button-base.png" alt="Home" className="w-4 h-4" />
            <img src="https://i.ibb.co/7C1PYy0/chevron-right.png" alt="Chevron Right" className="w-4 h-4 mx-1" />
            <span className="text-gray-600">Dashboard</span>
            <img src="https://i.ibb.co/7C1PYy0/chevron-right.png" alt="Chevron Right" className="w-4 h-4 mx-1" />
            <span className="text-gray-900 font-medium">Search</span>
          </div>
          
          {/* Title and Actions */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">Search</h1>
            <div className="flex gap-2 sm:gap-3 flex-wrap">
              <button className="px-4 py-2 text-sm font-medium text-blue-600 bg-white border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                Leads
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                Companies
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchOne;
