import React from 'react';
import { Typography, CardContent } from '@mui/material';
import { ArrowRight } from '@mui/icons-material';

function QuizSelect({ setIsAnswer, setIsHint, setIsPass, setIsStop }) {
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

export default QuizSelect;
