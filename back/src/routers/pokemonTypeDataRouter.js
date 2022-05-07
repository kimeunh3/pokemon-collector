import { Router } from 'express';
import { loginRequired } from '../middlewares/loginRequired';
import {
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
} from '../services/pokemonTypeDataService';

const pokemonGrassDataAuthRouter = Router();
const pokemonFireDataAuthRouter = Router();
const pokemonWaterDataAuthRouter = Router();
const pokemonBugDataAuthRouter = Router();
const pokemonNormalDataAuthRouter = Router();
const pokemonPoisonDataAuthRouter = Router();
const pokemonElectricDataAuthRouter = Router();
const pokemonGroundDataAuthRouter = Router();
const pokemonFairyDataAuthRouter = Router();
const pokemonFightDataAuthRouter = Router();
const pokemonPsychicDataAuthRouter = Router();
const pokemonRockDataAuthRouter = Router();
const pokemonGhostDataAuthRouter = Router();
const pokemonIceDataAuthRouter = Router();
const pokemonDragonDataAuthRouter = Router();
const pokemonFlyingDataAuthRouter = Router();
const pokemonSteelDataAuthRouter = Router();

pokemonGrassDataAuthRouter.use(loginRequired);
pokemonFireDataAuthRouter.use(loginRequired);
pokemonWaterDataAuthRouter.use(loginRequired);
pokemonBugDataAuthRouter.use(loginRequired);
pokemonNormalDataAuthRouter.use(loginRequired);
pokemonPoisonDataAuthRouter.use(loginRequired);
pokemonElectricDataAuthRouter.use(loginRequired);
pokemonGroundDataAuthRouter.use(loginRequired);
pokemonFairyDataAuthRouter.use(loginRequired);
pokemonFightDataAuthRouter.use(loginRequired);
pokemonPsychicDataAuthRouter.use(loginRequired);
pokemonRockDataAuthRouter.use(loginRequired);
pokemonGhostDataAuthRouter.use(loginRequired);
pokemonIceDataAuthRouter.use(loginRequired);
pokemonDragonDataAuthRouter.use(loginRequired);
pokemonFlyingDataAuthRouter.use(loginRequired);
pokemonSteelDataAuthRouter.use(loginRequired);

/**
 * @swagger
 * paths:
 *   /pokemonTypeData/{type}:
 *     get:
 *       tags:
 *       - pokemonTypeData
 *       summary: scaling 된 속성 별 모든 포켓몬 데이터
 *       description: MinMaxScaling한 속성 별 모든 포켓몬 데이터를 모두 가져오는 API
 *       security:
 *         - Authorization: []
 *       parameters:
 *        - in: path
 *          name: type
 *          required: true
 *          type: string
 *          schema:
 *            type: string
 *            enum: [grass, fire, water, bug, normal, poison, electric, ground, fairy,
 *              fight, psychic, rock, ghost, ice, dragon, flying, steel]
 *       responses:
 *         '200':
 *           description: 속성 별 모든 포켓몬 데이터 정보를 불러옴
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                     id:
 *                       type: number
 *                     name:
 *                       type: string
 *                     typeOne:
 *                       type: string
 *                     typeTwo:
 *                       type: string
 *                     height:
 *                       type: number
 *                     weight:
 *                       type: number
 *                     totalPoints:
 *                       type: number
 *                     hp:
 *                       type: number
 *                     attack:
 *                       type: number
 *                     defense:
 *                       type: number
 *                     spAttack:
 *                       type: number
 *                     spDefense:
 *                       type: number
 *                     speed:
 *                       type: number
 *               example:
 *                 - _id: 627104bb0455dcafe79e648f
 *                   id: 81
 *                   name: 코일
 *                   typeOne: 전기
 *                   typeTwo: 강철
 *                   height: 0
 *                   weight: 0
 *                   totalPoints: 0
 *                   hp: 0
 *                   attack: 0
 *                   defense: 0
 *                   spAttack: 0
 *                   spDefense: 0
 *                   speed: 0
 *                 - _id: 627104bb0455dcafe79e6490
 *                   id: 82
 *                   name: 레어코일
 *                   typeOne: 전기
 *                   typeTwo: 강철
 *                   height: 100
 *                   weight: 100
 *                   totalPoints: 100.00000000000003
 *                   hp: 100
 *                   attack: 100
 *                   defense: 100
 *                   spAttack: 100
 *                   spDefense: 100
 *                   speed: 100
 */
