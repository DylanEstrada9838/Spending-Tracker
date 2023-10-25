const express = require("express");
const router = express.Router();
const jwtValidator = require("../middlewares/passport");
const joiValidator = require("../middlewares/joi");
const { createUserSettingSchema,updateUserSettingSchema,paramsSchema } = require("../validations/transaction");
const { createUserSetting,getUserSetting,getUserSettings,updateUserSetting,deleteUserSetting } = require("../controllers/userSetting");

router.post("/", jwtValidator, joiValidator.body(createUserSettingSchema), createUserSetting);

router.get("/", jwtValidator, getUserSettings);
router.get("/:id",jwtValidator,getUserSetting)
router.put("/:id",jwtValidator,joiValidator.params(paramsSchema), joiValidator.body(updateUserSettingSchema),updateUserSetting)
router.delete("/:id",jwtValidator,joiValidator.params(paramsSchema),deleteUserSetting)

module.exports = router;