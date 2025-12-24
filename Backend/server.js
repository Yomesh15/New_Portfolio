import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/ConnectDB/connectdb.js";
import contactRoutes from "./src/Routes/contact.route.js";
import cors from "cors";

dotenv.config();

const app = express();

// Middleware
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use("/api", contactRoutes);

app.get("/", (req, res) => {
    res.send("Backend running!");
});

// Start server and connect to DB
const startServer = async () => {
    try {
        await connectDB();  // Connect once here
        const PORT = process.env.PORT || 2006;
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    } catch (err) {
        console.error("Database connection failed", err);
        process.exit(1);
    }
};

startServer();
