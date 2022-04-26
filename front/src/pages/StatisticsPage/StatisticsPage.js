import React from 'react';
import StatisticsButton from './components/StatisticsButton';

function StatisticsPage() {

	return (
		<div style={{ paddingTop: '170px', paddingBottom: '50px' }}>
            <div
				style={{
					display: 'grid',
					gridTemplateRows: '1fr ',
					gridTemplateColumns: '1fr 1fr 1fr 1fr',
					gap: '4em 1em',
					margin: '0 5vw 0 5vw',
				}}
			>
                <StatisticsButton imageSrc='https://pokemon-collector.s3.ap-northeast-2.amazonaws.com/pokemons/151.png' text='전체 개요' bColor='rgba(255, 255, 255, 0.8)' />
                <StatisticsButton imageSrc='https://pokemon-collector.s3.ap-northeast-2.amazonaws.com/pokemons/143.png' text='노말 속성' bColor='rgba(198, 198, 167, 0.8)' />
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
                <StatisticsButton imageSrc='https://pokemon-collector.s3.ap-northeast-2.amazonaws.com/pokemons/95.png' text='바위 속성' bColor='rgba(209, 193, 125, 0.8)' />
                <StatisticsButton imageSrc='https://pokemon-collector.s3.ap-northeast-2.amazonaws.com/pokemons/92.png' text='고스트 속성' bColor='rgba(162, 146, 188, 0.8)' />
                <StatisticsButton imageSrc='https://pokemon-collector.s3.ap-northeast-2.amazonaws.com/pokemons/147.png' text='드래곤 속성' bColor='rgba(162, 125, 250, 0.8)' />
                <StatisticsButton imageSrc='https://pokemon-collector.s3.ap-northeast-2.amazonaws.com/pokemons/81.png' text='강철 속성' bColor='rgba(209, 209, 224, 0.8)' />
                <StatisticsButton imageSrc='https://pokemon-collector.s3.ap-northeast-2.amazonaws.com/pokemons/35.png' text='페어리 속성' bColor='rgba(244, 189, 201, 0.8)' />
            </div>
		</div>
	);
}

export default StatisticsPage;