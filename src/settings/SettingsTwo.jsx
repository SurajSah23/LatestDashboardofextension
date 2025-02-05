import { useState } from 'react';
import PropTypes from 'prop-types'; 

const NavItem = ({ to, children, badge, onClick }) => {
  return (
    <button
      onClick={() => onClick(to)}
      className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 relative"
    >
      {children}
      {badge && (
        <span className="ml-1 px-1.5 py-0.5 text-xs bg-gray-200 text-gray-700 rounded-full">
          {badge}
        </span>
      )}
    </button>
  );
};

NavItem.propTypes = {
  to: PropTypes.string.isRequired, 
  children: PropTypes.node.isRequired, 
  badge: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), 
  onClick: PropTypes.func.isRequired, 
};

const BasicInfo = () => (
  <div>
    <h1 className="text-2xl font-bold">Basic Info</h1>
    <p className="mt-4">Basic information content goes here.</p>
  </div>
);

const PlanAndBilling = () => (
  <div>
    <h1 className="text-2xl font-bold">Plan and Billing</h1>
    <p className="mt-4">Plan and billing information content goes here.</p>
  </div>
);

const Usage = () => (
  <div>
    <h1 className="text-2xl font-bold">Usage</h1>
    <p className="mt-4">Usage information content goes here.</p>
  </div>
);

const Team = () => (
  <div>
    <h1 className="text-2xl font-bold">Team</h1>
    <p className="mt-4">Team management content goes here.</p>
  </div>
);

const Plan = () => (
  <div>
    <h1 className="text-2xl font-bold">Plan</h1>
    <p className="mt-4">Plan details content goes here.</p>
  </div>
);

const Billing = () => (
  <div>
    <h1 className="text-2xl font-bold">Billing</h1>
    <p className="mt-4">Billing information content goes here.</p>
  </div>
);

const Email = () => (
  <div>
    <h1 className="text-2xl font-bold">Email</h1>
    <p className="mt-4">Email settings content goes here.</p>
  </div>
);

const Notifications = () => (
  <div>
    <h1 className="text-2xl font-bold">Notifications</h1>
    <p className="mt-4">Notification settings content goes here.</p>
  </div>
);

const Integrations = () => (
  <div>
    <h1 className="text-2xl font-bold">Integrations</h1>
    <p className="mt-4">Integrations content goes here.</p>
  </div>
);

const API = () => (
  <div>
    <h1 className="text-2xl font-bold">API</h1>
    <p className="mt-4">API documentation and settings content goes here.</p>
  </div>
);

function SettingsTwo() {
  const [activePage, setActivePage] = useState('basic-info'); 

  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto">
            <NavItem to="basic-info" onClick={setActivePage}>
              Basic Info
            </NavItem>
            <NavItem to="plan-and-billing" onClick={setActivePage}>
              Plan and billing
            </NavItem>
            <NavItem to="usage" onClick={setActivePage}>
              Usage
            </NavItem>
            <NavItem to="team" badge={4} onClick={setActivePage}>
              Team
            </NavItem>
            <NavItem to="plan" onClick={setActivePage}>
              Plan
            </NavItem>
            <NavItem to="billing" badge={2} onClick={setActivePage}>
              Billing
            </NavItem>
            <NavItem to="email" onClick={setActivePage}>
              Email
            </NavItem>
            <NavItem to="notifications" badge={2} onClick={setActivePage}>
              Notifications
            </NavItem>
            <NavItem to="integrations" onClick={setActivePage}>
              Integrations
            </NavItem>
            <NavItem to="api" onClick={setActivePage}>
              API
            </NavItem>
          </div>
        </div>
      </nav>
      <div className="container mx-auto px-4 py-8">
        {activePage === 'basic-info' && <BasicInfo />}
        {activePage === 'plan-and-billing' && <PlanAndBilling />}
        {activePage === 'usage' && <Usage />}
        {activePage === 'team' && <Team />}
        {activePage === 'plan' && <Plan />}
        {activePage === 'billing' && <Billing />}
        {activePage === 'email' && <Email />}
        {activePage === 'notifications' && <Notifications />}
        {activePage === 'integrations' && <Integrations />}
        {activePage === 'api' && <API />}
      </div>
    </div>
  );
}

export default SettingsTwo;
