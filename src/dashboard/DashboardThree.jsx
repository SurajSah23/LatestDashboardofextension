import DashboardFive from "./DashboardFive";

function DashboardThree() {
  return (
    <div className="w-[326px] h-[586px] mt-4 mr-2 rounded-[20px] border border-gray-200 space-y-6">
      {/* Profile Section */}
      <div className="text-center mt-4">
        <img
          src="https://i.ibb.co/X80DpC0/Avatar-8.png"
          alt="Profile"
          className="mx-auto"
        />
        <h2 className="mt-2 text-2xl font-semibold">Charles Robbie</h2>
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
            className="h-10"
            />
          <span className="ml-3 text-blue-500 flex-1">Current Plan</span>
          <span className="text-blue-500">Free Plan</span>
        </div>

        {/* Credit */}
        <div className="flex items-center bg-blue-50 p-3 rounded-xl">
          <img
            src="https://i.ibb.co/QbD7jVY/Featured-icon-2.png"
            alt="Credit Card"
            className="h-10"
          />
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2 relative bottom-2">
              <span className="p-4 -ml-2 text-blue-500">Credit</span>
              <span className="text-sm text-blue-500 relative right-10 -mr-5">
                2/100
              </span>
            </div>
            <div className="w-[213px] bg-gray-100 rounded-full h-1.5 relative right-3 bottom-6 ml-6">
              <div className="bg-blue-500 h-1.5 rounded-full w-[75%]"></div>
            </div>
          </div>
        </div>

        {/* Verification */}
        <div className="flex items-center bg-blue-50 p-3 rounded-xl">
          <img
            src="https://i.ibb.co/Cd0sg2b/Featured-icon-5.png"
            alt="Credit Card"
            className="h-10"
          />
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2 relative bottom-2">
              <span className="p-4 -ml-2 text-blue-500">Verification</span>
              <span className="text-sm text-blue-500 relative right-10 -mr-5">
                2/100
              </span>
            </div>
            <div className="w-[213px] bg-gray-100 rounded-full h-1.5 relative right-3 bottom-6 ml-6">
              <div className="bg-pink-500 h-1.5 rounded-full w-[75%]"></div>
            </div>
          </div>
        </div>

        {/* Next Renewal */}
        <div className="flex items-center bg-green-50 p-3 rounded-xl">
          <img
            src="https://i.ibb.co/SPqCs7x/Featured-icon-4.png"
            alt="Renewal"
            className="h-10"
          />
          <span className="ml-3 text-green-500 flex-1">Next Renewal</span>
          <span className="text-green-500">Jan 21, 2025</span>
        </div>
      </div>
      <br />

      {/* DashboardFive Component */}
      <div className="">
        <DashboardFive />
      </div>
    </div>
  );
}

export default DashboardThree;
