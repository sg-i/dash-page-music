import React from 'react';
import { Link } from 'react-router-dom';
import './MenuBody.scss';

const MenuBody = () => {
  const bodyItems = ['Home', 'Music', 'Goals'];
  return (
    <div>
      <h4>Menu</h4>
      <ul>
        {/* {bodyItems.map((el) => (
          <li>
            <Link to={`/${el}`}>{el}</Link>
          </li>
        ))} */}
        <li>
          <Link to={`/`}>Home</Link>
        </li>
        <li>
          <Link to={`Music`}>Music</Link>{' '}
        </li>
        <li>
          <Link to={`Goals`}>Goals</Link>{' '}
        </li>
      </ul>
    </div>
  );
};

export default MenuBody;
