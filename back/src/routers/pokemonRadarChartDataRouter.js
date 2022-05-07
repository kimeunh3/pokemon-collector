import { Router } from 'express';
import { loginRequired } from '../middlewares/loginRequired';
import { PokemonRadarChartDataAuthService } from '../services/pokemonRadarChartDataService';

const pokemonRadarChartDataAuthRouter = Router();
pokemonRadarChartDataAuthRouter.use(loginRequired);

/**
 * @swagger
 * paths:
 *   /pokemonData/{id}:
 *     get:
 *       tags:
 *       - pokemonRadarChartData
 *       security:
 *         - Authorization: []
 *       summary: 포켓몬 별 radar chart 데이터
 *       description: MinMaxScaling한 포켓몬 별 radar chart 데이터를 가져오는 API
 *       parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          type: number
 *          schema:
 *            type: number
 *            maximum: 151
 *            examples:
 *              zero:
 *                value: 0
 *              max:
 *                value: 151
 *          style: matrix
 *       responses:
 *         '200':
 *           description: 포켓몬 별 radar chart 데이터 정보를 불러옴
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                   id:
 *                     type: number
 *                   name:
 *                     type: string
 *                   typeOne:
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
 *                 _id: 626c9edeada3c0a90aa13508
 *                 id: 1
 *                 name: 이상해씨
 *                 typeOne: 풀
 *                 height: 5.813953488372092
 *                 weight: 1.4785823005001089
 *                 totalPoints: 25.360824742268036
 *                 hp: 14.583333333333332
 *                 attack: 34.10852713178295
 *                 defense: 25.142857142857142
 *                 spAttack: 35.97122302158273
 *                 spDefense: 42.85714285714285
 *                 speed: 22.222222222222218
 */
pokemonRadarChartDataAuthRouter.get(
  '/pokemonData/:id',
  async (req, res, next) => {
    try {
      //:id 값 가져오기
      const id = Number(req.params.id);

      //pokemon 정보 가져오기
      const pokemon = await PokemonRadarChartDataAuthService.getPokemon({
        id,
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

export { pokemonRadarChartDataAuthRouter };
