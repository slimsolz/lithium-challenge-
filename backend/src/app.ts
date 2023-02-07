import express, { Application, NextFunction, Request, Response } from "express";

import { BadRequestResponse } from "./services/apiError";
import YAML from "yamljs";
import cors from "cors";
import { errorResponse } from "./helpers/responseUtil";
import helmet from "helmet";
import routes from "./routes";
import swaggerUi from "swagger-ui-express";

const app: Application = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const swaggerDocument = YAML.load(`${process.cwd()}/src/swagger.yaml`);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/api/v1/", routes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err.name === "SequelizeUniqueConstraintError") {
    return errorResponse(res, 409, err.message);
  }

  if (err instanceof BadRequestResponse) {
    return errorResponse(res, err.statusCode, err.message);
  }

  return errorResponse(res, 500, "Internal Error");
});

export default app;
