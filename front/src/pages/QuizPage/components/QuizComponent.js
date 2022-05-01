import React, { useState } from 'react';
import {
    Card,
    CardMedia,
    IconButton,
    Typography,
    CardContent,
	DialogActions,
	DialogContent,
	Button,
	Dialog,
	DialogTitle,
} from '@mui/material';
import { ArrowDropDown, HelpOutlineOutlined, ArrowRight } from '@mui/icons-material';

function QuizComponent({ set1, set2, text, img='/images/quizImg1.jpg', isQuiz=false, isQuizIng=false, setIsQuizIng, setIsEntry, setIsQuizStart }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isAnswer, setIsAnswer] = useState(false); // 정답맞추는컴포넌트 (제출하기, 돌아가기)
    const [isHint, setIsHint] = useState(false); // 힌트는 바로 제공(다이얼로그)
    const [isPass, setIsPass] = useState(false);
    const [isStop, setIsStop] = useState(false);

    console.log(isAnswer,isHint, isPass, isStop)


    const handleClose = () => {
		setIsOpen(false);
	};

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
                image={img}
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
            {!isQuizIng && (
                <CardContent
                    sx={{
                        border: '8px solid black',
                        margin: 'auto 10px 10px 10px',
                        borderRadius: '10px',
                        minHeight: '30%',
                        padding: '20px',
                        fontSize: '30px'
                    }}
                >
                    {text}
                </CardContent>
            )}
            {isQuizIng && !isPass && !isStop && (
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
                            justifyItems: 'start'
                        }}
                    >
                        <button type="button" onClick={() => { setIsAnswer(true); }} style={{ background: 'none', border: 'none' }}>
                            <Typography variant='h5'>
                                <ArrowRight style={{ fontSize: '40px', verticalAlign: 'middle' }} />
                                <span style={{ verticalAlign: 'middle' }}>정답을 맞춘다</span>
                            </Typography>
                        </button>
                        <button type="button" onClick={() => { setIsHint(true); }} style={{ background: 'none', border: 'none' }}>
                            <Typography variant='h5'>
                                <ArrowRight style={{ fontSize: '40px', verticalAlign: 'middle' }} />
                                <span style={{ verticalAlign: 'middle' }}>힌트를 받는다</span>
                            </Typography>
                        </button>
                        <button type="button" onClick={() => { setIsPass(true); }} style={{ background: 'none', border: 'none' }}>
                            <Typography variant='h5'>
                                <ArrowRight style={{ fontSize: '40px', verticalAlign: 'middle' }} />
                                <span style={{ verticalAlign: 'middle' }}>패스한다</span>
                            </Typography>
                        </button>
                        <button type="button" onClick={() => { setIsStop(true); }} style={{ background: 'none', border: 'none' }}>
                            <Typography variant='h5'>
                                <ArrowRight style={{ fontSize: '40px', verticalAlign: 'middle' }} />
                                <span style={{ verticalAlign: 'middle' }}>그만둔다</span>
                            </Typography>
                        </button>
                    </div>
                </CardContent>
            )}
            {isPass && (
                <CardContent
                    sx={{
                        border: '8px solid black',
                        margin: 'auto 10px 10px 10px',
                        borderRadius: '10px',
                        minHeight: '30%',
                        padding: '20px',
                        fontSize: '30px'
                    }}
                >
                    패스하시겠습니까?
                </CardContent>
            )}
            {isPass && (
                <CardContent
                    sx={{
                        position: 'absolute',
                        border: '8px solid black',
                        margin: 'auto 10px 10px 10px',
                        borderRadius: '10px',
                        minHeight: '25%',
                        minWidth: '23%',
                        bottom: '32%',
                        right: 0
                    }}
                >
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateRows: '1fr ',
                            gap: '10px',
                            justifyItems: 'start'
                        }}
                    >
                        <button
                            type="button"
                            onClick={() => {
                                setIsQuizIng(false);
                                setIsQuizStart(true);
                                setIsPass(false);
                            }}
                            style={{
                                background: 'none',
                                border: 'none'
                            }}
                        >
                            <Typography variant='h5'>
                                <ArrowRight style={{ fontSize: '40px', verticalAlign: 'middle' }} />
                                <span style={{ verticalAlign: 'middle' }}>예</span>
                            </Typography>
                        </button>
                        <button
                            type="button"
                            onClick={() => {
                                setIsPass(false);
                            }}
                            style={{
                                background: 'none',
                                border: 'none'
                            }}
                        >
                            <Typography variant='h5'>
                                <ArrowRight style={{ fontSize: '40px', verticalAlign: 'middle' }} />
                                <span style={{ verticalAlign: 'middle' }}>아니오</span>
                            </Typography>
                        </button>
                    </div>
                </CardContent>
            )}
            {isStop && (
                <CardContent
                    sx={{
                        border: '8px solid black',
                        margin: 'auto 10px 10px 10px',
                        borderRadius: '10px',
                        minHeight: '30%',
                        padding: '20px',
                        fontSize: '30px'
                    }}
                >
                    퀴즈를 그만두시겠습니까?
                </CardContent>
            )}
            {isStop && (
                <CardContent
                    sx={{
                        position: 'absolute',
                        border: '8px solid black',
                        margin: 'auto 10px 10px 10px',
                        borderRadius: '10px',
                        minHeight: '25%',
                        minWidth: '23%',
                        bottom: '32%',
                        right: 0
                    }}
                >
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateRows: '1fr ',
                            gap: '10px',
                            justifyItems: 'start'
                        }}
                    >
                        <button
                            type="button"
                            onClick={() => {
                                setIsQuizIng(false);
                                setIsEntry(true);
                                setIsStop(false);
                            }}
                            style={{
                                background: 'none',
                                border: 'none'
                            }}
                        >
                            <Typography variant='h5'>
                                <ArrowRight style={{ fontSize: '40px', verticalAlign: 'middle' }} />
                                <span style={{ verticalAlign: 'middle' }}>예</span>
                            </Typography>
                        </button>
                        <button
                            type="button"
                            onClick={() => {
                                setIsStop(false);
                            }}
                            style={{
                                background: 'none',
                                border: 'none'
                            }}
                        >
                            <Typography variant='h5'>
                                <ArrowRight style={{ fontSize: '40px', verticalAlign: 'middle' }} />
                                <span style={{ verticalAlign: 'middle' }}>아니오</span>
                            </Typography>
                        </button>
                    </div>
                </CardContent>
            )}
            {!isQuizIng && (
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
                    fontSize: '24px'
                }}
            >
                X 3
            </div>
            )}
            {isQuiz && (
                <IconButton
                    onClick={() => {
                        setIsOpen(true);
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
            <Dialog open={isOpen} onClose={handleClose} style={{ zIndex: '10000' }}>
				<DialogTitle>포켓몬 퀴즈 설명</DialogTitle>
				<DialogContent>
					포켓몬 퀴즈는 포켓몬의 실루엣 이미지를 보고 해당하는 포켓몬의 이름을 맞추는 게임입니다.<br/>
                    하루에 총 3번의 기회가 주어지며, 정답을 맞추면 500포인트가 지급됩니다.<br/>
                    게임을 시작하면 랜덤 포켓몬의 실루엣 이미지가 나타나고<br/>
                    정답을 맞추거나, 힌트를 받거나, 패스를 하거나, 그만둘 수 있습니다.<br/>
                    힌트는 포켓몬 이름의 글자수로 제공되고, 패스를 선택하면 다른 포켓몬의 실루엣 이미지가 제공됩니다.<br/>
                    게임을 도중에 그만두더라도 남은 기회가 있다면 언제든지 재도전하실 수 있습니다.
				</DialogContent>
				<DialogActions>
					<Button variant='contained' color='inherit' onClick={handleClose}>
						닫기
					</Button>
				</DialogActions>
			</Dialog>
        </Card>
    );
}

export default QuizComponent;