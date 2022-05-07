import { AchievementsModel } from '../schemas/achievements';

class Achievements {
  static async findAll() {
    return AchievementsModel.find({});
  }

  static async findAchievementsByType({ type }) {
    const achievements = await AchievementsModel.find({ type });
    return achievements;
  }

  static async create({ newAchievements }) {
    const createdNewAchievements = await AchievementsModel.create(
      newAchievements
    );
    return createdNewAchievements;
  }
}

export { Achievements };
