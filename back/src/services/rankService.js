import { User } from "../db";
import { Pokemon } from "../db";
import { draw } from "../util/draw";

class rankService {
  static async updateRankingPoint({ userId, pokemonId, succeeded }) {

    const point1 = 1000;      // 없던 포켓몬이 나왔을 시
    const point2 = 500;       // 원래 있던 포켓몬이 나왔을 시
    const point3 = 3000;      // 업적을 달성했을 시

    let toAdd = 0;
    // 뽑힌 포켓몬 스티커의 수 가져오기
    const stickerCount = await User.findOneStickerCountById({ userId, pokemonId });

    if (stickerCount == 1) {
      toAdd += point1;
    } else {
      toAdd += point2;
    };
    toAdd += succeeded.length * point3

    const updatedPoint = await User.updateRankingPoint({ userId, toAdd })

    return updatedPoint
  }
}

export { rankService };