pokemonGrassDataAuthRouter.get(
  '/pokemonTypeData/grass',
  async (req, res, next) => {
    try {
      //pokemon 정보 가져오기
      const pokemons = await PokemonGrassDataAuthService.getPokemons();

      if (pokemons.errorMessage) {
        throw new Error(pokemons.errorMessage);
      }

      res.status(200).json(pokemons);
    } catch (error) {
      next(error);
    }
  }
);

/**
 * @swagger
 * paths:
 *   /pokemonTypeData/{type}/total:
 *     get:
 *       tags:
 *       - pokemonTypeData
 *       summary: scaling 된 속성 별 모든 포켓몬의 총 능력치 데이터
 *       description: MinMaxScaling한 속성 별 모든 포켓몬의 총 능력치 데이터를 모두 가져오는 API
 *       security:
 *         - Authorization: []
 *       parameters:
 *        - in: path
 *          name: type
 *          required: true
 *          type: string
 *          schema:
 *            type: string
 *            enum: [grass, fire, water, bug, normal, poison, electric, ground, fairy,
 *              fight, psychic, rock, ghost, ice, dragon, flying, steel]
 *       responses:
 *         '200':
 *           description: 속성 별 평균 데이터의 속성 이름과 총 능력치 정보를 불러옴
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                     totalPoints:
 *                       type: number
 *               example:
 *                 - name: 코일
 *                   totalPoints: 0
 *                 - type: 레어코일
 *                   totalPoints: 100.00000000000003
 */
pokemonGrassDataAuthRouter.get(
  '/pokemonTypeData/grass/total',
  async (req, res, next) => {
    try {
      //pokemon 정보 가져오기
      const pokemons = await PokemonGrassDataAuthService.getPokemonsTotal();

      if (pokemons.errorMessage) {
        throw new Error(pokemons.errorMessage);
      }

      res.status(200).json(pokemons);
    } catch (error) {
      next(error);
    }
  }
);

// 불꽃 포켓몬
pokemonFireDataAuthRouter.get(
  '/pokemonTypeData/fire',
  async (req, res, next) => {
    try {
      //pokemon 정보 가져오기
      const pokemons = await PokemonFireDataAuthService.getPokemons();

      if (pokemons.errorMessage) {
        throw new Error(pokemons.errorMessage);
      }

      res.status(200).json(pokemons);
    } catch (error) {
      next(error);
    }
  }
);

pokemonFireDataAuthRouter.get(
  '/pokemonTypeData/fire/total',
  async (req, res, next) => {
    try {
      //pokemon 정보 가져오기
      const pokemons = await PokemonFireDataAuthService.getPokemonsTotal();

      if (pokemons.errorMessage) {
        throw new Error(pokemons.errorMessage);
      }

      res.status(200).json(pokemons);
    } catch (error) {
      next(error);
    }
  }
);

// 물 포켓몬
pokemonWaterDataAuthRouter.get(
  '/pokemonTypeData/water',
  async (req, res, next) => {
    try {
      //pokemon 정보 가져오기
      const pokemons = await PokemonWaterDataAuthService.getPokemons();

      if (pokemons.errorMessage) {
        throw new Error(pokemons.errorMessage);
      }

      res.status(200).json(pokemons);
    } catch (error) {
      next(error);
    }
  }
);

pokemonWaterDataAuthRouter.get(
  '/pokemonTypeData/water/total',
  async (req, res, next) => {
    try {
      //pokemon 정보 가져오기
      const pokemons = await PokemonWaterDataAuthService.getPokemonsTotal();

      if (pokemons.errorMessage) {
        throw new Error(pokemons.errorMessage);
      }

      res.status(200).json(pokemons);
    } catch (error) {
      next(error);
    }
  }
);

// 벌레 포켓몬
pokemonBugDataAuthRouter.get('/pokemonTypeData/bug', async (req, res, next) => {
  try {
    //pokemon 정보 가져오기
    const pokemons = await PokemonBugDataAuthService.getPokemons();

    if (pokemons.errorMessage) {
      throw new Error(pokemons.errorMessage);
    }

    res.status(200).json(pokemons);
  } catch (error) {
    next(error);
  }
});

