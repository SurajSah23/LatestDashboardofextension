import { useState } from 'react';

function EmailOne() {
  const [notifications, setNotifications] = useState({
    export: true,
    search: true,
    onboarding: true,
    database: true
  });

  const toggleNotification = (key) => {
    setNotifications((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-sm border border-gray-200">
        <h1 className="text-3xl font-semibold text-gray-800 p-6 border-b border-gray-200">
          Email Settings
        </h1>

        <div className="p-6">
          <h3 className="text-base font-medium text-gray-900 mb-1">How you get notified</h3>
          <p className="text-sm text-gray-500 mb-6">
            Please note: You can&apos;t turn off notifications for important messages about your account, like status and billing updates
          </p>

          {Object.keys(notifications).map((key) => (
            <div key={key} className="flex items-center justify-between py-4 border-t border-gray-200">
              <div>
                <h4 className="text-sm font-medium text-gray-900 mb-1">{key.charAt(0).toUpperCase() + key.slice(1)}</h4>
                <p className="text-sm text-gray-500">Notification for {key} events.</p>
              </div>
              <div className="ml-4">
                <button
                  className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                    notifications[key] ? 'bg-blue-500' : 'bg-gray-200'
                  }`}
                  onClick={() => toggleNotification(key)}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                      notifications[key] ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EmailOne;
