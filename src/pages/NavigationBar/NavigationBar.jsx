import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div className=" fixed top-0 left-0 right-0 z-50">
      <div className="navbar bg-white shadow-sm ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <Link to="/">
                <li>
                  <a>Home</a>
                </li>
              </Link>
              <li>
                <Link to="/about">
                  <a>About</a>
                </Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost font-bold text-xl text-orange-500">
            FabricNest
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">
                <a className="font-semibold">Home</a>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <a className="font-semibold">About</a>
              </Link>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          <a className="btn bg-orange-400 ">Login</a>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
