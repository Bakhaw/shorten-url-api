import dotenv from "dotenv";
dotenv.config();

const { API_BASE_URL, PORT } = process.env;

const config = {
  API_BASE_URL,
  PORT: PORT || 8080,
};

export default config;
