function ContactsOne() {
  return (
    <div className="h-auto shadow-lg mb-4 lg:-translate-y-8">
      {/* Navigation */}
      <nav className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16 space-x-4 sm:space-x-8 flex-wrap">
            <img src="https://i.ibb.co/R0kB9qR/home-line.png" alt="Home" className="h-5 w-5 text-gray-500" />
            <img src="https://i.ibb.co/f1kJbtD/chevron-right-1.png" alt="Export" className="h-4 w-4" />
            <div className="flex space-x-2 sm:space-x-4">
              <span className="text-gray-500 text-sm sm:text-base">Dashboard</span>
              <img src="https://i.ibb.co/f1kJbtD/chevron-right-1.png" alt="Export" className="h-4 w-4" />
              <span className="text-gray-900 font-medium text-sm sm:text-base">Contacts</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4 sm:mb-6">
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">All Contacts</h1>
          <div className="flex flex-wrap gap-2 sm:gap-3 mt-2 sm:mt-0">
            <button className="px-3 sm:px-4 py-2 text-gray-600 text-xs sm:text-sm border border-gray-300 rounded-md hover:bg-gray-50">
              Edit Columns
            </button>
            <button className="px-3 sm:px-4 py-2 text-gray-600 text-xs sm:text-sm border border-gray-300 rounded-md hover:bg-gray-50">
              Create Property
            </button>
            <button className="px-3 sm:px-4 py-2 text-gray-600 text-xs sm:text-sm border border-gray-300 rounded-md hover:bg-gray-50 flex items-center">
              Import
            </button>
            <button className="px-3 sm:px-4 py-2 text-gray-600 text-xs sm:text-sm border border-gray-300 rounded-md hover:bg-gray-50 flex items-center">
              Export
            </button>
            <button className="px-3 sm:px-4 py-2 text-white text-xs sm:text-sm bg-blue-500 rounded-md hover:bg-blue-600 flex items-center">
              Create Contact
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ContactsOne;
