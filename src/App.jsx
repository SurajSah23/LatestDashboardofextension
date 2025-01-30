import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import DashboardOne from "./dashboard/DashboardOne";
import DashboardTwo from "./dashboard/DashboardTwo";
import DashboardThree from "./dashboard/DashboardThree";
import DashboardFour from "./dashboard/DashboardFour";
import DashboardFive from "./dashboard/DashboardFive";
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
import CompaniesThree from "./companies/CompnaiesThree";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/dashboard"
          element={
            <div>
              <div className="flex flex-row gap-2 border-red-800 border-3">
                <DashboardOne />
                <DashboardTwo />
                <div>
                  <DashboardThree />
                </div>
              </div>
              <div className="">
                <DashboardFive />
              </div>
              <div>
                <DashboardFour />
              </div>
            </div>
          }
        />
        <Route
          path="/search"
          element={
            <div>
              <div>
                <SearchOne />
              </div>
              <div>
                <SearchTwo />
              </div>
              <div>
                <SearchThree />
              </div>
            </div>
          }
        />
        <Route
          path="/contacts"
          element={
            <div>
              <div>
                <ContactsOne />
              </div>
              <div className="flex flex-row gap-5 mb-4">
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
              <div>
                <ListsOne />
              </div>
              <div className="flex flex-row gap-4 ml-12">
                <ListsTwo />
                <ListsThree />
              </div>
            </div>
          }
        />
        <Route
          path="/companies"
          element={
            <div>
              <CompaniesOne />
              <div className="flex gap-8 ">
              <CompaniesTwo />
              <CompaniesThree />

              </div>
            </div>
          }
        />
        <Route path="/enrich" element={<div>Enrich</div>} />
        <Route path="/verify" element={<div>Verify</div>} />
      </Routes>
    </Router>
  );
}

export default App;