pokemonBugDataAuthRouter.get(
  '/pokemonTypeData/bug/total',
  async (req, res, next) => {
    try {
      //pokemon 정보 가져오기
      const pokemons = await PokemonBugDataAuthService.getPokemonsTotal();

      if (pokemons.errorMessage) {
        throw new Error(pokemons.errorMessage);
      }

      res.status(200).json(pokemons);
    } catch (error) {
      next(error);
    }
  }
);

// 노말 포켓몬
pokemonNormalDataAuthRouter.get(
  '/pokemonTypeData/normal',
  async (req, res, next) => {
    try {
      //pokemon 정보 가져오기
      const pokemons = await PokemonNormalDataAuthService.getPokemons();

      if (pokemons.errorMessage) {
        throw new Error(pokemons.errorMessage);
      }

      res.status(200).json(pokemons);
    } catch (error) {
      next(error);
    }
  }
);

pokemonNormalDataAuthRouter.get(
  '/pokemonTypeData/normal/total',
  async (req, res, next) => {
    try {
      //pokemon 정보 가져오기
      const pokemons = await PokemonNormalDataAuthService.getPokemonsTotal();

      if (pokemons.errorMessage) {
        throw new Error(pokemons.errorMessage);
      }

      res.status(200).json(pokemons);
    } catch (error) {
      next(error);
    }
  }
);

// 독 포켓몬
pokemonPoisonDataAuthRouter.get(
  '/pokemonTypeData/poison',
  async (req, res, next) => {
    try {
      //pokemon 정보 가져오기
      const pokemons = await PokemonPoisonDataAuthService.getPokemons();

      if (pokemons.errorMessage) {
        throw new Error(pokemons.errorMessage);
      }

      res.status(200).json(pokemons);
    } catch (error) {
      next(error);
    }
  }
);

pokemonPoisonDataAuthRouter.get(
  '/pokemonTypeData/poison/total',
  async (req, res, next) => {
    try {
      //pokemon 정보 가져오기
      const pokemons = await PokemonPoisonDataAuthService.getPokemonsTotal();

      if (pokemons.errorMessage) {
        throw new Error(pokemons.errorMessage);
      }

      res.status(200).json(pokemons);
    } catch (error) {
      next(error);
    }
  }
);

// 전기 포켓몬
pokemonElectricDataAuthRouter.get(
  '/pokemonTypeData/electric',
  async (req, res, next) => {
    try {
      //pokemon 정보 가져오기
      const pokemons = await PokemonElectricDataAuthService.getPokemons();

      if (pokemons.errorMessage) {
        throw new Error(pokemons.errorMessage);
      }

      res.status(200).json(pokemons);
    } catch (error) {
      next(error);
    }
  }
);

pokemonElectricDataAuthRouter.get(
  '/pokemonTypeData/electric/total',
  async (req, res, next) => {
    try {
      //pokemon 정보 가져오기
      const pokemons = await PokemonElectricDataAuthService.getPokemonsTotal();

      if (pokemons.errorMessage) {
        throw new Error(pokemons.errorMessage);
      }

      res.status(200).json(pokemons);
    } catch (error) {
      next(error);
    }
  }
);

// 땅 포켓몬
pokemonGroundDataAuthRouter.get(
  '/pokemonTypeData/ground',
  async (req, res, next) => {
    try {
      //pokemon 정보 가져오기
      const pokemons = await PokemonGroundDataAuthService.getPokemons();

      if (pokemons.errorMessage) {
        throw new Error(pokemons.errorMessage);
      }

      res.status(200).json(pokemons);
    } catch (error) {
      next(error);
    }
  }
);

pokemonGroundDataAuthRouter.get(
  '/pokemonTypeData/ground/total',
  async (req, res, next) => {
    try {
      //pokemon 정보 가져오기
      const pokemons = await PokemonGroundDataAuthService.getPokemonsTotal();

      if (pokemons.errorMessage) {
        throw new Error(pokemons.errorMessage);
      }

      res.status(200).json(pokemons);
    } catch (error) {
      next(error);
    }
  }
);

// 페어리 포켓몬
pokemonFairyDataAuthRouter.get(
  '/pokemonTypeData/fairy',
  async (req, res, next) => {
    try {
      //pokemon 정보 가져오기
      const pokemons = await PokemonFairyDataAuthService.getPokemons();

      if (pokemons.errorMessage) {
        throw new Error(pokemons.errorMessage);
      }

      res.status(200).json(pokemons);
    } catch (error) {
      next(error);
    }
  }
);

