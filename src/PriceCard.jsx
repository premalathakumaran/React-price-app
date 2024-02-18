// src/components/PriceCard.jsx

import React from 'react';
import './PrideCard.css';

const PriceCard = ({ title, price, features }) => {
  return (
    <div className="price-card">
      <h2 className="title">{title}</h2>
      <p className="price">${price}/month</p>
      <ul className="features">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button className="buy-button">Button</button>
    </div>
  );
};

export default PriceCard;

