import { Router } from 'express';
import { loginRequired } from '../middlewares/loginRequired';
import { PokemonRadarChartDataAuthService } from '../services/pokemonRadarChartDataService';

const pokemonRadarChartDataAuthRouter = Router();
pokemonRadarChartDataAuthRouter.use(loginRequired);

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
