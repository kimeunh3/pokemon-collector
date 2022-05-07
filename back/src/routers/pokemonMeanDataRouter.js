import { Router } from 'express';
import { loginRequired } from '../middlewares/loginRequired';
import { PokemonMeanDataAuthService } from '../services/pokemonMeanDataService';

const pokemonMeanDataAuthRouter = Router();
pokemonMeanDataAuthRouter.use(loginRequired);

/**
 * @swagger
 * paths:
 *   /pokemonMeanData/{group}:
 *     get:
 *       tags:
 *       - pokemonMeanData
 *       security:
 *         - Authorization: []
 *       summary: 속성 별 또는 전체 평균 데이터
 *       description: 속성 별 또는 전체 평균 데이터를 가져오는 API
 *       parameters:
 *        - in: path
 *          name: group
 *          required: true
 *          type: string
 *          schema:
 *            type: string
 *            enum: [all, grass, fire, water, bug, normal, poison, electric, ground, fairy,
 *              fight, psychic, rock, ghost, ice, dragon, flying, steel]
 *          style: matrix
 *       responses:
 *         '200':
 *           description: 속성 별 또는 전체 평균 데이터 정보를 불러옴
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                   group:
 *                     type: string
 *                   height:
 *                     type: number
 *                   weight:
 *                     type: number
 *                   totalPoints:
 *                     type: number
 *                   hp:
 *                     type: number
 *                   attack:
 *                     type: number
 *                   defense:
 *                     type: number
 *                   spAttack:
 *                     type: number
 *                   spDefense:
 *                     type: number
 *                   speed:
 *                     type: number
 *               example:
 *                 _id: 627132ce0455dcafe79e64d5
 *                 group: all
 *                 height: 1.1947019867549677
 *                 weight: 45.95165562913907
 *                 totalPoints: 407.6423841059603
 *                 hp: 64.21192052980132
 *                 attack: 72.91390728476821
 *                 defense: 68.2251655629139
 *                 spAttack: 67.13907284768212
 *                 spDefense: 66.08609271523179
 *                 speed: 69.06622516556291
 */
pokemonMeanDataAuthRouter.get(
  '/pokemonMeanData/:group',
  async (req, res, next) => {
    try {
      //:group 값 가져오기
      const group = req.params.group;

      //pokemon average 정보 가져오기
      const pokemon = await PokemonMeanDataAuthService.getAverage({
        group,
      });

      if (pokemon.errorMessage) {
        throw new Error(pokemon.errorMessage);
      }

      res.status(200).json(pokemon);
    } catch (error) {
      next(error);
    }
  }
);

/**
 * @swagger
 * paths:
 *   /pokemonMeanData:
 *     get:
 *       tags:
 *       - pokemonMeanData
 *       security:
 *         - Authorization: []
 *       summary: 속성 별, 전체 평균 데이터
 *       description: 속성 별, 전체 평균 데이터를 모두 가져오는 API
 *       responses:
 *         '200':
 *           description: 속성 별, 전체 평균 데이터 정보를 불러옴
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
 *                 - _id: 627132ce0455dcafe79e64d5
 *                   group: all
 *                   height: 1.1947019867549677
 *                   weight: 45.95165562913907
 *                   totalPoints: 407.6423841059603
 *                   hp: 64.21192052980132
 *                   attack: 72.91390728476821
 *                   defense: 68.2251655629139
 *                   spAttack: 67.13907284768212
 *                   spDefense: 66.08609271523179
 *                   speed: 69.06622516556291
 *                 - _id: 627132ce0455dcafe79e64d6
 *                   group: grass
 *                   height: 1.0214285714285716
 *                   weight: 26.485714285714284
 *                   totalPoints: 400.92857142857144
 *                   hp: 62.5
 *                   attack: 72.35714285714286
 *                   defense: 69.28571428571429
 *                   spAttack: 82.85714285714286
 *                   spDefense: 65.35714285714286
 *                   speed: 48.57142857142857
 *                 - _id: 627132ce0455dcafe79e64d7
 *                   group: fire
 *                   height: 1.2166666666666666
 *                   weight: 48.025
 *                   totalPoints: 455.5833333333333
 *                   hp: 63.833333333333336
 *                   attack: 83.91666666666667
 *                   defense: 62.583333333333336
 *                   spAttack: 84.58333333333333
 *                   spDefense: 76.66666666666667
 *                   speed: 84
 */
pokemonMeanDataAuthRouter.get('/pokemonMeanData', async (req, res, next) => {
  try {
    //pokemon average 정보 가져오기
    const pokemons = await PokemonMeanDataAuthService.getAverages();

    if (pokemons.errorMessage) {
      throw new Error(pokemons.errorMessage);
    }

    res.status(200).json(pokemons);
  } catch (error) {
    next(error);
  }
});

export { pokemonMeanDataAuthRouter };
