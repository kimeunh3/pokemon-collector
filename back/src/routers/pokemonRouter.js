import { Router } from 'express';
import { loginRequired } from '../middlewares/loginRequired';
import { PokemonAuthService } from '../services/pokemonService';
import { achievementsService } from '../services/achievementsService';
import { rankService } from '../services/rankService';

const pokemonAuthRouter = Router();
pokemonAuthRouter.use(loginRequired);

/**
 * @swagger
 * paths:
 *   /pokemon/{id}:
 *    get:
 *      summary: 포켓몬 모든 정보 반환
 *      description: >
 *        포켓몬의 id를 params로 받아 해당 포켓몬의 정보를 반환
 *      tags: [pokemon]
 *      security:
 *        - Authorization: []
 *      parameters:
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
 *      responses:
 *        '200':
 *          description: 포켓몬 정보 요청 정상 처리
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  _id:
 *                    type: string
 *                  id:
 *                    type: number
 *                  name:
 *                    type: string
 *                  status:
 *                    type: string
 *                  typeOne:
 *                    type: string
 *                  typeTwo:
 *                    type: string
 *                  height:
 *                    type: number
 *                  weight:
 *                    type: number
 *                  totalPoints:
 *                    type: number
 *                  hp:
 *                    type: number
 *                  attack:
 *                    type: number
 *                  defense:
 *                    type: number
 *                  spAttack:
 *                    type: number
 *                  spDefense:
 *                    type: number
 *                  speed:
 *                    type: number
 *              example:
 *                _id: 626407bd961c4243634ea1e8,
 *                id: 2
 *                name: 이상해풀
 *                status: 노말
 *                typeOne: 풀
 *                typeTwo: 독
 *                height: 1
 *                weight: 13
 *                totalPoints: 405
 *                hp: 60
 *                attack: 62
 *                defense: 63
 *                spAttack: 80
 *                spDefense: 80
 *                speed: 60
 *        '400':
 *          description: 요청이 잘못 됨
 */
pokemonAuthRouter.get('/pokemon/:id', async (req, res, next) => {
  try {
    //:id 값 가져오기
    const id = Number(req.params.id);
    //pokemon 정보 가져오기
    const pokemon = await PokemonAuthService.getPokemon({
      id,
    });

    if (pokemon.errorMessage) {
      throw new Error(pokemon.errorMessage);
    }

    res.status(200).json(pokemon);
  } catch (error) {
    next(error);
  }
});

/**
 * @swagger
 * /pokemon/{id}/name:
 *  get:
 *    summary: 포켓몬 id, 이름 반환
 *    description: >
 *      포켓몬의 id를 params로 받아 해당 포켓몬의 id와 이름(name)을 반환
 *    tags: [pokemon]
 *    security:
 *      - Authorization: []
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: number
 *          maximum: 151
 *          examples:
 *            zero:
 *              value: 0
 *            max:
 *              value: 151
 *        style: matrix
 *    responses:
 *      '200':
 *        description: 포켓몬 id, name 요청 정상 처리
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                id:
 *                  type: number
 *                name:
 *                  type: string
 *            example:
 *              id: 2
 *              name: 이상해풀
 *      '400':
 *        description: 요청이 잘못 됨
 */
pokemonAuthRouter.get('/pokemon/:id/name', async (req, res, next) => {
  try {
    //:id 값 가져오기
    const id = Number(req.params.id);

    //pokemon 이름 가져오기
    const pokemonName = await PokemonAuthService.getPokemonName({
      id,
    });

    if (pokemonName.errorMessage) {
      throw new Error(pokemonName.errorMessage);
    }

    res.status(200).json(pokemonName);
  } catch (error) {
    next(error);
  }
});

