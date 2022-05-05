import { Router } from 'express';
import { loginRequired } from '../middlewares/loginRequired';
import { PokemonScaledMeanDataAuthService } from '../services/pokemonScaledMeanDataService';

const pokemonScaledMeanDataAuthRouter = Router();

pokemonScaledMeanDataAuthRouter.use(loginRequired);

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
