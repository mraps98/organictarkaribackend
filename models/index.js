// library inmports
import mongoose from "mongoose";
import connectionString from "../config/dbconfig.js";

//importing models
import Order from "./Order.js";
import Product from "./Product.js";
import User from "./User.js";

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = connectionString;
db.orders = Order;
db.products = Product;
db.users = User;

export default db;