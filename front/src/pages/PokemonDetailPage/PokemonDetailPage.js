import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PokemonCard from './components/PokemonCard/PokemonCard';

import * as Api from '../../api';

function PokemonDetailPage() {
	const [pokemon, setPokemon] = useState([]);
	const params = useParams();
	console.log(params.pokemonId);
	useEffect(() => {
		const fetchPokemon = async () => {
			const response = await Api.get('pokemon', params.pokemonId);
			setPokemon(response.data);
		};
		fetchPokemon();
	}, []);
	console.log(pokemon);
	return <PokemonCard pokemon={pokemon} />;
}
export default PokemonDetailPage;
