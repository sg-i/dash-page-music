import React from 'react';
import './MenuBody.scss';

const MenuBody = () => {
  const bodyItems = ['Roadmap', 'Board', 'Goals', 'Reports', 'Favorites', 'Protection'];
  return (
    <div>
      <h4>Menu</h4>
      <ul>
        {bodyItems.map((el) => (
          <li>{el}</li>
        ))}
      </ul>
    </div>
  );
};

export default MenuBody;
