const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: { type: String, maxlength: 64 },
    lastName: { type: String, maxlength: 64 },
    email: { type: String, unique: true, index: true, lowercase: true },
    password: { type: String, minlength: 8, maxlength: 1024 },
    address: { type: mongoose.Schema.Types.ObjectId, ref: "Address" },
    phoneNumber: { type: String, maxlength: 18 },
    isActive: { type: Boolean, default: false },
  }, 
  {
      timestamps: true
  });

module.exports = mongoose.model("User", UserSchema);

