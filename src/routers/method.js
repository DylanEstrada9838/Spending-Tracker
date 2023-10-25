const express = require("express");
const router = express.Router();
const jwtValidator = require("../middlewares/passport");
const joiValidator = require("../middlewares/joi");
const { createMethodSchema,updateMethodSchema,paramsSchema } = require("../validations/method");
const { createMethod,getMethods, getMethod, updateMethod,deleteMethod } = require("../controllers/method");
const { get } = require("express/lib/response");

router.post("/", jwtValidator, joiValidator.body(createMethodSchema), createMethod);

router.get("/", jwtValidator, getMethods);
router.get("/:id",jwtValidator,getMethod)
router.put("/:id",jwtValidator,joiValidator.params(paramsSchema), joiValidator.body(updateMethodSchema),updateMethod)
router.delete("/:id",jwtValidator,joiValidator.params(paramsSchema),deleteMethod)

module.exports = router;