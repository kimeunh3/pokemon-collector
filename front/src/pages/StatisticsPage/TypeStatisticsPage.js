import React from 'react';
import { useParams } from "react-router-dom";
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import styled from 'styled-components';

// import * as Api from '../../api';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

function typeStatisticsPage() {
  const params = useParams();
  const { type } = params;
  // const [pokemons, setPokemons] = useState([]);

  // useEffect(() => {
  //   setPokemons([])
  // }, []);

  const x = [];
  const yAttack = [];
  const yDefense = [];

  const pokemons = [{'attack': 80,
  'defense': 100,
  'height_m': 0.4,
  'hp': 40,
  'name': '꼬마돌',
  'pokedex_number': 74,
  'sp_attack': 30,
  'sp_defense': 30,
  'speed': 20,
  'status': '노말',
  'total_points': 300,
  'type_1': '바위',
  'type_2': '땅',
  'type_number': 2,
  'weight_kg': 20.0},
 {'attack': 95,
  'defense': 115,
  'height_m': 1.0,
  'hp': 55,
  'name': '데구리',
  'pokedex_number': 75,
  'sp_attack': 45,
  'sp_defense': 45,
  'speed': 35,
  'status': '노말',
  'total_points': 390,
  'type_1': '바위',
  'type_2': '땅',
  'type_number': 2,
  'weight_kg': 105.0},
 {'attack': 120,
  'defense': 130,
  'height_m': 1.4,
  'hp': 80,
  'name': '딱구리',
  'pokedex_number': 76,
  'sp_attack': 55,
  'sp_defense': 65,
  'speed': 45,
  'status': '노말',
  'total_points': 495,
  'type_1': '바위',
  'type_2': '땅',
  'type_number': 2,
  'weight_kg': 300.0},
 {'attack': 45,
  'defense': 160,
  'height_m': 8.8,
  'hp': 35,
  'name': '롱스톤',
  'pokedex_number': 95,
  'sp_attack': 30,
  'sp_defense': 45,
  'speed': 70,
  'status': '노말',
  'total_points': 385,
  'type_1': '바위',
  'type_2': '땅',
  'type_number': 2,
  'weight_kg': 210.0},
 {'attack': 40,
  'defense': 100,
  'height_m': 0.4,
  'hp': 35,
  'name': '암나이트',
  'pokedex_number': 138,
  'sp_attack': 90,
  'sp_defense': 55,
  'speed': 35,
  'status': '노말',
  'total_points': 355,
  'type_1': '바위',
  'type_2': '물',
  'type_number': 2,
  'weight_kg': 7.5},
 {'attack': 60,
  'defense': 125,
  'height_m': 1.0,
  'hp': 70,
  'name': '암스타',
  'pokedex_number': 139,
  'sp_attack': 115,
  'sp_defense': 70,
  'speed': 55,
  'status': '노말',
  'total_points': 495,
  'type_1': '바위',
  'type_2': '물',
  'type_number': 2,
  'weight_kg': 35.0},
 {'attack': 80,
  'defense': 90,
  'height_m': 0.5,
  'hp': 30,
  'name': '투구',
  'pokedex_number': 140,
  'sp_attack': 55,
  'sp_defense': 45,
  'speed': 55,
  'status': '노말',
  'total_points': 355,
  'type_1': '바위',
  'type_2': '물',
  'type_number': 2,
  'weight_kg': 11.5},
 {'attack': 115,
  'defense': 105,
  'height_m': 1.3,
  'hp': 60,
  'name': '투구푸스',
  'pokedex_number': 141,
  'sp_attack': 65,
  'sp_defense': 70,
  'speed': 80,
  'status': '노말',
  'total_points': 495,
  'type_1': '바위',
  'type_2': '물',
  'type_number': 2,
  'weight_kg': 40.5},
 {'attack': 105,
  'defense': 65,
  'height_m': 1.8,
  'hp': 80,
  'name': '프테라',
  'pokedex_number': 142,
  'sp_attack': 60,
  'sp_defense': 75,
  'speed': 130,
  'status': '노말',
  'total_points': 515,
  'type_1': '바위',
  'type_2': '비행',
  'type_number': 2,
  'weight_kg': 59.0}];

  pokemons.forEach(pokemon => {
    x.push(pokemon.name);
    yAttack.push(pokemon.attack);
    yDefense.push(pokemon.defense);
  })

  const data = {
    labels: x,
    datasets: [
      {
        label: '바위 속성 공격력',
        data: yAttack,
        backgroundColor: 'rgba(240, 128, 48, 0.5)',
      },
      {
        label: '바위 속성 방어력',
        data: yDefense,
        backgroundColor: 'rgba(248, 208, 48, 0.5)',
      },
    ],
  };

	return (
        <div style={{ paddingTop: '180px', paddingBottom: '50px' }}>
          {type} 통계페이지
          <Container>
            <Bar options={options} data={data} />
          </Container>
        </div>
	);
}

const Container = styled.div`
  width: 90vw;
  max-width: 900px;
`;

export default typeStatisticsPage;