import { User } from '../db';

class rankService {
  static async updateRankingPoint({
    userId,
    pokemonId,
    pokemonStatus,
    pokemonTotalPoint,
    succeeded,
  }) {
    let toAdd = pokemonTotalPoint;
    const achievementsRankingPoint = 5000; // 업적 달성 포인트

    // 전설 or 환상 등급을 뽑을 시 추가 포인트
    switch (pokemonStatus) {
      case '전설':
        toAdd += 3000;
        break;
      case '환상':
        toAdd += 2000;
        break;
    }

    // 뽑힌 포켓몬 스티커의 수 가져오기
    const stickerCount = await User.findOneStickerCountById({
      userId,
      pokemonId,
    });

    // 만약 같은 포켓몬을 가지고 있다면 50% 포인트만 받을 수 있음
    if (stickerCount > 1) {
      toAdd /= 2;
    }
    toAdd += succeeded.length * achievementsRankingPoint;

    const updatedPoint = await User.updateRankingPoint({ userId, toAdd });

    return updatedPoint;
  }

  static async getRankPointRanking({ count }) {
    const rankingList = await User.findRankPointRanking({ count });
    if (!rankingList) {
      const errorMessage = '랭크 포인트 랭킹을 불러오는데 실패했습니다.';
      return { errorMessage };
    }
    return rankingList;
  }

  static async getstickersRanking({ count }) {
    const rankingList = await User.findStickersRanking({ count });
    if (!rankingList) {
      const errorMessage = '스티커 수 랭킹을 불러오는데 실패했습니다.';
      return { errorMessage };
    }
    return rankingList;
  }
}

export { rankService };
