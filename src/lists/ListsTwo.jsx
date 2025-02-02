function ListsTwo() {
  return (
    <div className="flex flex-col items-center pt-12 mt-4 w-full max-w-[1000px] bg-white shadow-lg border rounded-lg h-auto sm:h-[500px] mx-auto p-6 sm:p-12">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
          There Aren&apos;t any list
        </h1>
        <p className="text-gray-500 mb-8 sm:mb-12 text-sm sm:text-base">
          Create first list using the options below
        </p>
      </div>

      {/* Options Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 w-full max-w-[600px]">
        {/* Create List Option */}
        <div className="group cursor-pointer">
          <div className="bg-white rounded-lg p-6 sm:p-8 border-2 border-gray-100 hover:border-blue-500 transition-colors duration-200 flex flex-col items-center">
            <div className="w-32 sm:w-48 h-32 sm:h-48 mb-4">
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
          <div className="bg-white rounded-lg p-6 sm:p-8 border-2 border-gray-100 hover:border-blue-500 transition-colors duration-200 flex flex-col items-center">
            <div className="w-32 sm:w-48 h-32 sm:h-48 mb-4">
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
