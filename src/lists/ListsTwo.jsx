function ListsTwo() {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-2xl shadow-lg p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
          There Aren&apos;t any list
        </h1>
        <p className="text-gray-500 text-sm sm:text-base">
          Create first list using the options below
        </p>
      </div>

      {/* Options Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
        {/* Create List Option */}
        <div className="group cursor-pointer">
          <div className="bg-white rounded-xl p-6 border-2 border-gray-100 hover:border-blue-500 transition-colors duration-200 flex flex-col items-center">
            <div className="w-24 h-24 sm:w-32 sm:h-32 mb-4">
              <img
                src="https://i.ibb.co/Wg5SMQ7/OBJECT.png"
                alt="Create List"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-gray-700 font-medium text-sm sm:text-base">
              Create List
            </span>
          </div>
        </div>

        {/* Create Folder Option */}
        <div className="group cursor-pointer">
          <div className="bg-white rounded-xl p-6 border-2 border-gray-100 hover:border-blue-500 transition-colors duration-200 flex flex-col items-center">
            <div className="w-24 h-24 sm:w-32 sm:h-32 mb-4">
              <img
                src="https://i.ibb.co/jzMd4pV/5461692-2808347-1.png"
                alt="Create Folder"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-gray-700 font-medium text-sm sm:text-base">
              Create Folder
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListsTwo;
