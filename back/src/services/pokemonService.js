import { Pokemon } from "../db";

class PokemonAuthService {
  static async getPokemon({ id }) {
    const pokemon = await Pokemon.findById({ id });

    // db에서 찾지 못한 경우, 에러 메시지 반환
    if (!pokemon) {
      const errorMessage =
        "해당 번호를 가진 포켓몬이 없습니다. 다시 한 번 확인해 주세요.";
      return { errorMessage };
    }

    return pokemon;
  }

  static async getPokemonName({ id }) {
    const pokemonName = await Pokemon.findNameById({ id });

    // db에서 찾지 못한 경우, 에러 메시지 반환
    if (!pokemonName) {
      const errorMessage =
        "해당 번호를 가진 포켓몬이 없습니다. 다시 한 번 확인해 주세요.";
      return { errorMessage };
    }

    return pokemonName;
  }
}

export { PokemonAuthService };
