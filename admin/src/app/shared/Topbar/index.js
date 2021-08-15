import React, { Fragment } from "react";

import { Link } from "react-router-dom";

const Topbar = () => {

  return (
    <Fragment>
      <div className="flex justify-between items-center py-4 px-12 rounded-tl-3xl -ml-6 bg-secondary h-20">
        <div className=" font-bold text-dark text-lg">
        <Link
                to="/"
                className=" p-4 align-baseline capitalize text-sm text-black">
                Admin Dashboard
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
    
            
         
       
      </div>
     
    </Fragment>
  );
};

export default Topbar;