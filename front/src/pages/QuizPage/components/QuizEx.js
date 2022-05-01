import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';

function QuizEx({ set1, set2, text }) {
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
                overflow: 'inherit'
            }}
        >
            <CardMedia
                component='img'
                image='/images/quizImg1.jpg'
                alt='퀴즈오박사이미지'
                sx={{
                    width: '35%',
                    maxWidth: '450px',
                    minWidth: '200px',
                    marginLeft: '50%',
                    marginTop: '10px',
                    transform: 'translateX(-50%)',
                }}
            />
            <CardContent
                sx={{
                    border: '8px solid black',
                    margin: 'auto 10px 10px 10px',
                    borderRadius: '5px',
                    minHeight: '30%',
                    padding: '20px',
                    fontSize: '30px'
                }}
            >
                {text}
            </CardContent>
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
        </Card>
    );
}

export default QuizEx;