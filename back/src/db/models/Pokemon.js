import { PokemonModel } from '../schemas/pokemon';

class Pokemon {
  static async findById({ id }) {
    const pokemon = await PokemonModel.findOne({ id });
    return pokemon;
  }

  static async findNameById({ id }) {
    const { name } = await PokemonModel.findOne({ id });
    return { id, name };
  }

  static async findAll() {
    return PokemonModel.find({});
  }

  static async findPokemonsByType({ type }) {
    return PokemonModel.find({ $or: [{ typeOne: type }, { typeTwo: type }] });
  }

  static async getPokemonCount() {
    return PokemonModel.find({}).count();
  }
}

export { Pokemon };
