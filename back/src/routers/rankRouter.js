import { Router } from 'express';
import { loginRequired } from '../middlewares/loginRequired';
import { rankService } from '../services/rankService';

const rankRouter = Router();
rankRouter.use(loginRequired);

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
