import { Pokemon } from '../db';
import { User } from '../db';
import { draw } from '../util/draw';

class PokemonAuthService {
  static async getPokemon({ id }) {
    const pokemon = await Pokemon.findById({ id });

    // db에서 찾지 못한 경우, 에러 메시지 반환
    if (!pokemon) {
      const errorMessage =
        '해당 번호를 가진 포켓몬이 없습니다. 다시 한 번 확인해 주세요.';
      return { errorMessage };
    }

    return pokemon;
  }

  static async getPokemonName({ id }) {
    const pokemonName = await Pokemon.findNameById({ id });

    // db에서 찾지 못한 경우, 에러 메시지 반환
    if (!pokemonName) {
      const errorMessage =
        '해당 번호를 가진 포켓몬이 없습니다. 다시 한 번 확인해 주세요.';
      return { errorMessage };
    }

    return pokemonName;
  }

  static async getAllPokemons() {
    return Pokemon.findAll();
  }

  static async getPokemons({ type }) {
    const pokemons = await Pokemon.findPokemonsByType({ type });
    // db에서 찾지 못한 경우, 에러 메시지 반환
    if (pokemons.length <= 0) {
      const errorMessage =
        '해당 속성의 포켓몬이 없습니다. 다시 한 번 확인해 주세요.';
      return { errorMessage };
    }
    return pokemons;
  }

  static async getDrewResult({ userId }) {
    const point = await User.findPointById({ userId });

    // 포인트 확인
    if (!draw.pointCheck(point)) {
      const errorMessage = '포인트 부족, 현재 point : ' + point;
      return { errorMessage };
    }
    // 확률에 따라 포켓몬 id 반환
    const id = await draw.drawPokemonid();
    const pokemon = await Pokemon.findById({ id });
    // 뽑힌 포켓몬을 user 스키마의 stickers에 update
    const { stickers } = await User.updateStickers({
      userId,
      id,
      name: pokemon.name,
    });

    if (!stickers) {
      const errorMessage =
        'stikers update에 실패했습니다. 다시 한 번 확인해 주세요.';
      return { errorMessage };
    }

    // 포인트 삭감
    const changedPoint = point - 1000;
    const appliedPoint = await User.updatePoint({ userId, changedPoint });

    const drawResult = {
      id,
      name: pokemon.name,
      pokemonStatus: pokemon.status,
      pokemonTotalPoint: pokemon.totalPoints,
      status: true,
      userPoint: appliedPoint,
    };

    return drawResult;
  }
}

export { PokemonAuthService };
