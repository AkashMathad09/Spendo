import React from 'react';
import '../styles/dashboard.css';

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1>Welcome to Spendo 💸</h1>
      <p>Track your expenses and stay on top of your game.</p>
      {/* Placeholder for expense summary cards */}
      <div className="summary-cards">
        <div className="card">Total Income: ₹0</div>
        <div className="card">Total Expense: ₹0</div>
        <div className="card">Balance: ₹0</div>
      </div>
    </div>
  );
}
