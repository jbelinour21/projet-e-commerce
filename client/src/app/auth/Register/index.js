import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { register } from "../../../actions/auth.actions";
import { connect } from "react-redux";
import Spinner from "../../shared/Spinner";
import PropTypes from "prop-types";
import '../Login/login.css'
const Register = ({ register, spinner }) => {
  let history = useHistory();
  const [RegisterForm, setRegisterForm] = useState({
    email: "",
    password: "",
    street: "",
    city: "",
    zipCode: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
  });
  const onChangeForm = (e) => {
    setRegisterForm({ ...RegisterForm, [e.target.name]: e.target.value });
  };
  const onFormSubmit = async (e) => {
    e.preventDefault();
    
      await register(RegisterForm);
      history.push("/login");
    
  }
    return spinner.loading ? (
        <Spinner />
      ) : (
       
        <div className="bg-marroon h-full py-24">
            <form 
            onSubmit={(e) => onFormSubmit(e)}
            className="flex bg-beige shadow-lg mx-auto max-w-sm lg:max-w-4xl justify-center">
                <div className="lg:w-1/2" id="left"></div>
                <div className="p-8 lg:w-1/2">
                    <h2 className="text-2xl font-semibold text-gray-700 text-center">Register</h2>
                    <div className="flex w-full gap-4">
                        <div className="mb-4 w-1/2">
                            <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="firstName">
                            First Name
                            </label>
                            <input
                            onChange={(e) => onChangeForm(e)}
                            className="bg-gray-200 appearance-none border rounded w-full py-2 px-4 text-gray-700 focus:outline-none focus:bg-white border-gray-300 block"
                            name="firstName"
                            id="firstName"
                            type="text"
                            required
                            placeholder="First Name"
                            />
                        </div>
                        
                        <div className="mb-4 w-1/2">
                            <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="lastName">
                            Last Name
                            </label>
                            <input
                            onChange={(e) => onChangeForm(e)}
                            className="bg-gray-200 appearance-none border rounded w-full py-2 px-4 text-gray-700 focus:outline-none focus:bg-white border-gray-300 block"
                            name="lastName"
                            id="lastName"
                            type="text"
                            required
                            placeholder="Last Name"
                            />
                        </div>
                    </div>

                    <div className="flex w-full gap-4">

                                <div className="mb-4 w-1/2">
                                    <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="phoneNumber">
                                    Phone Number
                                    </label>
                                    <input
                                    onChange={(e) => onChangeForm(e)}
                                    className="bg-gray-200 appearance-none border rounded w-full py-2 px-4 text-gray-700 focus:outline-none focus:bg-white border-gray-300 block"
                                    name="phoneNumber"
                                    id="phoneNumber"
                                    type="number"
                                    required
                                    placeholder="Phone Number"
                                    />
                                </div>
                            </div>

                            <div className="flex w-full gap-4">
                                <div className="mb-4 w-1/3">
                                    <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="city">
                                    City
                                    </label>
                                    
                                    <input
                                    onChange={(e) => onChangeForm(e)}
                                    className="bg-gray-200 appearance-none border rounded w-full py-2 px-4 text-gray-700 focus:outline-none focus:bg-white border-gray-300 block"
                                    name="city"
                                    id="city"
                                    type="text"
                                    required
                                    placeholder="City"
                                    />
                                </div>
                                <div className="mb-4 w-1/3">
                                    <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="street">
                                    Street
                                    </label>
                                    <input
                                    onChange={(e) => onChangeForm(e)}
                                    className="bg-gray-200 appearance-none border rounded w-full py-2 px-4 text-gray-700 focus:outline-none focus:bg-white border-gray-300 block"
                                    name="street"
                                    id="street"
                                    type="text"
                                    placeholder="Street"
                                    />
                                </div>
                                <div className="mb-4 w-1/3">
                                    <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="zipCode">
                                    Zip Code
                                    </label>
                                    <input
                                    onChange={(e) => onChangeForm(e)}
                                    className="bg-gray-200 appearance-none border rounded w-full py-2 px-4 text-gray-700 focus:outline-none focus:bg-white border-gray-300 block"
                                    name="zipCode"
                                    id="zipCode"
                                    type="number"
                                    required
                                    placeholder="Zip Code"
                                    />
                                </div>
                            </div>
                
                
                
                <div className="mt-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email Address</label>
                    <input 
                    onChange={(e) => onChangeForm(e)}
                    className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" 
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
                            
                            </div>
                                <input 
                                onChange={(e) => onChangeForm(e)}
                                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" 
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
                                className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">Register</button>
                            </div>
                            <div className="mt-4 flex items-center justify-between">
                                <span className="border-b w-1/5 md:w-1/4"></span>
                                <Link 
                                to="/login"
                                className="text-xs text-gray-500 uppercase">or go to login</Link>
                                <span className="border-b w-1/5 md:w-1/4"></span>
                            </div>
                        </div>
        </form>
        </div>

    );
};
Register.propTypes = {
    register: PropTypes.func.isRequired,
  };
  const mapStateToProps = (state) => ({
    spinner: state.spinnerReducer
  });
  
  const mapDispatchToProps = {
    register,
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Register);




    