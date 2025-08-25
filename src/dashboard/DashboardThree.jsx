
function DashboardThree() {
  return (
    <div className="w-full bg-white border border-gray-200 shadow-lg rounded-2xl p-6">
      {/* Profile Section */}
      <div className="text-center mb-6">
        <img
          src="https://i.ibb.co/X80DpC0/Avatar-8.png"
          alt="Profile"
          className="mx-auto w-20 h-20 sm:w-24 sm:h-24 rounded-full"
        />
        <h2 className="mt-3 text-xl sm:text-2xl font-semibold text-gray-900">Charles Robbie</h2>
        <p className="text-sm text-gray-500">User@gmail.com</p>
      </div>
      
      <hr className="my-6" />

      {/* Stats List */}
      <div className="space-y-4">
        {/* Current Plan */}
        <div className="flex items-center bg-blue-50 p-4 rounded-xl">
          <img
            src="https://i.ibb.co/55DYS9Q/Featured-icon-1.png"
            alt="Monitor"
            className="w-10 h-10 sm:w-12 sm:h-12"
          />
          <span className="ml-4 text-blue-600 flex-1 text-sm font-medium">Current Plan</span>
          <span className="text-blue-600 text-sm font-medium">Free Plan</span>
        </div>

        {/* Credit */}
        <div className="flex items-center bg-pink-50 p-4 rounded-xl">
          <img
            src="https://i.ibb.co/QbD7jVY/Featured-icon-2.png"
            alt="Credit Card"
            className="w-10 h-10 sm:w-12 sm:h-12"
          />
          <div className="flex-1 ml-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-blue-600 text-sm font-medium">Credit</span>
              <span className="text-blue-600 text-sm font-medium">3/50</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-pink-500 h-2 rounded-full w-[60%]"></div>
            </div>
          </div>
        </div>

        {/* Verification */}
        <div className="flex items-center bg-blue-50 p-4 rounded-xl">
          <img
            src="https://i.ibb.co/Cd0sg2b/Featured-icon-5.png"
            alt="Verification"
            className="w-10 h-10 sm:w-12 sm:h-12"
          />
          <div className="flex-1 ml-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-blue-600 text-sm font-medium">Verification</span>
              <span className="text-blue-600 text-sm font-medium">2/100</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full w-[20%]"></div>
            </div>
          </div>
        </div>

        {/* Next Renewal */}
        <div className="flex items-center bg-green-50 p-4 rounded-xl">
          <img
            src="https://i.ibb.co/SPqCs7x/Featured-icon-4.png"
            alt="Renewal"
            className="w-10 h-10 sm:w-12 sm:h-12"
          />
          <span className="ml-4 text-green-600 flex-1 text-sm font-medium">Next Renewal</span>
          <span className="text-green-600 text-sm font-medium">Jan 21, 2025</span>
        </div>
      </div>
    </div>
  );
}

export default DashboardThree;
