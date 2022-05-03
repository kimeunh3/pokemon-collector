import { Schema, model } from 'mongoose';
import mongoose from 'mongoose';

const PokemonSchema = new Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['노말', '전설', '환상'],
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

const PokemonModel = model('Pokemon', PokemonSchema);

export { PokemonModel };
