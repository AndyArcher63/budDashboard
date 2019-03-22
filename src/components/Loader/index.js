import React from 'react';
import Classes from './Loader.module.css';

const Loader = () => (
  <div className={Classes.loading}>
    Fetching Accounts...
  </div>
);

export default Loader;
