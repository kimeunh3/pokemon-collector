import { User } from "../db";

class rankService {
  static async updateRankingPoint({ userId, pokemonId, pokemonStatus, succeeded }) {

    let toAdd = 0;
    const achievementsRankingPoint = 5000; // 업적 달성 포인트

    switch (pokemonStatus) {
      case '전설': toAdd = 3000; break;
      case '환상': toAdd = 2000; break;
      default: toAdd = 500;
    }

    // 뽑힌 포켓몬 스티커의 수 가져오기
    const stickerCount = await User.findOneStickerCountById({ userId, pokemonId });

    // 만약 같은 포켓몬을 가지고 있다면 50% 포인트만 받을 수 있음
    if (stickerCount > 1) {
      toAdd = toAdd / 2
    }
    toAdd += succeeded.length * achievementsRankingPoint;

    const updatedPoint = await User.updateRankingPoint({ userId, toAdd })

    return updatedPoint
  }
}

export { rankService };