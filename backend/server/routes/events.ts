import { Router } from "express";
import * as EventsController from "../controllers/events";

const router = Router();

router.get("/", EventsController.list);

export default router;
