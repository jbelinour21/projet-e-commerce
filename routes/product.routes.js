  const router = require("express").Router();
const productControllers = require("../controllers/product.controllers");

router.get("/", productControllers.getProducts);
router.post("/", productControllers.createProduct);
router.delete("/:productid", productControllers.deleteProduct);
router.put("/:productid", productControllers.updateProduct);



module.exports = router;