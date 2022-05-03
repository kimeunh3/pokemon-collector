import cors from 'cors';
import express from 'express';
import { errorMiddleware } from './middlewares/errorMiddleware';
import { userAuthRouter } from './routers/userRouter';
import { pokemonAuthRouter } from './routers/pokemonRouter';
import { pokemonRadarChartDataAuthRouter } from './routers/pokemonRadarChartDataRouter';
import { achievementsRouter } from './routers/achievementsRouter';
import { quizRouter } from './routers/quizRouter';
import { rankRouter } from './routers/rankRouter';
import {
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
} from './routers/pokemonTypeDataRouter';
import { pokemonMeanDataAuthRouter } from './routers/pokemonMeanDataRouter';
import { pokemonScaledMeanDataAuthRouter } from './routers/pokemonScaledMeanDataRouter';

const { swaggerUi, specs } = require('./modules/swagger');
const app = express();

app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
);
// CORS 에러 방지
app.use(cors());

// express 기본 제공 middleware
// express.json(): POST 등의 요청과 함께 오는 json형태의 데이터를 인식하고 핸들링할 수 있게 함.
// express.urlencoded: 주로 Form submit 에 의해 만들어지는 URL-Encoded 형태의 데이터를 인식하고 핸들링할 수 있게 함.
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 기본 페이지
app.get('/', (req, res) => {
  res.send('안녕하세요, 레이서 프로젝트 API 입니다.');
});

// 순서 중요 (router 에서 next() 시 아래의 에러 핸들링  middleware로 전달됨)
app.use(userAuthRouter);
app.use(pokemonAuthRouter);
app.use(achievementsRouter);
app.use(pokemonRadarChartDataAuthRouter);
app.use(quizRouter);
app.use(rankRouter);
app.use(pokemonGrassDataAuthRouter);
app.use(pokemonFireDataAuthRouter);
app.use(pokemonWaterDataAuthRouter);
app.use(pokemonBugDataAuthRouter);
app.use(pokemonNormalDataAuthRouter);
app.use(pokemonPoisonDataAuthRouter);
app.use(pokemonElectricDataAuthRouter);
app.use(pokemonGroundDataAuthRouter);
app.use(pokemonFairyDataAuthRouter);
app.use(pokemonFightDataAuthRouter);
app.use(pokemonPsychicDataAuthRouter);
app.use(pokemonRockDataAuthRouter);
app.use(pokemonGhostDataAuthRouter);
app.use(pokemonIceDataAuthRouter);
app.use(pokemonDragonDataAuthRouter);
app.use(pokemonFlyingDataAuthRouter);
app.use(pokemonSteelDataAuthRouter);
app.use(pokemonMeanDataAuthRouter);
app.use(pokemonScaledMeanDataAuthRouter);
app.use(errorMiddleware);
// eslint-disable-next-line import/prefer-default-export
export { app };
