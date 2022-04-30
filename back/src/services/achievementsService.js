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

  static async getUserStickerList({userId}) {
    const stickerList = await User.findStickerListById({userId});

    // db에서 찾지 못한 경우, 에러 메시지 반환
    if (!stickerList) {
      const errorMessage =
        "해당 번호를 가진 포켓몬이 없습니다. 다시 한 번 확인해 주세요.";
      return { errorMessage };
    }

    return stickerList;
  }

  static async updateAchievements({userId, id}){
    const userStickerIds = await User.findStickerListById({userId});
    const notSuccAchievementsList = await User.findAchievementsListById({userId});
    const achievementsList = await Achievements.findAchievementsByType({type: "collected"})

    //모든 업적 목록 순회
    achievementsList.forEach(async oneOfAchievements => {
      if(notSuccAchievementsList.includes(oneOfAchievements.id)){
        let intersection = oneOfAchievements.condition.filter(x => userStickerIds.includes(x))
        // 변경 사항이 없다면 continue
        if(!intersection.includes(id)){
          return;
        }
        // 달성도
        let status = Math.round(intersection.length*(100/oneOfAchievements.condition.length))
        let updated = await User.updateAchievements({userId, id: oneOfAchievements.id, status})
        
        if (!updated) {
          throw new Error("user achievemets update에 실패했습니다. 다시 한 번 확인해 주세요.");
        }
        
      }
    });   
  }
}

export { achievementsService };
