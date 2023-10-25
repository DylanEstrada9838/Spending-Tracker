const express = require("express");
const router = express.Router();
const jwtValidator = require("../middlewares/passport");
const joiValidator = require("../middlewares/joi");
const { createTransactionSchema,updateTransactionSchema,paramsSchema } = require("../validations/transaction");
const { createTransaction,getTransactions,getTransaction,updateTransaction,deleteTransaction } = require("../controllers/transaction");

router.post("/", jwtValidator, joiValidator.body(createTransactionSchema), createTransaction);

router.get("/", jwtValidator, getTransactions);
router.get("/:id",jwtValidator,getTransaction)
router.put("/:id",jwtValidator,joiValidator.params(paramsSchema), joiValidator.body(updateTransactionSchema),updateTransaction)
router.delete("/:id",jwtValidator,joiValidator.params(paramsSchema),deleteTransaction)

module.exports = router;