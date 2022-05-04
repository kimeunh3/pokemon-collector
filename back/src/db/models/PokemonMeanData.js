import { PokemonMeanDataModel } from '../schemas/pokemonMeanData';

class PokemonMeanData {
  static async findByGroup({ group }) {
    const pokemon = await PokemonMeanDataModel.findOne({ group });
    return pokemon;
  }

  static async findAll() {
    return PokemonMeanDataModel.find({});
  }
}

export { PokemonMeanData };
