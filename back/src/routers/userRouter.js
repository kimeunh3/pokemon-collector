import is from "@sindresorhus/is";
import { Router } from "express";
import { login_required } from "../middlewares/login_required";
import { userAuthService } from '../services/userService';
import { User } from '../db';

const userAuthRouter = Router();


userAuthRouter.post("/user/register", async function (req, res, next) {
  try {
    if (is.emptyObject(req.body)) {
      throw new Error(
        "headers의 Content-Type을 application/json으로 설정해주세요"
      );
    }

    const {nickname, email, password, sex, age, interest, likeType, point, profileImg, stickers} = req.body

    const newUser = await userAuthService.addUser({
      nickname,
      email,
      password,
      sex,
      age,
      interest,
      likeType,
      point,
      profileImg,
      stickers,
    });

    if (newUser.errorMessage) {
      // throw new Error(newUser.errorMessage);
      return res.status(400).json({
        status: 'error',
        error : newUser.errorMessage,
      });
    }

    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
});

userAuthRouter.post("/user/login", async function (req, res, next) {
  try {

    const email = req.body.email;
    const password = req.body.password;

    const user = await userAuthService.getUser({ email, password });

    if (user.errorMessage) {
   
      return res.status(400).json({
        status: 'error',
        error : user.errorMessage,
      });
    }

    res.status(200).send(user);
  } catch (error) {
    next(error);
  }
});


userAuthRouter.get(
  "/user/current",
  login_required,
  async function (req, res, next) {
    try {

      const userId = req.currentUserId;
      const currentUserInfo = await userAuthService.getUserInfo({
        userId,
      });

      if (currentUserInfo.errorMessage) {
        throw new Error(currentUserInfo.errorMessage);
      }

      res.status(200).send(currentUserInfo);
    } catch (error) {
      next(error);
    }
  }
);



export { userAuthRouter };
