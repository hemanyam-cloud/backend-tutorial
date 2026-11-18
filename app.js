import express from "express";
import userRoutes from "./routes/userroutes.js";

const app = express();

app.use(express.json());

// User routes
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
    res.send("Backend server is running!");
});

export default app;