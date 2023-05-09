import express from "express";

import config from "./config";
import routes from "./routes";

const app = express();

app.use(routes);

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT} ...`);
});
