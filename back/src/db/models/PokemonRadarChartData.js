import { PokemonRadarChartDataModel } from '../schemas/pokemonRadarChartData';

class PokemonRadarChartData {
  static async findById({ id }) {
    const pokemon = await PokemonRadarChartDataModel.findOne({ id });
    return pokemon;
  }
}

export { PokemonRadarChartData };
