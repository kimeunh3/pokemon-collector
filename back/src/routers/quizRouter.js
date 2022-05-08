import { Router } from 'express';
import { loginRequired } from '../middlewares/loginRequired';
import { quizService } from '../services/quizService';

const quizRouter = Router();
quizRouter.use(loginRequired);

/**
 * @swagger
 * /quiz:
 *  get:
 *    summary: 퀴즈 출제
 *    description: 퀴즈 문제 반환과 유저의 퀴즈 기회 삭감 및 남은 기회 반환
 *    tags: [quiz]
 *    security:
 *      - Authorization: []
 *    responses:
 *      '200':
 *        description: 퀴즈 문제와 유저의 남은 퀴즈 기회를 반환
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                quiz:
 *                  type: object
 *                  properties:
 *                    id:
 *                      type: number
 *                    name:
 *                      type: string
 *                reminingChance:
 *                  type: number
 *            example:
 *              quiz:
 *                id: 106
 *                name: 시라소몬
 *              reminingChance: 2
 *      '400':
 *        description: 요청이 잘못 됨
 */
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

/**
 * @swagger
 * /succeedQuiz/{opportunity}:
 *  get:
 *    summary: 퀴즈 정답 시 포인트 주기
 *    description: >
 *      실루엣 문제에서 정답 시 1000포인트.(opportunity = 'first')<br>
 *      모습이 보이는 문제 정답시 500포인트 지급.(opportunity = 'second')
 *    tags: [quiz]
 *    security:
 *      - Authorization: []
 *    parameters:
 *      - in: path
 *        name: opportunity
 *        required: true
 *        schema:
 *          type: string
 *          enum: [first, second]
 *          example: first
 *        style: matrix
 *    responses:
 *      '200':
 *        description: >
 *          params opportunity 값에 따른 포인트를 충전 후 적용 된 유저 포인트 반환
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                updatedPoint:
 *                  type: number
 *                  decription: 충전이 적용 된 유저 포인트
 *            example:
 *              updatedPoint: 4500
 *      '400':
 *        description: 요청이 잘못 됨
 */
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
