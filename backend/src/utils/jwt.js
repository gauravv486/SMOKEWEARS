import jwt from "jsonwebtoken";

export const generateToken = (email)=>{
    const token = jwt.sign(email , process.env.JWT_SECRET);
    return token;
}

export const verifyToken = (token)=>{
    const decodedValue = jwt.verify(token , process.env.JWT_SECRET);
    return decodedValue;
}