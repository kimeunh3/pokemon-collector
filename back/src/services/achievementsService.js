import { Achievements } from '../db';
import { User } from '../db';

class achievementsService {
  static async getAchievements() {
    const data = await Achievements.findAll();

    // db에서 찾지 못한 경우, 에러 메시지 반환
    if (!data) {
      const errorMessage =
        '해당 번호를 가진 포켓몬이 없습니다. 다시 한 번 확인해 주세요.';
      return { errorMessage };
    }

    return data;
  }

  // id 순으로 정렬
  static async getUserAchievements({ userId }) {
    const userAchievementsList = await User.findAchievementsListById({
      userId,
    });
    if (!userAchievementsList) {
      const errorMessage = '유저의 업적 정보를 가져오지 못했습니다.';
      return { errorMessage };
    }
    const achievementsList = await Achievements.findAll();
    if (!achievementsList) {
      const errorMessage = '전체 업적 정보를 가져오지 못했습니다.';
      return { errorMessage };
    }
    let DetailedUserAchievList = [];
    for (let i = 0; i < achievementsList.length; i++) {
      DetailedUserAchievList.push({
        id: achievementsList[i].id,
        type: achievementsList[i].type,
        name: achievementsList[i].name,
        description: achievementsList[i].description,
        status: userAchievementsList[i].status,
      });
    }
    return DetailedUserAchievList;
  }

  // 달성도 100인 업적은 뒤로 빼고 나머지는 id순으로 정렬
  static async getSortedUserAchievements({ userId }) {
    const userAchievementsList = await User.findAchievementsListById({
      userId,
    });
    if (!userAchievementsList) {
      const errorMessage = '유저의 업적 정보를 가져오지 못했습니다.';
      return { errorMessage };
    }

    let yet = []; // 아직 달성 못한 업적
    let end = []; // 달성한 업적
    // 달성도 100인 업적 거르기
    userAchievementsList.forEach((userAchievements) => {
      if (userAchievements.status == 100) {
        end.push(userAchievements);
      } else {
        yet.push(userAchievements);
      }
    });
    const userAchievementsSortedList = yet.concat(end);

    const achievementsList = await Achievements.findAll();
    if (!achievementsList) {
      const errorMessage = '전체 업적 정보를 가져오지 못했습니다.';
      return { errorMessage };
    }
    let DetailedUserAchievList = [];
    userAchievementsSortedList.forEach((userAchievements) => {
      let achievementIdx = userAchievements.id - 1;
      DetailedUserAchievList.push({
        id: achievementsList[achievementIdx].id,
        type: achievementsList[achievementIdx].type,
        name: achievementsList[achievementIdx].name,
        description: achievementsList[achievementIdx].description,
        status: userAchievements.status,
      });
    });
    return DetailedUserAchievList;
  }

  static async updateAchievements({ userId, pokemonId }) {
    const userStickerIds = await User.findStickerListById({ userId });
    const notSuccAchievementsList = await User.findAchievementsIdListById({
      userId,
    });
    const achievementsList = await Achievements.findAchievementsByType({
      type: 'collected',
    });

    let succeeded = []; // 달성도 100을 채운 업적을 저장
    //모든 업적 목록 순회
    achievementsList.forEach(async (oneOfAchievements) => {
      if (notSuccAchievementsList.includes(oneOfAchievements.id)) {
        let intersection = oneOfAchievements.condition.filter((x) =>
          userStickerIds.includes(x)
        );
        // 변경 사항이 없다면 continue
        if (!intersection.includes(pokemonId)) {
          return;
        }
        // 달성도
        let status = Math.round(
          intersection.length * (100 / oneOfAchievements.condition.length)
        );
        if (status == 100) {
          succeeded.push({ id: oneOfAchievements.id, status });
        }
        let updated = await User.updateAchievements({
          userId,
          id: oneOfAchievements.id,
          status,
        });
        if (!updated) {
          throw new Error(
            'user achievemets update에 실패했습니다. 다시 한 번 확인해 주세요.'
          );
        }
      }
    });
    return succeeded;
  }

  static async uploadAchievements(newAchievements) {
    const updatedAchievements = await Achievements.create({ newAchievements });
    await User.addAchivements({ id: newAchievements.id });

    return updatedAchievements;
  }
}

export { achievementsService };
