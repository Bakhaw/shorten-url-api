import dotenv from "dotenv";
dotenv.config();

const { PORT } = process.env;

const config = {
  PORT: PORT || 8080,
};

export default config;
