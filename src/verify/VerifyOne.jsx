function VerifyOne() {
    return (
      <div className="h-auto bg-white border border-gray-300 shadow-lg mb-4 -translate-y-8">
        {/* Navigation */}
        <nav className="border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center h-16 space-x-2 sm:space-x-8">
              <img
                src="https://i.ibb.co/R0kB9qR/home-line.png"
                alt="Home"
                className="h-5 w-5 text-gray-500"
              />
              <img
                src="https://i.ibb.co/f1kJbtD/chevron-right-1.png"
                alt="Arrow"
                className="h-4 w-4"
              />
              <div className="flex flex-wrap space-x-2 sm:space-x-4">
                <span className="text-gray-500 text-sm sm:text-base">Dashboard</span>
                <img
                  src="https://i.ibb.co/f1kJbtD/chevron-right-1.png"
                  alt="Arrow"
                  className="h-4 w-4"
                />
                <span className="text-gray-900 font-medium text-sm sm:text-base">Verify</span>
              </div>
            </div>
          </div>
        </nav>
  
        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap justify-between items-center space-y-4 sm:space-y-0">
            <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 w-full sm:w-auto text-center sm:text-left">
            Verify
            </h1>
            
          </div>
        </main>
      </div>
    );
  }
  
  export default VerifyOne;
  