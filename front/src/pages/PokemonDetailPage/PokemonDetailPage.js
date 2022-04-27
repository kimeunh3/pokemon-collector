import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import PokemonCard from './components/PokemonCard/PokemonCard';
import PokemonRadar from './components/PokemonRadar/PokemonRadar';

import * as Api from '../../api';

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
	return (
		<Container sx={{ marginTop: '165px' }}>
			<Grid container>
				<Grid item xs={6} md={6}>
					<PokemonCard pokemon={pokemon} />
				</Grid>
				<Grid item xs={6} md={6} sx={{ display: 'flex' }}>
					<PokemonRadar pokemon={pokemon} />
				</Grid>
			</Grid>
		</Container>
	);
}
export default PokemonDetailPage;
