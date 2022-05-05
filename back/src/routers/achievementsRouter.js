import { Router } from 'express';
import { loginRequired } from '../middlewares/loginRequired';
import { achievementsService } from '../services/achievementsService';

const achievementsRouter = Router();
achievementsRouter.use(loginRequired);

/**
 * @swagger
 * /achievementList:
 *  get:
 *    summary: 업적 리스트 조회
 *    description: 업적 리스트 반환 API
 *    tags: [achievements]
 *    security:
 *      - Authorization: []
 *    responses:
 *      '200':
 *        description: 업적 리스트 반환
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  _id:
 *                    type: string
 *                  id:
 *                    type: number
 *                  type:
 *                    type: string
 *                  name:
 *                    type: string
 *                  description:
 *                    type: string
 *                  condition:
 *                    type: array
 *                    items:
 *                      type: number
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

/**
 * @swagger
 * /userAchievementList:
 *  get:
 *    summary: 유저 업적 리스트 조회
 *    description: 유저의 업적 리스트를 반환
 *    tags: [achievements]
 *    security:
 *      - Authorization: []
 *    responses:
 *      '200':
 *        description: 업적 리스트 반환
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  id:
 *                    type: number
 *                  type:
 *                    type: string
 *                  name:
 *                    type: string
 *                  description:
 *                    type: string
 *                  status:
 *                    type: number
 *      '400':
 *        description: 요청이 잘못 됨
 */
achievementsRouter.get('/userAchievementList', async (req, res, next) => {
  try {
    const userId = req.currentUserId;
    const userAchievementsList = await achievementsService.getUserAchievements({
      userId,
    });
    if (userAchievementsList.errorMessage) {
      return res.status(400).json({
        status: 'error',
        error: userAchievementsList.errorMessage,
      });
    }
    res.status(200).json(userAchievementsList);
  } catch (error) {
    next(error);
  }
});

export { achievementsRouter };
