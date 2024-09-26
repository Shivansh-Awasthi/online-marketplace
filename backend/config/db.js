const mongoose = require("mongoose")

const connectDB = async function () {
    try {
        const connectionInstance = await mongoose.connect("mongodb://localhost:27017/marketplace")
        console.log(`MongoDB is connected, host is : ${connectionInstance.connection.host}`);

    } catch (error) {
        console.log('MongoDB error');
        process.exit(1)
    }
}


module.exports = connectDB;