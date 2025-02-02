import { useState } from 'react';

function CompaniesThree() {
  const [activeSection, setActiveSection] = useState('all-companies');

  return (
    <div className="flex flex-col sm:flex-row">
      {/* Sidebar */}
      <div className="w-full sm:w-[276px] p-4 h-auto sm:h-[1072px] border border-gray-200 rounded-xl">
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
            <img src="https://i.ibb.co/MxLS7qQv/ooui-next-ltr-1.png" className="w-3 h-3 mr-10"/>
          </div>
        </nav>
      </div>

      {/* Content Area
      <div className="w-full sm:flex-1 p-6">
        {activeSection === 'all-companies' && <h1>All Companies</h1>}
        {activeSection === 'my-companies' && <h1>My Companies</h1>}
        {activeSection === 'saved-views' && <h1>Saved Views</h1>}
      </div> */}
    </div>
  );
}

export default CompaniesThree;
