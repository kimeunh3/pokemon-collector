import { AchievementsModel } from "../schemas/achievements";

class Achievements {
  static async findAll(){
    return AchievementsModel.find({})
  }
  
  static async findAchievementsByType({type}){
    const achievements = await AchievementsModel.find({type})
    return achievements
  }
}

export { Achievements };
