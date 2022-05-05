import React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@mui/material';

function ServiceSectionCard({
  imgSrc,
  title,
  text,
  handleClick,
  buttonText,
  isRanking = false,
}) {
  return (
    <Card
      style={{
        maxWidth: '500px',
        justifySelf: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <CardMedia component='img' image={imgSrc} alt='homeImg' />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {title}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {text}
        </Typography>
      </CardContent>
      <CardActions>
        {isRanking ? (
          <Button size='small' disabled>
            {buttonText}
          </Button>
        ) : (
          <Button size='small' onClick={handleClick}>
            {buttonText}
          </Button>
        )}
      </CardActions>
    </Card>
  );
}

export default ServiceSectionCard;
