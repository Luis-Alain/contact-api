import express, { json } from "express";
import cors from "cors";
import contactRoutes from "./routes/contacts.routes.js";
import {PORT} from './config.js';

const app = express();

app.use(json());

app.use("/api", contactRoutes);

app.use(
  cors({
    origin: (origin, callback) => {
      const ACCEPTED_ORIGINS = [
        "http://localhost:8080",
        "http://localhost:1234",
      ];

      if (ACCEPTED_ORIGINS.includes(origin)) {
        return callback(null, true);
      }

      if (!origin) {
        return callback(null, true);
      }
      return callback(new Error("Not allowed by CORS"));
    },
  })
);
app.disable("x-powered-by"); // deshabilitar el header X-Powered-By: Express

app.use((req, res, next) => {
  res.status(404).json({ message: "404 Not found" });
});

app.listen(PORT);
console.log(`server listening on port http://localhost:${PORT}`);

