const companies = [
    {
      name: "Catalog",
      logo: "https://i.ibb.co/wZX5QmZn/Avatar-31.png",
      domain: "catlog.com",
      industry: "IT",
      employeeCount: "20",
      location: "760 Market St, California, San Francisco",
      createdAt: "Dec 27, 2024",
      source: "LinkedIn plugin",
    },
    {
      name: "Hourglass",
      logo: "https://i.ibb.co/YBwLLKT1/Avatar-32.png",
      domain: "figma.com",
      industry: "Computer and Network Security",
      employeeCount: "03",
      location: "N/A",
      createdAt: "Dec 27, 2024",
      source: "LinkedIn plugin",
    },
    {
      name: "Penetration Tester",
      logo: "https://i.ibb.co/0yMQC434/Avatar-33.png",
      domain: "genixbit.com",
      industry: "Computer and Network Security",
      employeeCount: "203",
      location: "1570 Boulevard of the Arts, Florida",
      createdAt: "Dec 27, 2024",
      source: "LinkedIn plugin",
    },
    {
      name: "Circooles",
      logo: "https://i.ibb.co/PGdyHPGm/Avatar-34.png",
      domain: "hk.com",
      industry: "Computer and Network Security",
      employeeCount: "168",
      location: "N/A",
      createdAt: "Dec 27, 2024",
      source: "LinkedIn plugin",
    },
  ];
  
  function CompaniesTwo() {
    return (
      <div className="rounded-xl shadow-sm overflow-x-auto w-[1047px] ml-3 mb-3">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="text-left border-b border-gray-300 bg-gray-100">
              <th className="px-6 py-4 text-sm font-medium text-gray-600 border-r border-gray-300">Name</th>
              <th className="px-6 py-4 text-sm font-medium text-gray-600 border-r border-gray-300">Domain</th>
              <th className="px-6 py-4 text-sm font-medium text-gray-600 border-r border-gray-300">Industry</th>
              <th className="px-6 py-4 text-sm font-medium text-gray-600 border-r border-gray-300">Employees</th>
              <th className="px-6 py-4 text-sm font-medium text-gray-600 border-r border-gray-300">Location</th>
              <th className="px-6 py-4 text-sm font-medium text-gray-600 border-r border-gray-300">Created At</th>
              <th className="px-6 py-4 text-sm font-medium text-gray-600">Source</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-300">
            {companies.map((company, index) => (
              <tr key={index} className="border-b border-gray-300 hover:bg-gray-50">
                <td className="px-6 py-4 border-r border-gray-300">
                  <div className="flex items-center gap-3">
                    <img src={company.logo} alt="Company Logo" className="w-10 h-10 rounded-full" />
                    <span className="font-medium text-gray-900 whitespace-nowrap mr-6">{company.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 border-r border-gray-300">
                  <a
                    href={`https://${company.domain}`}
                    className="text-blue-500 hover:underline gap-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {company.domain}
                  </a>
                </td>
                <td className="px-6 py-4 text-gray-600 border-r border-gray-300 whitespace-nowrap">{company.industry}</td>
                <td className="px-6 py-4 text-gray-600 border-r border-gray-300">{company.employeeCount}</td>
                <td className="px-6 py-4 text-gray-600 border-r border-gray-300 whitespace-nowrap">
                  {company.location !== "" ? company.location : "N/A"}
                </td>
                <td className="px-6 py-4 text-gray-600 border-r border-gray-300 whitespace-nowrap">{company.createdAt}</td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm whitespace-nowrap">
                    {company.source}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default CompaniesTwo;
  