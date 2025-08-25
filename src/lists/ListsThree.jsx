function ListsThree() {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-2xl shadow-lg p-6">
      <div className="mb-4">
        <h2 className="bg-blue-100 text-blue-600 font-medium py-2 px-4 rounded-lg text-center sm:text-left">
          All Lists
        </h2>
      </div>
      <div className="flex items-center text-gray-600 hover:bg-blue-50 rounded-lg p-3 cursor-pointer transition-colors duration-200">
        <span className="text-sm font-medium">Folder</span>
      </div>
    </div>
  );
}

export default ListsThree;
