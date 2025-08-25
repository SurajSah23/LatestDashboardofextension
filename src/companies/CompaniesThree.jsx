import { useState } from 'react';

function CompaniesThree() {
  const [activeSection, setActiveSection] = useState('all-companies');

  return (
    <div className="w-full bg-white border border-gray-200 rounded-2xl shadow-lg p-6">
      {/* Sidebar */}
      <div className="w-full">
        <nav className="space-y-2">
          <div
            className={`block text-sm font-medium p-3 rounded-lg transition-colors cursor-pointer ${
              activeSection === 'all-companies' 
                ? 'text-blue-600 bg-blue-50' 
                : 'text-gray-600 hover:bg-gray-50'
            }`}
            onClick={() => setActiveSection('all-companies')}
          >
            All Companies
          </div>
          <div
            className={`block text-sm font-medium p-3 rounded-lg transition-colors cursor-pointer ${
              activeSection === 'my-companies' 
                ? 'text-blue-600 bg-blue-50' 
                : 'text-gray-600 hover:bg-gray-50'
            }`}
            onClick={() => setActiveSection('my-companies')}
          >
            My Companies
          </div>
          <div
            className="flex items-center justify-between text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg p-3 cursor-pointer transition-colors"
            onClick={() => setActiveSection('saved-views')}
          >
            <span>All Saved Views</span>
            <img src="https://i.ibb.co/MxLS7qQv/ooui-next-ltr-1.png" className="w-4 h-4"/>
          </div>
        </nav>
      </div>

      {/* Content Area */}
      {/* <div className="w-full sm:flex-1 p-6">
        {activeSection === 'all-companies' && <h1>All Companies</h1>}
        {activeSection === 'my-companies' && <h1>My Companies</h1>}
        {activeSection === 'saved-views' && <h1>Saved Views</h1>}
      </div> */}
    </div>
  );
}

export default CompaniesThree;
