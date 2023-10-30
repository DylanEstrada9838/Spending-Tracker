const express = require("express");
const router = express.Router();
const jwtValidator = require("../middlewares/passport");
const joiValidator = require("../middlewares/joi");
const { createExpenseSchema,updateExpenseSchema,paramsSchema } = require("../validations/expense");
const { createExpense,getExpenses,getExpense,updateExpense,deleteExpense } = require("../controllers/expense");

router.post("/", jwtValidator, joiValidator.body(createExpenseSchema), createExpense);

router.get("/", jwtValidator, getExpenses);
router.get("/:id",jwtValidator,getExpense)
router.put("/:id",jwtValidator,joiValidator.params(paramsSchema), joiValidator.body(updateExpenseSchema),updateExpense)
router.delete("/:id",jwtValidator,joiValidator.params(paramsSchema),deleteExpense)

module.exports = router;