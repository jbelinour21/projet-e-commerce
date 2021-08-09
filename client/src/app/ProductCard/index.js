import React, { Fragment,useEffect } from 'react'
import '../auth/Login/login.css'
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import {
  getProductById,
} from "../../actions/product.actions";
import { useHistory } from "react-router-dom";

import { connect } from "react-redux";
const ProductCard = ({ getProductById,product }) => {
  let history = useHistory();
  const { productid } = useParams();
  
  useEffect(() => {
    getProductById(productid);
  }, []);

  return( 
    <Fragment>
    <div>
    
      <div className="container mx-auto px-6">
        <div className="md:flex md:items-center">
          <div className="w-full h-64 md:w-1/2 lg:h-96">
            <img className="h-full w-full rounded-md object-cover max-w-lg mx-auto" src="" alt="Nike Air"/>
          </div>
          <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
            <h3 className="text-gray-700 uppercase text-lg">{`Product name ${product?.name}`}</h3>
            <span className="text-gray-500 mt-3"></span>
            <hr className="my-3"/>
            <div className="mt-2">
              <label className="text-gray-700 text-sm" htmlFor="count">Count:</label>
              <div className="flex items-center mt-1">
                <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                  <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </button>
                <span className="text-gray-700 text-lg mx-2">TND</span>
                <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                  <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </button>
              </div>
            </div>
            
            <div className="mt-3">
              <label className="text-gray-700 text-sm" htmlFor="count">color</label>
              <div className="flex items-center mt-1">
                <button className="h-5 w-5 rounded-full bg-blue-600 border-2 border-blue-200 mr-2 focus:outline-none"></button>
                <button className="h-5 w-5 rounded-full bg-teal-600 mr-2 focus:outline-none"></button>
                <button className="h-5 w-5 rounded-full bg-pink-600 mr-2 focus:outline-none"></button>
              </div>
            </div>
                   
                 
            <div className="flex items-center mt-6">
            <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500 flex flex-row">
      <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              Ajouter au panier
    </button>
            </div>
          </div>
        </div>
      </div>
      </div>
   </Fragment>
     );
    
    
   
        

}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  getProductById: PropTypes.func.isRequired,
 
 
};
const mapStateToProps = (state) => ({
  product: state.productReducer.product,
  
});

const mapDispatchToProps = {
  
  getProductById,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);