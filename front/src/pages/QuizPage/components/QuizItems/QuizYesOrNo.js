import React from 'react';
import { Typography, CardContent } from '@mui/material';
import { ArrowRight } from '@mui/icons-material';

function QuizYesOrNo({ onClickYes, onClickNo }) {
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

export default QuizYesOrNo;
