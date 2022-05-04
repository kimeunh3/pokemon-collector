import { PokemonScaledMeanData } from '../db';

class PokemonScaledMeanDataAuthService {
  static async getAverages() {
    const pokemons = await PokemonScaledMeanData.findAll();
    return pokemons;
  }
  static async getAveragesTotal() {
    const pokemons = await PokemonScaledMeanData.findAll();
    return pokemons.map((pokemon) => pokemon.totalPoints);
  }
}

export { PokemonScaledMeanDataAuthService };
