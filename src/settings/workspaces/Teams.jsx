import { useState } from 'react';
import { Search } from 'lucide-react';

function Teams() {
  const [workspaceName, setWorkspaceName] = useState('Suraj Sah');
  const [email, setEmail] = useState('');
  const [team, setTeam] = useState([]);

  const handleUpdate = () => {
    console.log('Workspace name updated:', workspaceName);
  };

  const handleAddTeamMember = (e) => {
    e.preventDefault();
    if (email && !team.includes(email)) {
      setTeam([...team, email]);
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Team</h2>
        
        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Workspace name
          </label>
          <div className="flex gap-3">
            <input
              type="text"
              value={workspaceName}
              onChange={(e) => setWorkspaceName(e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              onClick={handleUpdate}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Update
            </button>
          </div>
        </div>

        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Share your subscription limit and leads with your team
          </label>
          <form onSubmit={handleAddTeamMember} className="flex gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="colleague@company.com"
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-gray-100 text-gray-600 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Add to your team
            </button>
          </form>
        </div>

        <div className="mt-8">
          {team.length === 0 ? (
            <div className="text-center py-12">
              <div className="flex justify-center mb-4">
                <Search className="w-12 h-12 text-gray-300" />
              </div>
              <p className="text-gray-500">There aren &apos;t any data</p>
            </div>
          ) : (
            <ul className="space-y-2">
              {team.map((member, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center p-3 bg-gray-50 rounded-md"
                >
                  <span className="text-gray-700">{member}</span>
                  <button
                    onClick={() => setTeam(team.filter((_, i) => i !== index))}
                    className="text-red-500 hover:text-red-600"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Teams;
