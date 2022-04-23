import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function PokemonBookCard({ name, num }) {
  const navigate = useNavigate();
  const bColor = '#F8D030';
  const b2Color = 'black';
  const imgSrc = `images/IllustratedBookPage/${num}.png`
  
    return (
      <Card onClick={() => navigate('/pokemonDetail')} style={ b2Color ? { 
        width: '220px', justifySelf: 'center', cursor: 'pointer', boxShadow: `inset 0px 0px 30px ${bColor}, inset 0px -25px ${b2Color}`
      } : { 
          width: '220px', justifySelf: 'center', cursor: 'pointer', boxShadow: `inset 0px 0px 30px ${bColor}`
          } }>
          <CardMedia style={{ textAlign: 'center'}}>
              <img alt="" src={imgSrc} style={{ marginTop: '1rem', width: "140px" }} />
          </CardMedia>
          <CardContent>
              <Typography gutterBottom variant="h5" component="div" style={{ textAlign: 'center' }}>
              <img alt="" src='images/IllustratedBookPage/electricIcon.png' style={{ width: '30px' }} />
               {name}
              </Typography>
          </CardContent>
      </Card>
    );
  }

export default PokemonBookCard;