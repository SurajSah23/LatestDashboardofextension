import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

function Settings() {
  return (
    <Router>
      <div className="bg-gray-50 flex items-start justify-center p-6">
        <div className="w-full max-w-[1335px] bg-white rounded-lg shadow-sm">
          <Navigation />
          <Routes>
            <Route path="/" element={<BasicInfo />} />
            <Route path="/plan-billing" element={<PlanBilling />} />
            <Route path="/usage" element={<Usage />} />
            <Route path="/team" element={<Team />} />
            <Route path="/plan" element={<Plan />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/email" element={<Email />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/integrations" element={<Integrations />} />
            <Route path="/api" element={<API />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

const Navigation = () => {
  const navItems = [
    { path: "/", label: "Basic Info" },
    { path: "/plan-billing", label: "Plan and Billing" },
    { path: "/usage", label: "Usage" },
    { path: "/team", label: "Team" },
    { path: "/plan", label: "Plan" },
    { path: "/billing", label: "Billing" },
    { path: "/email", label: "Email" },
    { path: "/notifications", label: "Notifications" },
    { path: "/integrations", label: "Integrations" },
    { path: "/api", label: "API" },
  ];

  return (
    <nav className="border-b">
      <ul className="flex items-center px-6 py-3 gap-8">
        {navItems.map(({ path, label }) => (
          <li key={path}>
            <NavLink to={path} className="text-gray-700 hover:text-blue-500">
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const BasicInfo = () => {
  const [profileImage, setProfileImage] = useState(
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=faces"
  );

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold text-gray-900">Personal Info</h1>
      <p className="text-gray-500 text-sm mt-1">
        Update your photo and personal details here.
      </p>
      <form className="space-y-6">
        <div className="flex items-start gap-8">
          <label className="w-32 text-sm text-gray-700">Your photo</label>
          <div className="flex items-center gap-4">
            <img
              src={profileImage}
              alt="Profile"
              className="w-16 h-16 rounded-full"
            />
            <input type="file" onChange={handleImageChange} />
          </div>
        </div>

        <div className="flex items-start gap-8">
          <label className="w-32 text-sm text-gray-700">Name</label>
          <div className="flex gap-4 flex-1">
            <input
              type="text"
              placeholder="Oliva"
              className="flex-1 border rounded-md px-3 py-2"
            />
            <input
              type="text"
              placeholder="Rhye"
              className="flex-1 border rounded-md px-3 py-2"
            />
          </div>
        </div>

        <div className="flex items-start gap-8">
          <label className="w-32 text-sm text-gray-700">Email address</label>
          <div className="flex-1 relative">
            <div className="absolute left-3 top-2.5 text-gray-400">
              <img src="" alt="" className="w-5 h-5" />
            </div>
            <input
              type="email"
              placeholder="olivia@untitledui.com"
              className="w-full border rounded-md pl-10 pr-3 py-2"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

const PlanBilling = () => (
  <div className="p-6">
    <h1 className="text-xl font-semibold">Plan and Billing</h1>
    <p className="text-gray-500 mt-2">
      Manage your subscription and billing details.
    </p>
  </div>
);

const Usage = () => (
  <div className="p-6">
    <h1 className="text-xl font-semibold">Usage</h1>
    <p className="text-gray-500 mt-2">
      Monitor your application usage and statistics.
    </p>
  </div>
);

const Team = () => (
  <div className="p-6">
    <h1 className="text-xl font-semibold">Team Management</h1>
    <p className="text-gray-500 mt-2">
      Manage your team members and their permissions.
    </p>
  </div>
);

const Plan = () => (
  <div className="p-6">
    <h1 className="text-xl font-semibold">Plan Details</h1>
    <p className="text-gray-500 mt-2">View and manage your current plan.</p>
  </div>
);

const Billing = () => (
  <div className="p-6">
    <h1 className="text-xl font-semibold">Billing</h1>
    <p className="text-gray-500 mt-2">
      View and manage your billing information.
    </p>
  </div>
);

const Email = () => (
  <div className="p-6">
    <h1 className="text-xl font-semibold">Email Settings</h1>
    <p className="text-gray-500 mt-2">
      Manage your email preferences and settings.
    </p>
  </div>
);

const Notifications = () => (
  <div className="p-6">
    <h1 className="text-xl font-semibold">Notifications</h1>
    <p className="text-gray-500 mt-2">Customize your notification settings.</p>
  </div>
);

const Integrations = () => (
  <div className="p-6">
    <h1 className="text-xl font-semibold">Integrations</h1>
    <p className="text-gray-500 mt-2">Connect with third-party applications.</p>
  </div>
);

const API = () => (
  <div className="p-6">
    <h1 className="text-xl font-semibold">API Settings</h1>
    <p className="text-gray-500 mt-2">
      Manage your API keys and documentation.
    </p>
  </div>
);

export default Settings;
