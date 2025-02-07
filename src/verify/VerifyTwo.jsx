import { useState } from 'react';

function VerifyTwo() {
  const [emails, setEmails] = useState('');

  const handleVerify = (e) => {
    e.preventDefault();
    // Add verification logic here
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-4xl flex gap-12">
        {/* Left Section */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Single Email Verifier
          </h1>
          <p className="text-gray-600 mb-6">
            Enter email to verify. One verified email costs one email verification credit. 
            Enter up to 20 emails, separated by delimiters (space, commas, semicolon, or line break).
          </p>
          
          <form onSubmit={handleVerify}>
            <textarea
              value={emails}
              onChange={(e) => setEmails(e.target.value)}
              className="w-full h-40 p-3 border border-gray-200 rounded-lg mb-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
              placeholder="Enter emails here..."
            />
            <button
              type="submit"
              className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-3 px-4 rounded-lg transition-colors"
            >
              Verify emails
            </button>
          </form>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <div className="mb-6">
            <img
              src="https://i.ibb.co/wrbWwGnv/Whats-App-Image-2025-02-07-at-11-20-08-0aa1dd0a-removebg-preview.png"
              alt="Search icon"
              className="w-50 h-50"
            />
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            No verified emails
          </h2>
          <p className="text-gray-600">
            Paste at least 1 email in the form to verify and get an instant result
          </p>
        </div>
      </div>
    </div>
  );
}

export default VerifyTwo;
