import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import PokemonCard from './components/PokemonCard/PokemonCard';
import PokemonRadar from './components/PokemonRadar/PokemonRadar';
import BarCharts from './components/BarCharts/BarCharts';

import * as Api from '../../api';
import IconObj from '../../core/Icon';

function PokemonDetailPage() {
	const [pokemon, setPokemon] = useState([]);
	const [radarDataOne, setRadarDataOne] = useState(null);
	const params = useParams();

	useEffect(() => {
		const fetchPokemonOne = async () => {
			const response = await Api.get('pokemon', params.pokemonId);
			setPokemon(response.data);
		};
		const fetchRadarData = async () => {
			const response = await Api.get('pokemonData', params.pokemonId);
			setRadarDataOne(response.data);
		};

		fetchPokemonOne();
		fetchRadarData();
	}, []);

	const { typeOne, typeTwo } = pokemon;

	const iconOne = typeOne && IconObj[typeOne].Icon;
	const typeOneColor = typeOne && IconObj[typeOne].Color.color;
	const iconTwo = IconObj[typeTwo] ? IconObj[typeTwo].Icon : '';
	const typeTwoColor = IconObj[typeTwo] ? IconObj[typeTwo].Color.color : '';

	return (
		<Container sx={{ marginTop: '25vh', width: '100%' }}>
			<Grid container spacing={2}>
				<Grid item xs={6} md={6}>
					{pokemon && (
						<PokemonCard
							pokemon={pokemon}
							iconOne={iconOne}
							typeOneColor={typeOneColor}
							iconTwo={iconTwo}
							typeTwoColor={typeTwoColor}
						/>
					)}
				</Grid>
				<Grid item xs={6} md={6} sx={{ display: 'flex' }}>
					{radarDataOne && <PokemonRadar radarDataOne={radarDataOne} />}
				</Grid>
			</Grid>
			<BarCharts id={params.pokemonId} />
		</Container>
	);
}
export default PokemonDetailPage;
