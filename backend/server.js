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
    'https://smokewear.vercel.app',
    'http://localhost:3000',
    'http://localhost:5173'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));

// Handle preflight requests
app.options('*', cors(corsOptions));

// Routes
app.use("/api/users", authRouter);
app.use("/api/product", productRouter);
app.use("/api/cart/", cartRouter);

// Connect to database
await connectDB();

// For local development only
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log("server is running successfully");
  });
}

// Export for Vercel (REQUIRED)
export default app;
