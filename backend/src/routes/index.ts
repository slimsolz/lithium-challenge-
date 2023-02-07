import express, { Request, Response } from "express";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  return res.status(200).json({ message: "welcome to lithium challenge api" });
});

router.all("*", (req: Request, res: Response) => {
  return res.status(404).json({ message: "404 route not found." });
});

export default router;
