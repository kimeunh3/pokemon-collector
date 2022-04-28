import { AchievementsModel } from "../schemas/achievements";

class Achievements {
  static async findAll(){
    return AchievementsModel.find({})
  }
}

export { Achievements };
