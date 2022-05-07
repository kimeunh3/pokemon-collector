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
 *    parameters:
 *      in: header
 *      name: Authorization
 *      required: true
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
 *            example:
 *              - _id: 626a3362d48b52f83c27058a
 *                id: 1
 *                type: visited
 *                name: '초심자 트레이너'
 *                description: '따끈따끈한 트레이너'
 *                condition: [1]
 *              - _id: 626a3362d48b52f83c27058b
 *                id: 2
 *                type: collected
 *                name: '스타팅 포켓몬 콜렉터'
 *                description: '스타팅 포켓몬을 모두 모았다!'
 *                condition: [1, 4, 7]
 *              - _id: 626a3362d48b52f83c27058c
 *                id: 3
 *                type: collected
 *                name: '노말 포켓몬 콜렉터'
 *                description: '노말 속성 포켓몬을 모두 모았다!'
 *                condition: [16, 17, 18, 19, 20, 21, 22, 39, 40, 52, 53, 83,
 *                            84, 85, 108, 113, 115, 128, 132, 133, 137, 143]
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
 *        description: 유저의 업적 리스트 반환 성공
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
 *            example:
 *              - id: 1
 *                type: visited
 *                name: '초심자 트레이너'
 *                description: '따끈따끈한 트레이너'
 *                status: 100
 *              - id: 2
 *                type: collected
 *                name: '스타팅 포켓몬 콜렉터'
 *                description: '스타팅 포켓몬을 모두 모았다!'
 *                status: 33
 *              - id: 3
 *                type: collected
 *                name: '노말 포켓몬 콜렉터'
 *                description: '노말 속성 포켓몬을 모두 모았다!'
 *                status: 73
 *              - id: 4
 *                type: collected
 *                name: '불꽃 포켓몬 콜렉터'
 *                description: '불꽃 속성 포켓몬을 모두 모았다!'
 *                status: 58
 *              - id: 5
 *                type: collected
 *                name: '물 포켓몬 콜렉터'
 *                description: '물 속성 포켓몬을 모두 모았다!'
 *                status: 75
 *      '400':
 *        description: 요청이 잘못 됨
 */
achievementsRouter.get('/userAchievementList', async (req, res, next) => {
  try {
    const userId = req.currentUserId;
    const userAchievementsList =
      await achievementsService.getSortedUserAchievements({
        userId,
      });
    if (achievementsService.errorMessage) {
      throw new Error(achievementsService.errorMessage);
    }
    res.status(200).json(userAchievementsList);
  } catch (error) {
    next(error);
  }
});

/**
 * @swagger
 * /addAchievements:
 *  get:
 *    summary: 새로운 업적을 생성
 *    description: >
 *      새로운 업적을 생성해 업적 db에 추가 및 유저 db업적 필드에 적용<br>
 *      ( ⭐**주의**⭐ 모든 업적 db와 모든 유저 db를 수정하게 되니 매우 신중하게 사용하고 테스트는 하지 말 것)
 *    tags: [achievements]
 *    security:
 *      - Authorization: []
 *    requestBody:
 *      description: 업적의 정보를 입력
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              id:
 *                type: number
 *              name:
 *                type: string
 *              description:
 *                type: string
 *              condition:
 *                type: array
 *                items:
 *                  type: number
 *          example:
 *            - id: 22
 *              name: 이브이 컬렉터
 *              discription: 이브이와 이브이의 3가지 진화형을 다 모았다!
 *              condition: [133, 134, 135, 136]
 *    responses:
 *      '200':
 *        description: 업적 db에 새로운 업적 추가, 유저 업적 목록에 새로운 업적의 id와 달성도 추가 완료
 */
achievementsRouter.post('/addAchievements', async (req, res, next) => {
  try {
    const newAchievements = req.body;
    const updatedAchievements =
      achievementsService.uploadAchievements(newAchievements);

    res.status(200).json(updatedAchievements);
  } catch (error) {
    next(error);
  }
});

export { achievementsRouter };
