import React from 'react';
import Classes from './Header.module.css';

const Header = () => (
  <header className={Classes.titleWrapper}>
    <h1 className={Classes.title}>My Account</h1>
  </header>
);

export default Header;
