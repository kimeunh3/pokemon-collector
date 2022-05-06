import React, { useEffect, useState } from 'react';
import { useMediaQuery } from '@material-ui/core';

import QuizEntry from './components/QuizEntry';
import QuizComponent from './components/QuizComponent';
import ImgSrc, { pokemonURL } from '../../core/constants/ImgSrc';
import RankingButton from '../../components/commons/RankingButton';

import * as Api from '../../api';

function QuizPage() {
  const [stage, setStage] = useState('entry');
  // stage: entry, quizEx1~6, quizStart, quizIng, correct, firstCorrect, incorrect, firstIncorrect, retry, continue, noChance
  const [chance, setChance] = useState(3);
  const [pokemonName, setPokemonName] = useState();
  const [pokemonId, setPokemonId] = useState();
  const [pokemonImg, setPokemonImg] = useState();

  const isMobile = useMediaQuery('(max-width: 900px)');

  const fetchUserInfo = async () => {
    try {
      const res = await Api.get('quiz');
      setChance(res.data.reminingChance);
      setPokemonName(res.data.quiz.name);
      setPokemonId(res.data.quiz.id);
      setPokemonImg(`${pokemonURL}/${res.data.quiz.id}.png`);
    } catch (err) {
      setStage('noChance');
    }
  };

  useEffect(() => {
    if (stage === 'quizStart') {
      fetchUserInfo();
    }
  }, [stage]);

  return (
    <div style={{ marginTop: '25vh' }}>
      {!isMobile && stage === 'entry' && <QuizEntry setStage={setStage} />}
      {!isMobile && stage === 'quizEx1' && (
        <QuizComponent
          stage={stage}
          setStage={setStage}
          nextStage='quizEx2'
          text={[
            '포켓몬 퀴즈에 온 걸 환영한다!',
            <br />,
            '여기엔 151마리의 포켓몬이 있단다.',
          ]}
        />
      )}
      {!isMobile && stage === 'quizEx2' && (
        <QuizComponent
          stage={stage}
          setStage={setStage}
          nextStage='quizEx3'
          text={[
            '포켓몬의 실루엣을 보여줄테니',
            <br />,
            '잘 보고 어떤 포켓몬인지 맞추면 된단다.',
          ]}
        />
      )}
      {!isMobile && stage === 'quizEx3' && (
        <QuizComponent
          stage={stage}
          setStage={setStage}
          nextStage='quizEx4'
          text='정답을 맞추면 1000포인트를 받을 수 있지.'
        />
      )}
      {!isMobile && stage === 'quizEx4' && (
        <QuizComponent
          stage={stage}
          setStage={setStage}
          nextStage='quizEx5'
          text={[
            '틀리면 더 쉽게 문제를 내줄테니 걱정말거라.',
            <br />,
            '대신 맞춰도 500포인트를 얻는단다!',
          ]}
        />
      )}
      {!isMobile && stage === 'quizEx5' && (
        <QuizComponent
          stage={stage}
          setStage={setStage}
          nextStage='quizEx6'
          text={['기회는 3번!', <br />, '어려우면 힌트를 받거나 패스를 하렴.']}
        />
      )}
      {!isMobile && stage === 'quizEx6' && (
        <QuizComponent
          stage={stage}
          setStage={setStage}
          nextStage='quizStart'
          text='자, 그럼 시작한다!'
        />
      )}
      {!isMobile && stage === 'quizStart' && (
        <QuizComponent
          chance={chance}
          img={ImgSrc.pokeballImg}
          stage={stage}
          setStage={setStage}
          nextStage='quizIng'
          text='야생의 포켓몬이 나타났다!'
        />
      )}
      {!isMobile && (stage === 'quizIng' || stage === 'retry') && (
        <QuizComponent
          pokemonId={pokemonId}
          pokemonName={pokemonName}
          img={pokemonImg}
          chance={chance}
          stage={stage}
          setStage={setStage}
        />
      )}
      {!isMobile && stage === 'noChance' && (
        <QuizComponent
          stage={stage}
          setStage={setStage}
          nextStage='entry'
          text={[
            '기회를 모두 다 썼구나!',
            <br />,
            '퀴즈는 하루에 3번만 도전 가능한단다.',
          ]}
        />
      )}
      {!isMobile && stage === 'firstCorrect' && (
        <QuizComponent
          img={pokemonImg}
          stage={stage}
          setStage={setStage}
          nextStage='continue'
          text={[
            '정답! 1000포인트 획득!',
            <br />,
            `이 포켓몬은 ${pokemonName}!`,
          ]}
        />
      )}
      {!isMobile && stage === 'correct' && (
        <QuizComponent
          img={pokemonImg}
          stage={stage}
          setStage={setStage}
          nextStage='continue'
          text={[
            '정답! 500포인트 획득!',
            <br />,
            `이 포켓몬은 ${pokemonName}!`,
          ]}
        />
      )}
      {!isMobile && stage === 'firstIncorrect' && (
        <QuizComponent
          stage={stage}
          setStage={setStage}
          nextStage='retry'
          text={[
            '틀렸단다! 어려워 보이는구나.',
            <br />,
            `문제를 더 쉽게 내주마!`,
          ]}
        />
      )}
      {!isMobile && stage === 'incorrect' && (
        <QuizComponent
          img={pokemonImg}
          stage={stage}
          setStage={setStage}
          nextStage='continue'
          text={['오답...!', <br />, `정답은 ${pokemonName}!`]}
        />
      )}
      {!isMobile && stage === 'continue' && (
        <QuizComponent
          isQuiz
          chance={chance}
          stage={stage}
          setStage={setStage}
          text='퀴즈를 계속 진행하겠니?'
        />
      )}
      {isMobile && <QuizComponent isMobile text='퀴즈는 pc에서!' />}
      <RankingButton />
    </div>
  );
}

export default QuizPage;
