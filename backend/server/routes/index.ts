import { Router } from "express";

import Events from "./events";
import Guests from "./guest";

const router = Router();

router.use("/events", Events);
router.use("/guests", Guests);

export default router;
