function ContactsTwo() {
  const users = [
    {
      id: 1,
      name: "Phoenix Baker",
      email: "",
      jobTitle: "",
      company: "Catalog",
      createdAt: "Dec 27, 2024",
      source: "LinkedIn plugin",
      avatar: "https://i.ibb.co/3kyHJjf/Avatar-23.png",
    },
    {
      id: 2,
      name: "",
      email: "",
      jobTitle: "CFO",
      company: "Hourglass",
      createdAt: "Dec 27, 2024",
      source: "LinkedIn plugin",
      avatar: "https://i.ibb.co/dJCtnGv/Avatar-24.png",
    },
    {
      id: 3,
      name: "Demi Wilkinson",
      email: "Not found",
      jobTitle: "Penetration Tester",
      company: "Penetration Tester",
      createdAt: "Dec 27, 2024",
      source: "LinkedIn plugin",
      avatar: "https://i.ibb.co/6chwqxC/Avatar-25.png",
    },
    {
      id: 4,
      name: "Candice Wu",
      email: "",
      jobTitle: "Content Manager",
      company: "Circooles",
      createdAt: "Dec 27, 2024",
      source: "LinkedIn plugin",
      avatar: "https://i.ibb.co/TWDHM1f/Avatar-26.png",
    },
  ];

  const companyLogos = {
    Catalog: "https://i.ibb.co/BGyQRGT/Avatar-27.png",
    Hourglass: "https://i.ibb.co/yQ0dvM9/Avatar-28.png",
    "Penetration Tester": "https://i.ibb.co/pxm5VDP/Avatar-29.png",
    Circooles: "https://i.ibb.co/WtQmRLB/Avatar-30.png",
  };

  return (
    <div className="w-full bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-3 py-3 border-r border-gray-200">
                <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
              </th>
              <th className="px-3 py-3 text-left text-sm font-semibold text-gray-900 border-r border-gray-200">Name</th>
              <th className="px-3 py-3 text-left text-sm font-semibold text-gray-900 border-r border-gray-200">Email</th>
              <th className="px-3 py-3 text-left text-sm font-semibold text-gray-900 border-r border-gray-200">Job Title</th>
              <th className="px-3 py-3 text-left text-sm font-semibold text-gray-900 border-r border-gray-200">Company</th>
              <th className="px-3 py-3 text-left text-sm font-semibold text-gray-900 border-r border-gray-200">Created at</th>
              <th className="px-3 py-3 text-left text-sm font-semibold text-gray-900">Source</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.id} className="text-sm hover:bg-gray-50 transition-colors duration-200">
                <td className="px-3 py-3 border-r border-gray-200">
                  <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                </td>
                <td className="px-3 py-3 border-r border-gray-200">
                  <div className="flex items-center gap-3">
                    <img src={user.avatar} alt="Avatar" className="h-8 w-8 rounded-full object-cover" />
                    <span className="text-gray-900 font-medium">{user.name}</span>
                  </div>
                </td>
                <td className="px-3 py-3 border-r border-gray-200">
                  <div className="flex items-center gap-2">
                    {user.email === "Not found" ? (
                      <img src="https://i.ibb.co/d40jVr0/Ellipse-47-1.png" alt="Warning" className="h-4 w-4" />
                    ) : (
                      <img src="https://i.ibb.co/yRtwCB0/Ellipse-47.png" alt="Checkmark" className="h-4 w-4" />
                    )}
                    <span className={`${user.email === "Not found" ? "text-gray-500" : "text-gray-900"}`}>{user.email}</span>
                  </div>
                </td>
                <td className="px-3 py-3 border-r border-gray-200">{user.jobTitle}</td>
                <td className="px-3 py-3 border-r border-gray-200">
                  <div className="flex items-center gap-2">
                    {companyLogos[user.company] && (
                      <img src={companyLogos[user.company]} alt={user.company} className="h-4 w-4" />
                    )}
                    <span>{user.company}</span>
                  </div>
                </td>
                <td className="px-3 py-3 border-r border-gray-200">{user.createdAt}</td>
                <td className="px-3 py-3">{user.source}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ContactsTwo;
