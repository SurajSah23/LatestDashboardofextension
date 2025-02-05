import { useState } from 'react';
import PropTypes from 'prop-types';
import SettingsThree from './SettingsThree';
import SettingsFour from './SettingsFour';
import SettingsFive from './SettingsFive';

const NavItem = ({ to, children, badge, onClick, isActive }) => {
  return (
    <button
      onClick={() => onClick(to)}
      className={`px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 relative ${
        isActive ? 'border-b-2 border-blue-500' : ''
      }`} // Add border when active
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
  isActive: PropTypes.bool.isRequired, // Added isActive to prop validation
};

const BasicInfo = () => (
  <div>
    <SettingsThree />
    <SettingsFour />
    <SettingsFive />
  </div>
);

BasicInfo.propTypes = {
  isActive: PropTypes.bool.isRequired,
};

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
    <div className="-translate-y-20 lg:w-[1300px] lg:h-[801px] lg:translate-x-6 lg:rounded-xl">
      <nav className="border-b border-gray-200">
        <div className="container mx-auto px-4">
          {/* Responsive navigation */}
          <div className="flex flex-col sm:flex-col lg:flex-row sm:space-y-4 lg:space-y-0 lg:space-x-4">
            <NavItem to="basic-info" isActive={activePage === 'basic-info'} onClick={setActivePage}>
              Basic Info
            </NavItem>
            <NavItem to="plan-and-billing" isActive={activePage === 'plan-and-billing'} onClick={setActivePage}>
              Plan and billing
            </NavItem>
            <NavItem to="usage" isActive={activePage === 'usage'} onClick={setActivePage}>
              Usage
            </NavItem>
            <NavItem to="team" badge={4} isActive={activePage === 'team'} onClick={setActivePage}>
              Team
            </NavItem>
            <NavItem to="plan" isActive={activePage === 'plan'} onClick={setActivePage}>
              Plan
            </NavItem>
            <NavItem to="billing" badge={2} isActive={activePage === 'billing'} onClick={setActivePage}>
              Billing
            </NavItem>
            <NavItem to="email" isActive={activePage === 'email'} onClick={setActivePage}>
              Email
            </NavItem>
            <NavItem to="notifications" badge={2} isActive={activePage === 'notifications'} onClick={setActivePage}>
              Notifications
            </NavItem>
            <NavItem to="integrations" isActive={activePage === 'integrations'} onClick={setActivePage}>
              Integrations
            </NavItem>
            <NavItem to="api" isActive={activePage === 'api'} onClick={setActivePage}>
              API
            </NavItem>
          </div>
        </div>
      </nav>
      <div className="container mx-auto px-4 py-8">
        {activePage === 'basic-info' && <BasicInfo isActive={true} />}
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
