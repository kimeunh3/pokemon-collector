import { Router } from "express";
import { login_required } from "../middlewares/login_required";
import { achievementsService } from "../services/achievementsService";

const achievementsRouter = Router();
achievementsRouter.use(login_required);

achievementsRouter.get("/achievementList", async (req, res, next) => {
  try {
    const data = await achievementsService.getAchievements()
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
});

achievementsRouter.get("/userStickerList", async (req, res, next) => {
  try {
    const userId = req.currentUserId;
    const data = await achievementsService.getUserStickerList({userIdd})
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
});


export { achievementsRouter};
