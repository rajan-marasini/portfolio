import express from "express";
import {
    allMessage,
    createMessage,
    deleteMessage,
} from "../controllers/messageController.js";
import { isSignedIn } from "../middleware/middleware.js";

const router = express.Router();

router.post("/create", createMessage);
router.get("/all-message", isSignedIn, allMessage);
router.post("/delete/:id", isSignedIn, deleteMessage);

export { router as messageRoute };
