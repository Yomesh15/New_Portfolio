import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/ConnectDB/connectdb.js";
import contactRoutes from "./src/Routes/contact.route.js"; // fixed path
import cors from "cors";

dotenv.config();
connectDB();

const app = express();

// Enable CORS
app.use(cors({
    origin: "http://localhost:5173", 
    methods: ["GET", "POST"],
    credentials: true
}));

app.use(express.json());
app.use("/api", contactRoutes);

const PORT = process.env.PORT || 2006;
app.get("/", (req, res) => {
    res.send("Hello from express server");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

