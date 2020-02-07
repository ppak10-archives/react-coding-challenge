/**
 * App.jsx
 * Main react app component
 */

// Node Modules
import React from 'react';

// Components
import Item from './Item';

// Data
import DATA from './data';
const {brands} = DATA[0];
const {items} = brands[0].storeGroups[0].stores[0].menus[0].campaignMenuAudits[0];

export default function App() {
  console.log(brands, brands[0].name, items)
  return (
    <div className="app">
      <nav className="navigation-bar">
        <div className="restaurant-info">
          <span>{brands[0].name || 'Restaurant Name'}</span>
          <span>{brands[0].storeGroups[0].stores[0].address || 'Restaurant Name'}</span>
        </div>
        <span className="user-profile" />
      </nav>
      <main className="main-content">
        <div className="item-header">
          <span>Category Name</span>
          <span>Showing 13 Items</span>
        </div>
        <div className="item-list">
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </main>
    </div>
  )
}