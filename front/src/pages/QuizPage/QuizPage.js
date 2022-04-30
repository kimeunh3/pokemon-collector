import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

function QuizPage() {
    const [isEntry, setIsEntry] = useState(true);
    const [isQuizEx, setIsQuizEx] = useState(false);

	return (
		<div style={{ paddingTop: '170px' }}>
            {isEntry && (
                <Box
                    className='QuizEntry'
                    sx={{ position: 'absolute', width: '60%', left: '50%', transform: 'translateX(-50%)'}}
                >
                    <Card
                        sx={{
                            backgroundColor: 'transparent',
                            boxShadow: 'none',
                        }}
                    >
                        <CardMedia
                            component='img'
                            image='/images/QuizPageImg.gif'
                            alt='퀴즈입장이미지'
                        />
                    </Card>
                    <Button
                        className='btn'
                        variant='contained'
                        color='error'
                        onClick={() => {
                            setIsEntry(false);
                            setIsQuizEx(true);
                        }}
                        sx={{
                            position: 'absolute',
                            top: '45%',
                            right: '50%',
                            transform: 'translateX(50%)',
                            padding: '2% 5% 2% 5%'
                        }}
                    >
                        <Typography variant='h4'>퀴즈 시작하기!</Typography>
                    </Button>
                </Box>
            )}
            {isQuizEx && (
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
                            border: '0.5rem solid black',
                            margin: 'auto 10px 10px 10px',
                            borderRadius: '5px',
                            minHeight: '30%',
                            padding: '20px',
                            fontSize: '2rem'
                        }}
                    >
                        <div>포켓몬 퀴즈에 온 걸 환영한다!</div>
                    </CardContent>
                </Card>
            )}
		</div>
	);
}

export default QuizPage;