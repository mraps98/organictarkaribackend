import mongoose from "mongoose";
const {Schema} = mongoose;
const orderSchema = new Schema(
        {
                orderDate: Date,
                buyerId: Number,
                productId: Number,
                quantity: Number,
        },
        {
                timestamps: true,
        }
);

const Order = mongoose.model("Order", orderSchema);
export default Order;