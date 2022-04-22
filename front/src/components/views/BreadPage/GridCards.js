import React from 'react';
import Grid from '@mui/material/Grid';

function GridCards(props) {
	if (props) {
		return (
			<Grid lg={6} md={8} xs={24}>
				<div style={{ position: 'relative' }}>
					<a href='/'>
						<img
							style={{ width: '100%', height: '320px' }}
							src={props}
							alt={props}
						/>
					</a>
				</div>
			</Grid>
		);
	}
}

export default GridCards;
