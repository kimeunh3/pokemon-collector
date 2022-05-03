import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function QuizEntry({ setIsEntry, setIsQuizEx1 }) {
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
          image='https://d31z0g5vo6ghmg.cloudfront.net/front/QuizPageImg.gif'
          alt='퀴즈입장이미지'
        />
      </Card>
      <Button
        className='btn'
        variant='contained'
        color='error'
        onClick={() => {
          setIsEntry(false);
          setIsQuizEx1(true);
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
