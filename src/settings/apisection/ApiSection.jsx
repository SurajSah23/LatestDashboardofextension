import { useState } from "react";

const ApiSection = () => {
  const [copied, setCopied] = useState(null);

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopied(index);
    setTimeout(() => setCopied(null), 2000);
  };

  const apiRequests = [
    {
      title: "Find Email",
      url: "GET https://api.emailfinder.com/public/v1/email/find?company=emailfinder.com&name=Alona%20Shalieieva&apiKey=YOUR_TOKEN"
    },
    {
      title: "Verify Email",
      url: "GET https://api.emailfinder.com/public/v1/email/verify?email=support@emailfinder.com&apiKey=YOUR_TOKEN"
    },
    {
      title: "Find Contact by LinkedIn URL",
      url: "GET https://api.emailfinder/public/v1/insights/contact?linkedinUrl=https://www.linkedin.com/in/alona-shalieieva-493144180&apiKey=YOUR_TOKEN"
    }
  ];

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl mx-auto">
      <h3 className="text-2xl font-semibold mb-6 text-gray-900">Most Used API Requests:</h3>
      <div className="space-y-6">
        {apiRequests.map((req, index) => (
          <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-medium text-gray-800">{req.title}</span>
              <button
                className={`text-gray-600 hover:text-blue-500 transition duration-200 ${copied === index ? 'text-green-600' : ''}`}
                onClick={() => handleCopy(req.url, index)}
              >
                {copied === index ? (
                  <span>✔️ Copied</span>
                ) : (
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Clipboard_icon.svg/120px-Clipboard_icon.svg.png" // Clipboard icon image
                    alt="Copy"
                    className="w-6 h-6"
                  />
                )}
              </button>
            </div>
            <pre className="bg-gray-100 p-3 rounded-md text-sm text-gray-800 overflow-auto">{req.url}</pre>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApiSection;
