import React from 'react';
import { Container } from '@mui/material';
import { Chart, registerables } from 'chart.js';
import { Radar } from 'react-chartjs-2';

import IconObj from '../../../../core/Icon';

Chart.register(...registerables);

function PokemonRadar({ radarDataOne }) {
	const {
		name,
		height,
		weight,
		totalPoints,
		hp,
		attack,
		defense,
		spAttack,
		spDefense,
		speed,
		typeOne,
	} = radarDataOne;

	const data = {
		labels: [
			'종합점수',
			'키(m)',
			'몸무게(kg)',
			'HP',
			'공격력',
			'방어력',
			'특수 공격력',
			'특수 방어력',
			'스피드',
		],
		datasets: [
			{
				label: `${name}`,
				data: [
					totalPoints,
					height,
					weight,
					hp,
					attack,
					defense,
					spAttack,
					spDefense,
					speed,
				],
				backgroundColor: [`${IconObj[typeOne].Color.color}66`],
				borderColor: [
					'rgb(255, 99, 132)',
					'rgb(255, 159, 64)',
					'rgb(255, 205, 86)',
					'rgb(75, 192, 192)',
					'rgb(54, 162, 235)',
					'rgb(153, 102, 255)',
					'rgb(201, 203, 207)',
				],
				borderWidth: 1,
			},
		],
	};

	const options = {
		maintainAspectRatio: false, // 가로세로 비율 설정
		plugins: {
			title: {
				display: true,
				text: '포켓몬 능력치 레이더 차트 (%)',
			},
			legend: {
				display: true,

				labels: {
					boxWidth: 10,
					boxHeight: 10,
					font: {
						size: 20,
					},
				},
			},
		},

		scales: {
			r: {
				ticks: {
					display: true,
					beginAtZero: true,
					stepSize: 20,
					max: 100,
				},
				suggestMax: 100,
			},
		},
	};
	return (
		<Container
			sx={{
				backgroundColor: 'rgba(255, 255, 255, 0.5)',
				borderRadius: '10px',
			}}
		>
			<Radar data={data} options={options} height={400} />
		</Container>
	);
}

export default PokemonRadar;
