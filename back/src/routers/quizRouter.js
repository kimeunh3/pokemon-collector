import { Router } from 'express';
import { loginRequired } from '../middlewares/loginRequired';
import { quizService } from '../services/quizService';

const quizRouter = Router();
quizRouter.use(loginRequired);

quizRouter.get('/quiz', async function (req, res, next) {
  try {
    const userId = req.currentUserId;
    const quiz = await quizService.getQuiz({ userId });
    if (quiz.errorMessage) {
      throw new Error(quiz.errorMessage);
    }
    res.status(200).json(quiz);
  } catch (error) {
    next(error);
  }
});

quizRouter.get('/succeedQuiz/:opportunity', async function (req, res, next) {
  try {
    const userId = req.currentUserId;
    const { opportunity } = req.params;
    let updatedPint = await quizService.addPoint({ userId, opportunity });
    if (updatedPint.errorMessage) {
      throw new Error(updatedPint.errorMessage);
    }
    if ((opportunity != 'first') & (opportunity != 'second')) {
      updatedPint = { errorMessage: 'params 확인 필요 (first or second)' };
    }
    res.status(200).json(updatedPint);
  } catch (error) {
    next(error);
  }
});

export { quizRouter };
