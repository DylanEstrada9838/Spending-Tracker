const express = require("express");
const router = express.Router();
const jwtValidator = require("../middlewares/passport");
const joiValidator = require("../middlewares/joi");
const { createExpenseSchema,updateExpenseSchema,paramsSchema } = require("../validations/expense");
const { createExpense,getExpenses,getExpense,updateExpense,deleteExpense,getSumGroupByCategory,getSumGroupByMethod,getSumGroupByCategoryMonth, getSumGroupByCategoryMonth1 } = require("../controllers/expense");


router.post("/", jwtValidator, joiValidator.body(createExpenseSchema), createExpense);

router.get("/", jwtValidator, getExpenses);
router.get("/category", jwtValidator, getSumGroupByCategory);
router.get("/method",jwtValidator,getSumGroupByMethod)
router.get("/category/months",jwtValidator,getSumGroupByCategoryMonth1)
router.get("/category/:month",jwtValidator,getSumGroupByCategoryMonth)
router.get("/:id",jwtValidator,joiValidator.params(paramsSchema),getExpense)
router.put("/:id",jwtValidator,joiValidator.params(paramsSchema), joiValidator.body(updateExpenseSchema),updateExpense)
router.delete("/:id",jwtValidator,joiValidator.params(paramsSchema),deleteExpense)

module.exports = router;