const { connect, sync } = require("./models/sequelize");
const Category = require("./models/category");
const Expense = require("./models/expense");
const Notification = require("./models/notification");
const Method = require("./models/method");
const User = require("./models/user");
const Setting = require("./models/setting");

// "Un usuario registra muchas categorias de pago"
User.hasMany(Category);
Category.belongsTo(User);

// "Un usuario registra muchos gastos"
User.hasMany(Expense);
Expense.belongsTo(User);

// "Un usuario recibe muchas notificaciones"
User.hasMany(Notification);
Notification.belongsTo(User);

// "Un usuario registra muchos metodos de pago"
User.hasMany(Method);
Method.belongsTo(User);

// "Un usuario registra determinadas configuraciones"
User.hasMany(Setting);
Setting.belongsTo(User); 


// "El gasto de un usuario tiene una categoria"
Expense.belongsTo(Category);

// "El gasto de un usuario tiene un metodo de pago"
Expense.belongsTo(Method);




exports.initDatabase = async function () {
	await connect();
	await sync();
} ;