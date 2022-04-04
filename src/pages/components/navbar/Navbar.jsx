import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          {/* Ninda */}
          <Link to="/login">
            <li>Login</li>
          </Link>

          {/* alif fadel */}
          <Link to="/user">
            <li>User</li>
          </Link>
          {/* juan */}
          <Link to="/user/new">
            <li>New User</li>
          </Link>
          {/* rizky */}
          <Link to="/product">
            <li>Product</li>
          </Link>

          {/* alifiandy */}
          <Link to="/product/new">
            <li>New Product</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
