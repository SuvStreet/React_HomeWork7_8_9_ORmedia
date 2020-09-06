import React from 'react';

import './header.css';

const Header = () => {
  return (
    <div className="header d-flex justify-content-center">
      <h3>
        <a href="#/">
          React Tankopedia
        </a>
      </h3>
      <ul className="d-flex">
        <li>
          <a href="#/heavy">Heavy Tanks</a>
        </li>
        <li>
          <a href="#/medium">Medium Tanks</a>
        </li>
        <li>
          <a href="#/light">Light Tanks</a>
        </li>
        <li>
          <a href="#/pt-sau">Pt-Sau</a>
        </li>
        <li>
          <a href="#/pt-sau">Sau</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;