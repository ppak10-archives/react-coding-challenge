/**
 * Item.jsx
 * Component to display item information
 */

// Node Modules
import React from 'react';

export default function Item(props) {
  return (
    <li className="item">
      <span>{props.item.title || 'Item Name'}</span>
      <span>{props.item.description || 'Item Description'}</span>
      <span>{props.item.price || 'Item Price'}</span>
    </li>
  )
}