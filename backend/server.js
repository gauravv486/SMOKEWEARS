import 'dotenv/config';
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./src/config/database.js";
import authRouter from "./src/routes/auth.js"
import productRouter from "./src/routes/product.js"
import cartRouter from "./src/routes/cart.js"


const app = express();

const corsOptions = {
  origin: [
    'https://smokewear.vercel.app',  // Your frontend domain
    'http://localhost:3000',         // For local development
    'http://localhost:5173'          // If using Vite
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};

//middleware
app.use(express.json());
app.use(cookieParser());
// Apply CORS middleware BEFORE routes
app.use(cors(corsOptions));

// Handle preflight requests explicitly
app.options('*', cors(corsOptions));

//Routers
app.use("/api/users", authRouter);
app.use("/api/product", productRouter);
app.use("/api/cart/", cartRouter);


await connectDB();

app.listen(process.env.PORT, () => {
  console.log("server is running successfully");
})
