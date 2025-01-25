import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import DashboardOne from "./dashboard/DashboardOne";
import DashboardTwo from "./dashboard/DashboardTwo";
import DashboardThree from "./dashboard/DashboardThree";
import DashboardFour from "./dashboard/DashboardFour";
import DashboardFive from "./dashboard/DashboardFive";
import SearchOne from "./search/SearchOne";
import SearchTwo from "./search/SearchTwo";

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
            </div>
          }
        />
        <Route path="/contacts" element={<div>Contacts</div>} />
        <Route path="/lists" element={<div>Lists</div>} />
        <Route path="/companies" element={<div>Companies</div>} />
        <Route path="/enrich" element={<div>Enrich</div>} />
        <Route path="/verify" element={<div>Verify</div>} />
      </Routes>
    </Router>
  );
}

export default App;
