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
    history.push("/");
  }
  return spinner.loading ? (
    <Spinner />
  ) : (
    <div>
    <div className="h-screen font-sans login bg-cover" id="login">
               <div className="container mx-auto h-full flex flex-1 justify-start items-center pl-28">
                   <div className="w-full max-w-lg">
                      <div className="leading-loose">
                        <form 
                        onSubmit={(e) => onFormSubmit(e)}
                        className="max-w-sm m-4 p-10 bg-white bg-opacity-25 rounded shadow-xl">
                            <p className="text-white font-medium text-center text-lg font-bold">LOGIN</p>
                                <div className="">
                                   <label className="block text-sm text-white" htmlFor="email">E-mail</label>
                                   <input 
                                   onChange={(e) => onChangeForm(e)}
                                   className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                                    type="email" 
                                    id="email" 
                                     placeholder=" e-mail" 
                                     required
                                     name="email"
                                     />
                                     
                                </div>
                                <div className="mt-2">
                                    <label className="block  text-sm text-white" htmlFor="password">Password</label>
                                    <input 
                                    onChange={(e) => onChangeForm(e)}
                                    className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                                    type="password"
                                     id="password" 
                                     placeholder="password"
                                    name="password"
                                    required/>
                                </div>

                               <div className="mt-4 items-center flex justify-between">
                                 <button 
                                 className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded"
                                  type="submit">
                                  sign in</button>
                                <Link 
                                className="inline-block right-0 align-baseline font-bold text-sm text-500 text-white hover:text-red-400"
                                to="/login">Forgotten password</Link>
                               </div>
                               <div className="text-center">
                                  <Link 
                                  to="/register"
                                  className="inline-block right-0 align-baseline font-light text-sm text-500 hover:text-red-400">
                                  Register 
                                  </Link>
                                </div>
                              </form>
                  </div>
                   </div>
               </div>
          </div>
    
            
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