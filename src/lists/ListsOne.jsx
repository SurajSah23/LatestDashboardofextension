function ListsOne() {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-2xl shadow-lg p-6">
      {/* Navigation */}
      <div className="mb-6">
        <nav className="flex items-center space-x-2 sm:space-x-4 flex-wrap">
          <img src="https://i.ibb.co/R0kB9qR/home-line.png" alt="Home" className="h-5 w-5 text-gray-500" />
          <img src="https://i.ibb.co/f1kJbtD/chevron-right-1.png" alt="Chevron" className="h-4 w-4" />
          <div className="flex items-center space-x-2 sm:space-x-4">
            <span className="text-gray-500 text-sm sm:text-base">Dashboard</span>
            <img src="https://i.ibb.co/f1kJbtD/chevron-right-1.png" alt="Chevron" className="h-4 w-4" />
            <span className="text-gray-900 font-medium text-sm sm:text-base">Lists</span>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">Lists</h1>
        <div className="flex space-x-3">
          <button className="px-4 py-2 text-white text-sm bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center">
            Create List
          </button>
        </div>
      </div>
    </div>
  );
}

export default ListsOne;
