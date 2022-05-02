import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  BarStats,
  DoughnutType,
  BarWeightHeight,
  BarTotal,
} from './components/StatisticsCharts/TypeStatisticsCharts';
import TypeDrawerComponents from './components/DrawerComponents/TypeDrawerComponents';

import * as Api from '../../api';

function TypeStatisticsPage() {
  const params = useParams();
  const { type } = params;
  const [isBarStats, setIsBarStats] = useState(true);
  const [isDoughnutType, setIsDoughnutType] = useState(false);
  const [isBarWeightHeight, setIsBarWeightHeight] = useState(false);
  const [isBarTotal, setIsBarTotal] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [x, setX] = useState();
  const [y, setY] = useState();
  const [pokemonInfo, setPokemonInfo] = useState();
  const typeColorList = {
    노말: 'rgba(198, 198, 167, 0.8)',
    불꽃: 'rgba(245, 172, 120, 0.8)',
    물: 'rgba(157, 183, 245, 0.8)',
    풀: 'rgba(167, 219, 141, 0.8)',
    전기: 'rgba(250, 224, 120, 0.8)',
    얼음: 'rgba(188, 230, 230, 0.8)',
    격투: 'rgba(214, 120, 115, 0.8)',
    독: 'rgba(193, 131, 193, 0.8)',
    땅: 'rgba(235, 214, 157, 0.8)',
    비행: 'rgba(198, 183, 245, 0.8)',
    에스퍼: 'rgba(250, 146, 178, 0.8)',
    벌레: 'rgba(198, 209, 110, 0.8)',
    바위: 'rgba(209, 193, 125, 0.8)',
    고스트: 'rgba(162, 146, 188, 0.8)',
    드래곤: 'rgba(162, 125, 250, 0.8)',
    강철: 'rgba(209, 209, 224, 0.8)',
    페어리: 'rgba(244, 189, 201, 0.8)',
  };

  useEffect(() => {
    Api.get(`pokemonList/${type}`).then((res) => {
      setPokemons(res.data);
    });
  }, []);

  useEffect(() => {
    const newX = [];
    const newY = {
      attack: [],
      defense: [],
      hp: [],
      spAttack: [],
      spDefense: [],
      speed: [],
      height: [],
      weight: [],
      totalPoints: [],
      typesCnt: {
        노말: 0,
        불꽃: 0,
        물: 0,
        풀: 0,
        전기: 0,
        얼음: 0,
        격투: 0,
        독: 0,
        땅: 0,
        비행: 0,
        에스퍼: 0,
        벌레: 0,
        바위: 0,
        고스트: 0,
        드래곤: 0,
        강철: 0,
        페어리: 0,
        없음: 0,
      },
    };
    pokemons.forEach((pokemon) => {
      newX.push(pokemon.name);
      newY.attack.push(pokemon.attack);
      newY.defense.push(pokemon.defense);
      newY.hp.push(pokemon.hp);
      newY.spAttack.push(pokemon.spAttack);
      newY.spDefense.push(pokemon.spDefense);
      newY.speed.push(pokemon.speed);
      newY.height.push(pokemon.height);
      newY.weight.push(pokemon.weight);
      newY.totalPoints.push(pokemon.totalPoints);
      newY.typesCnt[pokemon.typeOne] += 1;
      newY.typesCnt[pokemon.typeTwo] += 1;
    });
    newY.typesCnt[type] = 0;

    setX(newX);
    setY(newY);

    const average = (arr) => arr.reduce((p, c) => p + c, 0) / arr.length;

    setPokemonInfo({
      pokemonCnt: newX.length,
      attackMean: average(newY.attack).toFixed(1),
      defenseMean: average(newY.defense).toFixed(1),
      hpMean: average(newY.hp).toFixed(1),
      spAttackMean: average(newY.spAttack).toFixed(1),
      spDefenseMean: average(newY.spDefense).toFixed(1),
      speedMean: average(newY.speed).toFixed(1),
      heightMean: average(newY.height).toFixed(1),
      weightMean: average(newY.weight).toFixed(1),
      totalPointsMean: average(newY.totalPoints).toFixed(1),
    });
  }, [pokemons]);

  if (!pokemonInfo) return null;

  return (
    <div>
      <TypeDrawerComponents
        type={type}
        typeColor={typeColorList[type]}
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

export default TypeStatisticsPage;
