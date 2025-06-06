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
      <Navbar />
      <Routes>
        {/* Redirect the root path to "/dashboard" */}
        <Route path="/" element={<Navigate to="/dashboard" />} />

        <Route
          path="/dashboard"
          element={
            <div className="max-h-screen">
              <div className="flex flex-col lg:flex lg:flex-row space-x-10">
                <DashboardOne />
                <DashboardTwo />
                <DashboardThree />
                <br />
              </div>
              <div>
                <DashboardFive />
                <br />
              </div>
              <DashboardFour />
              <Messages />
            </div>
          }
        />
        <Route
          path="/search"
          element={
            <div>
              <div className="mt-4 sm:mt-8">
                <SearchOne />
              </div>
              <div className="flex flex-col sm:flex-row gap-3 mt-4">
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
            <div>
              <div className="mt-4 sm:mt-8">
                <ContactsOne />
              </div>
              <div className="flex flex-col sm:flex-row gap-6 mt-4">
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
            <div>
              <div className="mt-4 sm:mt-8">
                <ListsOne />
              </div>
              <div className="flex flex-col sm:flex-row gap-4 ml-12 mt-4">
                <ListsTwo />
                <div>
                  <ListsThree />
                </div>
              </div>
              <Messages />
            </div>
          }
        />
        <Route
          path="/companies"
          element={
            <div>
              <CompaniesOne />
              <div className="flex flex-col sm:flex-row gap-2 mt-4">
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
            <div className="mt-4 sm:mt-8">
              <EnrichOne />
              <Messages />
            </div>
          }
        />
        <Route
          path="/verify"
          element={
            <div className="mt-4 sm:mt-8">
              <VerifyOne />
              <VerifyTwo />
              <VerifyThree />
              <Messages />
            </div>
          }
        />
        <Route
          path="/notifications"
          element={
            <div className="mt-4 sm:mt-8">
              <Notifications />
              <Messages />
            </div>
          }
        />
        <Route
          path="/settings"
          element={
            <div className="mt-4 sm:mt-8">
              <div>
                <SettingsOne />
              </div>
              <div>
                <SettingsTwo />
              </div>
              <Messages />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
