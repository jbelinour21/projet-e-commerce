const router = require("express").Router();
const cartControllers = require("../controllers/cart.controllers");
const verifyToken = require("../middlewares/verifyToken");

router.post("/", verifyToken,cartControllers.addItemToCart);
router.get("/", verifyToken,cartControllers.getCartItems);
module.exports = router;