/**
 * Item.jsx
 * Component to display item information
 */

// Node Modules
import React from 'react';

export default function Item(props) {
  const priceString = props.item.price.toString();

  return (
    <li className="item">
      <span className="name">{props.item.title || 'Item Name'}</span>
      <span className="description">
        {props.item.description || 'Item Description'}
      </span>
      <span className="price">
        {`$${priceString.slice(0, priceString.length - 2)}.${priceString.slice(-2)}`}
      </span>
    </li>
  )
}