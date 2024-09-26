const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({
    seller: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    images: {
        type: String,
        default: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"
    },
    category: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    }],
}, { timestamps: true })



const Product = mongoose.model("Product", productSchema);


module.exports = Product;