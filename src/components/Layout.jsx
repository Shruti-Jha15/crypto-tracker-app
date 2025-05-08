import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="container py-4">
      <header className="mb-4">
        <h1 className="text-center">Real-Time Crypto Price Tracker</h1>
        <p className="text-center text-muted">
          Simulated real-time updates every 2 seconds
        </p>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;