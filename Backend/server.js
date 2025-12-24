import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/ConnectDB/connectdb.js";
import contactRoutes from "./src/Routes/contact.route.js";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors({ origin: "*" }));

app.use(express.json());

app.use("/api", contactRoutes);


app.get("/", async (req, res) => {
    try {
        await connectDB();
        res.send("Backend running with DB on Vercel!");
    } catch (err) {
        console.error(err);
        res.status(500).send("Database connection failedd");
    }
});


export default app;
