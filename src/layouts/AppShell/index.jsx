import React, { children } from 'react';
import Navbar from '../Navbar';

function AppShell({ children }) {
  return (
    <div className="mx-auto w-11/12 max-w-3xl">
      { children }
    </div>
  );
}

export default AppShell;
