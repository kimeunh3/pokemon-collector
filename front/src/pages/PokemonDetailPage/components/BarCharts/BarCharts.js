import React, { useEffect, useState } from 'react';
import { Grid, Box, Typography } from '@mui/material';

import * as Api from '../../../../api';
import { BarStatChart, BarWeight, BarHeight } from './StatisticsCharts/Charts';

function BarCharts({ id }) {
	const [pokemon, setPokemon] = useState([]);
	const [allData, setAllData] = useState(null);
	const [typeData, setTypeData] = useState(null);
	const [x, setX] = useState(null);
	const [typeX, setTypeX] = useState(null);
	const newX = [];
	const newTypeX = [];

	const changeToEng = {
		노말: 'normal',
		불꽃: 'fire',
		물: 'water',
		풀: 'grass',
		벌레: 'bug',
		독: 'poison',
		전기: 'electric',
		땅: 'ground',
		페어리: 'fairy',
		격투: 'fight',
		에스퍼: 'psychic',
		바위: 'rock',
		고스트: 'ghost',
		얼음: 'ice',
		드래곤: 'dragon',
		비행: 'flying',
		강철: 'steel',
	};

	useEffect(() => {
		const fetchPokemonOne = async () => {
			const response = await Api.get('pokemon', id);
			setPokemon(response.data);
			newX.push(response.data.name);
			newX.push('전체(평균)');
			setX(newX);
			newTypeX.push(response.data.name);
			newTypeX.push(`${response.data.typeOne} 속성(평균)`);
			setTypeX(newTypeX);
			const res = await Api.get(
				'pokemonMeanData',
				changeToEng[response.data.typeOne]
			);
			setTypeData(res.data);
		};
		const fetchDataAll = async () => {
			const response = await Api.get('pokemonMeanData/all');
			setAllData(response.data);
		};

		fetchPokemonOne();
		fetchDataAll();
	}, []);

	const newY = pokemon &&
		allData && {
			attack: [pokemon.attack, allData.attack],
			defense: [pokemon.defense, allData.defense],
			hp: [pokemon.hp, allData.hp],
			spAttack: [pokemon.spAttack, allData.spAttack],
			spDefense: [pokemon.spDefense, allData.spDefense],
			speed: [pokemon.speed, allData.speed],
			height: [pokemon.height, allData.height],
			weight: [pokemon.weight, allData.weight],
		};

	const newTypeY = pokemon &&
		typeData && {
			attack: [pokemon.attack, typeData.attack],
			defense: [pokemon.defense, typeData.defense],
			hp: [pokemon.hp, typeData.hp],
			spAttack: [pokemon.spAttack, typeData.spAttack],
			spDefense: [pokemon.spDefense, typeData.spDefense],
			speed: [pokemon.speed, typeData.speed],
			height: [pokemon.height, typeData.height],
			weight: [pokemon.weight, typeData.weight],
		};

	return (
		<Box>
			{allData && newY && typeData && newTypeY && (
				<Box sx={{ marginTop: '30px', marginBottom: '30px' }}>
					<Grid container spacing={2}>
						<Grid item xs={12} sx={{ marginTop: '30px' }}>
							<Typography variant='h5'>{pokemon.name} vs 전체 평균</Typography>
							<hr />
						</Grid>
						<Grid item xs={6} md={6}>
							<BarStatChart x={x} y={newY} />
						</Grid>
						<Grid item xs={3}>
							<BarHeight x={x} y={newY} />
						</Grid>
						<Grid item xs={3}>
							<BarWeight x={x} y={newY} />
						</Grid>
						<Grid item xs={12} sx={{ marginTop: '30px' }}>
							<Typography variant='h5'>
								{pokemon.name} vs {pokemon.typeOne} 속성 평균
							</Typography>
							<hr />
						</Grid>
						<Grid item xs={6} md={6}>
							<BarStatChart x={typeX} y={newTypeY} />
						</Grid>
						<Grid item xs={3}>
							<BarHeight x={typeX} y={newTypeY} />
						</Grid>
						<Grid item xs={3} md={3}>
							<BarWeight x={typeX} y={newTypeY} />
						</Grid>
					</Grid>
				</Box>
			)}
		</Box>
	);
}

export default BarCharts;
