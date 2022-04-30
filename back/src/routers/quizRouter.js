import { Router } from "express";
import { login_required } from "../middlewares/login_required";

const quizRouter = Router();
quizRouter.use(login_required);

quizRouter.post("/quiz", async function (req, res, next) {
  try {

    const chance = await 

    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
});

