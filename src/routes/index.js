import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  const data = {
    message: "Welcome to shorten-url API",
  };

  res.send(data);
});

export default router;
