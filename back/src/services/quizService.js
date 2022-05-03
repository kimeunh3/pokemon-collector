import { Pokemon } from '../db';
import { User } from '../db';

class quizService {
  static async getQuiz({ userId }) {
    //남은 기회 확인
    const quizChance = await User.findQuizChanceById({ userId });
    if (quizChance <= 0) {
      const message = '기회 부족';
      return { message, quizChance };
    }
    //기회 차감
    const updatedQuizChance = await User.updateQuizChance({
      userId,
      newQuizChance: quizChance - 1,
    });
    if (!updatedQuizChance & (updatedQuizChance != 0)) {
      const errorMessage = 'quizChance update에 실패했습니다.';
      return { errorMessage };
    }
    // 랜덤으로 문제 생성
    const pokemonCount = await Pokemon.getPokemonCount();
    const randomPokemonId = Math.floor(Math.random() * pokemonCount) + 1;
    const quiz = await Pokemon.findNameById({ id: randomPokemonId });
    if (!randomPokemonId) {
      const errorMessage = 'quiz를 불러오는데 실패했습니다.';
      return { errorMessage };
    }

    return { quiz, reminingChance: updatedQuizChance };
  }

  static async addPoint({ userId, opportunity }) {
    const point = await User.findPointById({ userId });
    let toAdd = 0;
    if (opportunity == 'first') {
      toAdd = 1000;
    } else if (opportunity == 'second') {
      toAdd = 500;
    }
    const updatedPoint = await User.updatePoint({
      userId,
      changedPoint: point + toAdd,
    });
    if (!updatedPoint) {
      const errorMessage = 'point update에 실패했습니다.';
      return { errorMessage };
    }
    return { updatedPoint };
  }
}

export { quizService };