pokemonFairyDataAuthRouter.get(
  '/pokemonTypeData/fairy/total',
  async (req, res, next) => {
    try {
      //pokemon 정보 가져오기
      const pokemons = await PokemonFairyDataAuthService.getPokemonsTotal();

      if (pokemons.errorMessage) {
        throw new Error(pokemons.errorMessage);
      }

      res.status(200).json(pokemons);
    } catch (error) {
      next(error);
    }
  }
);

// 격투 포켓몬
pokemonFightDataAuthRouter.get(
  '/pokemonTypeData/fight',
  async (req, res, next) => {
    try {
      //pokemon 정보 가져오기
      const pokemons = await PokemonFightDataAuthService.getPokemons();

      if (pokemons.errorMessage) {
        throw new Error(pokemons.errorMessage);
      }

      res.status(200).json(pokemons);
    } catch (error) {
      next(error);
    }
  }
);

pokemonFightDataAuthRouter.get(
  '/pokemonTypeData/fight/total',
  async (req, res, next) => {
    try {
      //pokemon 정보 가져오기
      const pokemons = await PokemonFightDataAuthService.getPokemonsTotal();

      if (pokemons.errorMessage) {
        throw new Error(pokemons.errorMessage);
      }

      res.status(200).json(pokemons);
    } catch (error) {
      next(error);
    }
  }
);

// 에스퍼 포켓몬
pokemonPsychicDataAuthRouter.get(
  '/pokemonTypeData/psychic',
  async (req, res, next) => {
    try {
      //pokemon 정보 가져오기
      const pokemons = await PokemonPsychicDataAuthService.getPokemons();

      if (pokemons.errorMessage) {
        throw new Error(pokemons.errorMessage);
      }

      res.status(200).json(pokemons);
    } catch (error) {
      next(error);
    }
  }
);

pokemonPsychicDataAuthRouter.get(
  '/pokemonTypeData/psychic/total',
  async (req, res, next) => {
    try {
      //pokemon 정보 가져오기
      const pokemons = await PokemonPsychicDataAuthService.getPokemonsTotal();

      if (pokemons.errorMessage) {
        throw new Error(pokemons.errorMessage);
      }

      res.status(200).json(pokemons);
    } catch (error) {
      next(error);
    }
  }
);

// 바위 포켓몬
pokemonRockDataAuthRouter.get(
  '/pokemonTypeData/rock',
  async (req, res, next) => {
    try {
      //pokemon 정보 가져오기
      const pokemons = await PokemonRockDataAuthService.getPokemons();

      if (pokemons.errorMessage) {
        throw new Error(pokemons.errorMessage);
      }

      res.status(200).json(pokemons);
    } catch (error) {
      next(error);
    }
  }
);

pokemonRockDataAuthRouter.get(
  '/pokemonTypeData/rock/total',
  async (req, res, next) => {
    try {
      //pokemon 정보 가져오기
      const pokemons = await PokemonRockDataAuthService.getPokemonsTotal();

      if (pokemons.errorMessage) {
        throw new Error(pokemons.errorMessage);
      }

      res.status(200).json(pokemons);
    } catch (error) {
      next(error);
    }
  }
);

// 고스트 포켓몬
pokemonGhostDataAuthRouter.get(
  '/pokemonTypeData/ghost',
  async (req, res, next) => {
    try {
      //pokemon 정보 가져오기
      const pokemons = await PokemonGhostDataAuthService.getPokemons();

      if (pokemons.errorMessage) {
        throw new Error(pokemons.errorMessage);
      }

      res.status(200).json(pokemons);
    } catch (error) {
      next(error);
    }
  }
);

pokemonGhostDataAuthRouter.get(
  '/pokemonTypeData/ghost/total',
  async (req, res, next) => {
    try {
      //pokemon 정보 가져오기
      const pokemons = await PokemonGhostDataAuthService.getPokemonsTotal();

      if (pokemons.errorMessage) {
        throw new Error(pokemons.errorMessage);
      }

      res.status(200).json(pokemons);
    } catch (error) {
      next(error);
    }
  }
);

