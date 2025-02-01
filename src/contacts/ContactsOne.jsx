
function ContactsOne() {
  return (
    <div className="h-[150px] bg-white shadow-lg mb-4">
      {/* Navigation */}
      <nav className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16 space-x-8">
            <img src="https://i.ibb.co/R0kB9qR/home-line.png" alt="Home" className="h-5 w-5 text-gray-500" />
            <img src="https://i.ibb.co/f1kJbtD/chevron-right-1.png" alt="Export" className="h-4 w-4 mr-2" />
            <div className="flex space-x-4">
              <span className="text-gray-500">Dashboard</span>
              <img src="https://i.ibb.co/f1kJbtD/chevron-right-1.png" alt="Export" className="h-4 w-4 mr-2" />
              <span className="text-gray-900 font-medium">Contacts</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">All Contacts</h1>
          <div className="flex space-x-3">
            <button className="px-4 py-2 text-gray-600 text-sm border border-gray-300 rounded-md hover:bg-gray-50">
              Edit Columns
            </button>
            <button className="px-4 py-2 text-gray-600 text-sm border border-gray-300 rounded-md hover:bg-gray-50">
              Create Property
            </button>
            <button className="px-4 py-2 text-gray-600 text-sm border border-gray-300 rounded-md hover:bg-gray-50 flex items-center">
              Import
            </button>
            <button className="px-4 py-2 text-gray-600 text-sm border border-gray-300 rounded-md hover:bg-gray-50 flex items-center">
              Export
            </button>
            <button className="px-4 py-2 text-white text-sm bg-blue-500 rounded-md hover:bg-blue-600 flex items-center">
              Create Contact
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ContactsOne;