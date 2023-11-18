import express from "express";
import {
    getProfile,
    userLogin,
    userLogout,
} from "../controllers/userController.js";
import { isSignedIn } from "../middleware/middleware.js";

const router = express.Router();

router.post("/login", userLogin);
router.get("/profile", isSignedIn, getProfile);
router.post("/logout", isSignedIn, userLogout);

export { router as userRoute };
