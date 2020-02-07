/**
 * App.jsx
 * Main react app component
 */

// Node Modules
import React from 'react';

export default function App() {
  return (
    <div className="app">
      <nav className="navigation-bar">
        <div className="restaurant-info">
          <span>Restaurant Name</span>
          <span>Restaurant Address</span>
        </div>
        <span className="user-profile" />
      </nav>
      <main>
        Main
      </main>
    </div>
  )
}