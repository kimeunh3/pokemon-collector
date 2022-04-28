import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
	Button,
} from '@mui/material';

import './StatisticsButton.css';

function StatisticsButton({ imgSrc, text, bColor, type }) {
    const navigate = useNavigate();

    const styles = {
        paperContainer: {
            backgroundImage: `url(https://d31z0g5vo6ghmg.cloudfront.net/${imgSrc}.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'multiply',
            width: '15vw',
            height: '15vw',
            fontSize: '2.3vw',
            color: 'black',
            fontWeight: 'bold',
            justifySelf: 'center'
        }
    };

	return (
        <Button
            variant="contained"
            color="inherit"
            className="mouse"
            style={styles.paperContainer}
            onClick={() => {
                navigate(`/StatisticsPage/TypeStatisticsPage/${type}`);
            }}
        >
            <div className="text" style={{ backgroundColor: bColor, borderRadius: '5px' }}>{text}</div>
        </Button>
	);
}

export default StatisticsButton;