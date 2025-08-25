import { useState } from 'react';

function SearchThree() {
  const [activeTab, setActiveTab] = useState('filter');
  const jobTitles = Array(13).fill('Job Title'); // Creates an array of 13 'Job Title' items

  return (
    <div className="w-full bg-white border border-gray-200 rounded-2xl shadow-lg">
      {/* Tab Navigation */}
      <div className="flex border-b border-gray-200">
        <button
          className={`flex-1 py-3 text-center text-sm font-medium transition-colors duration-200 ${
            activeTab === 'filter'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('filter')}
        >
          Filter
        </button>
        <button
          className={`flex-1 py-3 text-center text-sm font-medium transition-colors duration-200 ${
            activeTab === 'saved'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('saved')}
        >
          Saved Filter
        </button>
      </div>

      {/* Job Titles List */}
      <div className="px-4 py-2 max-h-96 overflow-y-auto">
        {jobTitles.map((title, index) => (
          <div
            key={index}
            className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors duration-200"
          >
            <span className="text-gray-700 text-sm">{title}</span>
            <button className="text-blue-600 hover:text-blue-700 transition-colors duration-200 p-1">
              <img src="https://i.ibb.co/nnXGdyq/Icon-3.png" alt="Add" className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>

      {/* Save Filter Button */}
      <div className="p-4 border-t border-gray-200">
        <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-lg font-medium transition-colors duration-200">
          Save Filter
        </button>
      </div>
    </div>
  );
}

export default SearchThree;
