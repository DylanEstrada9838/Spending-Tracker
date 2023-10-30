require("dotenv").config();

const { initDatabase } = require("./db");
initDatabase();

const express = require("express");
const app = express();

app.use(express.json())

const cors = require('cors');

app.use(cors({
	origin: '*',
	methods: 'GET, POST, PUT, DELETE', // Specify the HTTP methods you need
  allowedHeaders: ['Content-Type', 'Authorization'], // Add 'Content-Type' to the allowed headers
  }));

const userRouter = require("./routers/user");
const authRouter = require("./routers/auth");
const MethodRouter = require("./routers/method");
const CategoryRouter = require("./routers/category");
const ExpenseRouter = require("./routers/expense");
const SettingRouter = require("./routers/setting");


const validationError = require("./middlewares/validation-error");
const unknownError = require("./middlewares/unknown-error");

app.use("/users", userRouter);
app.use("/auth", authRouter);
app.use("/method", MethodRouter);
app.use("/category", CategoryRouter);
app.use("/expense", ExpenseRouter);
app.use("/setting", SettingRouter);

// Manejo de errores
app.use(validationError);
app.use(unknownError);

app.listen(process.env.SERVER_PORT, function () {
	console.log("> Escuchando puerto " + process.env.SERVER_PORT);
});