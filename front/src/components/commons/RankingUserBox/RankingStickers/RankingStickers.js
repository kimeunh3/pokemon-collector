import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { pokemonURL } from '../../../../core/constants/ImgSrc';

function RankingStickers({ id, name }) {
  const imgSrc = `${pokemonURL}/${id}.png`;
  return (
    <Box>
      <Card
        style={{
          width: '170px',
          margin: '0 5px 0 5px',
          justifySelf: 'center',
        }}
      >
        <CardMedia style={{ textAlign: 'center' }}>
          <img alt='' src={imgSrc} style={{ width: '150px' }} />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant='h6' style={{ textAlign: 'center' }}>
            {id}.{name}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default RankingStickers;
