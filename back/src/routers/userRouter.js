import is from '@sindresorhus/is';
import { Router } from 'express';
import { loginRequired } from '../middlewares/loginRequired';
import { userAuthService } from '../services/userService';

const userAuthRouter = Router();

/**
 * @swagger
 * paths:
 *   /user/register:
 *     post:
 *       summary: 회원가입
 *       description: User의 회원가입 API
 *       tags: [register]
 *       parameters:
 *         - in: body
 *           name: nickname
 *           description: User의 닉네임
 *           example: 포켓몬 트레이너
 *         - in: body
 *           name: email
 *           description: User의 이메일
 *           example: a@a.com
 *         - in: body
 *           name: password
 *           description: User의 비밀번호(4글자 이상)
 *           example: 1234
 *         - in: body
 *           name: sex
 *           description: User의 성별
 *           example: Male
 *         - in: body
 *           name: birth
 *           description: User의 생년월일
 *           example: 1988-02-12
 *         - in: body
 *           name: interest
 *           description: User의 포켓몬에 대한 관심도
 *           example: 3
 *         - in: body
 *           name: likeType
 *           description: User의 좋아하는 포켓몬 속성
 *           example: 불
 */

userAuthRouter.post('/user/register', async function (req, res, next) {
  try {
    if (is.emptyObject(req.body)) {
      throw new Error(
        'headers의 Content-Type을 application/json으로 설정해주세요'
      );
    }

    const { nickname, email, password, sex, birth, interest, likeType } =
      req.body;

    const newUser = await userAuthService.addUser({
      nickname,
      email,
      password,
      sex,
      birth,
      interest,
      likeType,
    });

    if (newUser.errorMessage) {
      // throw new Error(newUser.errorMessage);
      return res.status(400).json({
        status: 'error',
        error: newUser.errorMessage,
      });
    }

    res.status(200).json(newUser);
  } catch (error) {
    next(error);
  }
});

userAuthRouter.post('/user/login', async function (req, res, next) {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const user = await userAuthService.getUser({ email, password });

    if (user.errorMessage) {
      return res.status(400).json({
        status: 'error',
        error: user.errorMessage,
      });
    }

    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
});

userAuthRouter.get(
  '/user/current',
  loginRequired,
  async function (req, res, next) {
    try {
      // jwt토큰에서 추출된 사용자 id를 가지고 db에서 사용자 정보를 찾음.
      const userId = req.currentUserId;
      const currentUserInfo = await userAuthService.getUserInfo({
        userId,
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

userAuthRouter.put(
  '/user/attendanceCheck',
  loginRequired,
  async function (req, res, next) {
    try {
      const userId = req.currentUserId;
      let currentUserInfo = await userAuthService.getUserInfo({ userId });
      const attendance = new Date();
      const savedAttendance = currentUserInfo.attendance;
      var timeDiff = attendance - savedAttendance;
      if (timeDiff >= 24 * 60 * 60 * 1000) {
        // isPointGiven === false -> 포인트 지급  isPointGiven === true -> 포인트 지급 X
        const isPointGiven = !currentUserInfo.isPointGiven;
        const toUpdate = { attendance, isPointGiven };
        currentUserInfo = await userAuthService.setUser({ userId, toUpdate });
        if (currentUserInfo.errorMessage) {
          throw new Error(currentUserInfo.errorMessage);
        }
      }

      res.status(200).json({ isPointGiven: currentUserInfo.isPointGiven });
    } catch (error) {
      next(error);
    }
  }
);

userAuthRouter.put(
  '/user/checkIn',
  loginRequired,
  async function (req, res, next) {
    try {
      const userId = req.currentUserId;
      let currentUserInfo = await userAuthService.getUserInfo({ userId });

      const point = currentUserInfo.point + 1000;
      const attendance = new Date();
      const isPointGiven = !currentUserInfo.isPointGiven;
      const toUpdate = { point, attendance, isPointGiven };
      currentUserInfo = await userAuthService.setUser({ userId, toUpdate });
      if (currentUserInfo.errorMessage) {
        throw new Error(currentUserInfo.errorMessage);
      }
      res.status(200).json({ point: currentUserInfo.point });
    } catch (error) {
      next(error);
    }
  }
);

userAuthRouter.put(
  '/user/profileModify',
  loginRequired,
  async function (req, res, next) {
    try {
      const userId = req.currentUserId;
      let currentUserInfo = await userAuthService.getUserInfo({ userId });
      const nickname = req.body.nickname ?? null;
      const likeType = req.body.likeType ?? null;
      const profileImg = req.body.profileImg ?? null;
      const interest = req.body.interest ?? null;

      const toUpdate = { nickname, likeType, profileImg, interest };

      currentUserInfo = await userAuthService.setUser({ userId, toUpdate });
      if (currentUserInfo.errorMessage) {
        throw new Error(currentUserInfo.errorMessage);
      }
      res.status(200).json({ point: currentUserInfo });
    } catch (error) {
      next(error);
    }
  }
);

userAuthRouter.post(
  '/user/changePassword',
  loginRequired,
  async function (req, res, next) {
    try {
      if (is.emptyObject(req.body) || !req.body.password) {
        throw new Error('변경할 패스워드를 입력해주세요.');
      }

      const userId = req.currentUserId;
      const password = req.body.password;

      const user = await userAuthService.changePassword({ userId, password });
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }
);

export { userAuthRouter };
