import React from "react";
import { FaShoppingCart } from "react-icons/fa"
import { NavLink } from "react-router-dom";

import { useSelector } from "react-redux";

const Navbar = () => {

  const { cart } = useSelector((state) => state);
  console.log(cart);

  return (
    <div>
      <nav className=" flex justify-between items-center h-20 max-w-6xl mx-auto">

        <NavLink to="/Shoping_Cart">
          <div className="ml-5">
            <img src="../logo.png" alt="img" className="h-14" />
          </div>
        </NavLink>

        <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
          <NavLink to="/Shoping_Cart">
            <p>Home</p>
          </NavLink>
          <div className="relative">
            <NavLink to="/cart" >
              <FaShoppingCart className="text-2xl" />
              {
                cart?.length > 0 &&
                <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">{cart?.length}</span>
              }

            </NavLink>
          </div>
        </div>

      </nav>
    </div>
  )
};

export default Navbar;
