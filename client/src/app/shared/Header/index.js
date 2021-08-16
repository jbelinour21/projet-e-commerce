import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { logout } from "../../../actions/auth.actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
const Header = ({auth,logout}) => {

  return (
   
      <header>
        <nav className="flex items-center justify-between px-4 border-b border-gray-200 bg-beige">
          <div className="flex items-center justify-start w-1/3 gap-4">
            <span
              className=" p-4 align-baseline capitalize text-sm text-black">
              Logo
            </span>
          </div>
          <div className="flex items-center justify-center w-2/3 gap-12">
            <Link
              to="/"
              className=" p-4 align-baseline capitalize text-sm text-black">
              Home
            </Link>
            
            <Link
              to="/panier"
              className=" p-4 align-baseline capitalize text-sm text-black">
              panier
            </Link>
          </div>
          {!auth.isAuthenticated && (
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
          )}
            
          
           {auth.isAuthenticated && (
            <div className="flex items-center justify-end w-1/3 gap-4">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  logout();
                }}
                className=" p-4 align-baseline font-bold capitalize text-sm text-primary hover:text-primary-shade">
                Logout
              </button>
            </div>
          )}
         
         
        </nav>
      </header>
    
  );
};

Header.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.authReducer,
});

const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);