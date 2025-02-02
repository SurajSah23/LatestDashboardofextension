import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/dashboard"
          element={
            <div>
              {/* Dashboard section with responsiveness */}
              <div className="flex">
                <DashboardOne />
                <DashboardTwo />
                <DashboardThree />
              </div>
              <div>
                <DashboardFour/>
              </div>
            </div>
          }
        />
        <Route
          path="/search"
          element={
            <div>
              {/* Search section with responsiveness */}
              <div className="mt-4 sm:mt-8">
                <SearchOne />
              </div>
              <div className="mt-4 sm:mt-8">
                <SearchTwo />
              </div>
              <div className="mt-4 sm:mt-8">
                <SearchThree />
              </div>
            </div>
          }
        />
        <Route
          path="/contacts"
          element={
            <div>
              {/* Contacts section with responsiveness */}
              <div className="mt-4 sm:mt-8">
                <ContactsOne />
              </div>
              <div className="flex flex-col sm:flex-row gap-6 mt-4">
                <ContactTwo />
                <ContactsThree />
              </div>
            </div>
          }
        />
        <Route
          path="/lists"
          element={
            <div>
              {/* Lists section with responsiveness */}
              <div className="mt-4 sm:mt-8">
                <ListsOne />
              </div>
              <div className="flex flex-col sm:flex-row gap-4 ml-12 mt-4">
                <ListsTwo />
                <div>
                  <ListsThree />
                </div>
              </div>
            </div>
          }
        />
        <Route
          path="/companies"
          element={
            <div>
              {/* Companies section with responsiveness */}
              <CompaniesOne />
              <div className="flex flex-col sm:flex-row gap-2 mt-4">
                <CompaniesTwo />
                <CompaniesThree />
              </div>
            </div>
          }
        />
        <Route
          path="/enrich"
          element={
            <div className="mt-4 sm:mt-8">
              <EnrichOne />
            </div>
          }
        />
        <Route
          path="/verify"
          element={<div className="mt-4 sm:mt-8">Verify</div>}
        />
      </Routes>
    </Router>
  );
}

export default App;
