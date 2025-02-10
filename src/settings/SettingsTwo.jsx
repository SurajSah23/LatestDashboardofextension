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
  <div className='rounded-lg '>
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
    <h1 className="text-xl font-bold">Plan and Billing</h1>
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
    <div className="-translate-y-20 lg:w-[1100px] lg:h-[801px] lg:translate-x-6 lg:rounded-xl border border-gray-200">
      <nav className="border-b border-gray-200">
        <div className="container mx-auto px-4">
          {/* Responsive navigation */}
          <div className="flex flex-col sm:flex-col lg:flex-row sm:space-y-4 lg:space-y-0 lg:space-x-4 ">
            <NavItem to="basic-info" isActive={activePage === 'basic-info'} onClick={setActivePage}>
             <p className='font-light' >Basic Info</p>
            </NavItem>
            <NavItem to="plan-and-billing" isActive={activePage === 'plan-and-billing'} onClick={setActivePage}>
              <p className='font-light'>Plan and billing</p>
            </NavItem>
            <NavItem to="usage" isActive={activePage === 'usage'} onClick={setActivePage}>
              <p className='font-light'>Usage</p>
            </NavItem>
            <div className='flex'>
            <NavItem to="team" isActive={activePage === 'team'} onClick={setActivePage}>
            <div className='flex gap-2'>
             <p className='font-light'>Team</p>
             <p className='bg-[#F2F4F7] h-5 w-5 rounded-full'>4</p>
            </div>
            </NavItem>
            </div>
            <NavItem to="plan" isActive={activePage === 'plan'} onClick={setActivePage}>
              <p className='font-light'>Plan</p>
            </NavItem>
            <NavItem to="billing" isActive={activePage === 'billing'} onClick={setActivePage}>
            <div className='flex gap-2'>
             <p className='font-light'>Billing</p>
             <p className='bg-[#F2F4F7] h-5 w-5 rounded-full'>2</p>
            </div>
              
            </NavItem>
            <NavItem to="email" isActive={activePage === 'email'} onClick={setActivePage}>
              <p className='font-light'>Email</p>
            </NavItem>
            <NavItem to="notifications" isActive={activePage === 'notifications'} onClick={setActivePage}>
            <div className='flex gap-2'>
              <p className='font-light'>Notifications</p>
              <p className='bg-[#F2F4F7] h-5 w-5 rounded-full'>2</p>
            </div>
            </NavItem>
            <NavItem to="integrations" isActive={activePage === 'integrations'} onClick={setActivePage}>
              <p className='font-light'>Integrations</p>
            </NavItem>
            <NavItem to="api" isActive={activePage === 'api'} onClick={setActivePage}>
              <p className='font-light'>API</p>
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
