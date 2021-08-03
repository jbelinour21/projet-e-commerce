const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const ProductSchema = new Schema({
    name: { type: String, maxlength: 64,required: true  },
    price: { type: Number,required: true },
    ref: { type: Number,required: true},
    favorite: { type: Boolean, default: false },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category",required: true},
    description: { type: String,required: true},
  }, 
  {
      timestamps: true
  });

module.exports = mongoose.model("Product", ProductSchema);