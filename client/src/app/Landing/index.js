import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../auth/Login/login.css'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  getProducts,

} from "../../actions/product.actions";


const Landing = ({
  getProducts,
  productState,
}) => {

  useEffect(() => {
    getProducts();
  }, []);


  return( 
  <Fragment>
    <div className="mx-auto p-16 sm:p-24 lg:p-48 bg-beige h-full"> 
     <div className="flex flex-row" >

        <div className="flex justify-between items-center w-1/2 my-4">
          <input
            name="searchInvoice"
            placeholder="Keyword"
            className="py-2 pr-4 pl-8 rounded focus:outline-none w-full text-dark shadow"
            type="text"
            autoFocus
          />
          <span className="absolute ml-2">
            <i className="fas fa-search text-dark"></i>
          </span>
        </div>
        <div>
        <span><i className="fas fa-shopping-basket"></i></span>
        </div>
      </div>

        <div className="relative block md:flex items-center bg-white shadow-xl">
          <div className="relative w-full md:w-2/5 h-full overflow-hidden rounded-t-lg md:rounded-t-none md:rounded-l-lg">
            <img className="absolute inset-0 w-full h-full object-cover object-center" src="" alt=""/>
            <div className="absolute inset-0 w-full h-full bg-indigo-900 opacity-75"></div>
            <div className="absolute inset-0 w-full h-full flex items-center justify-center fill-current text-white">
            </div>
          </div>
          <div className="w-full md:w-3/5 h-full flex items-center bg-gray-100 rounded-lg">
            <div className="p-12 md:pr-24 md:pl-16 md:py-12">
              <p className="text-gray-600"><span className="text-gray-900">Missguided</span> is a UK-based fashion retailer that has nearly doubled in size since last year. They integrated Stripe to deliver seamless checkout across mobile and web for customers in 100+ countries, all while automatically combating fraud.</p>
              
            </div>
            
          </div>
          <button className="absolute top-0 mt-32 left-0 bg-white rounded-full shadow-md h-12 w-12 text-2xl text-indigo-600 hover:text-indigo-400 focus:text-indigo-400 -ml-6 focus:outline-none focus:shadow-outline">
            <span className="block">&#x279c;</span>
          </button>
          <button className="absolute top-0 mt-32 right-0 bg-white rounded-full shadow-md h-12 w-12 text-2xl text-indigo-600 hover:text-indigo-400 focus:text-indigo-400 -mr-6 focus:outline-none focus:shadow-outline">
            <span className="block">&#x279c;</span>
          </button>
        </div>

<div>NOUVEAUX PRODUITS</div>
<div>PRODUITS EN PROMO</div>
<div>MEILLEURES VENTES</div>


<div className="flex flex-row justify-between">
{productState.products &&
      productState?.products.map((elProduct) => {
            return (
<Link to={`/${elProduct._id}`}>
<div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
  <div className="p-6">
    <img className="object object-cover w-full h-full" src={elProduct.imageUrl} alt={elProduct.name} />
  </div>
  <div className="px-5 py-3 flex flex-col">
    <h4 className="text-gray-700 uppercase">{elProduct.category.title}</h4>
    <h3 className="text-gray-700 uppercase">{elProduct.name}</h3>
    <span className="text-gray-500 mt-2">{elProduct.price}</span>
    <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500 flex flex-row">
      <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              Ajouter au panier
    </button>
  </div>
</div>
</Link>
            );
          })}
</div>
   
</div>

   
    </Fragment>
   
        
    );
};
Landing.propTypes = {
  getProducts: PropTypes.func.isRequired,
  productState: PropTypes.object.isRequired, 
};
const mapStateToProps = (state) => ({
  productState: state.productReducer,
});

const mapDispatchToProps = {
  getProducts,
  
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);

