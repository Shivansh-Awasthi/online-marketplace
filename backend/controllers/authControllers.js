const User = require("../models/userModels");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')




//  signup

const signup = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if (username == "" || email == "" || password == "") {
            return res.status(500).json({
                message: "Please fill all the fields",
                success: false
            })
        }

        const user = await User.findOne({ email });
        if (user) {
            return res.status(403).json({
                message: "User already registered",
                success: false
            })
        }

        bcrypt.genSalt(12, function (err, salt) {
            bcrypt.hash(password, salt, async function (err, hash) {
                const createUser = await User.create({
                    username,
                    email,
                    password: hash
                })
                // console.log(createUser);

                const token = jwt.sign({ email: email }, "string")
                res.cookie("token", token)

                return res.status(201).json({
                    message: "User Registered successfully",
                    success: true
                })
            });
        });


    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        })
    }
}


//  login


const login = async (req, res) => {

    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email })

        if (!user) {
            res.status(400).json({
                message: "No user found",
                status: false
            })
        };

        bcrypt.compare(password, user.password).then(function (result) {
            if (!result) {
                return res.status(401).json({
                    message: "Incorrect email or password",
                    success: false
                })
            }
            const token = jwt.sign({ email: email }, "string")
            res.cookie("token", token);

            return res.status(201).json({
                message: "User Registered successfully",
                success: true
            })
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        })
    }
}


//  logout


const logout = (req, res) => {
    try {
        res.cookie("token", "");
        return res.status(200).json({
            message: "user logged out",
            success: true
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error",
            success: false
        })
    }

}

module.exports = { signup, login, logout }