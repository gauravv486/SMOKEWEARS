import 'dotenv/config';
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import connectDB from './src/config/database.js';
import authRouter from './src/routes/auth.js';
import productRouter from './src/routes/product.js';
import cartRouter from './src/routes/cart.js';

const app = express();

const allowedOrigins = [
  'https://smokewear.vercel.app',
  'http://localhost:5173'
];

app.use(express.json());
app.use(cookieParser());
// app.use(cors({
//   origin: ["http://localhost:5173", "https://smokewear.vercel.app"],
//   methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//   credentials: true
// }));
app.use(
  cors({
    origin: (origin, callback) => {
      // allow non-browser tools with no origin, or allowlisted origins
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error('Not allowed by CORS'));
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
  })
);
app.options('*', cors());

app.use("/api/users", authRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);

// Export app for serverless, but also support local dev
export default app;

if (process.env.NODE_ENV !== 'production') {
  await connectDB();
  const port = process.env.PORT || 5000;
  app.listen(port, () => console.log(`server is running on ${port}`));
}
