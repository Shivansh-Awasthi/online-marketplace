const express = require('express');
const connectDB = require('./config/db');
const { app } = require('./app')

const port = 8080;


//Mongoose Connection
connectDB()
    .then(() => {
        console.log('Db connection successful');
    })
    .catch((error) => {
        console.log("Database error" + error);
        throw error;
    })



app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})