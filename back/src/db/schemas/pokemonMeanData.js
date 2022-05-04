import { Schema, model } from 'mongoose';
import mongoose from 'mongoose';

const PokemonMeanDataSchema = new Schema(
  {
    group: {
      type: String,
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

const PokemonMeanDataModel = model('PokemonMeanData', PokemonMeanDataSchema);
const PokemonScaledMeanDataModel = model(
  'PokemonScaledMeanData',
  PokemonMeanDataSchema
);

export { PokemonMeanDataModel, PokemonScaledMeanDataModel };
