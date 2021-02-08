import mongoose from "mongoose";
const {Schema} = mongoose;

const productSchema = new Schema(
    {
        name: String, 
        description: String,
        images: [String],
        price: Number,
        sellerId: Number
    },
    {
        timestamps: true,
    }
);

const Product = mongoose.model("Product", productSchema);
export default Product;