const { connect, sync } = require("./models/sequelize");
const Category = require("./models/category");
const Transaction = require("./models/transaction");
const Notification = require("./models/notification");
const Method = require("./models/method");
const User = require("./models/user");
const UserSetting = require("./models/userSetting");
const {seed,seed2}= require("./seed.js")

// "Un usuario registra muchas categorias de pago"
User.hasMany(Category);
Category.belongsTo(User);

// "Un usuario registra muchos gastos"
User.hasMany(Transaction);
Transaction.belongsTo(User);

// "Un usuario recibe muchas notificaciones"
User.hasMany(Notification);
Notification.belongsTo(User);

// "Un usuario registra muchos metodos de pago"
User.hasMany(Method);
Method.belongsTo(User);

// "Un usuario registra determinadas configuraciones"
User.hasMany(UserSetting);
UserSetting.belongsTo(User); 
UserSetting.belongsTo(Category)
UserSetting.belongsTo(Method); ; 


// "El gasto de un usuario tiene una categoria"
Transaction.belongsTo(Category);

// "El gasto de un usuario tiene un metodo de pago"
Transaction.belongsTo(Method);




exports.initDatabase = async function () {
	await connect();
	await sync();
} ;