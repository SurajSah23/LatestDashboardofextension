
function SettingsThree() {
  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-start border-b border-gray-200 pb-4">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Personal info</h1>
            <p className="text-gray-500 mt-1">Update your photo and personal details here.</p>
          </div>
          <div className="flex gap-3">
            <button 
              className="px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100 border border-gray-300 font-medium"
            >
              Cancel
            </button>
            <button 
              className="px-4 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600 font-medium"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsThree;
