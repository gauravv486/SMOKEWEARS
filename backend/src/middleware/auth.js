import jwt, { decode } from "jsonwebtoken";
import User from "../models/User.js";

export const isAutherized = async (req, res, next) => {

    try {
        const { token } = req.cookies;

        console.log(token);

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized. Please log in."
            });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.find({
            email: decoded
        });

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "User not found"
            });
        }

        req.user = user;
        next();
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Invalid or expired token"
        });
    }
}