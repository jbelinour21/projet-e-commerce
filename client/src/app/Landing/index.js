import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../auth/Login/login.css'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  getProducts,
  searchProductByName,
} from "../../actions/product.actions";
import {
  addItemToCart,
} from "../../actions/cart.actions";

const Landing = ({getProducts, productState,searchProductByName,addItemToCart}) => {
  const [SearchName, setSearchName] = useState("");

  useEffect(() => {

    getProducts();
  }, []);
 
  const onChangeSearch = async (e) => {
    e.preventDefault();
    await setSearchName(e.target.value);
    await searchProductByName(e.target.value);
  };
  const createItem = async (e) => {
    e.preventDefault();
    //await addItemTocart();
  };

  return( 
  <Fragment>
    <div className="bg-beige h-full"> 
    {/*carousel*/}
      <div className="">
        <div id="carouselExampleControls" className="carousel slide flex items-center mx-48" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
      <img src="https://images.pexels.com/photos/90297/pexels-photo-90297.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="d-block w-100" alt="..."/>
    </div>
            <div className="carousel-item">
              <img src="https://images.pexels.com/photos/90297/pexels-photo-90297.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src="https://images.pexels.com/photos/90297/pexels-photo-90297.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="d-block w-100" alt="..."/>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    
    
    {/*search*/}
    <div className="flex justify-between items-center w-1/3 my-4">
          <input
            name="searchInvoice"
            placeholder="Keyword"
            className="py-2 pr-4 pl-8 rounded focus:outline-none w-full text-dark shadow"
            type="text"
            autoFocus
            onChange={(e) => onChangeSearch(e)}
            value={SearchName}
          />
          <span className="absolute ml-2">
            <i className="fas fa-search text-dark"></i>
          </span>
        </div>

     

        
<div className="flex flex-row justify-between mx-10">
{productState.products &&
      productState?.products.map((elProduct) => {
            return (

<div className="rounded-md shadow-md overflow-hidden flex flex-col items-center">
<Link to={`/products/${elProduct._id}`}>
  <div className="p-10">
    <img className="object object-cover w-full h-full" src={elProduct.imageUrl} alt={elProduct.name} />
  </div>
  <div className="flex flex-col justify-center items-center">
    <h4 className="text-gray-700 uppercase">{elProduct.category.title}</h4>
    <h3 className="text-gray-700 uppercase">{elProduct.name}</h3>
    <span className="text-gray-500 mt-2">{elProduct.price}</span> 
  </div>
  </Link>
  <button 
  onClick={(e) => createItem(e)}
  className="p-2 bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
      Ajouter au panier
  </button>
</div>
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
  searchProductByName: PropTypes.func.isRequired,
  addItemToCart: PropTypes.func.isRequired,
  cartState: PropTypes.object.isRequired, 
};
const mapStateToProps = (state) => ({
  productState: state.productReducer,
  cartState: state.cartReducer,
});

const mapDispatchToProps = {
  getProducts,
  searchProductByName,
  addItemToCart,
};
export default connect(mapStateToProps, mapDispatchToProps)(Landing);

