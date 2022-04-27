import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function DefaultBookCard({ selectType1, selectType2, searchName }) {

  if (selectType1 !== '10' ) return null;
  if (selectType2 !== '10' ) return null;
  if (searchName) return null;

  return (
    <Card style={{ width: '220px', justifySelf: 'center' }}>
        <CardMedia style={{ textAlign: 'center'}}>
            <img alt="" src='https://pokemon-collector.s3.ap-northeast-2.amazonaws.com/pokemons/pokeball.png' style={{ marginTop: '1rem', width: "140px" }} />
        </CardMedia>
        <CardContent>
            <Typography gutterBottom variant="h5" component="div" style={{ textAlign: 'center' }}>
            ???
            </Typography>
        </CardContent>
    </Card>
  );
}

export default DefaultBookCard;