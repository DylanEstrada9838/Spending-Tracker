require("dotenv").config();

const { initDatabase } = require("./db");
initDatabase();

const express = require("express");
const app = express();

app.use(express.json())

const userRouter = require("./routers/user");
const authRouter = require("./routers/auth");
const MethodRouter = require("./routers/method");
const CategoryRouter = require("./routers/category");
const TransactionRouter = require("./routers/transaction");
const SettingRouter = require("./routers/setting");


const validationError = require("./middlewares/validation-error");
const unknownError = require("./middlewares/unknown-error");

app.use("/users", userRouter);
app.use("/auth", authRouter);
app.use("/method", MethodRouter);
app.use("/category", CategoryRouter);
app.use("/transaction", TransactionRouter);
app.use("/setting", SettingRouter);

// Manejo de errores
app.use(validationError);
app.use(unknownError);

app.listen(process.env.SERVER_PORT, function () {
	console.log("> Escuchando puerto " + process.env.SERVER_PORT);
});