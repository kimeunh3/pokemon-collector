import React, { useState } from 'react';
import {
    AppBar,
	Toolbar,
	Button,
	Grid,
} from '@material-ui/core';
import StatisticsButton from './components/StatisticsButton';

function StatisticsPage() {
    const [isAll, setIsAll] = useState(true);
    const [isType, setIsType] = useState(true);
    const [isStats, setIsStats] = useState(true);

	return (
		<div style={{ paddingTop: '180px', paddingBottom: '50px' }}>
            <AppBar
                position="static"
				style={{ backgroundColor: '#E5E5E5', color: 'black', width: '80vw', marginLeft: '10vw' }}
			>
				<Toolbar>
                    <Grid
                        container
                        id='menu'
                        style={{ textAlign: 'center', alignItems: 'center' }}
                    >
                        <Grid item xs={4}>
                            <Button
                                color='inherit'
                                onClick={() => {
                                    setIsAll(true);
                                    setIsType(true);
                                    setIsStats(true);
                                }}
                                style={{ fontSize: '1.5vw' , fontWeight: 'bolder' }}
                            >
                                전체통계
                            </Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button
                                color='inherit'
                                onClick={() => {
                                    setIsAll(false);
                                    setIsType(true);
                                    setIsStats(false);
                                }}
                                style={{ fontSize: '1.5vw' , fontWeight: 'bolder' }}
                            >
                                속성통계
                            </Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button
                                color='inherit'
                                onClick={() => {
                                    setIsAll(false);
                                    setIsType(false);
                                    setIsStats(true);
                                }}
                                style={{ fontSize: '1.5vw' , fontWeight: 'bolder' }}
                            >
                                능력치통계
                            </Button>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <div
				style={{
					display: 'grid',
					gridTemplateRows: '1fr ',
					gridTemplateColumns: '1fr 1fr 1fr 1fr',
					gap: '4em 1em',
					margin: '50px 5vw 0 5vw',
				}}
			>
                {isAll && (
                    <StatisticsButton imageSrc='https://pokemon-collector.s3.ap-northeast-2.amazonaws.com/pokemons/151.png' text='전체 개요' bColor='white' />
                )}
                {isType && (
                    <>
                        <StatisticsButton imageSrc='https://pokemon-collector.s3.ap-northeast-2.amazonaws.com/pokemons/19.png' text='노말 속성' bColor='rgba(198, 198, 167, 0.8)' />
                        <StatisticsButton imageSrc='https://pokemon-collector.s3.ap-northeast-2.amazonaws.com/pokemons/4.png' text='불꽃 속성' bColor='rgba(245, 172, 120, 0.8)' />
                        <StatisticsButton imageSrc='https://pokemon-collector.s3.ap-northeast-2.amazonaws.com/pokemons/7.png' text='물 속성' bColor='rgba(157, 183, 245, 0.8)' />
                        <StatisticsButton imageSrc='https://pokemon-collector.s3.ap-northeast-2.amazonaws.com/pokemons/1.png' text='풀 속성' bColor='rgba(167, 219, 141, 0.8)' />
                        <StatisticsButton imageSrc='https://pokemon-collector.s3.ap-northeast-2.amazonaws.com/pokemons/25.png' text='전기 속성' bColor='rgba(250, 224, 120, 0.8)' />
                        <StatisticsButton imageSrc='https://pokemon-collector.s3.ap-northeast-2.amazonaws.com/pokemons/124.png' text='얼음 속성' bColor='rgba(188, 230, 230, 0.8)' />
                        <StatisticsButton imageSrc='https://pokemon-collector.s3.ap-northeast-2.amazonaws.com/pokemons/66.png' text='격투 속성' bColor='rgba(214, 120, 115, 0.8)' />
                        <StatisticsButton imageSrc='https://pokemon-collector.s3.ap-northeast-2.amazonaws.com/pokemons/109.png' text='독 속성' bColor='rgba(193, 131, 193, 0.8)' />
                        <StatisticsButton imageSrc='https://pokemon-collector.s3.ap-northeast-2.amazonaws.com/pokemons/50.png' text='땅 속성' bColor='rgba(235, 214, 157, 0.8)' />
                        <StatisticsButton imageSrc='https://pokemon-collector.s3.ap-northeast-2.amazonaws.com/pokemons/16.png' text='비행 속성' bColor='rgba(198, 183, 245, 0.8)' />
                        <StatisticsButton imageSrc='https://pokemon-collector.s3.ap-northeast-2.amazonaws.com/pokemons/63.png' text='에스퍼 속성' bColor='rgba(250, 146, 178, 0.8)' />
                        <StatisticsButton imageSrc='https://pokemon-collector.s3.ap-northeast-2.amazonaws.com/pokemons/10.png' text='벌레 속성' bColor='rgba(198, 209, 110, 0.8)' />
                        <StatisticsButton imageSrc='https://pokemon-collector.s3.ap-northeast-2.amazonaws.com/pokemons/74.png' text='바위 속성' bColor='rgba(209, 193, 125, 0.8)' />
                        <StatisticsButton imageSrc='https://pokemon-collector.s3.ap-northeast-2.amazonaws.com/pokemons/92.png' text='고스트 속성' bColor='rgba(162, 146, 188, 0.8)' />
                        <StatisticsButton imageSrc='https://pokemon-collector.s3.ap-northeast-2.amazonaws.com/pokemons/147.png' text='드래곤 속성' bColor='rgba(162, 125, 250, 0.8)' />
                        <StatisticsButton imageSrc='https://pokemon-collector.s3.ap-northeast-2.amazonaws.com/pokemons/81.png' text='강철 속성' bColor='rgba(209, 209, 224, 0.8)' />
                        <StatisticsButton imageSrc='https://pokemon-collector.s3.ap-northeast-2.amazonaws.com/pokemons/35.png' text='페어리 속성' bColor='rgba(244, 189, 201, 0.8)' />
                    </>
                )}
                {isStats && (
                    <>
                        <StatisticsButton imageSrc='https://pokemon-collector.s3.ap-northeast-2.amazonaws.com/pokemons/149.png' text='공격' bColor='rgba(240, 128, 48, 0.8)' />
                        <StatisticsButton imageSrc='https://pokemon-collector.s3.ap-northeast-2.amazonaws.com/pokemons/91.png' text='방어' bColor='rgba(248, 208, 48, 0.8)' />
                        <StatisticsButton imageSrc='https://pokemon-collector.s3.ap-northeast-2.amazonaws.com/pokemons/113.png' text='Hp' bColor='rgba(255, 0, 0, 0.8)' />
                        <StatisticsButton imageSrc='https://pokemon-collector.s3.ap-northeast-2.amazonaws.com/pokemons/150.png' text='특수공격' bColor='rgba(104, 144, 240, 0.8)' />
                        <StatisticsButton imageSrc='https://pokemon-collector.s3.ap-northeast-2.amazonaws.com/pokemons/144.png' text='특수방어' bColor='rgba(120, 200, 80, 0.8)' />
                        <StatisticsButton imageSrc='https://pokemon-collector.s3.ap-northeast-2.amazonaws.com/pokemons/101.png' text='스피드' bColor='rgba(193, 131, 193, 0.8)' />
                        <StatisticsButton imageSrc='https://pokemon-collector.s3.ap-northeast-2.amazonaws.com/pokemons/95.png' text='키' bColor='rgba(161, 57, 89, 0.8)' />
                        <StatisticsButton imageSrc='https://pokemon-collector.s3.ap-northeast-2.amazonaws.com/pokemons/143.png' text='몸무게' bColor='rgba(68, 94, 156, 0.8)' />
                        <StatisticsButton imageSrc='https://pokemon-collector.s3.ap-northeast-2.amazonaws.com/front/logo.png' text='종합 점수' bColor='rgba(128, 128, 128, 0.8)' />
                    </>
                )}
            </div>
            <button type="button" id="go-top" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}><span className="material-symbols-outlined">arrow_upward</span></button>
		</div>
	);
}

export default StatisticsPage;