import mongoose from "mongoose";

const  {Schema} = mongoose;

const userSchema = new Schema({
    name:  {
        type: String,
        unique: true,
        requiired: true,
    },
    email:  {
        type: String,
        unique: true,
        requiired: true,
    },
    password:  {
        type: String,
        requiired: true,
    },
}, { timestamps: true})



export default mongoose.models.User || mongoose.model("User", userSchema);