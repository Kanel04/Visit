const crypto = require("crypto");
const User = require("../models/index");

const signToken = (id) => {
    return jwt.sign({ id: id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    });
};

 const createSendToken = (user, statusCode, res) => {
    const token = signToken(user._id);

    // remove the password from the output
    user.password = undefined;

    res.status(statusCode).json({
        status: "success",
        token,
        data: {
            user,
        },
    });
};

// @desc    Register user
exports.register = async (req, res, next) => {
    const { name, phone, email, password } = req.body;

    const user = await User.create({
        name,
        phone,
        email,
        password,
    });

    createSendToken(user, 200, res);
    console.log("user created");
    
};