const Order = require("../models/order.models");
const createOrder = async (req, res) => {
    try {
      
      
      const newOrder = new Order({
        user: req.verfiedUser._id,
        
       
      });
      const savedOrder = await newOrder.save();
      return res.status(201).json({ order: savedOrder });
    } catch (err) {
      return res.status(500).json({ err_message: err });
    }
  };
  

module.exports.createOrder = createOrder;