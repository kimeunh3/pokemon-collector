import React from 'react';
import { CardContent } from '@mui/material';

function QuizText({ text }) {
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

export default QuizText;
