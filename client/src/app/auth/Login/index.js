import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { login } from "../../../actions/auth.actions";
import PropTypes from "prop-types";
import Spinner from "../../shared/Spinner";
import { connect } from "react-redux";
import './login.css';
const Login = ({login, auth, spinner}) => {
  const [loginForm, setloginForm] = useState({
    email: "",
    password: "",
  });
  
  let history = useHistory();
  
  const onChangeForm = (e) => {
    setloginForm({ ...loginForm, [e.target.name]: e.target.value });
  };
  const onFormSubmit = async (e) => {
    e.preventDefault();
    login(loginForm);
  };
  if (auth.isAuthenticated) {
    history.push("/panier");
  }
  return spinner.loading ? (
    <Spinner />
  ) : (
    <div className="bg-marroon h-screen py-24">
      <form 
      onSubmit={(e) => onFormSubmit(e)}
      className="flex bg-beige shadow-lg mx-auto max-w-sm lg:max-w-4xl justify-center">
        <div className="lg:w-1/2" id="left"></div>
        <div className="p-8 lg:w-1/2">
          <h2 className="text-2xl font-semibold text-gray-700 text-center">LOGIN</h2> 
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email Address</label>
            <input 
            onChange={(e) => onChangeForm(e)}
            className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 py-2 px-4 block w-full appearance-none" 
            type="email"
            name="email"
            id="email" 
            placeholder="email"
            required
            />
          </div>
          <div className="mt-4">
            <div className="flex justify-between">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
              <Link to="/login" className="text-xs text-gray-500">Forget Password?</Link>
            </div>
            <input 
            onChange={(e) => onChangeForm(e)}
            className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 py-2 px-4 block w-full appearance-none" 
            type="password"
            name="password"
            id="password" 
            placeholder="password"
            required
            />
          </div>
          <div className="mt-8">
            <button 
            type="submit"
            className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">Login</button>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 md:w-1/4"></span>
            <Link 
            to="/register"
            className="text-xs text-gray-500 uppercase">or sign up</Link>
            <span className="border-b w-1/5 md:w-1/4"></span>
          </div>
        </div>
      </form>
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  spinner: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.authReducer,
  spinner: state.spinnerReducer,

});
const mapDispatchToProps = {
  login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);