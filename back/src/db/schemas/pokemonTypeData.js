import { Schema, model } from 'mongoose';
import mongoose from 'mongoose';

const PokemonTypeDataSchema = new Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    typeOne: {
      type: String,
      enum: [
        '풀',
        '불꽃',
        '물',
        '벌레',
        '노말',
        '독',
        '전기',
        '땅',
        '페어리',
        '격투',
        '에스퍼',
        '바위',
        '고스트',
        '얼음',
        '드래곤',
        '비행',
        '강철',
      ],
      required: true,
    },
    typeTwo: {
      type: String,
      enum: [
        '풀',
        '불꽃',
        '물',
        '벌레',
        '노말',
        '독',
        '전기',
        '땅',
        '페어리',
        '격투',
        '에스퍼',
        '바위',
        '고스트',
        '얼음',
        '드래곤',
        '비행',
        '강철',
      ],
      required: false,
      default: '없음',
    },
    height: {
      type: Number,
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
    totalPoints: {
      type: Number,
      required: true,
    },
    hp: {
      type: Number,
      required: true,
    },
    attack: {
      type: Number,
      required: true,
    },
    defense: {
      type: Number,
      required: true,
    },
    spAttack: {
      type: Number,
      required: true,
    },
    spDefense: {
      type: Number,
      required: true,
    },
    speed: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const PokemonGrassDataModel = model('PokemonGrass', PokemonTypeDataSchema);
const PokemonFireDataModel = model('PokemonFire', PokemonTypeDataSchema);
const PokemonWaterDataModel = model('PokemonWater', PokemonTypeDataSchema);
const PokemonBugDataModel = model('PokemonBug', PokemonTypeDataSchema);
const PokemonNormalDataModel = model('PokemonNormal', PokemonTypeDataSchema);
const PokemonPoisonDataModel = model('PokemonPoison', PokemonTypeDataSchema);
const PokemonElectricDataModel = model(
  'PokemonElectric',
  PokemonTypeDataSchema
);
const PokemonGroundDataModel = model('PokemonGround', PokemonTypeDataSchema);
const PokemonFairyDataModel = model('PokemonFairy', PokemonTypeDataSchema);
const PokemonFightDataModel = model('PokemonFight', PokemonTypeDataSchema);
const PokemonPsychicDataModel = model('PokemonPsychic', PokemonTypeDataSchema);
const PokemonRockDataModel = model('PokemonRock', PokemonTypeDataSchema);
const PokemonGhostDataModel = model('PokemonGhost', PokemonTypeDataSchema);
const PokemonIceDataModel = model('PokemonIce', PokemonTypeDataSchema);
const PokemonDragonDataModel = model('PokemonDragon', PokemonTypeDataSchema);
const PokemonFlyingDataModel = model('PokemonFlying', PokemonTypeDataSchema);
const PokemonSteelDataModel = model('PokemonSteel', PokemonTypeDataSchema);

export {
  PokemonGrassDataModel,
  PokemonFireDataModel,
  PokemonWaterDataModel,
  PokemonBugDataModel,
  PokemonNormalDataModel,
  PokemonPoisonDataModel,
  PokemonElectricDataModel,
  PokemonGroundDataModel,
  PokemonFairyDataModel,
  PokemonFightDataModel,
  PokemonPsychicDataModel,
  PokemonRockDataModel,
  PokemonGhostDataModel,
  PokemonIceDataModel,
  PokemonDragonDataModel,
  PokemonFlyingDataModel,
  PokemonSteelDataModel,
};
