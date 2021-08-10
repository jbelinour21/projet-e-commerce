const router = require("express").Router();
const productControllers = require("../controllers/product.controllers");

router.get("/", productControllers.getProducts);
router.get("/:productid", productControllers.getProductById);
router.post("/", productControllers.createProduct);
router.delete("/:productid", productControllers.deleteProduct);
router.put("/:productid", productControllers.updateProduct);
router.get("/auto_complete",productControllers.getProductAutoComplete);


module.exports = router;