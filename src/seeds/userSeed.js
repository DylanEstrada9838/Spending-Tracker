const Category = require("../models/category");
const Notification = require("../models/notification");
const Method = require("../models/method");
const Setting = require("../models/setting");

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
    const setting =(type,id)=>{
        Setting.create({
            "type":type,
            "value":null,
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
	method("Cash",id),
    method("Debit Card",id),
    method("Credit Card",id),
    setting("Daily Limit",id),
    setting("Weekly Limit",id),
    setting("Monthly Limit",id)
	])
}

