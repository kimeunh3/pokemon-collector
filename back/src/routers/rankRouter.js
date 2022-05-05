import { Router } from 'express';
import { loginRequired } from '../middlewares/loginRequired';
import { rankService } from '../services/rankService';

const rankRouter = Router();
rankRouter.use(loginRequired);

/**
 * @swagger
 * /ranking/{field}/{count}:
 *  get:
 *    summary: 랭크 포인트 or 포켓몬 수 랭킹 반환
 *    description: >
 *      유저의 랭크 포인트를 비교해 오름차순으로 정렬 후 반환. (field = 'rankPoint')<br>
 *      유저의 포켓몬 수를 비교해 내림차순으로 정렬 후 반환. (field = 'second')<br>
 *      params count는 반환 할 유저의 수를 기입
 *    tags: [ranking]
 *    security:
 *      - Authorization: []
 *    parameters:
 *      - in: path
 *        name: field
 *        required: true
 *        schema:
 *          type: string
 *        style: matrix
 *      - in: path
 *        name: count
 *        required: true
 *        schema:
 *          type: number
 *        style: matrix
 *    responses:
 *      '200-1':
 *        description: field의 params로 `rankPoint`가 들어왔을 떄
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  _id:
 *                    type: string
 *                    format: object-id
 *                  id:
 *                    type: string
 *                  email:
 *                    type: string
 *                  nickname:
 *                    type: string
 *                  likeType:
 *                    type: string
 *                  profileImg:
 *                    type: string
 *                    format: file-name
 *                  stickers:
 *                    type: array
 *                    items:
 *                      type: object
 *                      properties:
 *                        id:
 *                          type: number
 *                        name:
 *                          type: string
 *                        count:
 *                          type: number
 *                        _id:
 *                          type: string
 *                          format: object-id
 *                  rankPoint:
 *                    type: number
 *      '200-2':
 *        description: field의 params로 `stickers`가 들어왔을 떄
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  _id:
 *                    type: string
 *                    format: object-id
 *                  id:
 *                    type: string
 *                  email:
 *                    type: string
 *                  nickname:
 *                    type: string
 *                  likeType:
 *                    type: string
 *                  profileImg:
 *                    type: string
 *                    format: file-name
 *                  stickers:
 *                    type: array
 *                    items:
 *                      type: object
 *                      properties:
 *                        id:
 *                          type: number
 *                        name:
 *                          type: string
 *                        count:
 *                          type: number
 *                        _id:
 *                          type: string
 *                          format: object-id
 *                  stickersCount:
 *                    type: number
 *
 *      '400':
 *        description: 요청이 잘못 됨
 */
rankRouter.get('/ranking/:field/:count', async function (req, res, next) {
  try {
    const { field, count } = req.params;
    let rankingList = [];

    if (field == 'rankPoint') {
      rankingList = await rankService.getRankPointRanking({ count });
    } else if (field == 'stickers') {
      rankingList = await rankService.getstickersRanking({ count });
    } else {
      rankingList = { massage: 'params error 경로 확인 필요' };
    }
    if (rankingList.errorMessage) {
      throw new Error(rankingList.errorMessage);
    }

    res.status(200).json(rankingList);
  } catch (error) {
    next(error);
  }
});

export { rankRouter };
