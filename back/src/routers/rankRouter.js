import { Router } from "express";
import { login_required } from "../middlewares/login_required";
import { rankService } from '../services/rankService';

const rankRouter = Router();
rankRouter.use(login_required);

rankRouter.get("/ranking/:field/:count", async function (req, res, next) {
  try {

    const { field, count } = req.params
    let rankingList = []

    if (field == 'rankPoint') {
      rankingList = await rankService.getRankPointRanking({ count })
    } else if (req.params.field == 'stickers') {
      rankingList = await rankService.getstickersRanking({ count })
    } else {
      rankingList = { massage: "params error 경로 확인 필요" }
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