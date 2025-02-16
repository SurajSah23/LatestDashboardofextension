import { useState } from 'react';
import { Search } from 'lucide-react';

function Teams() {
  const [workspaceName, setWorkspaceName] = useState('');
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
    <div className="min-h-screen bg-gray-50 p-6 flex justify-center items-center">
      <div className="max-w-3xl w-full bg-white rounded-lg shadow-xl border border-gray-200 p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Manage Your Team</h2>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Workspace Name</label>
          <div className="flex gap-4">
            <input
              type="text"
              value={workspaceName}
              onChange={(e) => setWorkspaceName(e.target.value)}
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              onClick={handleUpdate}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
            >
              Update
            </button>
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Share your subscription limit and leads with your team</label>
          <form onSubmit={handleAddTeamMember} className="flex gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter team member's email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition duration-200"
            >
              Add to Team
            </button>
          </form>
        </div>

        <div className="mt-8">
          {team.length === 0 ? (
            <div className="text-center py-12">
              <div className="flex justify-center mb-4">
                <Search className="w-16 h-16 text-gray-300" />
              </div>
              <p className="text-lg text-gray-500">No team members added yet. Start by adding one!</p>
            </div>
          ) : (
            <ul className="space-y-4">
              {team.map((member, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition duration-200"
                >
                  <span className="text-lg text-gray-700">{member}</span>
                  <button
                    onClick={() => setTeam(team.filter((_, i) => i !== index))}
                    className="text-red-500 hover:text-red-600 focus:outline-none transition duration-200"
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
