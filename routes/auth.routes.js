const router = require("express").Router();
const User = require("../models/user.models");
const Address = require("../models/address.models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
router.post("/register", async (req, res) => {
  
  try {
    const existEmail = await User.findOne({ email: req.body.email });
    if (existEmail)
      return res.status(422).json({
        err_message: "Email exist",
      });

    const salt = await bcrypt.genSalt(16);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    
    const newAddress = new Address({
      city: req.body.city,
      zipCode: req.body.zipCode,
      street: req.body.street,
      note: req.body.note,
    });
    const savedAddress = await newAddress.save();

    const newUser = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hashedPassword,
      phoneNumber: req.body.phoneNumber,
      address: savedAddress._id,
    });
    const savedUser = await newUser.save();
    
    return res.status(201).json({ user: savedUser });
  } catch (err) {
    return res.status(500).json({ err_message: err });
  }
});
router.post("/login", async (req, res) => {
  try {
    const userExist = await User.findOne({ email: req.body.email });
    if (!userExist)
      return res.status(401).json({ err_message: "Email/Password Wrong" });
    
    const validPassword = await bcrypt.compare(
      req.body.password,
      userExist.password
    );
    
    if (!validPassword)
      return res.status(401).json({ err_message: "Email/Password Wrong" });
    
      const token = jwt.sign(
      {
        _id: userExist._id,
        isActive: userExist.isActive,
      },
      "ezifhaezdf74",
      { expiresIn: "2 days" }
    );
    return res.status(200).json({ token: token, user: userExist });
  } catch (err) {
    return res.status(500).json({ err_message: err });
  }
});
module.exports = router;