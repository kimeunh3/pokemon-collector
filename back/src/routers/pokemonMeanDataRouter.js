import { Router } from 'express';
import { loginRequired } from '../middlewares/loginRequired';
import { PokemonMeanDataAuthService } from '../services/pokemonMeanDataService';

const pokemonMeanDataAuthRouter = Router();
pokemonMeanDataAuthRouter.use(loginRequired);

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
