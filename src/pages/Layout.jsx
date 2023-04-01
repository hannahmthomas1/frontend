import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../nav';
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

export default Layout;
