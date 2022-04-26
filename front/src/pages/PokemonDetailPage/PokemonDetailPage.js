import React, { useEffect, useState } from 'react';
import PokemonCard from './components/PokemonCard/PokemonCard';

import * as Api from '../../api';

function PokemonDetailPage() {
	const [pokemon, setPokemon] = useState([]);

	useEffect(() => {
		const fetchPokemon = async () => {
			const response = await Api.get('pokemon', 149);
			setPokemon(response.data);
		};
		fetchPokemon();
	}, []);

	return <PokemonCard pokemon={pokemon} />;
}
export default PokemonDetailPage;
