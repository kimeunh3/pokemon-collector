import { Schema, model } from 'mongoose';
import mongoose from 'mongoose';

const PokemonRadarChartDataSchema = new Schema(
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

const PokemonRadarChartDataModel = model(
  'PokemonRadarChartData',
  PokemonRadarChartDataSchema
);

export { PokemonRadarChartDataModel };
