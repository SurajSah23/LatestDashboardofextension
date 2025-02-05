import { useState } from 'react';

function CompaniesThree() {
  const [activeSection, setActiveSection] = useState('all-companies');

  return (
    <div className="flex flex-col sm:flex-row sm:w-[220px]">
      {/* Sidebar */}
      <div className="w-full sm:w-[220px] p-4 h-auto sm:h-[800px] border border-gray-200 rounded-xl">
        <nav className="space-y-2">
          <div
            className={`block text-sm ${
              activeSection === 'all-companies' ? 'text-blue-600' : 'text-gray-600'
            } hover:bg-blue-50 rounded px-2 py-1.5 transition-colors cursor-pointer`}
            onClick={() => setActiveSection('all-companies')}
          >
            All Companies
          </div>
          <div
            className={`block text-sm ${
              activeSection === 'my-companies' ? 'text-blue-600' : 'text-gray-600'
            } hover:bg-blue-50 rounded px-2 py-1.5 transition-colors cursor-pointer`}
            onClick={() => setActiveSection('my-companies')}
          >
            My Companies
          </div>
          <div
            className="flex items-center justify-between text-sm text-gray-600 hover:bg-gray-50 rounded px-2 py-1.5 cursor-pointer transition-colors"
            onClick={() => setActiveSection('saved-views')}
          >
            <span>All Saved Views</span>
            <img src="https://i.ibb.co/MxLS7qQv/ooui-next-ltr-1.png" className="w-2 h-2 mr-6"/>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default CompaniesThree;
