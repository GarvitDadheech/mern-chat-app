const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");

dotenv.config();
connectDB();


const app = express();
app.use(express.json());
app.use("/api/user", userRoutes);