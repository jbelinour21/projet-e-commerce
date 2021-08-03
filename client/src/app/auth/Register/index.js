import React, { Fragment } from 'react'
import { Link } from "react-router-dom";
import "../Login/login.css"

const Register = () => {
    return (
        <Fragment>
        <div className="h-screen font-sans" id="login">
            <div className="container mx-auto h-full flex flex-1 justify-start items-center pl-28">
                <div className="w-full max-w-lg">
                    <div className="leading-loose">
                        <form className="max-w-sm m-4 p-10 bg-white bg-opacity-25 rounded shadow-xl">
                            <p className="text-white font-medium text-center text-lg font-bold">Register</p>   
                            
                            <div className="flex w-full gap-4">
                                <div class="mb-4 w-1/2">
                                    <label
                                    class="block text-dark text-sm font-normal mb-2"
                                    for="firstName">
                                    First Name
                                    </label>
                                    <input
                                    class="bg-gray-300 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:bg-white"
                                    name="firstName"
                                    id="firstName"
                                    type="text"
                                    required
                                    placeholder="First Name"
                                    />
                                </div>
                                <div class="mb-4 w-1/2">
                                    <label
                                    class="block text-dark text-sm font-normal mb-2"
                                    for="lastName">
                                    Last Name
                                    </label>
                                    <input
                                    class="shadow appearance-none border rounded w-full py-2 px-3 text-dark leading-tight focus:outline-none focus:shadow-outline bg-gray-300 focus:bg-white"
                                    name="lastName"
                                    id="lastName"
                                    type="text"
                                    required
                                    placeholder="Last Name"
                                    />
                                </div>
                            </div>

                            <div className="flex w-full gap-4">

                                <div class="mb-4 w-1/2">
                                    <label
                                    class="block text-dark text-sm font-normal mb-2"
                                    for="phoneNumber">
                                    Phone Number
                                    </label>
                                    <input
                                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-300 focus:bg-white"
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
                                    for="city">
                                    City
                                    </label>
                                    <input
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
                                    class="block text-dark text-sm font-normal mb-2"
                                    for="street">
                                    Street
                                    </label>
                                    <input
                                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-300 focus:bg-white"
                                    name="street"
                                    id="street"
                                    type="text"
                                    placeholder="Street"
                                    />
                                </div>
                                <div class="mb-4 w-1/3">
                                    <label
                                    class="block text-dark text-sm font-normal mb-2"
                                    for="zipCode">
                                    Zip Code
                                    </label>
                                    <input
                                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-300 focus:bg-white"
                                    name="zipCode"
                                    id="zipCode"
                                    type="number"
                                    required
                                    placeholder="Zip Code"
                                    />
                                </div>
                             </div>
                            
                            
                            <div className="">
                                <label className="block text-sm text-white" for="email">E-mail</label>
                                <input className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white" 
                                type="email" 
                                id="email"  
                                placeholder="e-mail" 
                                required/>
                            </div>
                            
                            <div className="mt-2">
                                <label className="block text-sm text-white">Password</label>
                                <input className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                                    type="password" id="password" placeholder="Digite a sua senha" arial-label="password" required/>
                            </div>   
                            
                            <div class="mt-4 items-center flex justify-between">
                                <button class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded"
                                type="submit">Register</button>
                                <Link className="inline-block right-0 align-baseline font-bold text-sm text-500 text-white hover:text-red-400"
                                href="#">Go to Login</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>



</Fragment>
    )
}

export default Register



    