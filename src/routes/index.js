import { Router } from "express";

import urlRoutes from "./url";

const router = Router();

router.get("/", (req, res) => {
  const data = {
    message: "Welcome to shorten-url API",
  };

  res.send(data);
});

router.use(urlRoutes);

export default router;
