import { useState } from 'react';

function Notification() {
  const [bellEnabled, setBellEnabled] = useState(true);
  const [popupEnabled, setPopupEnabled] = useState(true);
  const [playSound, setPlaySound] = useState(true);
  const [showDot, setShowDot] = useState(true);

  return (
    <div className="bg-gray-50 p-6 flex justify-center items-center">
      <div className="w-full max-w-6xl bg-white rounded-xl shadow-lg">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800">Notification Settings</h2>
        </div>

        {/* Settings */}
        <div className="p-6">
          <div className="space-y-6">
            {/* Bell Notifications */}
            <div className="flex items-center justify-between py-4 border-b border-gray-100">
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-full bg-blue-100">
                  <img src="/path/to/bell.png" alt="Bell" className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-md font-semibold text-gray-800">Bell Notifications</h4>
                  <p className="text-sm text-gray-500">
                    Receive notifications via a bell icon. Click it for recent updates.
                  </p>
                </div>
              </div>
              <div className="ml-4">
                <button
                  className={`relative inline-flex items-center w-11 h-6 rounded-full ${
                    bellEnabled ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                  onClick={() => setBellEnabled(!bellEnabled)}
                >
                  <span
                    className={`inline-block w-5 h-5 transform rounded-full bg-white transition ${
                      bellEnabled ? 'translate-x-5' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Pop-up Notifications */}
            <div className="flex items-center justify-between py-4 border-b border-gray-100">
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-full bg-blue-100">
                  <img src="/path/to/message.png" alt="Message" className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-md font-semibold text-gray-800">Pop-up Notifications</h4>
                  <p className="text-sm text-gray-500">
                    Get pop-up notifications while active. You can always click to view.
                  </p>
                </div>
              </div>
              <div className="ml-4">
                <button
                  className={`relative inline-flex items-center w-11 h-6 rounded-full ${
                    popupEnabled ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                  onClick={() => setPopupEnabled(!popupEnabled)}
                >
                  <span
                    className={`inline-block w-5 h-5 transform rounded-full bg-white transition ${
                      popupEnabled ? 'translate-x-5' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Sound & Appearance */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-800">Sound & Appearance</h3>
              <div className="space-y-4">
                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={playSound}
                    onChange={(e) => setPlaySound(e.target.checked)}
                    className="h-4 w-4 rounded border-gray-300 text-blue-500 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">
                    Play a sound when you receive a new pop-up notification
                  </span>
                </label>
                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={showDot}
                    onChange={(e) => setShowDot(e.target.checked)}
                    className="h-4 w-4 rounded border-gray-300 text-blue-500 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">
                    Display a red dot in the browser tab for unread notifications
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notification;
