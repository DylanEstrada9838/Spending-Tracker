const Category = require("./models/category");
const Transaction = require("./models/transaction");
const Notification = require("./models/notification");
const Method = require("./models/method");
const User = require("./models/user");
const UserSetting = require("./models/userSetting");

exports.seed = async function (id) {
    const cat = (name,id)=>{
        Category.create({
            "name":name,
            "userId":id
        })
    }
    const method = (name,id)=>{
    Method.create({
		"name":name,
        "userId":id
	})
}
	await Promise.allSettled([
	cat("Groceries",id),
    cat("Education",id),
    cat("Travel",id),
    cat("Entertainment",id),
    cat("Transportation",id),
    cat("Healthcare",id),
    cat("Shopping",id),
    cat("Savings",id),
    cat("Debts",id),
	method("Cash"),
    method("Debit Card",id),
    method("Credit Card",id)
	])
}

