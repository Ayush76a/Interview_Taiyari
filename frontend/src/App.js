import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage"; // Import Home Page
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import CreateSubmissionPage from "./pages/CreateSubmissionPage";
import ViewSubmissionsPage from "./pages/ViewSubmissionsPage";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Add Home Page */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/create-submission" element={<CreateSubmissionPage />} />
        <Route path="/view-submissions" element={<ViewSubmissionsPage />} />
      </Routes>
    </div>
  );
};

export default App;
