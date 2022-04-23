import { Router } from "express";
import { login_required } from "../middlewares/login_required";
import { PokemonAuthService } from "../services/pokemonService";

const pokemonAuthRouter = Router();
pokemonAuthRouter.use(login_required);

pokemonAuthRouter.get("/pokemon/:id", async (req, res, next) => {
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

pokemonAuthRouter.get("/pokemon/:id/name", async (req, res, next) => {
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

export { pokemonAuthRouter };
