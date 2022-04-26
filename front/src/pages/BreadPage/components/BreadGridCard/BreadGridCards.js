import React from 'react';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import '../../BreadPage.css';
// import { Link } from 'react-router-dom';

function GridCards({ bread, breadImg }) {
	const randNum = Math.floor(Math.random() * 151 + 1);

	const navigate = useNavigate();
	const handleClick = () => {
		alert(randNum);
		navigate(`/pokemonDetail/${randNum}`);
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
