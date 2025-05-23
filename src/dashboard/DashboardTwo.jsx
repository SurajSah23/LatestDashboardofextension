function DashboardTwo() {
  return (
    <div className="border border-gray-200 shadow-xl lg:w-[460px] lg:h-[390px] rounded-2xl lg:-translate-y-4 lg:-translate-x-2 mt-8 w-[370px] -translate-x-10">
      <div className="flex flex-col items-center justify-center py-12">
        <h1 className="font-semibold text-xl lg:-translate-x-40 lg:-translate-y-9">Lists</h1>
        <div className="p-3 mb-4 rounded-lg bg-blue-50">
          <img
            src="https://i.ibb.co/Sv5c8Xk/Frame-30.png"
            alt="List Icon"
            className="w-6 h-6 text-blue-500"
          />
        </div>

        <h2 className="mb-2 text-xl font-semibold text-gray-900">No Lists</h2>
        <p className="mb-6 text-sm text-gray-500">Click below to create new one</p>

        <button className="px-6 py-2 text-gray-700 transition-colors bg-white border border-gray-300 rounded-lg hover:bg-gray-50 font-semibold">
          Create New List
        </button>
      </div>
    </div>
  );
}

export default DashboardTwo;
