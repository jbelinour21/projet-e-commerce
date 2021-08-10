const Order = require("../models/order.models");
const createOrder = async (req, res) => {
    try {
      
      
      const newProduct = new Product({
        user: req.verfiedUser._id,
        items: req.body.items,
        category: savedCategory._id,
        description: req.body.description,
        countInStock: req.body.countInStock,
        imageUrl: req.body.imageUrl,
      });
      const savedOrder = await newOrder.save();
      return res.status(201).json({ product: savedProduct });
    } catch (err) {
      return res.status(500).json({ err_message: err });
    }
  };
  

module.exports.createOrder = createOrder;