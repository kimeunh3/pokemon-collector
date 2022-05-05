import React from 'react';
import Box from '@mui/material/Box';
import { Bar } from 'react-chartjs-2';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	PointElement,
	LineElement,
	ArcElement,
	Title,
	Tooltip,
	Legend,
	RadialLinearScale,
} from 'chart.js';

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	PointElement,
	LineElement,
	ArcElement,
	RadialLinearScale,
	Title,
	Tooltip,
	Legend
);

const optionBarStats = {
	responsive: true,
	plugins: {
		legend: {
			position: 'top',
		},
		title: {
			display: true,
			text: '능력치',
		},
	},
};

export function BarStatChart({ x, y }) {
	const dataBarStats = {
		labels: x,
		datasets: [
			{
				label: '공격력',
				data: y.attack,
				backgroundColor: 'rgba(240, 128, 48, 0.5)',
			},
			{
				label: '방어력',
				data: y.defense,
				backgroundColor: 'rgba(248, 208, 48, 0.5)',
			},
			{
				label: 'Hp',
				data: y.hp,
				backgroundColor: 'rgba(255, 0, 0, 0.5)',
			},
			{
				label: '특수공격력',
				data: y.spAttack,
				backgroundColor: 'rgba(104, 144, 240, 0.5)',
			},
			{
				label: '특수방어력',
				data: y.spDefense,
				backgroundColor: 'rgba(120, 200, 80, 0.5)',
			},
			{
				label: '스피드',
				data: y.speed,
				backgroundColor: 'rgba(193, 131, 193, 0.5)',
			},
		],
	};

	return (
		<Box
			sx={{
				backgroundColor: 'rgba(255, 255, 255, 0.5)',
				borderRadius: '10px',
			}}
		>
			<Bar options={optionBarStats} data={dataBarStats} />
		</Box>
	);
}

const optionBarHeight = {
	responsive: true,
	maintainAspectRatio: false,
	plugins: {
		legend: {
			position: 'top',
		},
		title: {
			display: true,
			text: '키',
		},
	},
	scales: {
		height: {
			type: 'linear',
			position: 'left',
			title: {
				display: true,
				text: '키 (m)',
			},
			grid: {
				display: false,
			},
		},
	},
};

export function BarHeight({ x, y }) {
	const dataBarHeight = {
		labels: x,
		datasets: [
			{
				label: '키',
				data: y.height,
				backgroundColor: 'rgba(161, 57, 89, 0.5)',
				yAxisID: 'height',
			},
		],
	};

	return (
		<Box
			sx={{
				backgroundColor: 'rgba(255, 255, 255, 0.5)',
				borderRadius: '10px',
				height: '100%',
			}}
		>
			<Bar options={optionBarHeight} data={dataBarHeight} />
		</Box>
	);
}

const optionBarWeight = {
	responsive: true,
	maintainAspectRatio: false,
	plugins: {
		legend: {
			position: 'top',
		},
		title: {
			display: true,
			text: '몸무게',
		},
	},
	scales: {
		weight: {
			type: 'linear',
			position: 'left',
			title: {
				display: true,
				text: '몸무게 (kg)',
			},
			grid: {
				display: false,
			},
		},
	},
};

export function BarWeight({ x, y }) {
	const dataBarWeight = {
		labels: x,
		datasets: [
			{
				label: '몸무게',
				data: y.weight,
				backgroundColor: 'rgba(68, 94, 156, 0.5)',
				yAxisID: 'weight',
			},
		],
	};

	return (
		<Box
			sx={{
				backgroundColor: 'rgba(255, 255, 255, 0.5)',
				borderRadius: '10px',
				height: '100%',
			}}
		>
			<Bar options={optionBarWeight} data={dataBarWeight} />
		</Box>
	);
}
