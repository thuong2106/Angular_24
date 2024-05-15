import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    isShow: {
        type: Boolean,
        default: true
    }
}, {timestamps: true})

export default mongoose.model('products', productSchema)

