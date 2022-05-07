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
 *          enum: [rankPoint, stickers]
 *          example: rankPoint
 *        style: matrix
 *      - in: path
 *        name: count
 *        required: true
 *        schema:
 *          type: number
 *          example: 10
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
 *            example:
 *              - _id: 62724fcb4e0d742f46a93fa7
 *                id: e9d2a45e-a047-4281-9838-08881d29ccba
 *                email: elice@elice.io
 *                nickname: 으넹
 *                likeType: 물
 *                profileImg: 25.png
 *                stickers: [Objects]
 *                rankPoint: 226664
 *              - _id: 627327055c52350457783d04
 *                id: 1d903282-5269-407b-a900-dc2b856d7a80
 *                email: bohyeon@naver.com
 *                nickname: 보현
 *                likeType: 독
 *                profileImg: pokeball.png
 *                rankPoint: 65632.5
 *                stickers: [Objects]
 *              - _id: 62710da6aaf08b159ec1f1bc
 *                id: 4cbfb9e1-c315-44e9-af2f-49a034387435
 *                email: z@z.com
 *                nickname: admin
 *                likeType: 격투
 *                profileImg: 146.png
 *                stickers: [Objects]
 *                rankPoint: 43682.5
 *              - _id: 62733739f13724c39b265e31
 *                id: a1f0333e-d7aa-4803-83f7-69e8241780d4
 *                email: 111@111.com
 *                nickname: 찌리리공
 *                likeType: 전기
 *                profileImg: 100.png
 *                rankPoint: 7816.5
 *                stickers: [Objects]
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
 *            example:
 *              - _id: 62724fcb4e0d742f46a93fa7
 *                id: e9d2a45e-a047-4281-9838-08881d29ccba
 *                email: elice@elice.io
 *                nickname: 으넹
 *                likeType: 물
 *                profileImg: 25.png
 *                stickers: [objects]
 *                stickersCount: 142
 *              - _id: 627327055c52350457783d04
 *                id: 1d903282-5269-407b-a900-dc2b856d7a80
 *                email: bohyeon@naver.com
 *                nickname: 보현
 *                likeType: 독
 *                profileImg: pokeball.png
 *                stickers: [objects]
 *                stickersCount: 104
 *              - _id: 62710da6aaf08b159ec1f1bc
 *                id: 4cbfb9e1-c315-44e9-af2f-49a034387435
 *                email: z@z.com
 *                nickname: admin
 *                likeType: 격투
 *                profileImg: 146.png
 *                stickers: [objects]
 *                stickersCount: 78
 *              - _id: 62733739f13724c39b265e31
 *                id: a1f0333e-d7aa-4803-83f7-69e8241780d4
 *                email: 111@111.com
 *                nickname: 찌리리공
 *                likeType: 전기
 *                profileImg: 100.png
 *                stickers: [objects]
 *                stickersCount: 18
 *              - _id: 62732c6da2125e4fb43fead9
 *                id: 0294ef5c-c7fa-4dc9-8c11-590e16502183
 *                email: abc@test.com
 *                nickname: abc
 *                likeType: 얼음
 *                profileImg: 148.png
 *                stickers: [objects]
 *                stickersCount: 4
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
