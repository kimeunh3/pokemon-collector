import React from 'react';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import './BreadPage.css';
// import { Link } from 'react-router-dom';

function GridCards({ bread, breadImg }) {
	const navigate = useNavigate();
	const handleClick = () => {
		alert('피카츄! 너로 정했다!');
		navigate('/pokemonDetail');
	};

	if (bread) {
		return (
			<Grid item xs={3}>
				<div
					className='bread'
					style={{ position: 'relative' }}
					onClick={handleClick}
					aria-hidden='true'
				>
					{/* <Link to='/pokemonDetail'> */}
					<img
						style={{ width: '100%', height: '100%' }}
						src={breadImg}
						alt={breadImg}
					/>
					{/* </Link> */}
				</div>
			</Grid>
		);
	}
}

export default GridCards;
