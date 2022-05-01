import React, { useState, useEffect } from 'react';
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
    TextField,
} from '@mui/material';
import { ArrowDropDown, HelpOutlineOutlined, ArrowRight } from '@mui/icons-material';

import './QuizComponent.css';

import * as Api from '../../../api';

function QuizComponent({ pokemonId, pokemonName, chance, set1, set2, text, img='/images/quizImg1.jpg', isQuiz=false, isQuizIng=false, setIsQuizIng, setIsEntry, setIsQuizStart, setIsCorrect, setIsInCorrect, isContinue, setIsContinue }) {
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
            Api.get(`pokemon/${pokemonId}`)
                .then((res) => {
                    setPokemonType(res.data.typeOne);
                    setPokemonNameNum(pokemonName.length);
                })
        }
    }, [isHint])


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
        }
        else {
            setIsQuizIng(false);
            setIsInCorrect(true);
        }
    }

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
                overflow: 'inherit'
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
            {isQuizIng && !isAnswer && !isPass && !isStop && !isContinue && (
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
                        <button type="button" className="Button" onClick={() => { setIsAnswer(true); }} style={{ background: 'none', border: 'none' }}>
                            <Typography variant='h5'>
                                <ArrowRight className="Arrow" style={{ fontSize: '40px', verticalAlign: 'middle' }} />
                                <span style={{ verticalAlign: 'middle' }}>정답을 맞춘다</span>
                            </Typography>
                        </button>
                        <button type="button" className="Button" onClick={() => { setIsHint(true); }} style={{ background: 'none', border: 'none' }}>
                            <Typography variant='h5'>
                                <ArrowRight className="Arrow" style={{ fontSize: '40px', verticalAlign: 'middle' }} />
                                <span style={{ verticalAlign: 'middle' }}>힌트를 받는다</span>
                            </Typography>
                        </button>
                        <button type="button" className="Button" onClick={() => { setIsPass(true); }} style={{ background: 'none', border: 'none' }}>
                            <Typography variant='h5'>
                                <ArrowRight className="Arrow" style={{ fontSize: '40px', verticalAlign: 'middle' }} />
                                <span style={{ verticalAlign: 'middle' }}>패스한다</span>
                            </Typography>
                        </button>
                        <button type="button" className="Button" onClick={() => { setIsStop(true); }} style={{ background: 'none', border: 'none' }}>
                            <Typography variant='h5'>
                                <ArrowRight className="Arrow" style={{ fontSize: '40px', verticalAlign: 'middle' }} />
                                <span style={{ verticalAlign: 'middle' }}>그만둔다</span>
                            </Typography>
                        </button>
                    </div>
                </CardContent>
            )}
            {isAnswer && (
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
                    <TextField id="outlined-basic" label="이 포켓몬의 이름은?" variant="outlined" onChange={(e) => { setUserAnswer(e.target.value); }} style={{ width: '100%' }} />
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr '.repeat(2),
                            gap: '10px 30px',
                            justifyItems: 'start',
                            marginTop: '10px'
                        }}
                    >
                        <button type="button" className="Button" onClick={checkAnswer} style={{ background: 'none', border: 'none' }}>
                            <Typography variant='h5'>
                                <ArrowRight className="Arrow" style={{ fontSize: '40px', verticalAlign: 'middle' }} />
                                <span style={{ verticalAlign: 'middle' }}>제출한다</span>
                            </Typography>
                        </button>
                        <button type="button" className="Button" onClick={() => { setIsAnswer(false); }} style={{ background: 'none', border: 'none' }}>
                            <Typography variant='h5'>
                                <ArrowRight className="Arrow" style={{ fontSize: '40px', verticalAlign: 'middle' }} />
                                <span style={{ verticalAlign: 'middle' }}>돌아간다</span>
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
                    패스하겠습니까?
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
                            className="Button"
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
                                <ArrowRight className="Arrow" style={{ fontSize: '40px', verticalAlign: 'middle' }} />
                                <span style={{ verticalAlign: 'middle' }}>예</span>
                            </Typography>
                        </button>
                        <button
                            type="button"
                            className="Button"
                            onClick={() => {
                                setIsPass(false);
                            }}
                            style={{
                                background: 'none',
                                border: 'none'
                            }}
                        >
                            <Typography variant='h5'>
                                <ArrowRight className="Arrow" style={{ fontSize: '40px', verticalAlign: 'middle' }} />
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
                    퀴즈를 그만두겠습니까?
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
                            className="Button"
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
                                <ArrowRight className="Arrow" style={{ fontSize: '40px', verticalAlign: 'middle' }} />
                                <span style={{ verticalAlign: 'middle' }}>예</span>
                            </Typography>
                        </button>
                        <button
                            type="button"
                            className="Button"
                            onClick={() => {
                                setIsStop(false);
                            }}
                            style={{
                                background: 'none',
                                border: 'none'
                            }}
                        >
                            <Typography variant='h5'>
                                <ArrowRight className="Arrow" style={{ fontSize: '40px', verticalAlign: 'middle' }} />
                                <span style={{ verticalAlign: 'middle' }}>아니오</span>
                            </Typography>
                        </button>
                    </div>
                </CardContent>
            )}
            {isContinue && (
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
                            className="Button"
                            onClick={() => {
                                setIsContinue(false);
                                setIsQuizStart(true);
                            }}
                            style={{
                                background: 'none',
                                border: 'none'
                            }}
                        >
                            <Typography variant='h5'>
                                <ArrowRight className="Arrow" style={{ fontSize: '40px', verticalAlign: 'middle' }} />
                                <span style={{ verticalAlign: 'middle' }}>예</span>
                            </Typography>
                        </button>
                        <button
                            type="button"
                            className="Button"
                            onClick={() => {
                                setIsContinue(false);
                                setIsEntry(true);
                            }}
                            style={{
                                background: 'none',
                                border: 'none'
                            }}
                        >
                            <Typography variant='h5'>
                                <ArrowRight className="Arrow" style={{ fontSize: '40px', verticalAlign: 'middle' }} />
                                <span style={{ verticalAlign: 'middle' }}>아니오</span>
                            </Typography>
                        </button>
                    </div>
                </CardContent>
            )}
            {!isQuizIng && !isContinue && (
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
            <Dialog open={isHelpOpen} onClose={handleHelpClose} style={{ zIndex: '10000' }}>
				<DialogTitle>포켓몬 퀴즈 설명</DialogTitle>
				<DialogContent>
					포켓몬 퀴즈는 포켓몬의 실루엣 이미지를 보고 해당하는 포켓몬의 이름을 맞추는 게임입니다.<br/>
                    하루에 총 3번의 기회가 주어지며, 정답을 맞추면 500포인트가 지급됩니다.<br/>
                    게임을 시작하면 랜덤 포켓몬의 실루엣 이미지가 나타나고<br/>
                    정답을 맞추거나, 힌트를 받거나, 패스를 하거나, 그만둘 수 있습니다.<br/>
                    왼쪽 위의 숫자는 현재 기회를 포함한 남은 기회를 나타내며,<br/>
                    힌트는 포켓몬 이름의 글자수와 포켓몬의 속성으로 제공되고,<br/>
                    패스를 선택하면 1번의 기회를 포기하고 다른 문제로 넘어갑니다.<br/>
                    게임을 도중에 그만두더라도 남은 기회가 있다면 언제든지 재도전하실 수 있습니다.
				</DialogContent>
				<DialogActions>
					<Button variant='contained' color='inherit' onClick={handleHelpClose}>
						닫기
					</Button>
				</DialogActions>
			</Dialog>
            <Dialog open={isHint} onClose={handleHintClose} style={{ zIndex: '10000' }}>
				<DialogTitle>힌트</DialogTitle>
				<DialogContent style={{ textAlign: 'center' }}>
                    <img alt='오박사' src='/images/quizImg1.jpg' style={{ maxWidth: '400px' }} />
                    <Typography variant="h5">이 포켓몬은 {pokemonNameNum}글자의 {pokemonType} 포켓몬이란다!</Typography>
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