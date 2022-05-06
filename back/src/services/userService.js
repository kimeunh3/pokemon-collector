import { User } from '../db'; // from을 폴더(db) 로 설정 시, 디폴트로 index.js 로부터 import함.
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import jwt from 'jsonwebtoken';

class userAuthService {
  static async addUser({
    nickname,
    email,
    password,
    sex,
    birth,
    interest,
    likeType,
  }) {
    let user = await User.findByEmail({ email });
    if (user) {
      const errorMessage =
        '이 이메일은 현재 사용중입니다. 다른 이메일을 입력해 주세요.';
      return { errorMessage };
    }
    user = await User.findByNickname({ nickname });
    if (user) {
      const errorMessage =
        '이 닉네임은 현재 사용중입니다. 다른 닉네임을 입력해주세요.';
      return { errorMessage };
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const id = uuidv4();
    const newUser = {
      id,
      nickname,
      email,
      password: hashedPassword,
      sex,
      birth,
      interest,
      likeType,
    };

    const createdNewUser = await User.create({ newUser });
    createdNewUser.errorMessage = null;
    return createdNewUser;
  }

  static async getUser({ email, password }) {
    // 이메일 db에 존재 여부 확인
    const user = await User.findByEmail({ email });
    if (!user) {
      const errorMessage =
        '해당 이메일은 가입 내역이 없습니다. 다시 한 번 확인해 주세요.';
      return { errorMessage };
    }

    // 비밀번호 일치 여부 확인
    const correctPasswordHash = user.password;
    const isPasswordCorrect = await bcrypt.compare(
      password,
      correctPasswordHash
    );
    if (!isPasswordCorrect) {
      const errorMessage =
        '비밀번호가 일치하지 않습니다. 다시 한 번 확인해 주세요.';
      return { errorMessage };
    }

    const secretKey = process.env.JWT_SECRET_KEY || 'jwt-secret-key';
    const token = jwt.sign({ userId: user.id }, secretKey);

    const id = user.id;
    const nickname = user.nickname;
    const sex = user.sex;
    const birth = user.birth;
    const interest = user.interest;
    const likeType = user.likeType;
    const point = user.point;
    const profileImg = user.profileImg;
    const stickers = user.stickers;
    const attendance = user.attendance;
    const isPointGiven = user.isPointGiven;
    const loginUser = {
      token,
      id,
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
      attendance,
      isPointGiven,
      errorMessage: null,
    };

    return loginUser;
  }

  static async setUser({ userId, toUpdate, nickname }) {
    let user = await User.findById({ userId });

    if (!user) {
      const errorMessage = '가입 내역이 없습니다. 다시 한 번 확인해 주세요.';
      return { errorMessage };
    }
    user = await User.findByNickname({ nickname });
    if (user) {
      const errorMessage =
        '이 닉네임은 현재 사용중입니다. 다른 닉네임을 입력해주세요.';
      return { errorMessage };
    }
    if (toUpdate.nickname) {
      const fieldToUpdate = 'nickname';
      const newValue = toUpdate.nickname;
      user = await User.update({ userId, fieldToUpdate, newValue });
    }

    if (toUpdate.email) {
      const fieldToUpdate = 'email';
      const newValue = toUpdate.email;
      user = await User.update({ userId, fieldToUpdate, newValue });
    }

    if (toUpdate.password) {
      const fieldToUpdate = 'password';
      const newValue = toUpdate.password;
      user = await User.update({ userId, fieldToUpdate, newValue });
    }

    if (toUpdate.interest) {
      const fieldToUpdate = 'interest';
      const newValue = toUpdate.interest;
      user = await User.update({ userId, fieldToUpdate, newValue });
    }

    if (toUpdate.likeType) {
      const fieldToUpdate = 'likeType';
      const newValue = toUpdate.likeType;
      user = await User.update({ userId, fieldToUpdate, newValue });
    }

    if (toUpdate.attendance) {
      const fieldToUpdate = 'attendance';
      const newValue = toUpdate.attendance;
      user = await User.update({ userId, fieldToUpdate, newValue });
    }

    if (toUpdate.isPointGiven !== user.isPointGiven) {
      const fieldToUpdate = 'isPointGiven';
      const newValue = toUpdate.isPointGiven;
      user = await User.update({ userId, fieldToUpdate, newValue });
    }

    if (toUpdate.point) {
      const fieldToUpdate = 'point';
      const newValue = toUpdate.point;
      user = await User.update({ userId, fieldToUpdate, newValue });
    }

    if (toUpdate.profileImg) {
      const fieldToUpdate = 'profileImg';
      const newValue = toUpdate.profileImg;
      user = await User.update({ userId, fieldToUpdate, newValue });
    }

    return user;
  }

  static async getUserInfo({ userId }) {
    const user = await User.findById({ userId });

    if (!user) {
      const errorMessage =
        '해당 이메일은 가입 내역이 없습니다. 다시 한 번 확인해 주세요.';
      return { errorMessage };
    }

    return user;
  }

  static async changePassword({ userId, password }) {
    const user = await User.findById({ userId });

    if (!user) {
      const errorMessage =
        '해당 이메일은 가입 내역이 없습니다. 비밀번호 변경에 실패했습니다.';
      return { errorMessage };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const createdNewUser = await User.changePassword({
      userId,
      password: hashedPassword,
    });

    createdNewUser.errorMessage = null;

    return createdNewUser;
  }
}

export { userAuthService };
