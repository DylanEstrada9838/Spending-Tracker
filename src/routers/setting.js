const express = require("express");
const router = express.Router();
const jwtValidator = require("../middlewares/passport");
const joiValidator = require("../middlewares/joi");
const { createUserSettingSchema,updateSettingSchema,paramsSchema } = require("../validations/setting");
const { createSetting,getSetting,getSettings,updateSetting,deleteSetting } = require("../controllers/setting");

router.post("/", jwtValidator, joiValidator.body(createUserSettingSchema), createSetting);

router.get("/", jwtValidator, getSettings);
router.get("/:id",jwtValidator,getSetting)
router.put("/:id",jwtValidator,joiValidator.params(paramsSchema), joiValidator.body(updateSettingSchema),updateSetting)
router.delete("/:id",jwtValidator,joiValidator.params(paramsSchema),deleteSetting)

module.exports = router;