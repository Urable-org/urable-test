import React from 'react';

const Dashboard = () => {
  return (
    <section className="dashboard">
      <h2>User Dashboard</h2>
      <div className="dashboard-content">
        <div className="dashboard-card">
          <h3>Smart Contracts</h3>
          <p>Manage your smart contracts here.</p>
        </div>
        <div className="dashboard-card">
          <h3>Audits</h3>
          <p>View and manage your audits.</p>
        </div>
        <div className="dashboard-card">
          <h3>Optimization</h3>
          <p>Optimize your smart contracts for better performance.</p>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;