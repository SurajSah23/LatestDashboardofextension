function ListsOne() {
  return (
    <div className="border-b border-gray-200 h-auto sm:h-[140px] lg:-translate-y-8">
      {/* Navigation */}
      <nav>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap sm:flex-nowrap items-center h-16 space-x-2 sm:space-x-8">
            <img src="https://i.ibb.co/R0kB9qR/home-line.png" alt="Home" className="h-5 w-5 text-gray-500" />
            <img src="https://i.ibb.co/f1kJbtD/chevron-right-1.png" alt="Export" className="h-4 w-4" />
            <div className="flex space-x-2 sm:space-x-4">
              <span className="text-gray-500 text-sm sm:text-base">Dashboard</span>
              <img src="https://i.ibb.co/f1kJbtD/chevron-right-1.png" alt="Export" className="h-4 w-4" />
              <span className="text-gray-900 font-medium text-sm sm:text-base">Lists</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-3 sm:space-y-0 mb-4 sm:mb-6">
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">Lists</h1>
          <div className="flex space-x-3">
            <button className="px-4 py-2 text-white text-sm bg-blue-500 rounded-md hover:bg-blue-600 flex items-center">
              Create List
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ListsOne;
