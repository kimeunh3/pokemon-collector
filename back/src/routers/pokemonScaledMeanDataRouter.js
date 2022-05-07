import { Router } from 'express';
import { loginRequired } from '../middlewares/loginRequired';
import { PokemonScaledMeanDataAuthService } from '../services/pokemonScaledMeanDataService';

const pokemonScaledMeanDataAuthRouter = Router();

pokemonScaledMeanDataAuthRouter.use(loginRequired);

/**
 * @swagger
 * paths:
 *   /pokemonScaledMeanData:
 *     get:
 *       tags:
 *       - pokemonScaledMeanData
 *       security:
 *         - Authorization: []
 *       summary: scaling 된 속성 별 평균 데이터
 *       description: MinMaxScaling한 속성 별 평균 데이터를 모두 가져오는 API
 *       responses:
 *         '200':
 *           description: 속성 별 평균 데이터 정보를 불러옴
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                     group:
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
 *                 - _id: 627136710455dcafe79e64e9
 *                   group: grass
 *                   height: 18.417945690672973
 *                   weight: 12.901845158835831
 *                   totalPoints: 36.38738195700222
 *                   hp: 45.87155963302753
 *                   attack: 45.71428571428572
 *                   defense: 37.62575452716298
 *                   spAttack: 53.846153846153854
 *                   spDefense: 33.78604963112005
 *                   speed: 0
 *                 - _id: 627136710455dcafe79e64ea
 *                   group: fire
 *                   height: 28.099173553719005
 *                   weight: 34.41245006657789
 *                   totalPoints: 67.13548992030005
 *                   hp: 48.31804281345566
 *                   attack: 66.97318007662835
 *                   defense: 27.241784037558688
 *                   spAttack: 56.32478632478632
 *                   spDefense: 62.98904538341159
 *                   speed: 68.8888888888889
 *                 - _id: 627136710455dcafe79e64eb
 *                   group: water
 *                   height: 29.132231404958674
 *                   weight: 40.05492676431424
 *                   totalPoints: 43.1434599156118
 *                   hp: 45.98623853211009
 *                   attack: 42.643678160919535
 *                   defense: 55.67781690140845
 *                   spAttack: 30.897435897435898
 *                   spDefense: 34.397007042253506
 *                   speed: 34.4357638888889
 */
pokemonScaledMeanDataAuthRouter.get(
  '/pokemonScaledMeanData',
  async (req, res, next) => {
    try {
      //pokemon 정보 가져오기
      const pokemons = await PokemonScaledMeanDataAuthService.getAverages();

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
 *   /pokemonScaledMeanData/total:
 *     get:
 *       security:
 *         - Authorization: []
 *       tags:
 *       - pokemonScaledMeanData
 *       summary: scaling 된 속성 별 평균 총 능력치 데이터
 *       description: MinMaxScaling한 속성 별 평균 데이터 중 속성 이름과 총 능력치만 가져오는 API
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
 *                     type:
 *                       type: string
 *                     totalPoints:
 *                       type: number
 *               example:
 *                 - type: grass
 *                   totalPoints: 36.38738195700222
 *                 - type: fire
 *                   totalPoints: 67.13548992030005
 *                 - type: water
 *                   totalPoints: 43.1434599156118
 *                 - type: bug
 *                   totalPoints: 0
 *                 - type: normal
 *                   totalPoints: 25.738396624472585
 *                 - type: poison
 *                   totalPoints: 26.096407109065325
 *                 - type: electric
 *                   totalPoints: 61.493983434911684
 *                 - type: ground
 *                   totalPoints: 35.66405465139644
 *                 - type: fairy
 *                   totalPoints: 32.60196905766526
 *                 - type: fight
 *                   totalPoints: 49.57805907172997
 *                 - type: psychic
 *                   totalPoints: 67.85211975085392
 *                 - type: rock
 *                   totalPoints: 46.861015215445605
 *                 - type: ghost
 *                   totalPoints: 38.67791842475387
 *                 - type: ice
 *                   totalPoints: 99.99999999999997
 *                 - type: dragon
 *                   totalPoints: 58.368495077355846
 *                 - type: flying
 *                   totalPoints: 61.44792360648455
 *                 - type: steel
 *                   totalPoints: 33.05203938115329
 */
pokemonScaledMeanDataAuthRouter.get(
  '/pokemonScaledMeanData/total',
  async (req, res, next) => {
    try {
      //pokemon 정보 가져오기
      const pokemons =
        await PokemonScaledMeanDataAuthService.getAveragesTotal();

      if (pokemons.errorMessage) {
        throw new Error(pokemons.errorMessage);
      }

      res.status(200).json(pokemons);
    } catch (error) {
      next(error);
    }
  }
);

export { pokemonScaledMeanDataAuthRouter };
