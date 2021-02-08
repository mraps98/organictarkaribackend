// library imports
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import db from "./models/index.js";

// local imports
import userRoutes from "./routes/User.js";
import productRoutes from "./routes/Product.js";
import orderRoutes from "./routes/Order.js";

// make app
const app = express();
app.use(cors());
app.use(bodyParser.json());


// connect db
db.mongoose.connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>console.log("Connected to db"))
.catch(err=>{
    console.log(err);
    process.exit();
});

app.use("/products", productRoutes);
app.use("/users", userRoutes);
app.use("/orders", orderRoutes);

// start listening to requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, ()=>{
    console.log("App listening on port", PORT);
});