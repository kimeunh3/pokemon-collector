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

    res.status(200).json(newUser);
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

    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
});



userAuthRouter.get(
  "/user/current",
  login_required,
  async function (req, res, next) {
    try {
      // jwt토큰에서 추출된 사용자 id를 가지고 db에서 사용자 정보를 찾음.
      const user_id = req.currentUserId;
      const currentUserInfo = await userAuthService.getUserInfo({
        user_id,
      });

      if (currentUserInfo.errorMessage) {
        throw new Error(currentUserInfo.errorMessage);
      }

      res.status(200).json(currentUserInfo);
    } catch (error) {
      next(error);
    }
  }
);




export { userAuthRouter };
