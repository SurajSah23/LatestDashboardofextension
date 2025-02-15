import { useState } from 'react';
import { Bell, MessageSquare } from 'lucide-react';

function Notification() {
  const [activeTab, setActiveTab] = useState('notifications');
  const [bellEnabled, setBellEnabled] = useState(true);
  const [popupEnabled, setPopupEnabled] = useState(true);
  const [playSound, setPlaySound] = useState(true);
  const [showDot, setShowDot] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm border border-gray-200">
        {/* Header */}
        <h2 className="text-xl font-semibold text-gray-800 p-6 border-b border-gray-200">
          Notifications
        </h2>

        {/* Tabs */}
        <div className="border-b border-gray-200">
          <div className="flex">
            <button
              className={`px-6 py-3 font-medium text-sm ${
                activeTab === 'notifications'
                  ? 'text-blue-500 border-b-2 border-blue-500'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('notifications')}
            >
              Notifications
            </button>
            <button
              className={`px-6 py-3 font-medium text-sm ${
                activeTab === 'email'
                  ? 'text-blue-500 border-b-2 border-blue-500'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('email')}
            >
              Email
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="mb-8">
            <h3 className="text-base font-medium text-gray-900 mb-1">
              How you get notified
            </h3>
            <p className="text-sm text-gray-500 mb-6">
              Please note: You can&apos;t turn off notifications for important messages about your account, like status and billing updates
            </p>

            {/* Bell Notifications */}
            <div className="flex items-center justify-between py-4 border-t border-gray-200">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-gray-100 rounded">
                  <Bell className="w-5 h-5 text-gray-500" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-1">Bell</h4>
                  <p className="text-sm text-gray-500">
                    Bell notifications Notificationear as a red badge on the bell icon in your navigation bar. You can click on the bell anytime to see your most recent notifications.{' '}
                    <a href="#" className="text-blue-500 hover:text-blue-600">
                      See example
                    </a>
                  </p>
                </div>
              </div>
              <div className="ml-4">
                <button
                  className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                    bellEnabled ? 'bg-blue-500' : 'bg-gray-200'
                  }`}
                  onClick={() => setBellEnabled(!bellEnabled)}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                      bellEnabled ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Pop-up Notifications */}
            <div className="flex items-center justify-between py-4 border-t border-gray-200">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-gray-100 rounded">
                  <MessageSquare className="w-5 h-5 text-gray-500" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-1">Pop-up</h4>
                  <p className="text-sm text-gray-500">
                    Pop-up notifications Notificationear on your screen when you&apos;re active in GetProspect.{' '}
                    <a href="#" className="text-blue-500 hover:text-blue-600">
                      See example
                    </a>
                  </p>
                </div>
              </div>
              <div className="ml-4">
                <button
                  className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                    popupEnabled ? 'bg-blue-500' : 'bg-gray-200'
                  }`}
                  onClick={() => setPopupEnabled(!popupEnabled)}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                      popupEnabled ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Sound and Notificationearance */}
          <div className="mt-8">
            <h3 className="text-base font-medium text-gray-900 mb-4">
              Sound and Notificationearance
            </h3>
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
                  Display a red dot in your browser tab when you have unread bell notifications in GetProspect
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notification;