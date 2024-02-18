// src/App.jsx

import React from 'react';
import PriceCard from './PriceCard';

const App = () => {
  const priceCardData = [
    {
      title: 'FREE',
      price: 0,
      features: ['Single User', '5GB Storage', 'Unlimited Public Projects','Community Access','Unlimited Private Projects','Dedicated Phone Support','Free Subdomain','Monthly Status Reports'],
    },
    {
      title: 'PLUS',
      price: 9,
      features: ['Unlimited Users', '50GB Storage', 'Unlimited Public Projects', 'Community Access','Unlimited Private Projects','Dedicated Phone Support','Free Subdomain','Monthly Status Reports'],
    },
    {
      title: 'PRO',
      price: 49,
      features: ['5 Users', '50GB Storage', 'Unlimited Public Projects', 'Community Access','Unlimited Private Projects','Dedicated Phone Support','Free Subdomain','Monthly Status Reports'],
    },
    
  ];
  
  return (
    
   <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '80%', padding: '20px' }}>
        {priceCardData.map((data, index) => (
          <div key={index} style={{ border: '10px solid #4169e1', marginBottom: '10px', padding: '20px', flex: '1' }}>
            <h2 style={{ fontSize: '1em', color: 'gray', textAlign: 'center' }}>{data.title}</h2>
            <p style={{ fontSize: '1.9em', color: 'black' }}>${data.price}/month</p>
            <hr />
            <ul style={{ listStyleType: 'disc' }}>
              {data.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button style={{backgroundImage: 'linear-gradient(to right, #4169e1, #87cefa)', color: 'white', padding: '10px', marginTop: '10px', cursor: 'pointer', width: '100%' }}>Button</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
