import React from 'react';
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@mui/material';

function ServiceSection() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        backgroundColor: '#FFFFFF',
        padding: '150px 0 150px 0',
      }}
    >
      <div style={{ textAlign: 'center', fontSize: '30px' }}>
        다양한 방법으로 포인트를 모으고
        <br />
        포켓몬빵을 구입해 포켓몬을 수집할 수 있습니다!
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr '.repeat(3),
          gap: '80px',
          margin: '100px 100px 150px 100px',
        }}
      >
        <Card style={{ maxWidth: '500px', justifySelf: 'center' }}>
          <CardMedia
            component='img'
            height='140'
            image='/static/images/cards/contemplative-reptile.jpg'
            alt='green iguana'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              Lizard
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size='small'>Share</Button>
            <Button size='small'>Learn More</Button>
          </CardActions>
        </Card>
        <Card style={{ maxWidth: '500px', justifySelf: 'center' }}>
          <CardMedia
            component='img'
            height='140'
            image='/static/images/cards/contemplative-reptile.jpg'
            alt='green iguana'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              Lizard
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size='small'>Share</Button>
            <Button size='small'>Learn More</Button>
          </CardActions>
        </Card>
        <Card style={{ maxWidth: '500px', justifySelf: 'center' }}>
          <CardMedia
            component='img'
            height='140'
            image='/static/images/cards/contemplative-reptile.jpg'
            alt='green iguana'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              Lizard
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size='small'>Share</Button>
            <Button size='small'>Learn More</Button>
          </CardActions>
        </Card>
      </div>
      <div style={{ textAlign: 'center', fontSize: '30px' }}>
        포켓몬에 대한 정보를 알아보고
        <br />
        자신의 랭킹을 확인해보세요!
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr '.repeat(3),
          gap: '80px',
          margin: '100px 100px 0 100px',
        }}
      >
        <Card style={{ maxWidth: '500px', justifySelf: 'center' }}>
          <CardMedia
            component='img'
            height='140'
            image='/static/images/cards/contemplative-reptile.jpg'
            alt='green iguana'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              Lizard
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size='small'>Share</Button>
            <Button size='small'>Learn More</Button>
          </CardActions>
        </Card>
        <Card style={{ maxWidth: '500px', justifySelf: 'center' }}>
          <CardMedia
            component='img'
            height='140'
            image='/static/images/cards/contemplative-reptile.jpg'
            alt='green iguana'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              Lizard
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size='small'>Share</Button>
            <Button size='small'>Learn More</Button>
          </CardActions>
        </Card>
        <Card style={{ maxWidth: '500px', justifySelf: 'center' }}>
          <CardMedia
            component='img'
            height='140'
            image='/static/images/cards/contemplative-reptile.jpg'
            alt='green iguana'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              Lizard
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size='small'>Share</Button>
            <Button size='small'>Learn More</Button>
          </CardActions>
        </Card>
      </div>
    </Box>
  );
}

export default ServiceSection;
