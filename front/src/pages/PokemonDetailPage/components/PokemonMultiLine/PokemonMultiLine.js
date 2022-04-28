import React, { useEffect } from 'react';
import { Chart, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2';

// import * as Api from '../../../../api';

Chart.register(...registerables);

function PokemonMultiLine() {
	// const [attack, setAttack] = useState();

	useEffect(() => {
		const fetchDrawPokemon = async () => {
			// const response = await Api.get('drawPokemon');
			// setDrawPokemon(response.data);
		};
		fetchDrawPokemon();
	}, []);

	const data = {
		labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
		datasets: [
			{
				label: 'First dataset',
				data: [33, 53, 85, 41, 44, 65],
				fill: false,
				backgroundColor: 'rgba(75,192,192,0.2)',
				borderColor: 'rgba(75,192,192,1)',
			},
			{
				label: 'Second dataset',
				data: [33, 25, 35, 51, 54, 76],
				fill: false,
				borderColor: '#742774',
			},
		],
	};

	return (
		<div>
			<Line data={data} />
		</div>
	);
}

export default PokemonMultiLine;
