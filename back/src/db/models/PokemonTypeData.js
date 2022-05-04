import {
  PokemonGrassDataModel,
  PokemonFireDataModel,
  PokemonWaterDataModel,
  PokemonBugDataModel,
  PokemonNormalDataModel,
  PokemonPoisonDataModel,
  PokemonElectricDataModel,
  PokemonGroundDataModel,
  PokemonFairyDataModel,
  PokemonFightDataModel,
  PokemonPsychicDataModel,
  PokemonRockDataModel,
  PokemonGhostDataModel,
  PokemonIceDataModel,
  PokemonDragonDataModel,
  PokemonFlyingDataModel,
  PokemonSteelDataModel,
} from '../schemas/pokemonTypeData';

class PokemonGrassData {
  static async findAll() {
    const pokemons = await PokemonGrassDataModel.find({});
    return pokemons;
  }
}

class PokemonFireData {
  static async findAll() {
    const pokemons = await PokemonFireDataModel.find({});
    return pokemons;
  }
}
class PokemonWaterData {
  static async findAll() {
    const pokemons = await PokemonWaterDataModel.find({});
    return pokemons;
  }
}
class PokemonBugData {
  static async findAll() {
    const pokemons = await PokemonBugDataModel.find({});
    return pokemons;
  }
}
class PokemonNormalData {
  static async findAll() {
    const pokemons = await PokemonNormalDataModel.find({});
    return pokemons;
  }
}
class PokemonPoisonData {
  static async findAll() {
    const pokemons = await PokemonPoisonDataModel.find({});
    return pokemons;
  }
}
class PokemonElectricData {
  static async findAll() {
    const pokemons = await PokemonElectricDataModel.find({});
    return pokemons;
  }
}
class PokemonGroundData {
  static async findAll() {
    const pokemons = await PokemonGroundDataModel.find({});
    return pokemons;
  }
}
class PokemonFairyData {
  static async findAll() {
    const pokemons = await PokemonFairyDataModel.find({});
    return pokemons;
  }
}

class PokemonFightData {
  static async findAll() {
    const pokemons = await PokemonFightDataModel.find({});
    return pokemons;
  }
}
class PokemonPsychicData {
  static async findAll() {
    const pokemons = await PokemonPsychicDataModel.find({});
    return pokemons;
  }
}
class PokemonRockData {
  static async findAll() {
    const pokemons = await PokemonRockDataModel.find({});
    return pokemons;
  }
}
class PokemonGhostData {
  static async findAll() {
    const pokemons = await PokemonGhostDataModel.find({});
    return pokemons;
  }
}
class PokemonIceData {
  static async findAll() {
    const pokemons = await PokemonIceDataModel.find({});
    return pokemons;
  }
}

class PokemonDragonData {
  static async findAll() {
    const pokemons = await PokemonDragonDataModel.find({});
    return pokemons;
  }
}

class PokemonFlyingData {
  static async findAll() {
    const pokemons = await PokemonFlyingDataModel.find({});
    return pokemons;
  }
}

class PokemonSteelData {
  static async findAll() {
    const pokemons = await PokemonSteelDataModel.find({});
    return pokemons;
  }
}

export {
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
};
