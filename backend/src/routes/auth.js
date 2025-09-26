import express from "express";
import User from "../models/User.js"
import { generateToken } from "../utils/jwt.js";

const router = express.Router();

//signup api
router.post("/signup", async (req, res) => {

    try {
        const { firstName, lastName, email, password } = req.body;

        const existingUser = await User.findOne({
            email: email
        })

        if (existingUser) {
            res.status(409).json({
                success: false,
                messsage: "This email is already register , try differnet email"
            })
            return;
        }

        const newUser = await User.create({
            firstName,
            lastName,
            email,
            password
        })

        await newUser.save();

        const token = generateToken(email);

        res.cookie("token", token, {
            maxAge: 7 * 24 * 60 * 60 * 1000
        })

        res.status(201).json({
            success: true,
            messsage: "User signup successfully",
            user: newUser
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "internal server error"
        })
    }
})

//login api
router.post("/login", async (req, res) => {

    try {
        const { email, password } = req.body;

        const user = await User.findOne({
            email: email
        })

        if (!user) {
            res.status(401).json({
                success: false,
                message: "Invalid email"
            })
        }

        const isValidPassword = user.matchPassword(password);

        if (!isValidPassword) {
            res.status(401).json({
                success: false,
                message: "Wrong password"
            })
        }

        const token = generateToken(email);
        res.cookie("token", token, {
            maxAge: 7 * 24 * 60 * 60 * 1000
        })

        res.status(201).json({
            success: true,
            message: "user login successfully"
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server error"
        })
    }
})

//logout api
router.post("/logout", (req, res) => {
    try {
        res.clearCookie("token");
        res.status(200).json({
            success: true,
            message: "Logout successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
});

export default router;