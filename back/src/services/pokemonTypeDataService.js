import {
  PokemonGrassData,
  PokemonFireData,
  PokemonWaterData,
  PokemonBugData,
  PokemonNormalData,
  PokemonPoisonData,
  PokemonElectricData,
  PokemonGroundData,
  PokemonFairyData,
  PokemonFightData,
  PokemonPsychicData,
  PokemonRockData,
  PokemonGhostData,
  PokemonIceData,
  PokemonDragonData,
  PokemonFlyingData,
  PokemonSteelData,
} from '../db';

class PokemonGrassDataAuthService {
  static async getPokemons() {
    const pokemons = await PokemonGrassData.findAll();
    return pokemons;
  }
  static async getPokemonsTotal() {
    const pokemons = await PokemonGrassData.findAll();
    return pokemons.map((pokemon) => ({
      name: pokemon.name,
      totalPoints: pokemon.totalPoints,
    }));
  }
}

class PokemonFireDataAuthService {
  static async getPokemons() {
    const pokemons = await PokemonFireData.findAll();
    return pokemons;
  }
  static async getPokemonsTotal() {
    const pokemons = await PokemonFireData.findAll();
    return pokemons.map((pokemon) => ({
      name: pokemon.name,
      totalPoints: pokemon.totalPoints,
    }));
  }
}

class PokemonWaterDataAuthService {
  static async getPokemons() {
    const pokemons = await PokemonWaterData.findAll();
    return pokemons;
  }
  static async getPokemonsTotal() {
    const pokemons = await PokemonWaterData.findAll();
    return pokemons.map((pokemon) => ({
      name: pokemon.name,
      totalPoints: pokemon.totalPoints,
    }));
  }
}

class PokemonBugDataAuthService {
  static async getPokemons() {
    const pokemons = await PokemonBugData.findAll();
    return pokemons;
  }
  static async getPokemonsTotal() {
    const pokemons = await PokemonBugData.findAll();
    return pokemons.map((pokemon) => ({
      name: pokemon.name,
      totalPoints: pokemon.totalPoints,
    }));
  }
}

class PokemonNormalDataAuthService {
  static async getPokemons() {
    const pokemons = await PokemonNormalData.findAll();
    return pokemons;
  }
  static async getPokemonsTotal() {
    const pokemons = await PokemonNormalData.findAll();
    return pokemons.map((pokemon) => ({
      name: pokemon.name,
      totalPoints: pokemon.totalPoints,
    }));
  }
}

class PokemonPoisonDataAuthService {
  static async getPokemons() {
    const pokemons = await PokemonPoisonData.findAll();
    return pokemons;
  }
  static async getPokemonsTotal() {
    const pokemons = await PokemonPoisonData.findAll();
    return pokemons.map((pokemon) => ({
      name: pokemon.name,
      totalPoints: pokemon.totalPoints,
    }));
  }
}

class PokemonElectricDataAuthService {
  static async getPokemons() {
    const pokemons = await PokemonElectricData.findAll();
    return pokemons;
  }
  static async getPokemonsTotal() {
    const pokemons = await PokemonElectricData.findAll();
    return pokemons.map((pokemon) => ({
      name: pokemon.name,
      totalPoints: pokemon.totalPoints,
    }));
  }
}

class PokemonGroundDataAuthService {
  static async getPokemons() {
    const pokemons = await PokemonGroundData.findAll();
    return pokemons;
  }
  static async getPokemonsTotal() {
    const pokemons = await PokemonGroundData.findAll();
    return pokemons.map((pokemon) => ({
      name: pokemon.name,
      totalPoints: pokemon.totalPoints,
    }));
  }
}

class PokemonFairyDataAuthService {
  static async getPokemons() {
    const pokemons = await PokemonFairyData.findAll();
    return pokemons;
  }
  static async getPokemonsTotal() {
    const pokemons = await PokemonFairyData.findAll();
    return pokemons.map((pokemon) => ({
      name: pokemon.name,
      totalPoints: pokemon.totalPoints,
    }));
  }
}

