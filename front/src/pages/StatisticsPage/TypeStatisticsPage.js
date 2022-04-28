import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { BarStats, DoughnutType, BarWeightHeight, BarTotal } from './components/TypeStatisticsCharts/TypeStatisticsCharts';
import DrawerComponents from './components/DrawerComponents';

import * as Api from '../../api';

function TypeStatisticsPage() {
  const params = useParams();
  const { type } = params;
  const [isBarStats, setIsBarStats] = useState(true);
  const [isDoughnutType, setIsDoughnutType] = useState(false);
  const [isBarWeightHeight, setIsBarWeightHeight] = useState(false);
  const [isBarTotal, setIsBarTotal] = useState(false);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    Api.get(`pokemonList/${type}`)
      .then((res) => {
        console.log(res.data);
        setPokemons(res.data);
      })
  }, []);

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
    typesCnt: { '노말': 0, '불꽃': 0, '물': 0, '풀': 0, '전기': 0, '얼음': 0, '격투': 0, '독': 0, '땅': 0, '비행': 0, '에스퍼': 0, '벌레': 0, '바위': 0, '고스트': 0, '드래곤': 0, '강철': 0, '페어리': 0, "없음": 0 },
  }

  const typeColorList = { '노말': '#A8A878', '불꽃': '#F08030', '물': '#6890F0', '풀': '#78C850', '전기': '#F8D030', '얼음': '#98D8D8', '격투': '#C03028', '독': '#A040A0', '땅': '#E0C068', '비행': '#A890F0', '에스퍼': '#F85888', '벌레': '#A8B820', '바위': '#B8A038', '고스트': '#705898', '드래곤': '#7038F8', '강철': '#B8B8D0', '페어리': '#EE99AC' };

  pokemons.forEach(pokemon => {
    x.push(pokemon.name);
    y.attack.push(pokemon.attack);
    y.defense.push(pokemon.defense);
    y.hp.push(pokemon.hp);
    y.spAttack.push(pokemon.spAttack);
    y.spDefense.push(pokemon.spDefense);
    y.speed.push(pokemon.speed);
    y.height.push(pokemon.height);
    y.weight.push(pokemon.weight);
    y.totalPoints.push(pokemon.totalPoints);
    y.typesCnt[pokemon.typeOne] += 1;
    y.typesCnt[pokemon.typeTwo] += 1;
  })

  y.typesCnt[type] = 0

	return (
    <div>
      <DrawerComponents
        typeColor={typeColorList[type]}
        isBarStats={isBarStats}
        isDoughnutType={isDoughnutType}
        isBarWeightHeight={isBarWeightHeight}
        isBarTotal={isBarTotal}
        setIsBarStats={setIsBarStats}
        setIsDoughnutType={setIsDoughnutType}
        setIsBarWeightHeight={setIsBarWeightHeight}
        setIsBarTotal={setIsBarTotal}
      />
      <div style={{ margin: '80px 50px auto 330px' }}>
          {isBarStats && <BarStats x={x} y={y} />}
          {isDoughnutType && <DoughnutType y={y} />}
          {isBarWeightHeight && <BarWeightHeight x={x} y={y} />}
          {isBarTotal && <BarTotal x={x} y={y} />}
      </div>
    </div>
	);
}

export default TypeStatisticsPage;