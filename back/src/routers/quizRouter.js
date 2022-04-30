import { Router } from "express";
import { login_required } from "../middlewares/login_required";
import { quizService } from '../services/quizService';

const quizRouter = Router();
quizRouter.use(login_required);

quizRouter.get("/quiz", async function (req, res, next) {
  try {
    const userId = req.currentUserId;
    const quiz = await quizService.getQuiz({userId})
    if (quiz.errorMessage) {
      throw new Error(quiz.errorMessage);
    }
    res.status(200).json(quiz);
  } catch (error) {
    next(error);
  }
});

quizRouter.get("/succeedQuiz", async function (req, res, next) {
  try {
    const userId = req.currentUserId;
    const updatedPint = await quizService.addPint({userId})
    if (updatedPint.errorMessage) {
      throw new Error(updatedPint.errorMessage);
    }

    res.status(200).json(updatedPint);
  } catch (error) {
    next(error);
  }
});

export { quizRouter };