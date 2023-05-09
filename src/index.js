import express from "express";
import cors from "cors";

import config from "./config";
import routes from "./routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", routes);

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT} ...`);
});
