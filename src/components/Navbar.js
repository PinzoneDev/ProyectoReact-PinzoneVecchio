import React from 'react';
import CartWidget from './CartWidget';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Mi Tienda</a>
        <div className="navbar-nav ml-auto">
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
