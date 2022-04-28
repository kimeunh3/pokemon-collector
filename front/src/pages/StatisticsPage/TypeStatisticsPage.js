import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import { BarStats, DoughnutType, PolarAreaType, BarWeightHeight, BarTotal, PieStatus } from './components/TypeStatisticsCharts/TypeStatisticsCharts';
import DrawerComponents from './components/DrawerComponents';

// import * as Api from '../../api';

function TypeStatisticsPage() {
  const params = useParams();
  const { type } = params;
  const [isBarStats, setIsBarStats] = useState(true);
  const [isDoughnutType, setIsDoughnutType] = useState(false);
  const [isPolarAreaType, setIsPolarAreaType] = useState(false);
  const [isBarWeightHeight, setIsBarWeightHeight] = useState(false);
  const [isBarTotal, setIsBarTotal] = useState(false);
  const [isPieStatus, setIsPieStatus] = useState(false);
  // const [pokemons, setPokemons] = useState([]);

  // useEffect(() => {
  //   setPokemons([])
  // }, []);

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

  const x = [];
  const y = {
    attack: [],
    defense: [],
    hp: [],
    spAttack: [],
    spDefense: [],
    speed: [],
    height: [],
    weight: [],
    totalPoints: [],
    typesCnt: { '노말': 0, '불꽃': 0, '물': 0, '풀': 0, '전기': 0, '얼음': 0, '격투': 0, '독': 0, '땅': 0, '비행': 0, '에스퍼': 0, '벌레': 0, '바위': 0, '고스트': 0, '드래곤': 0, '강철': 0, '페어리': 0, 'NaN': 0 },
    typeNumber: [0, 0],
    status: {'노말':0,'전설':0,'환상':0},
  }

  const typeColorList = { '노말': '#A8A878', '불꽃': '#F08030', '물': '#6890F0', '풀': '#78C850', '전기': '#F8D030', '얼음': '#98D8D8', '격투': '#C03028', '독': '#A040A0', '땅': '#E0C068', '비행': '#A890F0', '에스퍼': '#F85888', '벌레': '#A8B820', '바위': '#B8A038', '고스트': '#705898', '드래곤': '#7038F8', '강철': '#B8B8D0', '페어리': '#EE99AC' };

  pokemons.forEach(pokemon => {
    x.push(pokemon.name);
    y.attack.push(pokemon.attack);
    y.defense.push(pokemon.defense);
    y.hp.push(pokemon.hp);
    y.spAttack.push(pokemon.sp_attack);
    y.spDefense.push(pokemon.sp_defense);
    y.speed.push(pokemon.speed);
    y.height.push(pokemon.height_m);
    y.weight.push(pokemon.weight_kg);
    y.totalPoints.push(pokemon.total_points);
    y.typesCnt[pokemon.type_1] += 1;
    y.typesCnt[pokemon.type_2] += 1;
    y.typeNumber[pokemon.type_number-1] += 1;
    y.status[pokemon.status]+=1;
  })

  y.typesCnt[type] = 0
  delete y.typesCnt.NaN;

	return (
    <div>
      <DrawerComponents
        typeColor={typeColorList[type]}
        isBarStats={isBarStats}
        isDoughnutType={isDoughnutType}
        isPolarAreaType={isPolarAreaType}
        isBarWeightHeight={isBarWeightHeight}
        isBarTotal={isBarTotal}
        isPieStatus={isPieStatus}
        setIsBarStats={setIsBarStats}
        setIsDoughnutType={setIsDoughnutType}
        setIsPolarAreaType={setIsPolarAreaType}
        setIsBarWeightHeight={setIsBarWeightHeight}
        setIsBarTotal={setIsBarTotal}
        setIsPieStatus={setIsPieStatus}
      />
      <div style={{ margin: '80px 50px auto 320px' }}>
          {isBarStats && <BarStats x={x} y={y} />}
          {isDoughnutType && <DoughnutType y={y} />}
          {isPolarAreaType && <PolarAreaType y={y} />}
          {isBarWeightHeight && <BarWeightHeight x={x} y={y} />}
          {isBarTotal && <BarTotal x={x} y={y} />}
          {isPieStatus && <PieStatus y={y} />}
      </div>
    </div>
	);
}

export default TypeStatisticsPage;