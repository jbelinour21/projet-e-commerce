import React,{Fragment,useEffect,useState}  from 'react';
import { useParams,useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
    getProductById
} from "../../actions/product.actions";


const ProductCard =({getProductById,product})=> {
const {productid} =useParams();
useEffect(() => {
   getProductById(productid);
},[])


const [Items, setItems] = useState([
  {quantity: ""},
]);

  return (
  <Fragment>
      <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product?.category.title}</h1>
      <div className="text-gray-700 body-font overflow-hidden bg-white">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img alt="..." 
            className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200 h-96"
            src={product?.imageUrl}/>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-gray-500 tracking-widest">{product?.name}</h1>     
              <p className="py-8 leading-relaxed">{product?.category.brand}</p>
              <div className="flex flex-row gap-4 items-baseline">
                <label
                className="block text-dark text-sm font-normal mb-2"
                htmlFor="quantity">
                Quantity
                </label>
                <input
                className="mb-10 appearance-none border rounded w-full py-2 px-3 text-dark leading-tight focus:outline-none focus:shadow-outline"
                name="quantity"
                id="quantity"
                type="number"
                min={0}
                required
                placeholder="Qty"
                />
              </div>
        <div className="flex mb-4">
          <span className="title-font font-medium text-2xl text-gray-900">{product?.price} TND</span>
          <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Add to cart</button>
          <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
            <svg 
            fill="currentColor" 
            strokeLinecap="round"
            strokeLinejoin="round"
             strokeWidth="2" 
             className="w-5 h-5" 
              viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg>
          </button>
        </div>
        <hr/>
        <span>{product?.description}</span>
      </div>
    </div>
  </div>
</div>
            
       </Fragment>
    )
}

ProductCard.propTypes = {
   
    product: PropTypes.object.isRequired,
    getProductById: PropTypes.func.isRequired,
   
  };
  const mapStateToProps = (state) => ({
    product: state.productReducer.product,
  });
  
  const mapDispatchToProps = {
   getProductById
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);