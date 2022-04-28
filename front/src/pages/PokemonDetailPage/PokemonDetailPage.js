import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import {
	Adjust,
	LocalFireDepartment,
	Opacity,
	Grass,
	Bolt,
	BugReport,
	AcUnit,
	SportsMma,
	Coronavirus,
	Landscape,
	Air,
	Storm,
	Castle,
	DarkMode,
	Adb,
	Hardware,
	Reddit,
} from '@mui/icons-material';

import PokemonCard from './components/PokemonCard/PokemonCard';
import PokemonRadar from './components/PokemonRadar/PokemonRadar';
import PokemonMultiLine from './components/PokemonMultiLine/PokemonMultiLine';

import * as Api from '../../api';

function PokemonDetailPage() {
	const [pokemon, setPokemon] = useState([]);
	const params = useParams();

	const IconObj = {
		노말: {
			Icon: <Adjust />,
			Color: '#A8A878',
		},
		불꽃: {
			Icon: <LocalFireDepartment />,
			Color: '#F08030',
		},
		물: {
			Icon: <Opacity />,
			Color: '#6890F0',
		},
		풀: {
			Icon: <Grass />,
			Color: '#78C850',
		},
		전기: {
			Icon: <Bolt />,
			Color: '#F8D030',
		},
		얼음: {
			Icon: <AcUnit />,
			Color: '#98D8D8',
		},
		격투: {
			Icon: <SportsMma />,
			Color: '#C03028',
		},
		독: {
			Icon: <Coronavirus />,
			Color: '#A040A0',
		},
		땅: {
			Icon: <Landscape />,
			Color: '#E0C068',
		},
		비행: {
			Icon: <Air />,
			Color: '#A890F0',
		},
		에스퍼: {
			Icon: <Storm />,
			Color: '#F85888',
		},
		벌레: {
			Icon: <BugReport />,
			Color: '#A8B820',
		},
		바위: {
			Icon: <Castle />,
			Color: '#B8A038',
		},
		고스트: {
			Icon: <DarkMode />,
			Color: '#705898',
		},
		드래곤: {
			Icon: <Adb />,
			Color: '#7038F8',
		},
		강철: {
			Icon: <Hardware />,
			Color: '#B8B8D0',
		},
		페어리: {
			Icon: <Reddit />,
			Color: '#EE99AC',
		},
	};

	useEffect(() => {
		const fetchPokemonOne = async () => {
			const response = await Api.get('pokemon', params.pokemonId);
			setPokemon(response.data);
		};
		fetchPokemonOne();
	}, []);

	const { typeOne, typeTwo } = pokemon;

	const iconOne = typeOne && IconObj[typeOne].Icon;
	const typeOneColor = typeOne && IconObj[typeOne].Color;
	const iconTwo = IconObj[typeTwo] ? IconObj[typeTwo].Icon : '';
	const typeTwoColor = IconObj[typeTwo] ? IconObj[typeTwo].Color : '';

	return (
		<Container sx={{ marginTop: '165px', width: '100%' }}>
			<Grid container>
				<Grid item xs={6} md={6}>
					<PokemonCard
						pokemon={pokemon}
						iconOne={iconOne}
						typeOneColor={typeOneColor}
						iconTwo={iconTwo}
						typeTwoColor={typeTwoColor}
					/>
				</Grid>
				<Grid item xs={6} md={6} sx={{ display: 'flex' }}>
					<PokemonRadar pokemon={pokemon} typeOneColor={typeOneColor} />
				</Grid>
			</Grid>
			<PokemonMultiLine />
		</Container>
	);
}
export default PokemonDetailPage;