// 얼음 포켓몬
pokemonIceDataAuthRouter.get('/pokemonTypeData/ice', async (req, res, next) => {
  try {
    //pokemon 정보 가져오기
    const pokemons = await PokemonIceDataAuthService.getPokemons();

    if (pokemons.errorMessage) {
      throw new Error(pokemons.errorMessage);
    }

    res.status(200).json(pokemons);
  } catch (error) {
    next(error);
  }
});

pokemonIceDataAuthRouter.get(
  '/pokemonTypeData/ice/total',
  async (req, res, next) => {
    try {
      //pokemon 정보 가져오기
      const pokemons = await PokemonIceDataAuthService.getPokemonsTotal();

      if (pokemons.errorMessage) {
        throw new Error(pokemons.errorMessage);
      }

      res.status(200).json(pokemons);
    } catch (error) {
      next(error);
    }
  }
);

// 드래곤 포켓몬
pokemonDragonDataAuthRouter.get(
  '/pokemonTypeData/dragon',
  async (req, res, next) => {
    try {
      //pokemon 정보 가져오기
      const pokemons = await PokemonDragonDataAuthService.getPokemons();

      if (pokemons.errorMessage) {
        throw new Error(pokemons.errorMessage);
      }

      res.status(200).json(pokemons);
    } catch (error) {
      next(error);
    }
  }
);

pokemonDragonDataAuthRouter.get(
  '/pokemonTypeData/dragon/total',
  async (req, res, next) => {
    try {
      //pokemon 정보 가져오기
      const pokemons = await PokemonDragonDataAuthService.getPokemonsTotal();

      if (pokemons.errorMessage) {
        throw new Error(pokemons.errorMessage);
      }

      res.status(200).json(pokemons);
    } catch (error) {
      next(error);
    }
  }
);

// 비행 포켓몬
pokemonFlyingDataAuthRouter.get(
  '/pokemonTypeData/flying',
  async (req, res, next) => {
    try {
      //pokemon 정보 가져오기
      const pokemons = await PokemonFlyingDataAuthService.getPokemons();

      if (pokemons.errorMessage) {
        throw new Error(pokemons.errorMessage);
      }

      res.status(200).json(pokemons);
    } catch (error) {
      next(error);
    }
  }
);

pokemonFlyingDataAuthRouter.get(
  '/pokemonTypeData/flying/total',
  async (req, res, next) => {
    try {
      //pokemon 정보 가져오기
      const pokemons = await PokemonFlyingDataAuthService.getPokemonsTotal();

      if (pokemons.errorMessage) {
        throw new Error(pokemons.errorMessage);
      }

      res.status(200).json(pokemons);
    } catch (error) {
      next(error);
    }
  }
);

// 강철 포켓몬
pokemonSteelDataAuthRouter.get(
  '/pokemonTypeData/steel',
  async (req, res, next) => {
    try {
      //pokemon 정보 가져오기
      const pokemons = await PokemonSteelDataAuthService.getPokemons();

      if (pokemons.errorMessage) {
        throw new Error(pokemons.errorMessage);
      }

      res.status(200).json(pokemons);
    } catch (error) {
      next(error);
    }
  }
);

pokemonSteelDataAuthRouter.get(
  '/pokemonTypeData/steel/total',
  async (req, res, next) => {
    try {
      //pokemon 정보 가져오기
      const pokemons = await PokemonSteelDataAuthService.getPokemonsTotal();

      if (pokemons.errorMessage) {
        throw new Error(pokemons.errorMessage);
      }

      res.status(200).json(pokemons);
    } catch (error) {
      next(error);
    }
  }
);

export {
  pokemonGrassDataAuthRouter,
  pokemonFireDataAuthRouter,
  pokemonWaterDataAuthRouter,
  pokemonBugDataAuthRouter,
  pokemonNormalDataAuthRouter,
  pokemonPoisonDataAuthRouter,
  pokemonElectricDataAuthRouter,
  pokemonGroundDataAuthRouter,
  pokemonFairyDataAuthRouter,
  pokemonFightDataAuthRouter,
  pokemonPsychicDataAuthRouter,
  pokemonRockDataAuthRouter,
  pokemonGhostDataAuthRouter,
  pokemonIceDataAuthRouter,
  pokemonDragonDataAuthRouter,
  pokemonFlyingDataAuthRouter,
  pokemonSteelDataAuthRouter,
};
