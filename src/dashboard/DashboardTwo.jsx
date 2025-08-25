function DashboardTwo() {
  return (
    <div className="w-full bg-white border border-gray-200 shadow-lg rounded-2xl p-6">
      <div className="flex flex-col items-center justify-center h-full py-8">
        <h1 className="font-semibold text-xl mb-6 text-gray-900">Lists</h1>
        
        <div className="p-4 mb-6 rounded-xl bg-blue-50">
          <img
            src="https://i.ibb.co/Sv5c8Xk/Frame-30.png"
            alt="List Icon"
            className="w-8 h-8 text-blue-500"
          />
        </div>

        <h2 className="mb-3 text-xl font-semibold text-gray-900">No Lists</h2>
        <p className="mb-6 text-sm text-gray-500 text-center">Click below to create new one</p>

        <button className="px-6 py-3 text-gray-700 transition-colors bg-white border border-gray-300 rounded-lg hover:bg-gray-50 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Create New List
        </button>
      </div>
    </div>
  );
}

export default DashboardTwo;
