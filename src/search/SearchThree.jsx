import { useState } from 'react';

function SearchThree() {
  const [activeTab, setActiveTab] = useState('filter');
  const jobTitles = Array(13).fill('Job Title'); // Creates an array of 13 'Job Title' items

  return (
      <div className="w-full max-w-md bg-white border rounded-xl shadow-sm absolute top-1/3 right-8">
        {/* Tab Navigation */}
        <div className="flex border-b">
          <button
            className={`flex-1 py-3 text-center ${
              activeTab === 'filter'
                ? 'text-blue-500 border-b-2 border-blue-500 font-medium'
                : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('filter')}
          >
            Filter
          </button>
          <button
            className={`flex-1 py-3 text-center ${
              activeTab === 'saved'
                ? 'text-blue-500 border-b-2 border-blue-500 font-medium'
                : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('saved')}
          >
            Saved Filter
          </button>
        </div>

        {/* Job Titles List */}
        <div className="px-4 py-2">
          {jobTitles.map((title, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0"
            >
              <span className="text-gray-700">{title}</span>
              <button className="text-blue-500">
                <img src="https://i.ibb.co/nnXGdyq/Icon-3.png" alt="Add" className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>

        {/* Save Filter Button */}
        <div className="p-4 border-t">
          <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-medium">
            Save Filter
          </button>
        </div>
      </div>
  );
}

export default SearchThree;
