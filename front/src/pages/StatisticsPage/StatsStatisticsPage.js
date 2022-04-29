import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { BarStats, DoughnutType, BarWeightHeight, BarTotal } from './components/StatisticsCharts/TypeStatisticsCharts';
import StatsDrawerComponents from './components/DrawerComponents/StatsDrawerComponents';

import * as Api from '../../api';

function StatsStatisticsPage() {
  const params = useParams();
  const { stats } = params;
  const [isBarStats, setIsBarStats] = useState(true);
  const [isDoughnutType, setIsDoughnutType] = useState(false);
  const [isBarWeightHeight, setIsBarWeightHeight] = useState(false);
  const [isBarTotal, setIsBarTotal] = useState(false);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    Api.get(`pokemonList/${stats}`)
      .then((res) => {
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

  const statsColorList = {
    '공격력': 'rgba(240, 128, 48, 0.8)',
    '방어력': 'rgba(248, 208, 48, 0.8)',
    'Hp': 'rgba(255, 0, 0, 0.8)',
    '특수공격력':'rgba(104, 144, 240, 0.8)',
    '특수방어력': 'rgba(120, 200, 80, 0.8)',
    '스피드': 'rgba(193, 131, 193, 0.8)',
    '키': 'rgba(161, 57, 89, 0.8)',
    '몸무게': 'rgba(68, 94, 156, 0.8)',
    '종합점수': 'rgba(128, 128, 128, 0.8)',
  };

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

  const average = arr => arr.reduce((p, c) => p + c, 0) / arr.length;

  const pokemonInfo = {
    pokemonCnt: x.length,
    attackMean: average(y.attack).toFixed(1),
    defenseMean: average(y.defense).toFixed(1),
    hpMean: average(y.hp).toFixed(1),
    spAttackMean: average(y.spAttack).toFixed(1),
    spDefenseMean: average(y.spDefense).toFixed(1),
    speedMean: average(y.speed).toFixed(1),
    heightMean: average(y.height).toFixed(1),
    weightMean: average(y.weight).toFixed(1),
    totalPointsMean: average(y.totalPoints).toFixed(1),
  }

	return (
    <div>
      <StatsDrawerComponents
        stats={stats}
        statsColor={statsColorList[stats]}
        pokemonInfo={pokemonInfo}
        isBarStats={isBarStats}
        isDoughnutType={isDoughnutType}
        isBarWeightHeight={isBarWeightHeight}
        isBarTotal={isBarTotal}
        setIsBarStats={setIsBarStats}
        setIsDoughnutType={setIsDoughnutType}
        setIsBarWeightHeight={setIsBarWeightHeight}
        setIsBarTotal={setIsBarTotal}
      />
      <div style={{ margin: '10vh 3vw auto 25vw' }}>
          {isBarStats && <BarStats x={x} y={y} />}
          {isDoughnutType && <DoughnutType y={y} />}
          {isBarWeightHeight && <BarWeightHeight x={x} y={y} />}
          {isBarTotal && <BarTotal x={x} y={y} />}
      </div>
    </div>
	);
}

export default StatsStatisticsPage;