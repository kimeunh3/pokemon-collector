import React from 'react';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import '../../BreadPage.css';
// import { Link } from 'react-router-dom';

function GridCards({ bread, breadImg }) {
	const navigate = useNavigate();
	const handleClick = () => {
		alert('피카츄! 너로 정했다!');
		navigate('/pokemonDetail');
	};

	const breadImgSrc = `https://pokemon-collector.s3.ap-northeast-2.amazonaws.com/front/bread/${breadImg}.png`;

	if (bread) {
		return (
			<Grid item xs={3}>
				<div
					className='bread'
					style={{ position: 'relative' }}
					onClick={handleClick}
					aria-hidden='true'
				>
					<img
						style={{ width: '100%', height: '100%' }}
						src={breadImgSrc}
						alt={breadImg}
					/>
				</div>
			</Grid>
		);
	}
}

export default GridCards;