/**
 * @swagger
 * /pokemonList:
 *  get:
 *    summary: 모든 포켓몬의 정보를 리스트로 반환
 *    description: >
 *      각각 포켓몬의 모든 정보를 담은 object들을 array에 담아 모든 포켓만을 반환
 *    tags: [pokemon]
 *    security:
 *      - Authorization: []
 *    responses:
 *      '200':
 *        description: 포켓몬들 정보 요청 정상 처리
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  _id:
 *                    type: string
 *                  id:
 *                    type: number
 *                  name:
 *                    type: string
 *                  status:
 *                    type: string
 *                  typeOne:
 *                   type: string
 *                  typeTwo:
 *                    type: string
 *                  height:
 *                    type: number
 *                  weight:
 *                    type: number
 *                  totalPoints:
 *                    type: number
 *                  hp:
 *                    type: number
 *                  attack:
 *                    type: number
 *                  defense:
 *                    type: number
 *                  spAttack:
 *                   type: number
 *                  spDefense:
 *                    type: number
 *                  speed:
 *                    type: number
 *              example:
 *                - _id: 626407bd961c4243634ea1e7
 *                  id: 1
 *                  name: 이상해씨
 *                  status: 노말
 *                  typeOne: 풀
 *                  typeTwo: 독
 *                  height: 0.7
 *                  weight: 6.9
 *                  totalPoints: 318
 *                  hp: 45
 *                  attack: 49
 *                  defense: 49
 *                  spAttack: 65
 *                  spDefense: 65
 *                  speed: 45
 *                - _id: 626407bd961c4243634ea1e8,
 *                  id: 2
 *                  name: 이상해풀
 *                  status: 노말
 *                  typeOne: 풀
 *                  typeTwo: 독
 *                  height: 1
 *                  weight: 13
 *                  totalPoints: 405
 *                  hp: 60
 *                  attack: 62
 *                  defense: 63
 *                  spAttack: 80
 *                  spDefense: 80
 *                  speed: 60
 *                - _id: 626407bd961c4243634ea1e9
 *                  id: 3
 *                  name: 이상해꽃
 *                  status: 노말
 *                  typeOne: 풀
 *                  typeTwo: 독
 *                  height: 2
 *                  weight: 100
 *                  totalPoints: 525
 *                  hp: 80
 *                  attack: 82
 *                  defense: 83
 *                  spAttack: 100
 *                  spDefense: 100
 *                  speed: 80
 *                - _id: 626407bd961c4243634ea1ea,
 *                  id: 4
 *                  name: 파이리
 *                  status: 노말
 *                  typeOne: 불꽃
 *                  typeTwo: 없음
 *                  height: 0.6
 *                  weight: 8.5
 *                  totalPoints: 309
 *                  hp: 39
 *                  attack: 52
 *                  defense: 43
 *                  spAttack: 60
 *                  spDefense: 50
 *                  speed: 65
 *      '400':
 *        description: 요청이 잘못 됨
 */
pokemonAuthRouter.get('/pokemonList', async (req, res, next) => {
  try {
    const pokemons = await PokemonAuthService.getAllPokemons();
    res.status(200).json(pokemons);
  } catch (error) {
    next(error);
  }
});

