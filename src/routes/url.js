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
    return res.send({
      data: null,
      error: "Required parameter missing in body: url",
      success: false,
    });
  }

  if (!isUrl(url)) {
    return res.send({
      data: null,
      error: "L'url saisie est invalide",
      success: false,
    });
  }

  try {
    const { data } = await axios.get(
      `${config.API_BASE_URL}/shorten/?url=${url}`
    );

    res.send({
      data: {
        originalUrl: url,
        shortenUrl: data.result.full_short_link,
      },
      error: null,
      success: true,
    });
  } catch (error) {
    res.send({
      data: null,
      error,
      success: false,
    });
  }
});

export default router;
