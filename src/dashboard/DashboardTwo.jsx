function DashboardTwo() {
  return (
      <div className="mt-4 ml-16 border border-gray-200 shadow-xl w-[390px] h-[383px] bg-white-500 rounded-2xl">
        <div className="flex flex-col items-center justify-center py-12">
          <div className="p-3 mb-4 rounded-lg bg-blue-50">
            <img
              src="https://i.ibb.co/Sv5c8Xk/Frame-30.png"
              alt="List Icon"
              className="w-6 h-6 text-blue-500"
            />
          </div>

          <h2 className="mb-2 text-xl font-semibold text-gray-900">No Lists</h2>
          <p className="mb-6 text-sm text-gray-500">Click below to create new one</p>

          <button className="px-6 py-2 text-gray-700 transition-colors bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
            Create New List
          </button>
        </div>
      </div>
  );
}

export default DashboardTwo;
