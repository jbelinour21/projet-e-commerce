const router = require("express").Router();
const categoryControllers = require("../controllers/category.controllers");

router.get("/", categoryControllers.getCategories);



module.exports = router;