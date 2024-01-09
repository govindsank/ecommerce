import mongoose from "mongoose";    
   
const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: false
    },
    stock: {
        type: Number,
        required: true,
        unique: false
    },
    thumbnail: {
        type: String,
        required: true,
        unique: false
    },
    description: {
        type: String,
        required: false,
        unique: false
    },
    images: {
        type: Array,
        required: false,
        unique: false
    },
    category: {
        type: String,
        required: true,
        unique: false
    }
});


export default mongoose.model.Users || mongoose.model("User", schema);