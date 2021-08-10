const Cart = require("../models/cart.models");
const User = require("../models/user.models");
/*exports.addItemToCart = (req, res) => {
        const cart = new Cart({
          cartItems: req.body.cartItems,
        });
        cart.save((error, cart) => {
          if (error) return res.status(400).json({ error });
          if (cart) {
            return res.status(201).json({ cart });
          }
        });     
  };*/

  const addItemToCart = async (req, res) => {
    try {
      const existCart = await Cart.findOne({ user: req.verifiedUser._id });
    if (existCart)
      {
        const product = cartItems.product;
        const item = cart.cartItems.find((c) => c.product == product);
        if(item){
          
        const updatedCart= await Cart.findOneAndUpdate({"user": req.verifiedUser._id,"cartItems.product": product},{
          "$set":{
            "cartItmes":{
              ...req.body.cartItems,
              quantity:item.quantity+req.body.carItems.quantity }
          }
        });
        const savedCart = await updatedCart.save();
        return res.status(201).json({ cart: savedCart });

        }
        else{
          
        const updatedCart= await Cart.findOneAndUpdate({user: req.verifiedUser._id},{
          "$push":{
            "cartItmes":req.body.cartItems 
          }
        });
        const savedCart = await updatedCart.save();
        return res.status(201).json({ cart: savedCart });

        }
        
        
      }
      else{
      const newCart = new Cart({
        user: req.verifiedUser._id,
        cartItems: [req.body.cartItems],
      });
      const savedCart = await newCart.save();
      return res.status(201).json({ cart: savedCart });
      }
    } catch (err) {
      return res.status(500).json({ err_message: err });
    }
  };
  module.exports.addItemToCart = addItemToCart;  