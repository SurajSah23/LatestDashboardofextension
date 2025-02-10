
function DashboardThree() {
  return (
    <div className="sm:w-[326px] sm:h-[506px] lg:w-[390px] lg:h-[606px] sm:mr-64 mt-4 mr-2 rounded-[20px] border border-gray-200 space-y-6 lg:-translate-x-6 shadow-lg">
      {/* Profile Section */}
      <div className="text-center mt-4">
        <img
          src="https://i.ibb.co/X80DpC0/Avatar-8.png"
          alt="Profile"
          className="mx-auto max-w-full h-auto"
        />
        <h2 className="mt-2 text-xl sm:text-2xl font-semibold">Charles Robbie</h2>
        <p className="text-sm text-gray-400">User@gmail.com</p>
      </div>
      <hr className="my-3" />

      {/* Stats List */}
      <div className="space-y-2 px-4">
        {/* Current Plan */}
        <div className="flex items-center bg-blue-50 p-3 rounded-xl">
          <img
            src="https://i.ibb.co/55DYS9Q/Featured-icon-1.png"
            alt="Monitor"
            className="h-10 sm:h-12"
          />
          <span className="ml-3 text-blue-500 flex-1 whitespace-nowrap text-sm">Current Plan</span>
          <span className="text-blue-500 whitespace-nowrap text-sm">Free Plan</span>
        </div>

        {/* Credit */}
        <div className="flex items-center bg-pink-50 p-3 rounded-xl">
          <img
            src="https://i.ibb.co/QbD7jVY/Featured-icon-2.png"
            alt="Credit Card"
            className="h-10 sm:h-12"
          />
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2 relative bottom-2">
              <span className="p-4 -ml-2 text-blue-500 text-sm">Credit</span>
              <span className="text-sm text-blue-500 relative right-10 -mr-2">
                2/50
              </span>
            </div>
            <div className="w-[160px] bg-gray-100 rounded-full h-1.5 relative right-3 bottom-6 ml-5">
              <div className="bg-pink-500 h-1.5 rounded-full w-[75%]"></div>
            </div>
          </div>
        </div>

        {/* Verification */}
        <div className="flex items-center bg-blue-50 p-3 rounded-xl">
          <img
            src="https://i.ibb.co/Cd0sg2b/Featured-icon-5.png"
            alt="Verification"
            className="h-10 sm:h-12"
          />
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2 relative bottom-2">
              <span className="p-4 -ml-2 text-blue-500 text-sm">Verification</span>
              <span className="text-sm text-blue-500 relative right-10 -mr-5">
                2/100
              </span>
            </div>
            <div className="w-[160px] bg-gray-100 rounded-full h-1.5 relative right-3 bottom-6 ml-5">
              <div className="bg-blue-500 h-1.5 rounded-full w-[75%]"></div>
            </div>
          </div>
        </div>

        {/* Next Renewal */}
        <div className="flex items-center bg-green-50 p-3 rounded-xl">
          <img
            src="https://i.ibb.co/SPqCs7x/Featured-icon-4.png"
            alt="Renewal"
            className="h-10 sm:h-12"
          />
          <span className="ml-1 text-green-500 flex-1 text-sm whitespace-nowrap">Next Renewal</span>
          <span className="text-green-500 text-sm whitespace-nowrap">Jan 21, 2025</span>
        </div>
      </div>
    </div>
  );
}

export default DashboardThree;
