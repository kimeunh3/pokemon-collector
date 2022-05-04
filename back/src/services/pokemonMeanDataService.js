import { PokemonMeanData } from '../db';
class PokemonMeanDataAuthService {
  static async getAverage({ group }) {
    const pokemon = await PokemonMeanData.findByGroup({ group });

    // db에서 찾지 못한 경우, 에러 메시지 반환
    if (!pokemon) {
      const errorMessage = '잘못된 그룹명입니다. 다시 한 번 확인해 주세요.';
      return { errorMessage };
    }
    return pokemon;
  }
  static async getAverages() {
    const pokemons = await PokemonMeanData.findAll();
    return pokemons;
  }
}

export { PokemonMeanDataAuthService };
