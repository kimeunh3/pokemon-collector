import React from 'react';
import { Typography, CardContent, TextField } from '@mui/material';
import { ArrowRight } from '@mui/icons-material';

export function QuizText({ text }) {
  return (
    <CardContent
      sx={{
        border: '8px solid black',
        margin: 'auto 10px 10px 10px',
        borderRadius: '10px',
        minHeight: '30%',
        padding: '20px',
        fontSize: '30px',
      }}
    >
      {text}
    </CardContent>
  );
}

export function QuizSelect({ setIsAnswer, setIsHint, setIsPass, setIsStop }) {
  return (
    <CardContent
      sx={{
        border: '8px solid black',
        margin: 'auto 10px 10px 10px',
        borderRadius: '10px',
        minHeight: '30%',
        padding: '20px',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateRows: '1fr ',
          gridTemplateColumns: '1fr '.repeat(2),
          gap: '10px 30px',
          justifyItems: 'start',
        }}
      >
        <button
          type='button'
          className='Button'
          onClick={() => {
            setIsAnswer(true);
          }}
          style={{ background: 'none', border: 'none' }}
        >
          <Typography variant='h5'>
            <ArrowRight
              className='Arrow'
              style={{ fontSize: '40px', verticalAlign: 'middle' }}
            />
            <span style={{ verticalAlign: 'middle' }}>정답을 맞춘다</span>
          </Typography>
        </button>
        <button
          type='button'
          className='Button'
          onClick={() => {
            setIsHint(true);
          }}
          style={{ background: 'none', border: 'none' }}
        >
          <Typography variant='h5'>
            <ArrowRight
              className='Arrow'
              style={{ fontSize: '40px', verticalAlign: 'middle' }}
            />
            <span style={{ verticalAlign: 'middle' }}>힌트를 받는다</span>
          </Typography>
        </button>
        <button
          type='button'
          className='Button'
          onClick={() => {
            setIsPass(true);
          }}
          style={{ background: 'none', border: 'none' }}
        >
          <Typography variant='h5'>
            <ArrowRight
              className='Arrow'
              style={{ fontSize: '40px', verticalAlign: 'middle' }}
            />
            <span style={{ verticalAlign: 'middle' }}>패스한다</span>
          </Typography>
        </button>
        <button
          type='button'
          className='Button'
          onClick={() => {
            setIsStop(true);
          }}
          style={{ background: 'none', border: 'none' }}
        >
          <Typography variant='h5'>
            <ArrowRight
              className='Arrow'
              style={{ fontSize: '40px', verticalAlign: 'middle' }}
            />
            <span style={{ verticalAlign: 'middle' }}>그만둔다</span>
          </Typography>
        </button>
      </div>
    </CardContent>
  );
}

export function QuizAnswerSubmit({ setUserAnswer, checkAnswer, setIsAnswer }) {
  return (
    <CardContent
      sx={{
        border: '8px solid black',
        margin: 'auto 10px 10px 10px',
        borderRadius: '10px',
        minHeight: '30%',
        padding: '20px',
        fontSize: '30px',
      }}
    >
      <TextField
        id='outlined-basic'
        label='이 포켓몬의 이름은?'
        variant='outlined'
        onChange={(e) => {
          setUserAnswer(e.target.value);
        }}
        style={{ width: '100%' }}
      />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr '.repeat(2),
          gap: '10px 30px',
          justifyItems: 'start',
          marginTop: '10px',
        }}
      >
        <button
          type='button'
          className='Button'
          onClick={checkAnswer}
          style={{ background: 'none', border: 'none' }}
        >
          <Typography variant='h5'>
            <ArrowRight
              className='Arrow'
              style={{ fontSize: '40px', verticalAlign: 'middle' }}
            />
            <span style={{ verticalAlign: 'middle' }}>제출한다</span>
          </Typography>
        </button>
        <button
          type='button'
          className='Button'
          onClick={() => {
            setIsAnswer(false);
          }}
          style={{ background: 'none', border: 'none' }}
        >
          <Typography variant='h5'>
            <ArrowRight
              className='Arrow'
              style={{ fontSize: '40px', verticalAlign: 'middle' }}
            />
            <span style={{ verticalAlign: 'middle' }}>돌아간다</span>
          </Typography>
        </button>
      </div>
    </CardContent>
  );
}

export function QuizYesOrNo({ onClickYes, onClickNo }) {
  return (
    <CardContent
      sx={{
        position: 'absolute',
        border: '8px solid black',
        margin: 'auto 10px 10px 10px',
        borderRadius: '10px',
        minHeight: '25%',
        minWidth: '23%',
        bottom: '32%',
        right: 0,
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateRows: '1fr ',
          gap: '10px',
          justifyItems: 'start',
        }}
      >
        <button
          type='button'
          className='Button'
          onClick={onClickYes}
          style={{
            background: 'none',
            border: 'none',
          }}
        >
          <Typography variant='h5'>
            <ArrowRight
              className='Arrow'
              style={{ fontSize: '40px', verticalAlign: 'middle' }}
            />
            <span style={{ verticalAlign: 'middle' }}>예</span>
          </Typography>
        </button>
        <button
          type='button'
          className='Button'
          onClick={onClickNo}
          style={{
            background: 'none',
            border: 'none',
          }}
        >
          <Typography variant='h5'>
            <ArrowRight
              className='Arrow'
              style={{ fontSize: '40px', verticalAlign: 'middle' }}
            />
            <span style={{ verticalAlign: 'middle' }}>아니오</span>
          </Typography>
        </button>
      </div>
    </CardContent>
  );
}
