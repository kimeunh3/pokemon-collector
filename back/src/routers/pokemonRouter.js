import { Router } from "express";
import { login_required } from "../middlewares/login_required";
import { PokemonAuthService } from "../services/pokemonService";
import { achievementsService } from "../services/achievementsService";
import { rankService } from "../services/rankService";

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

pokemonAuthRouter.get("/pokemonList", async (req, res, next) => {
  try {
    const pokemons = await PokemonAuthService.getAllPokemons();
    res.status(200).json(pokemons);
  } catch (error) {
    next(error);
  }
});

pokemonAuthRouter.get("/pokemonList/:type", async (req, res, next) => {
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

pokemonAuthRouter.get("/drawPokemon", async (req, res, next) => {
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
      const succeeded = await achievementsService.updateAchievements({ userId, pokemonId: drawResult.id })
      // 랭킹 포인트 업데이트
      const rankingPoint = await rankService.updateRankingPoint({
        userId, pokemonId: drawResult.id,
        pokemonStatus: drawResult.pokemonStatus,
        succeeded
      })
      drawResult.RankingPoint = rankingPoint
    }

    res.status(200).json(drawResult);
  } catch (error) {
    next(error);
  }
});

export { pokemonAuthRouter };
