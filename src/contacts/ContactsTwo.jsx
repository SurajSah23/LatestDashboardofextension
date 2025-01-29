function ContactsTwo() {
  const users = [
    {
      id: 1,
      name: "Phoenix Baker",
      email: "meeta.bhagwani@genixbit.com",
      jobTitle: "HR Manager",
      company: "Catalog",
      createdAt: "Dec 27, 2024",
      source: "LinkedIn plugin",
      avatar: "https://i.ibb.co/3kyHJjf/Avatar-23.png",
    },
    {
      id: 2,
      name: "Lana Steiner",
      email: "praveer@figma.com",
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
      email: "ken@adrizer.com",
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
    <div className=" w-[970px] h-[650px] ml-10 border rounded-xl border-gray-200 shadow-lg">
      <div className="rounded-lg border border-gray-200 bg-white">
        <div className="overflow-y-auto max-w-full">
          <table className="w-full  border-collapse">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="w-12 px-4 py-3 border-r border-gray-300"
                >
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300"
                  />
                </th>
                <th
                  scope="col"
                  className="w-[200px] px-4 py-3 text-left text-sm font-semibold text-gray-900 border-r border-gray-300"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="w-[250px] px-4 py-3 text-left text-sm font-semibold text-gray-900 border-r border-gray-300"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="w-[200px] px-4 py-3 text-left text-sm font-semibold text-gray-900 border-r border-gray-300"
                >
                  Job Title
                </th>
                <th
                  scope="col"
                  className="w-[200px] px-4 py-3 text-left text-sm font-semibold text-gray-900 border-r border-gray-300"
                >
                  Company
                </th>
                <th
                  scope="col"
                  className="w-[200px] px-4 py-3 text-left text-sm font-semibold text-gray-900 border-r border-gray-300"
                >
                  Created at
                </th>
                <th
                  scope="col"
                  className="w-[150px] px-4 py-3 text-left text-sm font-semibold text-gray-900"
                >
                  Source
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="px-4 py-3 border-r border-gray-300">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300"
                    />
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 border-r border-gray-300">
                    <div className="flex items-center gap-3">
                      <img
                        src={user.avatar}
                        alt="Avatar"
                        className="h-8 w-8 rounded-full object-cover"
                      />
                      <span className="text-sm font-medium text-gray-900 mr-6">
                        {user.name}
                      </span>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 border-r border-gray-300">
                    <div className="flex items-center gap-2 mr-3">
                      {user.email === "Not found" ? (
                        <img
                          src="https://i.ibb.co/d40jVr0/Ellipse-47-1.png"
                          alt="Warning"
                          className="h-4 w-4"
                        />
                      ) : (
                        <img
                          src="https://i.ibb.co/yRtwCB0/Ellipse-47.png"
                          alt="Checkmark"
                          className="h-4 w-4"
                        />
                      )}
                      <span
                        className={`text-sm ${
                          user.email === "Not found"
                            ? "text-gray-500"
                            : "text-gray-900"
                        }`}
                      >
                        {user.email}
                      </span>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 border-r border-gray-300">
                    <span className="text-sm text-gray-900">
                      {user.jobTitle}
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 border-r border-gray-300 items-center gap-2">
                    <div className="flex gap-3">
                      {companyLogos[user.company] && (
                        <img
                          src={companyLogos[user.company]}
                          alt={user.company}
                          className="h-4 w-4"
                        />
                      )}
                      <span className="text-sm text-gray-900 mr-3">
                        {user.company}
                      </span>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 border-r border-gray-300">
                    <span className="text-sm text-gray-900">
                      {user.createdAt}
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-4 py-3">
                    <span className="text-sm text-gray-900">{user.source}</span>
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

export default ContactsTwo;
