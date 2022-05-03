import { PokemonScaledMeanDataModel } from '../schemas/pokemonMeanData';

class PokemonScaledMeanData {
  static async findAll() {
    return PokemonScaledMeanDataModel.find({});
  }
}

export { PokemonScaledMeanData };
