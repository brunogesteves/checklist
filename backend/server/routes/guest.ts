import { Router } from "express";
import * as GuestController from "../controllers/guest";

const router = Router();

router.get("/", GuestController.list);
router.put("/check", GuestController.updateGuest);

export default router;
