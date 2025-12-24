import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/ConnectDB/connectdb.js";
import contactRoutes from "./src/Routes/contact.route.js";
import cors from "cors";

dotenv.config();
connectDB();

const app = express();


app.use(cors({
  origin: "*",
  methods: ["GET", "POST"],
  credentials: true
}));

app.use(express.json());
app.use("/api", contactRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Hello from Express server on Vercel!");
});


export default app;
