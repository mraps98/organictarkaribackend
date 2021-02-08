import mongoose from "mongoose";
const {Schema} = mongoose;
const userSchema = new Schema(
    {
        email: String,
        password: String,
        firstName: String,
        lastName: String,
        role: String,
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model("User", userSchema);
export default User;