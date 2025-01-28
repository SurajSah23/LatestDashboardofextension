
const users = [
  {
    id: 1,
    name: 'Phoenix Baker',
    email: 'meeta.bhagwani@genixbit.com',
    jobTitle: 'HR Manager',
    company: 'Catalog',
    avatar: 'https://i.ibb.co/3kyHJjf/Avatar-23.png',
    companyLogo: 'https://i.ibb.co/BGyQRGT/Avatar-27.png',
    isEmailVerified: true,
  },
  {
    id: 2,
    name: 'Lana Steiner',
    email: 'praveer@figma.com',
    jobTitle: 'CFO',
    company: 'Hourglass',
    avatar: 'https://i.ibb.co/dJCtnGv/Avatar-24.png',
    companyLogo: 'https://i.ibb.co/yQ0dvM9/Avatar-28.png',
    isEmailVerified: true,
  },
  {
    id: 3,
    name: 'Demi Wilkinson',
    email: 'Not found',
    jobTitle: 'Penetration Tester',
    company: 'Penetration Tester',
    avatar: 'https://i.ibb.co/6chwqxC/Avatar-25.png',
    companyLogo: 'https://i.ibb.co/pxm5VDP/Avatar-29.png',
    isEmailVerified: false,
  },
  {
    id: 4,
    name: 'Candice Wu',
    email: 'ken@adrizer.com',
    jobTitle: 'Content Manager',
    company: 'Circooles',
    avatar: 'https://i.ibb.co/TWDHM1f/Avatar-26.png',
    companyLogo: 'https://i.ibb.co/WtQmRLB/Avatar-30.png',
    isEmailVerified: true,
  },
];

function ContactTwo() {
  return (
      <div className="rounded-lg shadow absolute top-40 mt-20 border overflow-x-scroll rounded-full">
        <table className="min-w-2 divide-y divide-gray-200">
          <thead>
            <tr className="bg-white">
              <th scope="col" className="w-12 px-6 py-3">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
              </th>
              <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                Email
              </th>
              <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                Job Title
              </th>
              <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                Company
              </th>
              <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                new
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {users.map((user) => (
              <tr key={user.id}>
                <td className="px-6 py-4">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={user.avatar}
                      alt={user.name}
                    />
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{user.name}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    {user.isEmailVerified ? (
                      <img src="https://i.ibb.co/yRtwCB0/Ellipse-47.png" className="h-4 w-4 mr-2" alt="checkmark" />
                    ) : (
                      <img src="https://i.ibb.co/d40jVr0/Ellipse-47-1.png" className="h-4 w-4 mr-2" alt="checkmark" />
                    )}
                    <span className={`text-sm ${user.isEmailVerified ? 'text-gray-900' : 'text-gray-500'}`}>
                      {user.email}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {user.jobTitle}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <img
                      className="h-8 w-8 rounded-lg"
                      src={user.companyLogo}
                      alt={user.company}
                    />
                    <span className="ml-2 text-sm text-gray-900">{user.company}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  );
}

export default ContactTwo;
