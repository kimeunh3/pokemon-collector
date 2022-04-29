import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import PokemonCard from './components/PokemonCard/PokemonCard';
import PokemonRadar from './components/PokemonRadar/PokemonRadar';

import * as Api from '../../api';
import IconObj from '../../core/Icon';

function PokemonDetailPage() {
	const [pokemon, setPokemon] = useState([]);
	const params = useParams();

	useEffect(() => {
		const fetchPokemonOne = async () => {
			const response = await Api.get('pokemon', params.pokemonId);
			setPokemon(response.data);
		};
		fetchPokemonOne();
	}, []);

	const { typeOne, typeTwo } = pokemon;

	const iconOne = typeOne && IconObj[typeOne].Icon;
	const typeOneColor = typeOne && IconObj[typeOne].Color.color;
	const iconTwo = IconObj[typeTwo] ? IconObj[typeTwo].Icon : '';
	const typeTwoColor = IconObj[typeTwo] ? IconObj[typeTwo].Color.color : '';

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
		</Container>
	);
}
export default PokemonDetailPage;
