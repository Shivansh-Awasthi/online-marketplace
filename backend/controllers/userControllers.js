const User = require("../models/userModels");



// get all users;


const allUsers = async (req, res) => {
    try {
        const users = await User.find();
        if (!users) {
            return res.status(500).json({
                message: "No user found",
                success: false,
            })
        }

        else {
            return res.status(200).json({
                message: "All users data",
                success: true,
                data: users
            })
        }

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        })
    }
}


// get particular users


const singleUser = async (req, res) => {
    const { username, email, profilePicture } = req.body;
    const { id } = req.params;
    try {
        const singleUser = await User.findById(id)
        if (!singleUser) {
            return res.status(500).json({
                message: "no user found",
                success: false,
            })
        }

        return res.status(200).json({
            message: "user found",
            success: true,
            data: singleUser
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            success: false
        })
    }
}



//  edit user


const editUser = async (req, res) => {
    const { username, email, profilePicture, password } = req.body;
    const { id } = req.params;

    try {
        const updateUser = await User.findByIdAndUpdate(id,
            {
                username,
                email,
                password,
                profilePicture
            },
            { new: true })

        return res.status(200).json({
            message: "user updated",
            success: true,
            data: updateUser
        })

    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            success: false
        })
    }
}




module.exports = { allUsers, singleUser, editUser }