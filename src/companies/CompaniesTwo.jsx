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
  ]
  
  function CompaniesTwo() {
    return (
      <div className="w-[900px] bg-gray-50 p-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-500 border-r">Name</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-500 border-r">Domain</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-500 border-r">Industry</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-500 border-r">Employee</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-500 border-r">Location</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-500 border-r">Created at</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-500 border-r">Source</th>
                </tr>
              </thead>
              <tbody>
                {companies.map((company, index) => (
                  <tr key={index} className="border-b border-gray-200 last:border-b-0">
                    <td className="py-4 px-9 border-r">
                      <div className="flex items-center gap-3">
                        {company.icon}
                        <span className="font-medium text-gray-900 whitespace-nowrap border-r">{company.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 border-r">
                      <a href={`https://${company.domain}`} className="text-blue-500 hover:underline">
                        {company.domain}
                      </a>
                    </td>
                    <td className="py-4 px-6 text-gray-600 whitespace-nowrap border-r">{company.industry}</td>
                    <td className="py-4 px-6 text-gray-600 border-r">{company.employees}</td>
                    <td className="py-4 px-6 text-gray-600 whitespace-nowrap border-r">{company.location || ''}</td>
                    <td className="py-4 px-6 text-gray-600 whitespace-nowrap border-r">{company.createdAt}</td>
                    <td className="py-4 px-6 text-gray-600 whitespace-nowrap border-r">
                      <span className="text-blue-600 hover:underline cursor-pointer border-r">
                        {company.source}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
  
  export default CompaniesTwo
  