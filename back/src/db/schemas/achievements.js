import { Schema, model } from "mongoose";
import mongoose from "mongoose";

const AchievementsSchema = new Schema(
  {
    id:{
      type: Number,
      required: true
    },
    type:{
      type:String,
      required: true
    },
    name:{
      type:String,
      required: true
    },
    description:{
      type:String,
      required: true
    },
    condition:[Number],
  },
  {
    timestamps: true,
  }
);

const AchievementsModel = model("Achievements", AchievementsSchema);

export { AchievementsModel };
