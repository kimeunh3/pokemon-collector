import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { pokemonURL } from '../../../../core/constants/ImgSrc';

const TYPE_1_LIST = {
  // normal
  20: [
    16, 17, 18, 19, 20, 21, 22, 39, 40, 52, 53, 83, 84, 85, 108, 113, 115, 128,
    132, 133, 137, 143,
  ],
  // fire
  30: [4, 5, 6, 37, 38, 58, 59, 77, 78, 126, 136, 146],
  // water
  40: [
    7, 8, 9, 54, 55, 60, 61, 62, 72, 73, 79, 80, 86, 87, 90, 91, 98, 99, 116,
    117, 118, 119, 120, 121, 129, 130, 131, 134,
  ],
  // grass
  50: [1, 2, 3, 43, 44, 45, 69, 70, 71, 102, 103, 114],
  // electric
  60: [25, 26, 81, 82, 100, 101, 125, 135, 145],
  // ice
  70: [124, 144],
  // fighting
  80: [56, 57, 66, 67, 68, 106, 107],
  // poison
  90: [23, 24, 29, 30, 31, 32, 33, 34, 41, 42, 88, 89, 109, 110],
  // ground
  100: [27, 28, 50, 51, 104, 105, 111, 112],
  // psychic
  120: [63, 64, 65, 96, 97, 122, 150, 151],
  // bug
  130: [10, 11, 12, 13, 14, 15, 46, 47, 48, 49, 123, 127],
  // rock
  140: [74, 75, 76, 95, 138, 139, 140, 141, 142],
  // ghost
  150: [92, 93, 94],
  // dragon
  160: [147, 148, 149],
  // fairy
  180: [35, 36],
};

const TYPE_2_LIST = {
  // water
  40: [138, 139, 140, 141],
  // grass
  50: [46, 47],
  // ice
  70: [87, 91, 131],
  // fighting
  80: [62],
  // poison
  90: [1, 2, 3, 13, 14, 15, 43, 44, 45, 48, 49, 69, 70, 71, 72, 73, 92, 93, 94],
  // ground
  100: [31, 34, 74, 75, 76, 9],
  // flying
  110: [
    6, 12, 16, 17, 18, 21, 22, 41, 42, 83, 84, 85, 123, 130, 142, 144, 145, 146,
    149,
  ],
  // psychic
  120: [79, 80, 102, 103, 121, 124],
  // rock
  140: [111, 112],
  // steel
  170: [81, 82],
  // fairy
  180: [39, 40, 122],
};

const TYPE_COLOR_LIST = {
  10: '#fff',
  20: '#A8A878',
  30: '#F08030',
  40: '#6890F0',
  50: '#78C850',
  60: '#F8D030',
  70: '#98D8D8',
  80: '#C03028',
  90: '#A040A0',
  100: '#E0C068',
  110: '#A890F0',
  120: '#F85888',
  130: '#A8B820',
  140: '#B8A038',
  150: '#705898',
  160: '#7038F8',
  170: '#B8B8D0',
  180: '#EE99AC',
};

function PokemonBookCard({ name, selectType, searchName, num }) {
  const navigate = useNavigate();
  const [type1, setType1] = useState('10');
  const [type2, setType2] = useState('10');
  const imgSrc = `${pokemonURL}/${num}.png`;
  const [bColor, setBColor] = useState('#fff');
  const [b2Color, setB2Color] = useState('#fff');

  useEffect(() => {
    Object.entries(TYPE_1_LIST).forEach((item) => {
      if (item[1].includes(num)) {
        setType1(item[0]);
      }
    });

    Object.entries(TYPE_2_LIST).forEach((item) => {
      if (item[1].includes(num)) {
        setType2(item[0]);
      }
    });
  }, []);

  useEffect(() => {
    setBColor(TYPE_COLOR_LIST[type1]);
    setB2Color(TYPE_COLOR_LIST[type2]);
  }, [type1, type2]);

  if (searchName && !name.includes(searchName)) return null;

  if (selectType !== '10' && type1 !== selectType && type2 !== selectType) {
    return null;
  }

  return (
    <Card
      onClick={() => navigate(`/pokemonDetail/${num}`)}
      style={{
        width: '220px',
        justifySelf: 'center',
        cursor: 'pointer',
        boxShadow:
          type2 === '10'
            ? `inset 0px 0px 30px ${bColor}`
            : `inset 0px 0px 30px ${bColor}, inset 0px -25px ${b2Color}`,
      }}
    >
      <CardMedia style={{ textAlign: 'center' }}>
        <img
          alt=''
          src={imgSrc}
          style={{ marginTop: '1rem', width: '140px' }}
        />
      </CardMedia>
      <CardContent>
        <Typography
          gutterBottom
          variant='h5'
          component='div'
          style={{ textAlign: 'center' }}
        >
          {num}.{name}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default PokemonBookCard;
