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
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 nickname:
 *                   type: string
 *                   example: 포켓몬 트레이너
 *                 email:
 *                   type: string
 *                   example: a@naver.com
 *                 password:
 *                   type: string
 *                   example: 1234
 *                 sex:
 *                   type: string
 *                   example: Male
 *                 birth:
 *                   type: string
 *                   example: 1990-12-03
 *                 interest:
 *                   type: number
 *                   example: 3
 *                 likeType:
 *                   type: string
 *                   example: 격투
 *       tags:
 *       - user
 *       summary: 회원가입
 *       description: User의 회원가입 API
 *       responses:
 *         '200':
 *           description: 회원가입 성공
 *         '400':
 *           description: Content-Type application/json으로 설정X
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
      throw new Error(newUser.errorMessage);
    }

    res.status(200).json(newUser);
  } catch (error) {
    next(error);
  }
});

/**
 * @swagger
 * paths:
 *   /user/login:
 *     post:
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 email:
 *                   type: string
 *                   example: a@naver.com
 *                 password:
 *                   type: string
 *                   example: 1234
 *       tags:
 *       - user
 *       summary: 로그인
 *       description: User의 로그인 API
 *       responses:
 *         '200':
 *           description: 로그인 성공
 *         '400':
 *           description: 가입 내역이 없는 이메일이므로 로그인 실패
 */

userAuthRouter.post('/user/login', async function (req, res, next) {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const user = await userAuthService.getUser({ email, password });

    if (user.errorMessage) {
      throw new Error(user.errorMessage);
    }

    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
});

/**
 * @swagger
 * paths:
 *   /user/current:
 *     get:
 *       tags:
 *       - user
 *       summary: 최근에 로그인한 유저 정보
 *       security:
 *         - Authorization: []
 *       description: 최근에 로그인한 User의 정보를 불러오는 API
 *       responses:
 *         '200':
 *           description: 최근에 로그인한 유저 정보 불러옴
 *         '400':
 *           description: 정상적인 토큰이 아니라서 유저 정보를 불러오는 것을 실패
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 */

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
/**
 * @swagger
 * paths:
 *   /user/attendanceCheck:
 *     put:
 *       tags:
 *       - user
 *       summary: 유저의 마지막 로그인 시간으로부터 24시간 경과 확인
 *       description: 유저의 마지막 로그인 시간으로부터 24시간 경과 확인 -> 포인트 지급 여부 업데이트 API
 *       security:
 *         - Authorization: []
 *       responses:
 *         '200':
 *           description: 출석체크 시간, 포인트 지급 여부 업데이트
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   attendance:
 *                     type: string
 *                     example: 2022-05-02T16:03:30.429Z
 *                   isPointGiven:
 *                     type: string
 *                     example: false
 */

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
/**
 * @swagger
 * paths:
 *   /user/checkIn:
 *     put:
 *       tags:
 *       - user
 *       summary: 기존 포인트 + 1000
 *       description: 기존 포인트 + 1000, 포인트 지급 여부 업데이트 API
 *       security:
 *         - Authorization: []
 *       responses:
 *         '200':
 *           description: 포인트, 포인트 지급 여부 업데이트
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   attendance:
 *                     type: string
 *                     example: 2022-05-02T16:03:30.429Z
 *                   isPointGiven:
 *                     type: string
 *                     example: false
 *                   point:
 *                     type: number
 *                     example: 2000
 */
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
/**
 * @swagger
 * paths:
 *   /user/profileModify:
 *     put:
 *       tags:
 *       - user
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 nickname:
 *                   type: string
 *                   example: 태초마을 관장
 *                 likeType:
 *                   type: string
 *                   example: 불꽃
 *                 profileImg:
 *                   type: string
 *                   example: 117.png
 *                 interest:
 *                   type: number
 *                   example: 5
 *       summary: 유저의 프로필 변경
 *       description: 유저의 프로필 변경 API
 *       security:
 *         - Authorization: []
 *       responses:
 *         '200':
 *           description: 유저 프로필 변경 성공
 */
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

      currentUserInfo = await userAuthService.setUser({
        userId,
        toUpdate,
      });
      if (currentUserInfo.errorMessage) {
        throw new Error(currentUserInfo.errorMessage);
      }
      res.status(200).json({ currentUserInfo });
    } catch (error) {
      next(error);
    }
  }
);
/**
 * @swagger
 * paths:
 *   /user/changePassword:
 *     post:
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 password:
 *                   type: string
 *                   example: 1234
 *
 *       tags:
 *       - user
 *       summary: 비밀번호 변경
 *       description: User의 비밀번호 변경 API
 *       security:
 *         - Authorization: []
 *       responses:
 *         '200':
 *           description: 비밀번호 변경 성공
 *         '400':
 *           description: 변경할 패스워드 입력 X
 */
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
