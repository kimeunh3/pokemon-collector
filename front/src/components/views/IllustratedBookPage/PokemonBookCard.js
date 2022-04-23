import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function PokemonBookCard({ name }) {
  //   const [Login, setLogin] = useState(true);
  
  
    return (
      <Card style={{ width: '220px', justifySelf: 'center' }}>
          <CardMedia style={{ textAlign: 'center'}}>
              <img alt="" src={require("./metamon.png")} style={{ marginTop: '1rem', width: "140px" }} />
          </CardMedia>
          <CardContent>
              <Typography gutterBottom variant="h5" component="div" style={{ textAlign: 'center' }}>
              {name}
              </Typography>
          </CardContent>
      </Card>
    );
  }

export default PokemonBookCard;