class PokemonFightDataAuthService {
  static async getPokemons() {
    const pokemons = await PokemonFightData.findAll();
    return pokemons;
  }
  static async getPokemonsTotal() {
    const pokemons = await PokemonFightData.findAll();
    return pokemons.map((pokemon) => ({
      name: pokemon.name,
      totalPoints: pokemon.totalPoints,
    }));
  }
}

class PokemonPsychicDataAuthService {
  static async getPokemons() {
    const pokemons = await PokemonPsychicData.findAll();
    return pokemons;
  }
  static async getPokemonsTotal() {
    const pokemons = await PokemonPsychicData.findAll();
    return pokemons.map((pokemon) => ({
      name: pokemon.name,
      totalPoints: pokemon.totalPoints,
    }));
  }
}

class PokemonRockDataAuthService {
  static async getPokemons() {
    const pokemons = await PokemonRockData.findAll();
    return pokemons;
  }
  static async getPokemonsTotal() {
    const pokemons = await PokemonRockData.findAll();
    return pokemons.map((pokemon) => ({
      name: pokemon.name,
      totalPoints: pokemon.totalPoints,
    }));
  }
}

class PokemonGhostDataAuthService {
  static async getPokemons() {
    const pokemons = await PokemonGhostData.findAll();
    return pokemons;
  }
  static async getPokemonsTotal() {
    const pokemons = await PokemonGhostData.findAll();
    return pokemons.map((pokemon) => ({
      name: pokemon.name,
      totalPoints: pokemon.totalPoints,
    }));
  }
}

class PokemonIceDataAuthService {
  static async getPokemons() {
    const pokemons = await PokemonIceData.findAll();
    return pokemons;
  }
  static async getPokemonsTotal() {
    const pokemons = await PokemonIceData.findAll();
    return pokemons.map((pokemon) => ({
      name: pokemon.name,
      totalPoints: pokemon.totalPoints,
    }));
  }
}

class PokemonDragonDataAuthService {
  static async getPokemons() {
    const pokemons = await PokemonDragonData.findAll();
    return pokemons;
  }
  static async getPokemonsTotal() {
    const pokemons = await PokemonDragonData.findAll();
    return pokemons.map((pokemon) => ({
      name: pokemon.name,
      totalPoints: pokemon.totalPoints,
    }));
  }
}

class PokemonFlyingDataAuthService {
  static async getPokemons() {
    const pokemons = await PokemonFlyingData.findAll();
    return pokemons;
  }
  static async getPokemonsTotal() {
    const pokemons = await PokemonFlyingData.findAll();
    return pokemons.map((pokemon) => ({
      name: pokemon.name,
      totalPoints: pokemon.totalPoints,
    }));
  }
}

class PokemonSteelDataAuthService {
  static async getPokemons() {
    const pokemons = await PokemonSteelData.findAll();
    return pokemons;
  }
  static async getPokemonsTotal() {
    const pokemons = await PokemonSteelData.findAll();
    return pokemons.map((pokemon) => ({
      name: pokemon.name,
      totalPoints: pokemon.totalPoints,
    }));
  }
}

export {
  PokemonGrassDataAuthService,
  PokemonFireDataAuthService,
  PokemonWaterDataAuthService,
  PokemonBugDataAuthService,
  PokemonNormalDataAuthService,
  PokemonPoisonDataAuthService,
  PokemonElectricDataAuthService,
  PokemonGroundDataAuthService,
  PokemonFairyDataAuthService,
  PokemonFightDataAuthService,
  PokemonPsychicDataAuthService,
  PokemonRockDataAuthService,
  PokemonGhostDataAuthService,
  PokemonIceDataAuthService,
  PokemonDragonDataAuthService,
  PokemonFlyingDataAuthService,
  PokemonSteelDataAuthService,
};
