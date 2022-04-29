import React from 'react';
import { Container } from '@mui/material';
import { Chart, registerables } from 'chart.js';
import { Radar } from 'react-chartjs-2';

Chart.register(...registerables);

function PokemonRadar({ pokemon, typeOneColor }) {
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

	const perTotal = Math.ceil((totalPoints / 1000) * 100);
	const perWeight = Math.ceil((weight / 500) * 100);
	const perHeight = Math.ceil((height / 5) * 100);
	const perHp = Math.ceil((hp / 100) * 100);
	const perAttack = Math.ceil((attack / 150) * 100);
	const perDefense = Math.ceil((defense / 150) * 100);
	const perSpAttack = Math.ceil((spAttack / 150) * 100);
	const perSpDefense = Math.ceil((spDefense / 150) * 100);
	const perSpeed = Math.ceil((speed / 150) * 100);

	const data = {
		labels: [
			'총 능력치',
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
					perTotal,
					perHeight,
					perWeight,
					perHp,
					perAttack,
					perDefense,
					perSpAttack,
					perSpDefense,
					perSpeed,
				],
				backgroundColor: [`${typeOneColor}66`],
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
		<Container sx={{ backgroundColor: '#FFFFFF' }}>
			<Radar data={data} options={options} height={400} />
		</Container>
	);
}

export default PokemonRadar;
