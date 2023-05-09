import { Router } from "express";
import axios from "axios";

import config from "../config";

const router = Router();

/**
 * Shorten URL
 * @property {string} req.query.url the URL you want to shorten
 */
router.get("/shorten", async (req, res) => {
  const { url } = req.query;

  if (!url) {
    res.status(400).send({
      data: "Required query parameter is missing: url",
      error: true,
    });
  }

  try {
    const { data } = await axios.get(
      `${config.API_BASE_URL}/shorten/?url=${url}`
    );

    res.status(200).send({
      data,
      error: false,
    });
  } catch (error) {
    res.status(400).send({
      data: "Something went wrong",
      error: true,
    });
  }
});

export default router;
