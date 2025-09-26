import 'dotenv/config';
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./src/config/database.js";
import authRouter from "./src/routes/auth.js"
import productRouter from "./src/routes/product.js"
import cartRouter from "./src/routes/cart.js"


const app = express();

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

//Routers
app.use("/api/users", authRouter);
app.use("/api/product", productRouter);
app.use("/api/cart/", cartRouter);


await connectDB();

app.listen(process.env.PORT, () => {
    console.log("server is running successfully");
})