/**
 * @swagger
 * /pokemonList/{type}:
 *  get:
 *    summary: 특정 속성 포켓몬의 정보를 리스트로 반환
 *    description: >
 *      각각 포켓몬의 모든 정보를 담은 object들을 array에 담아 특정 속성의 포켓만을 반환.<br>
 *      typeOne, typeTwo 둘 중 하나라도 params type과 일치하면 반환
 *    tags: [pokemon]
 *    security:
 *      - Authorization: []
 *    parameters:
 *      - in: path
 *        name: type
 *        required: true
 *        schema:
 *          type: string
 *          enum: [풀, 불꽃, 물, 벌레, 노말, 독, 전기, 땅, 페어리,
 *            격투, 에스퍼, 바위, 고스트, 얼음, 드래곤, 비행, 강철]
 *        style: matrix
 *    responses:
 *      '200':
 *        description: 포켓몬들 정보 요청 정상 처리
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  _id:
 *                    type: string
 *                  id:
 *                    type: number
 *                  name:
 *                    type: string
 *                  status:
 *                    type: string
 *                  typeOne:
 *                   type: string
 *                  typeTwo:
 *                    type: string
 *                  height:
 *                    type: number
 *                  weight:
 *                    type: number
 *                  totalPoints:
 *                    type: number
 *                  hp:
 *                    type: number
 *                  attack:
 *                    type: number
 *                  defense:
 *                    type: number
 *                  spAttack:
 *                   type: number
 *                  spDefense:
 *                    type: number
 *                  speed:
 *                    type: number
 *              example:
 *                - typeTwo: 없음
 *                  _id: 626407bd961c4243634ea1ff
 *                  id: 25
 *                  name: 피카츄
 *                  status: 노말
 *                  typeOne: 전기
 *                  height: 0.4
 *                  weight: 6
 *                  totalPoints: 320
 *                  hp: 35
 *                  attack: 55
 *                  defense: 40
 *                  spAttack: 50
 *                  spDefense: 50
 *                  speed: 90
 *                - typeTwo: 없음
 *                  _id: 626407bd961c4243634ea24b
 *                  id: 101
 *                  name: 붐볼
 *                  status: 노말
 *                  typeOne: 전기
 *                  height: 1.2
 *                  weight: 66.6
 *                  totalPoints: 490
 *                  hp: 60
 *                  attack: 50
 *                  defense: 70
 *                  spAttack: 80
 *                  spDefense: 80
 *                  speed: 150
 *                - _id: 626407bd961c4243634ea238
 *                  id: 82
 *                  name: 레어코일
 *                  status: 노말
 *                  typeOne: 전기
 *                  typeTwo: 강철
 *                  height: 1
 *                  weight: 60
 *                  totalPoints: 465
 *                  hp: 50
 *                  attack: 60
 *                  defense: 95
 *                  spAttack: 120
 *                  spDefense: 70
 *                  speed: 70
 *      '400':
 *        description: 요청이 잘못 됨
 */
pokemonAuthRouter.get('/pokemonList/:type', async (req, res, next) => {
  try {
    const type = req.params.type;
    const pokemons = await PokemonAuthService.getPokemons({ type });

    if (pokemons.errorMessage) {
      throw new Error(pokemons.errorMessage);
    }

    res.status(200).json(pokemons);
  } catch (error) {
    next(error);
  }
});

/**
 * @swagger
 * /drawPokemon:
 *  get:
 *    summary: 포켓몬 스티커 뽑기
 *    description: 포켓몬 스티커를 등급에 따라 확률적으로 뽑아주고 업적 및 랭크를 갱신
 *    tags: [pokemon]
 *    security:
 *      - Authorization: []
 *    responses:
 *      '200':
 *        description: >
 *          포켓몬 스티커 뽑기 및 업적•랭크 포인트 갱신 완료.<br>
 *          뽑힌 포켓몬의 정보와 유저 잔여 포인트, 랭킹 포인트를 함께 반환.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                id:
 *                  type: number
 *                name:
 *                  type: string
 *                pokemonStatus:
 *                  type: string
 *                pokemonTotalPoint:
 *                  type: number
 *                status:
 *                  type: boolean
 *                  description: 성공 여부
 *                userPoint:
 *                  type: number
 *                PankingPoint:
 *                  type: number
 *            example:
 *              id: 132
 *              name: 메타몽
 *              pokemonStatus: 노말
 *              pokemonTotalPoint: 288
 *              status: true
 *              userPoint: 4500
 *              RankingPoint: 656.5
 *      '400':
 *        description: 요청이 잘못 됨
 */
pokemonAuthRouter.get('/drawPokemon', async (req, res, next) => {
  try {
    // header에서 user id 받아오기
    const userId = req.currentUserId;
    //pokemon 이름 가져오기
    let drawResult = await PokemonAuthService.getDrewResult({ userId });
    if (drawResult.errorMessage) {
      throw new Error(drawResult.errorMessage);
    }

    if (drawResult.status) {
      // 업적 업데이트
      const succeeded = await achievementsService.updateAchievements({
        userId,
        pokemonId: drawResult.id,
      });
      // 랭킹 포인트 업데이트
      const rankingPoint = await rankService.updateRankingPoint({
        userId,
        pokemonId: drawResult.id,
        pokemonStatus: drawResult.pokemonStatus,
        pokemonTotalPoint: drawResult.pokemonTotalPoint,
        succeeded,
      });
      drawResult.RankingPoint = rankingPoint;
    }

    res.status(200).json(drawResult);
  } catch (error) {
    next(error);
  }
});

export { pokemonAuthRouter };
