import React from 'react';
import {
	Button,
} from '@mui/material';

function StatisticsButton({ imageSrc, text, bColor }) {

    const styles = {
        paperContainer: {
            backgroundImage: `url(${imageSrc})`,
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
        >
            <div style={{ backgroundColor: bColor, borderRadius: '5px' }}>{text}</div>
        </Button>
	);
}

export default StatisticsButton;