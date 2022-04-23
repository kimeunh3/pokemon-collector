import React from 'react';
import Grid from '@mui/material/Grid';

function GridCards({ bread, breadImg }) {
	if (bread) {
		return (
			<Grid item xs={3}>
				<div style={{ position: 'relative' }}>
					<a href='/bread'>
						<img
							style={{ width: '100%', height: '100%' }}
							src={breadImg}
							alt={breadImg}
						/>
					</a>
				</div>
			</Grid>
		);
	}
}

export default GridCards;
