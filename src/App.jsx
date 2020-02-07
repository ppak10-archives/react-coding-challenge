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
const {storeGroups} = brands[0];
const {items} = storeGroups[0].stores[0].menus[0].campaignMenuAudits[0];

export default function App() {
  console.log(brands, brands[0].name, items)

  // JSX
  const itemsJSX = items.map((item) => <Item item={item}/>);

  return (
    <div className="app">
      <nav className="navigation-bar">
        <div className="restaurant-info">
          <span>{brands[0].name || 'Restaurant Name'}</span>
          <span>{storeGroups[0].stores[0].address || 'Restaurant Name'}</span>
        </div>
        <span className="user-profile" />
      </nav>
      <main className="main-content">
        <div className="items">
          <div className="item-header">
            <h2 className="category">
              {items[0].categories.title || 'Category Name'}
            </h2>
            <span className="items-length">
              {`Showing ${items.length} Items`}
            </span>
          </div>
          <ul className="item-list">
            {itemsJSX}
          </ul>
        </div>
      </main>
    </div>
  )
}