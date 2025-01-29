function ListsTwo() {
  return (
    <div className="flex flex-col h-[500px] items-center pt-12 mt-4 w-[1000px] bg-white shadow-lg  border rounded-lg ">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">
          There Aren&apos;t any list
        </h1>
        <p className="text-gray-500 mb-12">
          Create first list using the options below
        </p>
      </div>

      {/* Options Grid */}
      <div className="grid grid-cols-2 gap-8">
        {/* Create List Option */}
        <div className="group cursor-pointer">
          <div className="bg-white rounded-lg p-8 border-2 border-gray-100 hover:border-blue-500 transition-colors duration-200">
            <div className="flex flex-col items-center">
              <div className="w-48 h-48 mb-4">
                <img
                  src="https://i.ibb.co/Wg5SMQ7/OBJECT.png"
                  alt="Create List"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-700 font-medium">Create List</span>
              </div>
            </div>
          </div>
        </div>

        {/* Create Folder Option */}
        <div className="group cursor-pointer">
          <div className="bg-white rounded-lg p-8 border-2 border-gray-100 hover:border-blue-500 transition-colors duration-200">
            <div className="flex flex-col items-center">
              <div className="w-48 h-48 mb-4">
                <img
                  src="https://i.ibb.co/jzMd4pV/5461692-2808347-1.png"
                  alt="Create Folder"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-700 font-medium">Create Folder</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListsTwo;
