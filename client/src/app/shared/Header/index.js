import React from "react";
import { Link } from "react-router-dom";

const Header = () => {

  return (
   
      <header>
        <nav className="flex items-center justify-between py-2 px-4 border-b border-gray-200 bg-beige">
          <div className="flex items-center justify-start w-1/3 gap-4">
            <Link
              to="/"
              className=" p-4 align-baseline capitalize text-sm text-marroon">
              Logo
            </Link>
          </div>
          <div className="flex items-center justify-center w-2/3 gap-12">
            <Link
              to="/"
              className=" p-4 align-baseline capitalize text-sm text-black">
              Home
            </Link>
            
            <Link
              to="/"
              className=" p-4 align-baseline capitalize text-sm text-black">
              test
            </Link>
          </div>
          
            <div className="flex items-center justify-end w-1/3 gap-4">
              <Link
                to="/login"
                className=" p-4 align-baseline capitalize text-sm text-black">
                Login
              </Link>
              <Link
                to="/register"
                className=" p-4 align-baseline capitalize text-sm text-black">
                Register
              </Link>
            </div>

            
           <div className="col-md-9 lab-menu-horizontal">
           </div> 
         
         
        </nav>
      </header>
    
  );
};

export default Header