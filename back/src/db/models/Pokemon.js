import { PokemonModel } from "../schemas/pokemon";

class Pokemon {
  static async findById({ id }) {
    const pokemon = await PokemonModel.findOne({ id });
    return pokemon;
  }

  static async findNameById({ id }) {
    const { name } = await PokemonModel.findOne({ id });
    return { id, name };
  }
}

export { Pokemon };
