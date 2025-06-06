const companies = [
  {
    name: 'Catalog',
    icon: <img src="https://i.ibb.co/wZX5QmZn/Avatar-31.png" className="w-8 h-8" alt="Catalog Icon" />,
    domain: 'catlog.com',
    industry: 'IT',
    employees: '20',
    location: '760 Market St California San Franci',
    createdAt: 'Dec 27, 2024',
    source: 'Linkedin plugin'
  },
  {
    name: 'Hourglass',
    icon: <img src="https://i.ibb.co/YBwLLKT1/Avatar-32.png" className="w-8 h-8" alt="Hourglass Icon" />,
    domain: 'figma.com',
    industry: 'Computer and Network Security',
    employees: '03',
    createdAt: 'Dec 27, 2024',
    source: 'Linkedin plugin'
  },
  {
    name: 'Penetration Tester',
    icon: <img src="https://i.ibb.co/0yMQC434/Avatar-33.png" className="w-8 h-8" alt="Penetration Tester Icon" />,
    domain: 'genixbit.com',
    industry: 'Computer and Network Security',
    employees: '203',
    location: '1570 Boulevard of the Arts Florida',
    createdAt: 'Dec 27, 2024',
    source: 'Linkedin plugin'
  },
  {
    name: 'Circooles',
    icon: <img src="https://i.ibb.co/PGdyHPGm/Avatar-34.png" className="w-8 h-8" alt="Circooles Icon" />,
    domain: 'hk.com',
    industry: 'Computer and Network Security',
    employees: '168',
    createdAt: 'Dec 27, 2024',
    source: 'Linkedin plugin'
  }
];

function CompaniesTwo() {
  return (
    <div className="-translate-x-4">
      <div className="w-full sm:w-[640px] md:w-[768px] lg:w-[970px] bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden ml-3">
        {/* Scrollable container on small screens */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px] ">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-100">
                <th className="py-3 px-4 text-sm font-medium text-gray-500 text-left border-r">Name</th>
                <th className="py-3 px-4 text-sm font-medium text-gray-500 text-left border-r">Domain</th>
                <th className="py-3 px-4 text-sm font-medium text-gray-500 text border-r">Industry</th>
                <th className="py-3 px-4 text-sm font-medium text-gray-500 text-left border-r">Employees</th>
                <th className="py-3 px-4 text-sm font-medium text-gray-500 text-left border-r">Location</th>
                <th className="py-3 px-4 text-sm font-medium text-gray-500 text-left border-r">Created At</th>
                <th className="py-3 px-4 text-sm font-medium text-gray-500 text-left border-r">Source</th>
              </tr>
            </thead>
            <tbody>
              {companies.map((company, index) => (
                <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-2 px-4 flex items-center gap-2 border-r">
                    {company.icon}
                    <span className="font-medium text-gray-900 whitespace-nowrap mr-10">{company.name}</span>
                  </td>
                  <td className="py-3 px-4 border-r">
                    <a href={`https://${company.domain}`} className="text-blue-500 hover:underline">
                      {company.domain}
                    </a>
                  </td>
                  <td className="py-3 px-4 text-gray-600 border-r whitespace-nowrap">{company.industry}</td>
                  <td className="py-3 px-4 text-gray-600 border-r">{company.employees}</td>
                  <td className="py-3 px-4 text-gray-600 border-r whitespace-nowrap">{company.location || ' '}</td>
                  <td className="py-3 px-4 text-gray-600 whitespace-nowrap border-r">{company.createdAt}</td>
                  <td className="py-3 px-4 text-blue-600 hover:underline cursor-pointer whitespace-nowrap">
                    {company.source}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CompaniesTwo;
