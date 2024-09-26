const express = require('express')
const app = express();
const cors = require('cors')
const cookieparser = require('cookie-parser')
const userRouter = require('./routes/userRoutes')


//middlewares
app.use(cors())
app.use(cookieparser())
app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))



app.get("/", (req, res) => {
    res.send("hello")
})


// routes

app.use("/api", userRouter)


module.exports = { app };