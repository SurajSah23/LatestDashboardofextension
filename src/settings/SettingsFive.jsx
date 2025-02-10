import { useState, useRef, useEffect } from "react";

const countries = [
  {
    name: "Australia",
    code: "AU",
    flagUrl:
      "https://i.ibb.co/B5KqXtw6/AU.png",
  },
  // {
  //   name: "United States",
  //   code: "US",
  //   flagUrl:
  //     "https://i.ibb.co/B5KqXtw6/AU.pngp",
  // },
  // {
  //   name: "United Kingdom",
  //   code: "GB",
  //   flagUrl:
  //     "https://i.ibb.co/B5KqXtw6/AU.png",
  // },
  // {
  //   name: "Canada",
  //   code: "CA",
  //   flagUrl:
  //     "https://i.ibb.co/B5KqXtw6/AU.png",
  // },
  {
    name: "India",
    code: "IN",
    flagUrl:
      "https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=32&h=32&q=80&fit=crop",
  },
];

function SettingsFive() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
              <img
                src="https://i.ibb.co/wr0p3gWb/mail-01.png"
                alt="Email"
                className="h-5 w-5 text-gray-400"
              />
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
          <div
            className="relative lg:w-[945px] border border-gray-200 rounded-lg"
            ref={dropdownRef}
          >
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(!isOpen);
              }}
              className="w-full lg:h-[40px] px-4 py-3 border border-purple-100 rounded-lg flex items-center justify-between hover:border-purple-200 transition-colors duration-200"
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-2">
                <img
                  src={selectedCountry.flagUrl}
                  alt={`${selectedCountry.name} flag`}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span className="text-gray-800 text-lg">
                  {selectedCountry.name}
                </span>
              </div>
              <img
                src="https://i.ibb.co/Jwr5Yq0K/chevron-down-1.png"
                alt="Dropdown Arrow"
                className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isOpen && (
              <div className="absolute top-full left-0 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden z-10">
                {countries.map((country) => (
                  <button
                    key={country.code}
                    type="button"
                    onClick={() => {
                      setSelectedCountry(country);
                      setIsOpen(false);
                    }}
                    className={`w-full px-4 py-3 flex items-center gap-2 hover:bg-gray-50 transition-colors duration-200 ${
                      selectedCountry.code === country.code ? "bg-purple-50" : ""
                    }`}
                  >
                    <img
                      src={country.flagUrl}
                      alt={`${country.name} flag`}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-gray-800">{country.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Timezone Selector */}
        <div className="space-y-2">
          <label className="block text-sm text-gray-600">Timezone</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <img
                src="https://i.ibb.co/gbgvMZ60/Icon-6.png"
                alt="Clock"
                className="h-5 w-5 text-gray-400"
              />
            </div>
            <select className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg appearance-none bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none">
              <option value="pst">Pacific Standard Time (PST) UTC−08:00</option>
              <option value="est">Eastern Standard Time (EST) UTC−05:00</option>
              <option value="gmt">Greenwich Mean Time (GMT) UTC+00:00</option>
              <option value="ist">India Standard Time (IST) UTC+05:30</option>
            </select>
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <img
                src="https://i.ibb.co/Jwr5Yq0K/chevron-down-1.png"
                alt="Dropdown"
                className="h-5 w-5 text-gray-400"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SettingsFive;
