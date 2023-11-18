import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import { messageRoute } from "./Routes/messageRoute.js";
import { userRoute } from "./Routes/userRoute.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        credentials: true,
        preflightContinue: true,
        origin: "http://localhost:5173",
    })
);
app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.send("<h1>Homepage</h1>");
});

app.use("/api/v1/user", userRoute);
app.use("/api/v1/message", messageRoute);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
