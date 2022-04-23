import React from 'react';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

function GridCards({ bread, breadImg }) {
	if (bread) {
		return (
			<Grid item xs={3}>
				<div style={{ position: 'relative' }}>
					<Link to='/pokemonDetail'>
						<img
							style={{ width: '100%', height: '100%' }}
							src={breadImg}
							alt={breadImg}
						/>
					</Link>
				</div>
			</Grid>
		);
	}
}

export default GridCards;
