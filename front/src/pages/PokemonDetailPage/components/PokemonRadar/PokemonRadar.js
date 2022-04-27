import React from 'react';
import { Box } from '@mui/material';
import { Chart, registerables } from 'chart.js';
import { Radar } from 'react-chartjs-2';

Chart.register(...registerables);

function PokemonRadar({ pokemon }) {
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
	} = pokemon;
	const data = {
		labels: [
			'키(m)',
			'몸무게(kg)',
			'총 능력치',
			'HP',
			'공격력',
			'방어력',
			'특수 공격력',
			'특수 방어력',
			'민첩성',
		],
		datasets: [
			{
				label: `${name}`,
				data: [
					height,
					weight,
					totalPoints,
					hp,
					attack,
					defense,
					spAttack,
					spDefense,
					speed,
				],
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(255, 159, 64, 0.2)',
					'rgba(255, 205, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(153, 102, 255, 0.2)',
					'rgba(201, 203, 207, 0.2)',
				],
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
		scales: {
			y: {
				beginAtZero: true,
			},
		},
		legend: {
			labels: {
				fontSize: 26,
			},
		},
	};
	return (
		<Box>
			<Radar data={data} options={options} height={400} />
		</Box>
	);
}

export default PokemonRadar;
