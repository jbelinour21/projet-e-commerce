const Cart = require("../models/cart.models");
const User = require("../models/user.models");
const Product = require("../models/product.models");

const addItemToCart = async (req, res) => {
  try {
    const existCart = await Cart.findOne({ user: req.verifiedUser._id });
    if (existCart)
      {
        const item = existCart.cartItems.find((c) => c.product == req.body.productData.product);
        let newquantity =item.quantity+req.body.carItems.quantity;
        if(item){         
        const updatedCart= await Cart.findOneAndUpdate({"user": req.verifiedUser._id},{
          "$set":{
            "cartItmes":{
              ...req.body.cartItems,
              quantity:newquantity }
          }
        });
        const savedCart = await updatedCart.save();
        return res.status(201).json({ cart: savedCart });

        }
        else{
          existCart.cartItems.push(req.body.productData)
          await existCart.save()

        return res.status(201).json({ cart: existCart });

        }
        
        
      }
      else{
      const newCart = new Cart({
        user: req.verifiedUser._id,
        cartItems: [req.body.productData],
      });
      const savedCart = await newCart.save();
      return res.status(201).json({ cart: savedCart });
      }
    } catch (err) {
      return res.status(500).json({ err_message: err });
    }
};


const getCartItems = async (req, res) => {
  try{
    const cart = await Cart.find({user: req.verifiedUser._id});
    return res.status(200).json({ cartItems: cart.cartItems });
  }catch (err) {
    return res.status(500).json({ err_message: err });
  }
  };
module.exports.addItemToCart = addItemToCart; 
module.exports.getCartItems = getCartItems;  