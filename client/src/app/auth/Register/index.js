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
       
        <div className="h-screen font-sans" id="login">
            <div className="container mx-auto h-full flex flex-1 justify-start items-center pl-28">
                <div className="w-full max-w-lg">
                    <div className="leading-loose">
                        <form 
                        onSubmit={(e) => onFormSubmit(e)}
                        className="max-w-sm m-4 p-10 bg-white bg-opacity-25 rounded shadow-xl">
                            <p className="text-white font-medium text-center text-lg font-bold">Register</p>   
                            
                            <div className="flex w-full gap-4">
                                <div className="mb-4 w-1/2">
                                    <label
                                    className="block text-dark text-sm font-normal mb-2"
                                    htmlFor="firstName">
                                    First Name
                                    </label>
                                    <input
                                    onChange={(e) => onChangeForm(e)}
                                    className="bg-gray-300 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:bg-white"
                                    name="firstName"
                                    id="firstName"
                                    type="text"
                                    required
                                    placeholder="First Name"
                                    />
                                </div>
                                <div className="mb-4 w-1/2">
                                    <label
                                    className="block text-dark text-sm font-normal mb-2"
                                    htmlFor="lastName">
                                    Last Name
                                    </label>
                                    <input
                                    onChange={(e) => onChangeForm(e)}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-dark leading-tight focus:outline-none focus:shadow-outline bg-gray-300 focus:bg-white"
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
                                    className="block text-dark text-sm font-normal mb-2"
                                    htmlFor="phoneNumber">
                                    Phone Number
                                    </label>
                                    <input
                                    onChange={(e) => onChangeForm(e)}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-300 focus:bg-white"
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
                                    className="block text-dark text-sm font-normal mb-2"
                                    htmlFor="city">
                                    City
                                    </label>
                                    <input
                                    onChange={(e) => onChangeForm(e)}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-300 focus:bg-white"
                                    name="city"
                                    id="city"
                                    type="text"
                                    required
                                    placeholder="City"
                                    />
                                </div>
                                <div className="mb-4 w-1/3">
                                    <label
                                    className="block text-dark text-sm font-normal mb-2"
                                    htmlFor="street">
                                    Street
                                    </label>
                                    <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-300 focus:bg-white"
                                    name="street"
                                    id="street"
                                    type="text"
                                    placeholder="Street"
                                    />
                                </div>
                                <div className="mb-4 w-1/3">
                                    <label
                                    className="block text-dark text-sm font-normal mb-2"
                                    htmlFor="zipCode">
                                    Zip Code
                                    </label>
                                    <input
                                    onChange={(e) => onChangeForm(e)}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-300 focus:bg-white"
                                    name="zipCode"
                                    id="zipCode"
                                    type="number"
                                    required
                                    placeholder="Zip Code"
                                    />
                                </div>
                            </div>
                            
                            <div className="">
                                <label className="block text-sm text-white" htmlFor="email">E-mail</label>
                                <input 
                                onChange={(e) => onChangeForm(e)}
                                className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white" 
                                type="email" 
                                id="email"
                                name="email"   
                                placeholder="e-mail" 
                                required/>
                            </div>
                            
                            <div className="mt-2">
                                <label className="block text-sm text-white" htmlFor="password">Password</label>
                                <input
                                onChange={(e) => onChangeForm(e)} 
                                className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                                type="password" 
                                id="password" 
                                placeholder="Password" 
                                required/>
                            </div>   
                            
                            <div className="mt-4 items-center flex justify-between">
                                <button 
                                className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded"
                                type="submit">Register
                                </button>
                                <Link 
                                className="inline-block right-0 align-baseline font-bold text-sm text-500 text-white hover:text-red-400"
                                to="/login">Go to Login</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
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




    