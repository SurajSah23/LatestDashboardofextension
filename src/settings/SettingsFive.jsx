function SettingsFive() {
    return (
      <div className="p-6 lg:-translate-y-36 lg:rounded-lg">
        <form className="max-w-xl sm:max-w-full mx-auto space-y-6">
          {/* Name Fields */}
          <div className="space-y-2">
            <label className="block text-sm text-gray-600">Name</label>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Oliva"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
              <input
                type="text"
                placeholder="Rhye"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>
          </div>
  
          {/* Email Field */}
          <div className="space-y-2">
            <label className="block text-sm text-gray-600">Email address</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <img src="https://i.ibb.co/wr0p3gWb/mail-01.png" alt="Email" className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email"
                placeholder="olivia@untitledui.com"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>
          </div>
  
          {/* Country Selector */}
          <div className="space-y-2">
            <label className="block text-sm text-gray-600">Country</label>
            <div className="relative">
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg appearance-none bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none">
                <option value="australia">🇦🇺 Australia</option>
                <option value="us">🇺🇸 United States</option>
                <option value="uk">🇬🇧 United Kingdom</option>
                <option value="canada">🇨🇦 Canada</option>
              </select>
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <img src="https://i.ibb.co/Jwr5Yq0K/chevron-down-1.png" alt="Dropdown" className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
  
          {/* Timezone Selector */}
          <div className="space-y-2">
            <label className="block text-sm text-gray-600">Timezone</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none ">
                <img src="https://i.ibb.co/gbgvMZ60/Icon-6.png" alt="Clock" className="h-5 w-5 text-gray-400" />
              </div>
              <select className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg appearance-none bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none">
                <option value="pst">Pacific Standard Time (PST) UTC−08:00</option>
                <option value="est">Eastern Standard Time (EST) UTC−05:00</option>
                <option value="gmt">Greenwich Mean Time (GMT) UTC+00:00</option>
                <option value="ist">India Standard Time (IST) UTC+05:30</option>
              </select>
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <img src="https://i.ibb.co/Jwr5Yq0K/chevron-down-1.png" alt="Dropdown" className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
  
  export default SettingsFive;
  