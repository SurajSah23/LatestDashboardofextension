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
    <div className="w-full bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden">
      {/* Scrollable container on small screens */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px]">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="py-3 px-4 text-sm font-medium text-gray-600 text-left border-r border-gray-200">Name</th>
              <th className="py-3 px-4 text-sm font-medium text-gray-600 text-left border-r border-gray-200">Domain</th>
              <th className="py-3 px-4 text-sm font-medium text-gray-600 text-left border-r border-gray-200">Industry</th>
              <th className="py-3 px-4 text-sm font-medium text-gray-600 text-left border-r border-gray-200">Employees</th>
              <th className="py-3 px-4 text-sm font-medium text-gray-600 text-left border-r border-gray-200">Location</th>
              <th className="py-3 px-4 text-sm font-medium text-gray-600 text-left border-r border-gray-200">Created At</th>
              <th className="py-3 px-4 text-sm font-medium text-gray-600 text-left">Source</th>
            </tr>
          </thead>
          <tbody>
            {companies.map((company, index) => (
              <tr key={index} className="border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200">
                <td className="py-3 px-4 flex items-center gap-3 border-r border-gray-200">
                  {company.icon}
                  <span className="font-medium text-gray-900">{company.name}</span>
                </td>
                <td className="py-3 px-4 border-r border-gray-200">
                  <a href={`https://${company.domain}`} className="text-blue-600 hover:underline">
                    {company.domain}
                  </a>
                </td>
                <td className="py-3 px-4 text-gray-600 border-r border-gray-200">{company.industry}</td>
                <td className="py-3 px-4 text-gray-600 border-r border-gray-200">{company.employees}</td>
                <td className="py-3 px-4 text-gray-600 border-r border-gray-200">{company.location || '-'}</td>
                <td className="py-3 px-4 text-gray-600 border-r border-gray-200">{company.createdAt}</td>
                <td className="py-3 px-4 text-blue-600 hover:underline cursor-pointer">
                  {company.source}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CompaniesTwo;
