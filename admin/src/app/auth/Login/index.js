import React from "react";
import { Link } from "react-router-dom";

const Login = ({}) => {
 
 
  return (
    <div className="bg-marroon h-screen py-24">
      <form 
      className="flex bg-beige shadow-lg mx-auto max-w-sm lg:max-w-4xl justify-center">
        <div className="p-8 lg:w-1/2">
          <h2 className="text-2xl font-semibold text-gray-700 text-center">LOGIN</h2> 
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email Address</label>
            <input 
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



export default Login;

