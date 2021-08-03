const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const uniqueValidator = require("mongoose-unique-validator");

const OrderSchema = new Schema({
    buyer: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    reference: { type: String, required: true, unique: true, index: true },
    status: { type: String, default: "pending" }, 
    items: [
        {
          product: { type: mongoose.Schema.Types.ObjectId, ref: "Product",required: true},
          quantity: { type: Number, min: 1, required: true },
          subTotal: { type: Number, min: 0, required: true },
        },
    ],
    address: { type: mongoose.Schema.Types.ObjectId, ref: "Adress",required: true},
    description: { type: String,required: true},
    total: { type: Number, min: 0, required: true },
    isPayed: { type: Boolean, default: false },
    confirmationDate: { type: Date},
 
    adminConfirmation: {
      signature: { type: String, required: true },
      status: { type: String, default: "pending" },
      confirmationDate: { type: Date, default: Date.now() },
    },
    
  }, 
  {
      timestamps: true
  });
  OrderSchema.plugin(uniqueValidator, { message: "data is not unique" });

OrderSchema.pre("validate", function (next) {
  if (!this.reference) {
    this.generateReference();
  }
  next();
});

OrderSchema.methods.generateReference = function () {
  this.reference = ((Math.random() * Math.pow(36, 6)) | 0).toString(36);
};

module.exports = mongoose.model("Order", OrderSchema);