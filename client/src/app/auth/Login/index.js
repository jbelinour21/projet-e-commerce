import React from 'react'
import{Link}from "react-router-dom";
import './login.css';

const Login = () => {
    return (
        <div>
            <div class="h-screen font-sans login bg-cover" id="login">
               <div class="container mx-auto h-full flex flex-1 justify-start items-center pl-28">
                   <div class="w-full max-w-lg">
                      <div class="leading-loose">
                        <form class="max-w-sm m-4 p-10 bg-white bg-opacity-25 rounded shadow-xl">
                            <p class="text-white font-medium text-center text-lg font-bold">LOGIN</p>
                                <div class="">
                                   <label class="block text-sm text-white" for="email">E-mail</label>
                                   <input class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                                    type="email" 
                                    id="email" 
                                     placeholder=" e-mail" 
                                     aria-label="email" 
                                     required/>
                                </div>
                                <div class="mt-2">
                                    <label class="block  text-sm text-white">Password</label>
                                    <input class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                                    type="password"
                                     id="password" 
                                     placeholder="password"
                                      arial-label="password" 
                                      required/>
                                </div>

                               <div class="mt-4 items-center flex justify-between">
                                 <button class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded"
                                  type="submit">
                                  sign in</button>
                                <Link class="inline-block right-0 align-baseline font-bold text-sm text-500 text-white hover:text-red-400"
                                href="#">Forgotten password</Link>
                               </div>
                               <div class="text-center">
                                  <Link class="inline-block right-0 align-baseline font-light text-sm text-500 hover:text-red-400">
                                      Register 
                                       </Link>
                                </div>

                              </form>

                  </div>
                   </div>
               </div>
          </div>

        </div>
    )
  
}

export default Login;