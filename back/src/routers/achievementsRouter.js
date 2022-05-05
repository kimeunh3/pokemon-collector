import { Router } from 'express';
import { loginRequired } from '../middlewares/loginRequired';
import { achievementsService } from '../services/achievementsService';

const achievementsRouter = Router();
achievementsRouter.use(loginRequired);

/**
 * @swagger
 * /achievementList:
 *  post:
 *    summary: 회원가입
 *    description: 업적 리스트 반환 API
 *    tags: [achievements]
 *    responses:
 *      '200':
 *        description: 업적 리스트 반환
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *                _id:
 *                  type: string
 *                id:
 *                  type: number
 *                type:
 *                  type: string
 *                name:
 *                  type: string
 *                description:
 *                  type: string
 *                condition:
 *                  type: array
 *
 *
 */
achievementsRouter.get('/achievementList', async (req, res, next) => {
  try {
    const data = await achievementsService.getAchievements();
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
});

achievementsRouter.get('/userAchievementList', async (req, res, next) => {
  try {
    const userId = req.currentUserId;
    const userAchievementsList = await achievementsService.getUserAchievements({
      userId,
    });
    res.status(200).json(userAchievementsList);
  } catch (error) {
    next(error);
  }
});

export { achievementsRouter };
