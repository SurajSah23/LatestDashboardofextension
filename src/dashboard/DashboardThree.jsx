
function DashboardThree() {
  return (
      <div className="bg-white h-[586px] rounded-2xl shadow-lg w-full  max-w-[470px] p-6 border border-gray-200 mt-4 mr-10">
        {/* Profile Section */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-20 h-20 mb-3 rounded-full bg-blue-50">
            <img
              src="https://i.ibb.co/X80DpC0/Avatar-8.png"
              alt="Profile"
              className="object-cover w-full h-full rounded-full"
            />
          </div>
          <h2 className="text-xl font-semibold text-gray-800">Charles Robbie</h2>
          <p className="text-sm text-gray-400">User @gmail.com</p>
        </div>

        {/* Stats List */}
        <div className="space-y-4">
          {/* Current Plan */}
          <div className="flex items-center">
            <div className="flex items-center justify-center w-10 h-10 mr-3 rounded-xl bg-blue-50">
              <img
                src="https://i.ibb.co/55DYS9Q/Featured-icon-1.png" // Placeholder for Monitor Icon
                alt="Monitor"
                className="w-5 h-5 text-blue-600"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Current Plan</span>
                <span className="text-sm text-blue-500">Free Plan</span>
              </div>
            </div>
          </div>

          {/* Credit */}
          <div className="flex items-center">
            <div className="flex items-center justify-center w-10 h-10 mr-3 rounded-xl bg-pink-50">
              <img
                src="https://i.ibb.co/QbD7jVY/Featured-icon-2.png" // Placeholder for Credit Card Icon
                alt="Credit Card"
                className="w-5 h-5 text-pink-600"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <span className="text-gray-700">Credit</span>
                <span className="text-sm text-gray-600">3/50</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-1.5">
                <div className="bg-pink-500 h-1.5 rounded-full w-[6%]"></div>
              </div>
            </div>
          </div>

          {/* Verification */}
          <div className="flex items-center">
            <div className="flex items-center justify-center w-10 h-10 mr-3 rounded-xl bg-indigo-50">
              <img
                src="https://i.ibb.co/55DYS9Q/Featured-icon-1.png" // Placeholder for Shopping Cart Icon
                alt="Shopping Cart"
                className="w-5 h-5 text-indigo-600"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <span className="text-gray-700">Verification</span>
                <span className="text-sm text-gray-600">2/100</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-1.5">
                <div className="bg-indigo-500 h-1.5 rounded-full w-[2%]"></div>
              </div>
            </div>
          </div>

          {/* Next Renewal */}
          <div className="flex items-center">
            <div className="flex items-center justify-center w-10 h-10 mr-3 rounded-xl bg-green-50">
              <img
                src="https://i.ibb.co/SPqCs7x/Featured-icon-4.png" 
                alt="Calendar Clock"
                className="w-5 h-5 text-green-600"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Next Renewal</span>
                <span className="text-sm text-gray-600">Jan 21, 2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default DashboardThree;
