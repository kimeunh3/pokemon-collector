import { PokemonRadarChartData } from '../db';
class PokemonRadarChartDataAuthService {
  static async getPokemon({ id }) {
    const pokemon = await PokemonRadarChartData.findById({ id });

    // db에서 찾지 못한 경우, 에러 메시지 반환
    if (!pokemon) {
      const errorMessage =
        '해당 번호를 가진 포켓몬이 없습니다. 다시 한 번 확인해 주세요.';
      return { errorMessage };
    }
    return pokemon;
  }
}

export { PokemonRadarChartDataAuthService };
