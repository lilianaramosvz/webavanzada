import React from "react";
import { useNavigate } from "react-router-dom";
import dashboard from "../styles/pages/Dashboard.module.css";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className={dashboard.dashboard}>
      <h2>Movie and Series Search Form</h2>
      <p>Welcome to your application dashboard.</p>

      <button className={dashboard.button} onClick={() => navigate("/forms")}>
        Go to Search
      </button>
    </div>
  );
}
export default Dashboard;
