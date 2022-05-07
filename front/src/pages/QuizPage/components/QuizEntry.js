import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import ImgSrc from '../../../core/constants/ImgSrc';

function QuizEntry({ setStage }) {
  return (
    <Box
      className='QuizEntry'
      sx={{
        position: 'absolute',
        width: '60%',
        left: '50%',
        transform: 'translateX(-50%)',
      }}
    >
      <Card
        sx={{
          backgroundColor: 'transparent',
          boxShadow: 'none',
        }}
      >
        <CardMedia
          component='img'
          image={ImgSrc.QuizPageGif}
          alt='퀴즈입장이미지'
        />
      </Card>
      <Button
        className='btn'
        variant='contained'
        color='error'
        onClick={() => {
          setStage('quizEx1');
        }}
        sx={{
          position: 'absolute',
          top: '45%',
          right: '50%',
          transform: 'translateX(50%)',
          padding: '2% 5% 2% 5%',
        }}
      >
        <Typography variant='h4'>퀴즈 시작하기!</Typography>
      </Button>
    </Box>
  );
}

export default QuizEntry;
