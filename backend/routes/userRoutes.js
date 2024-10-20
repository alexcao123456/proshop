import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  getUserByID,
  deleteUser,
  updateUser,
} from "../controllers/userController.js";
import express from "express";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(protect, admin, getUsers).post(registerUser);
router.post("/auth", authUser);
router.post("/logout", protect, logoutUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
router
  .route("/:id")
  .get(protect, admin, getUserByID)
  .delete(protect, admin, deleteUser)
  .put(protect, admin, updateUser);

export default router;
