import { Router } from "express";
import axios from "axios";
import isUrl from "is-url";

import config from "../config";

const router = Router();

/**
 * Shorten URL
 * @property {string} req.body.url the URL you want to shorten
 */
router.post("/shorturl", async (req, res) => {
  const { url } = req.body;

  if (!url) {
    res.status(400).send({
      data: "Required parameter missing in body: url",
      error: true,
    });
  }

  if (!isUrl(url)) {
    res.status(400).send({
      data: "The url parameter must be a valid URL",
      error: true,
    });
  }

  try {
    const { data } = await axios.get(
      `${config.API_BASE_URL}/shorten/?url=${url}`
    );

    res.status(200).send({
      data: {
        originalUrl: url,
        shortenUrl: data.result.full_short_link,
      },
      error: false,
    });
  } catch (error) {
    res.status(400).send({
      data: error,
      error: true,
    });
  }
});

export default router;
