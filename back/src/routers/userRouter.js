import is from '@sindresorhus/is';
import { Router } from 'express';
import { loginRequired } from '../middlewares/loginRequired';
import { userAuthService } from '../services/userService';

const userAuthRouter = Router();

/**
 * @swagger
 * /user/register:
 *   post:
 *     summary: 회원가입
 *     description: User의 회원가입 API
 *     tags: [register]
 *     parameters:
 *       - name: nickname
 *         in: body
 *         description: User의 닉네임
 *         example: 포켓몬 트레이너
 *       - name: email
 *         in: body
 *         description: User의 이메일
 *         example: a@a.com
 *       - name: password
 *         in: body
 *         description: User의 비밀번호(4글자 이상)
 *         example: 1234
 *       - name: sex
 *         in: body
 *         description: User의 성별
 *         example: Male
 *       - name: birth
 *         in: body
 *         description: User의 생년월일
 *         example: 1988-02-12
 *       - name: interest
 *         in: body
 *         description: User의 포켓몬에 대한 관심도
 *         example: 3
 *       - name: likeType
 *         in: body
 *         description: User의 좋아하는 포켓몬 속성
 *         example: 불
 *       - name: point
 *         in: body
 *         description: User의 포인트
 *         example: 1000
 *       - name: profileImg
 *         in: body
 *         description: User의 프로필사진
 *         example: pokeball.png
 *       - name: stickers
 *         in: body
 *         description: User의 스티커 목록
 *     responses:
 *       '200':
 *        description: User의 회원가입
 *        content:
 *         application/json:
 *           schema:
 *             type: Object
 */
userAuthRouter.post('/user/register', async function (req, res, next) {
  try {
    if (is.emptyObject(req.body)) {
      throw new Error(
        'headers의 Content-Type을 application/json으로 설정해주세요'
      );
    }

    const {
      nickname,
      email,
      password,
      sex,
      birth,
      interest,
      likeType,
      point,
      profileImg,
      stickers,
    } = req.body;

    const newUser = await userAuthService.addUser({
      nickname,
      email,
      password,
      sex,
      birth,
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

export { userAuthRouter };
