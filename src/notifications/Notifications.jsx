import PropTypes from "prop-types";
import { useState } from "react";

const NotificationPanel = ({ isOpen, onClose }) => {
  const [notifications, setNotifications] = useState([
    { id: 1, message: "", type: "info" },
  ]);

  const dismissNotification = (id) => {
    setNotifications(notifications.filter((notif) => notif.id !== id));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b px-4 py-3">
            <h2 className="text-lg font-semibold">Notifications</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-500">✖</button>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            {notifications.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-gray-500">
                <span className="text-3xl">🔔</span>
                <p>No new notifications</p>
              </div>
            ) : (
              <div className="space-y-4">
                {notifications.map((notif) => (
                  <div key={notif.id} className={`p-3 flex justify-between items-center rounded-lg border-l-4 ${
                      notif.type === "success" ? "bg-green-100 text-green-700 border-green-500" 
                    : notif.type === "error" ? "bg-red-100 text-red-700 border-red-500" 
                    : "bg-blue-100 text-blue-700 border-blue-500"
                  }`}>
                    <span>{notif.message}</span>
                    <button onClick={() => dismissNotification(notif.id)} className="text-gray-500 hover:text-gray-800">✖</button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

NotificationPanel.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

const Notifications = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-5">
      <button onClick={() => setIsOpen(true)} className="bg-blue-600 text-white px-4 py-2 rounded-md">
        Show Notifications
      </button>

      <NotificationPanel isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default Notifications;
