import React, { useEffect, useState } from 'react';
import { useMediaQuery } from '@material-ui/core';

import QuizEntry from './components/QuizEntry';
import QuizComponent from './components/QuizComponent';

import * as Api from '../../api';

function QuizPage() {
  const [isEntry, setIsEntry] = useState(true);
  const [isQuizEx1, setIsQuizEx1] = useState(false);
  const [isQuizEx2, setIsQuizEx2] = useState(false);
  const [isQuizEx3, setIsQuizEx3] = useState(false);
  const [isQuizEx4, setIsQuizEx4] = useState(false);
  const [isQuizEx5, setIsQuizEx5] = useState(false);
  const [isQuizStart, setIsQuizStart] = useState(false);
  const [isQuizIng, setIsQuizIng] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isInCorrect, setIsInCorrect] = useState(false);
  const [isContinue, setIsContinue] = useState(false);
  const [chance, setChance] = useState(3);
  const [pokemonName, setPokemonName] = useState();
  const [pokemonId, setPokemonId] = useState();
  const [isNoChance, setIsNoChance] = useState(false);
  const [pokemonImg, setPokemonImg] = useState();

  const isMobile = useMediaQuery('(max-width: 900px)');

  const fetchUserInfo = async () => {
    try {
      const res = await Api.get('quiz');
      setChance(res.data.reminingChance);
      setPokemonName(res.data.quiz.name);
      setPokemonId(res.data.quiz.id);
      setPokemonImg(
        `https://d31z0g5vo6ghmg.cloudfront.net/pokemons/${res.data.quiz.id}.png`
      );
    } catch (err) {
      setIsQuizStart(false);
      setIsNoChance(true);
    }
  };

  useEffect(() => {
    if (isQuizStart) {
      fetchUserInfo();
    }
  }, [isQuizStart]);

  return (
    <div style={{ paddingTop: '170px' }}>
      {!isMobile && isEntry && (
        <QuizEntry setIsEntry={setIsEntry} setIsQuizEx1={setIsQuizEx1} />
      )}
      {!isMobile && isQuizEx1 && (
        <QuizComponent
          set1={setIsQuizEx1}
          set2={setIsQuizEx2}
          text={[
            '포켓몬 퀴즈에 온 걸 환영한다!',
            <br />,
            '여기엔 151마리의 포켓몬이 있단다.',
          ]}
        />
      )}
      {!isMobile && isQuizEx2 && (
        <QuizComponent
          set1={setIsQuizEx2}
          set2={setIsQuizEx3}
          text={[
            '포켓몬의 실루엣을 보여줄테니',
            <br />,
            '잘 보고 어떤 포켓몬인지 맞추면 된단다.',
          ]}
        />
      )}
      {!isMobile && isQuizEx3 && (
        <QuizComponent
          set1={setIsQuizEx3}
          set2={setIsQuizEx4}
          text={['정답을 맞추면 500포인트를 받을 수 있지.']}
        />
      )}
      {!isMobile && isQuizEx4 && (
        <QuizComponent
          set1={setIsQuizEx4}
          set2={setIsQuizEx5}
          text={['기회는 3번!', <br />, '어려우면 힌트를 받거나 패스를 하렴.']}
        />
      )}
      {!isMobile && isQuizEx5 && (
        <QuizComponent
          set1={setIsQuizEx5}
          set2={setIsQuizStart}
          text='자, 그럼 시작한다!'
        />
      )}
      {!isMobile && isQuizStart && (
        <QuizComponent
          chance={chance}
          img='https://d31z0g5vo6ghmg.cloudfront.net/pokemons/pokeball.png'
          set1={setIsQuizStart}
          set2={setIsQuizIng}
          text='야생의 포켓몬이 나타났다!'
          isQuiz
        />
      )}
      {!isMobile && isQuizIng && (
        <QuizComponent
          pokemonId={pokemonId}
          pokemonName={pokemonName}
          img={pokemonImg}
          chance={chance}
          isQuiz
          isQuizIng
          setIsQuizIng={setIsQuizIng}
          setIsEntry={setIsEntry}
          setIsQuizStart={setIsQuizStart}
          setIsCorrect={setIsCorrect}
          setIsInCorrect={setIsInCorrect}
        />
      )}
      {!isMobile && isNoChance && (
        <QuizComponent
          set1={setIsNoChance}
          set2={setIsEntry}
          text={[
            '기회를 모두 다 썼구나!',
            <br />,
            '퀴즈는 하루에 3번만 도전 가능한단다.',
          ]}
        />
      )}
      {!isMobile && isCorrect && (
        <QuizComponent
          img={pokemonImg}
          set1={setIsCorrect}
          set2={setIsContinue}
          text={[
            '정답! 500포인트 획득!',
            <br />,
            `이 포켓몬은 ${pokemonName}!`,
          ]}
        />
      )}
      {!isMobile && isInCorrect && (
        <QuizComponent
          img={pokemonImg}
          set1={setIsInCorrect}
          set2={setIsContinue}
          text={['오답...!', <br />, `정답은 ${pokemonName}!`]}
        />
      )}
      {!isMobile && isContinue && (
        <QuizComponent
          isQuiz
          isContinue
          chance={chance}
          setIsEntry={setIsEntry}
          setIsContinue={setIsContinue}
          setIsQuizStart={setIsQuizStart}
          text='퀴즈를 계속 진행하겠니?'
        />
      )}
      {isMobile && <QuizComponent isMobile text='퀴즈는 pc에서!' />}
    </div>
  );
}

export default QuizPage;
