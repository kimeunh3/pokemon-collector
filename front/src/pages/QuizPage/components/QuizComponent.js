import React, { useState, useEffect } from 'react';
import {
  Card,
  CardMedia,
  IconButton,
  Typography,
  DialogActions,
  DialogContent,
  Button,
  Dialog,
  DialogTitle,
} from '@mui/material';
import { ArrowDropDown, HelpOutlineOutlined } from '@mui/icons-material';

import {
  QuizText,
  QuizSelect,
  QuizAnswerSubmit,
  QuizYesOrNo,
} from './QuizItems/QuizItems';
import './QuizComponent.css';

import * as Api from '../../../api';

function QuizComponent({
  pokemonId,
  pokemonName,
  chance,
  set1,
  set2,
  text,
  img = '/images/quizImg1.jpg',
  isQuiz = false,
  isQuizIng = false,
  setIsQuizIng,
  setIsEntry,
  setIsQuizStart,
  setIsCorrect,
  setIsInCorrect,
  isContinue,
  setIsContinue,
  isMobile,
}) {
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isAnswer, setIsAnswer] = useState(false);
  const [isHint, setIsHint] = useState(false);
  const [isPass, setIsPass] = useState(false);
  const [isStop, setIsStop] = useState(false);
  const [pokemonType, setPokemonType] = useState();
  const [pokemonNameNum, setPokemonNameNum] = useState();
  const [useAnswer, setUserAnswer] = useState();

  useEffect(() => {
    if (isHint) {
      Api.get(`pokemon/${pokemonId}`).then((res) => {
        setPokemonType(res.data.typeOne);
        setPokemonNameNum(pokemonName.length);
      });
    }
  }, [isHint]);

  const handleHelpClose = () => {
    setIsHelpOpen(false);
  };
  const handleHintClose = () => {
    setIsHint(false);
  };

  const checkAnswer = () => {
    if (pokemonName === useAnswer) {
      Api.get('succeedQuiz');
      setIsQuizIng(false);
      setIsCorrect(true);
    } else {
      setIsQuizIng(false);
      setIsInCorrect(true);
    }
  };

  const onClickYesPass = () => {
    setIsQuizIng(false);
    setIsQuizStart(true);
    setIsPass(false);
  };
  const onClickNoPass = () => {
    setIsPass(false);
  };

  const onClickYesStop = () => {
    setIsQuizIng(false);
    setIsEntry(true);
    setIsStop(false);
  };
  const onClickNoStop = () => {
    setIsStop(false);
  };

  const onClickYesContinue = () => {
    setIsContinue(false);
    setIsQuizStart(true);
  };
  const onClickNoContinue = () => {
    setIsContinue(false);
    setIsEntry(true);
  };

  console.log(pokemonName);

  return (
    <Card
      sx={{
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '60%',
        height: '70%',
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'spaceBetween',
        overflow: 'inherit',
      }}
    >
      <CardMedia
        component='img'
        image={img}
        alt='퀴즈이미지'
        sx={{
          width: '35%',
          maxWidth: '450px',
          minWidth: '200px',
          marginLeft: '50%',
          marginTop: '10px',
          transform: 'translateX(-50%)',
        }}
      />
      {!isQuizIng && <QuizText text={text} />}
      {isQuizIng && !isAnswer && !isPass && !isStop && (
        <QuizSelect
          setIsAnswer={setIsAnswer}
          setIsHint={setIsHint}
          setIsPass={setIsPass}
          setIsStop={setIsStop}
        />
      )}
      {isAnswer && (
        <QuizAnswerSubmit
          setUserAnswer={setUserAnswer}
          checkAnswer={checkAnswer}
          setIsAnswer={setIsAnswer}
        />
      )}
      {isPass && <QuizText text='패스하겠습니까?' />}
      {isPass && (
        <QuizYesOrNo onClickYes={onClickYesPass} onClickNo={onClickNoPass} />
      )}
      {isStop && <QuizText text='퀴즈를 그만두겠습니까?' />}
      {isStop && (
        <QuizYesOrNo onClickYes={onClickYesStop} onClickNo={onClickNoStop} />
      )}
      {isContinue && (
        <QuizYesOrNo
          onClickYes={onClickYesContinue}
          onClickNo={onClickNoContinue}
        />
      )}
      {!isQuizIng && !isContinue && !isMobile && (
        <IconButton
          onClick={() => {
            set1(false);
            set2(true);
          }}
          sx={{
            position: 'absolute',
            bottom: '20px',
            right: '20px',
          }}
        >
          <ArrowDropDown style={{ fontSize: '50px', color: 'black' }} />
        </IconButton>
      )}
      {isQuiz && (
        <img
          src='https://d31z0g5vo6ghmg.cloudfront.net/front/pokeball.ico'
          alt='남은기회'
          style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            width: '30px',
          }}
        />
      )}
      {isQuiz && (
        <div
          style={{
            position: 'absolute',
            top: '16px',
            left: '60px',
            fontSize: '24px',
          }}
        >
          X {chance}
        </div>
      )}
      {isQuiz && (
        <IconButton
          onClick={() => {
            setIsHelpOpen(true);
          }}
          sx={{
            position: 'absolute',
            top: '5px',
            right: '15px',
          }}
        >
          <HelpOutlineOutlined style={{ fontSize: '40px', color: 'black' }} />
        </IconButton>
      )}
      <Dialog
        open={isHelpOpen}
        onClose={handleHelpClose}
        style={{ zIndex: '10000' }}
      >
        <DialogTitle>포켓몬 퀴즈 설명</DialogTitle>
        <DialogContent>
          포켓몬 퀴즈는 포켓몬의 실루엣 이미지를 보고 해당하는 포켓몬의 이름을
          맞추는 게임입니다.
          <br />
          하루에 총 3번의 기회가 주어지며, 정답을 맞추면 500포인트가 지급됩니다.
          <br />
          게임을 시작하면 랜덤 포켓몬의 실루엣 이미지가 나타나고
          <br />
          정답을 맞추거나, 힌트를 받거나, 패스를 하거나, 그만둘 수 있습니다.
          <br />
          왼쪽 위의 숫자는 현재 기회를 제외한 남은 기회를 나타내며,
          <br />
          힌트는 포켓몬 이름의 글자수와 포켓몬의 속성으로 제공되고,
          <br />
          패스를 선택하면 1번의 기회를 포기하고 다른 문제로 넘어갑니다.
          <br />
          게임을 도중에 그만두더라도 남은 기회가 있다면 언제든지 재도전하실 수
          있습니다.
        </DialogContent>
        <DialogActions>
          <Button variant='contained' color='inherit' onClick={handleHelpClose}>
            닫기
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={isHint}
        onClose={handleHintClose}
        style={{ zIndex: '10000' }}
      >
        <DialogTitle>힌트</DialogTitle>
        <DialogContent style={{ textAlign: 'center' }}>
          <img
            alt='오박사'
            src='/images/quizImg1.jpg'
            style={{ maxWidth: '400px' }}
          />
          <Typography variant='h5'>
            이 포켓몬은 {pokemonNameNum}글자의 {pokemonType} 포켓몬이란다!
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button variant='contained' color='inherit' onClick={handleHintClose}>
            닫기
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
}

export default QuizComponent;
