const express = require("express");
const router = express.Router();
const jwtValidator = require("../middlewares/passport");
const joiValidator = require("../middlewares/joi");
const { createCategorySchema, updateCategorySchema, paramsSchema } = require("../validations/category");
const { createCategory,getCategories,getCategory,updateCategory,deleteCategory} = require("../controllers/category");

router.post("/", jwtValidator, joiValidator.body(createCategorySchema), createCategory);

router.get("/", jwtValidator, getCategories);
router.get("/:id",jwtValidator,getCategory)
router.put("/:id",jwtValidator,joiValidator.params(paramsSchema), joiValidator.body(updateCategorySchema),updateCategory)
router.delete("/:id",jwtValidator,joiValidator.params(paramsSchema),deleteCategory)

module.exports = router;