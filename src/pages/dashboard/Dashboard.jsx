import React from 'react';
import './dashboard.scss';
import { useAuth } from '../../AuthContext';

const Dashboard = () => {
  const { user } = useAuth();
  return (
    <div className="dashboard">
      <h1>Welcome{user?.username ? `, ${user.username}` : ''}!</h1>
      <p>This is your dashboard. Use the menu to navigate.</p>
    </div>
  );
};

export default Dashboard;
