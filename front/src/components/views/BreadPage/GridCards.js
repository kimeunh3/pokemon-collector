import React from 'react';
import Grid from '@mui/material/Grid';

function GridCards({ bread, breadImg }) {
	if (bread) {
		return (
			<Grid item xs={3}>
				<div style={{ position: 'relative' }}>
					<a href='/bread'>
						<img
							style={{ width: '280px', height: '300px' }}
							src={breadImg}
							alt={bread}
						/>
					</a>
				</div>
			</Grid>
		);
	}
}

export default GridCards;
