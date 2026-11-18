import express from "express";
import {
    registerUser,
    loginUser,
    getProfile
} from "../controllers/usercontroller.js";

import authMiddleware from "../middleware/authmiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

// Protected route
router.get("/profile", authMiddleware, getProfile);

export default router;