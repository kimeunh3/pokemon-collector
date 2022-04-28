import { Achievements } from "../db";
import { User } from "../db";
import {draw} from "../util/draw";

class achievementsService {
  static async getAchievements() {
    const data = await Achievements.findAll();

    // db에서 찾지 못한 경우, 에러 메시지 반환
    if (!data) {
      const errorMessage =
        "해당 번호를 가진 포켓몬이 없습니다. 다시 한 번 확인해 주세요.";
      return { errorMessage };
    }

    return data;
  }

  static async getUserStickerList({user_id}) {
    const stickerList = await User.findStickerListById({user_id});

    // db에서 찾지 못한 경우, 에러 메시지 반환
    if (!stickerList) {
      const errorMessage =
        "해당 번호를 가진 포켓몬이 없습니다. 다시 한 번 확인해 주세요.";
      return { errorMessage };
    }

    return stickerList;
  }


}

export { achievementsService };
