function SearchOne() {
  return (
    <div className="bg-white">
      {/* Header Navigation */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-4">
            {/* Breadcrumb and Title */}
            <div className="flex flex-col gap-2">
              {/* Breadcrumb */}
              <div className="flex flex-wrap items-center text-sm text-gray-500">
                <img src="https://i.ibb.co/0MwmJPy/Breadcrumb-button-base.png" alt="Home" className="w-4 h-4" />
                <img src="https://i.ibb.co/7C1PYy0/chevron-right.png" alt="Chevron Right" className="w-4 h-4 mx-1" />
                <span className="text-gray-600">Dashboard</span>
                <img src="https://i.ibb.co/7C1PYy0/chevron-right.png" alt="Chevron Right" className="w-4 h-4 mx-1" />
                <span className="text-gray-900">Search</span>
              </div>
              
              {/* Title and Actions */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">Search</h1>
                <div className="flex gap-2 sm:gap-3 flex-wrap">
                  <button className="px-3 sm:px-4 py-2 text-sm font-medium text-blue-600 bg-white border border-transparent rounded-md hover:bg-blue-50">
                    Leads
                  </button>
                  <button className="px-3 sm:px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                    Companies
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchOne;
