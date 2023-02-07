import express, { Application, NextFunction, Request, Response } from "express";

import cors from "cors";
import helmet from "helmet";
import routes from "./routes";

const app: Application = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/", routes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  return res.status(500).json({ message: "Internal Error" });
});

export default app;
