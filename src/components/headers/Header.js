import React from 'react';
import './Header.css';

function Header(props) {
  return (
    <header className="main-header">
      <div>
        <a href="/" data-test="Logo" className="logo">{props.name ? "This is footer" : "My Mission" }</a>
      </div>
    </header >
  );
}

export default Header;
