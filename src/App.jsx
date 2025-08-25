import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import DashboardOne from "./dashboard/DashboardOne";
import DashboardTwo from "./dashboard/DashboardTwo";
import DashboardThree from "./dashboard/DashboardThree";
import DashboardFour from "./dashboard/DashboardFour";
import SearchOne from "./search/SearchOne";
import SearchTwo from "./search/SearchTwo";
import SearchThree from "./search/SearchThree";
import ContactsOne from "./contacts/ContactsOne";
import ContactTwo from "./contacts/ContactsTwo";
import ContactsThree from "./contacts/ContactsThree";
import ListsOne from "./lists/ListsOne";
import ListsTwo from "./lists/ListsTwo";
import ListsThree from "./lists/ListsThree";
import CompaniesOne from "./companies/CompaniesOne";
import CompaniesTwo from "./companies/CompaniesTwo";
import CompaniesThree from "./companies/CompaniesThree";
import EnrichOne from "./enrich/EnrichOne";
import DashboardFive from "./dashboard/DashboardFive";
import SettingsOne from "./settings/SettingsOne";
import SettingsTwo from "./settings/SettingsTwo";
import VerifyOne from "./verify/VerifyOne";
import VerifyTwo from "./verify/VerifyTwo";
import VerifyThree from "./verify/VerifyThree";
import Notifications from "./notifications/Notifications";
import Messages from "./messages/Messages";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto px-4 py-6">
          <Routes>
            {/* Redirect the root path to "/dashboard" */}
            <Route path="/" element={<Navigate to="/dashboard" />} />

            <Route
              path="/dashboard"
              element={
                <div className="space-y-6">
                  {/* Top Row - Dashboard Cards */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <DashboardOne />
                    <DashboardTwo />
                    <DashboardThree />
                  </div>
                  
                  {/* Middle Row - Dashboard Five */}
                  <div className="w-full">
                    <DashboardFive />
                  </div>
                  
                  {/* Bottom Row - Dashboard Four and Messages */}
                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                    <DashboardFour />
                    <Messages />
                  </div>
                </div>
              }
            />
            
            <Route
              path="/search"
              element={
                <div className="space-y-6">
                  <SearchOne />
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <SearchTwo />
                    <SearchThree />
                  </div>
                  <Messages />
                </div>
              }
            />
            
            <Route
              path="/contacts"
              element={
                <div className="space-y-6">
                  <ContactsOne />
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <ContactTwo />
                    <ContactsThree />
                  </div>
                  <Messages />
                </div>
              }
            />
            
            <Route
              path="/lists"
              element={
                <div className="space-y-6">
                  <ListsOne />
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <ListsTwo />
                    <ListsThree />
                  </div>
                  <Messages />
                </div>
              }
            />
            
            <Route
              path="/companies"
              element={
                <div className="space-y-6">
                  <CompaniesOne />
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <CompaniesTwo />
                    <CompaniesThree />
                  </div>
                  <Messages />
                </div>
              }
            />
            
            <Route
              path="/enrich"
              element={
                <div className="space-y-6">
                  <EnrichOne />
                  <Messages />
                </div>
              }
            />
            
            <Route
              path="/verify"
              element={
                <div className="space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <VerifyOne />
                    <VerifyTwo />
                    <VerifyThree />
                  </div>
                  <Messages />
                </div>
              }
            />
            
            <Route
              path="/notifications"
              element={
                <div className="space-y-6">
                  <Notifications />
                  <Messages />
                </div>
              }
            />
            
            <Route
              path="/settings"
              element={
                <div className="space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <SettingsOne />
                    <SettingsTwo />
                  </div>
                  <Messages />
                </div>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
