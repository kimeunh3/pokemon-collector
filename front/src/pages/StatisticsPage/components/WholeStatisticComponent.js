import React, { useState, useEffect } from 'react';
import {
  WholeStatsStatisticsCharts,
  WholeTypeCharts,
} from './StatisticsCharts/WholeStatsStatisticsCharts';

import * as Api from '../../../api';

const TYPE_TO_NUM = {
  노말: 0,
  불꽃: 1,
  물: 2,
  풀: 3,
  전기: 4,
  얼음: 5,
  격투: 6,
  독: 7,
  땅: 8,
  비행: 9,
  에스퍼: 10,
  벌레: 11,
  바위: 12,
  고스트: 13,
  드래곤: 14,
  강철: 15,
  페어리: 16,
};

const ENG_TYPE = [
  'normal',
  'fire',
  'water',
  'grass',
  'electric',
  'ice',
  'fight',
  'poison',
  'ground',
  'flying',
  'psychic',
  'bug',
  'rock',
  'ghost',
  'dragon',
  'steel',
  'fairy',
];

function wholeStatistic(
  pokemons,
  setPokemons,
  setY,
  pokemonTotalInfo,
  setPokemonTotalInfo
) {
  useEffect(() => {
    Api.get('pokemonList').then((res) => {
      setPokemons(res.data);
    });
  }, []);

  useEffect(() => {
    Api.get('pokemonScaledMeanData/total').then((res) => {
      const newPokemonTotalInfo = {};
      res.data.forEach((pokemon) => {
        newPokemonTotalInfo[pokemon.type] = pokemon.totalPoints;
      });
      setPokemonTotalInfo(newPokemonTotalInfo);
    });
  }, []);

  useEffect(() => {
    if (pokemonTotalInfo) {
      const newY = {
        attack: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        defense: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        hp: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        spAttack: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        spDefense: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        speed: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        typesCnt: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        attackMeans: [],
        defenseMeans: [],
        hpMeans: [],
        spAttackMeans: [],
        spDefenseMeans: [],
        speedMeans: [],
        totalPointsMeans: [],
      };
      pokemons.forEach((pokemon) => {
        newY.attack[TYPE_TO_NUM[pokemon.typeOne]] += pokemon.attack;
        newY.attack[TYPE_TO_NUM[pokemon.typeTwo]] += pokemon.attack;
        newY.defense[TYPE_TO_NUM[pokemon.typeOne]] += pokemon.defense;
        newY.defense[TYPE_TO_NUM[pokemon.typeTwo]] += pokemon.defense;
        newY.hp[TYPE_TO_NUM[pokemon.typeOne]] += pokemon.hp;
        newY.hp[TYPE_TO_NUM[pokemon.typeTwo]] += pokemon.hp;
        newY.spAttack[TYPE_TO_NUM[pokemon.typeOne]] += pokemon.spAttack;
        newY.spAttack[TYPE_TO_NUM[pokemon.typeTwo]] += pokemon.spAttack;
        newY.spDefense[TYPE_TO_NUM[pokemon.typeOne]] += pokemon.spDefense;
        newY.spDefense[TYPE_TO_NUM[pokemon.typeTwo]] += pokemon.spDefense;
        newY.speed[TYPE_TO_NUM[pokemon.typeOne]] += pokemon.speed;
        newY.speed[TYPE_TO_NUM[pokemon.typeTwo]] += pokemon.speed;
        newY.typesCnt[TYPE_TO_NUM[pokemon.typeOne]] += 1;
        newY.typesCnt[TYPE_TO_NUM[pokemon.typeTwo]] += 1;
      });

      for (let i = 0; i < 17; i += 1) {
        const attackMean = newY.attack[i] / newY.typesCnt[i];
        newY.attackMeans.push(attackMean.toFixed(1));
        const defenseMean = newY.defense[i] / newY.typesCnt[i];
        newY.defenseMeans.push(defenseMean.toFixed(1));
        const hpMean = newY.hp[i] / newY.typesCnt[i];
        newY.hpMeans.push(hpMean.toFixed(1));
        const spAttackMean = newY.spAttack[i] / newY.typesCnt[i];
        newY.spAttackMeans.push(spAttackMean.toFixed(1));
        const spDefenseMean = newY.spDefense[i] / newY.typesCnt[i];
        newY.spDefenseMeans.push(spDefenseMean.toFixed(1));
        const speedMean = newY.speed[i] / newY.typesCnt[i];
        newY.speedMeans.push(speedMean.toFixed(1));
      }

      ENG_TYPE.forEach((type) => {
        newY.totalPointsMeans.push(pokemonTotalInfo[type].toFixed(1));
      });

      setY(newY);
    }
  }, [pokemons, pokemonTotalInfo]);
}

function WholeStatisticComponent() {
  const [pokemons, setPokemons] = useState([]);
  const [y, setY] = useState();
  const [pokemonTotalInfo, setPokemonTotalInfo] = useState();

  wholeStatistic(
    pokemons,
    setPokemons,
    setY,
    pokemonTotalInfo,
    setPokemonTotalInfo
  );

  if (!y) return null;

  return (
    <div>
      <div
        style={{
          display: 'grid',
          width: '70vw',
          justifyItems: 'center',
          backgroundColor: 'rgba(255, 255, 255, 1)',
          borderRadius: '10px',
          marginBottom: '100px',
          minWidth: '700px',
          minHeight: '400px',
          margin: ' 0 auto 150px auto',
        }}
      >
        <WholeTypeCharts y={y.typesCnt} />
      </div>
      <div
        style={{
          display: 'grid',
          width: '70vw',
          justifyItems: 'center',
          backgroundColor: 'rgba(255, 255, 255, 1)',
          borderRadius: '10px',
          marginBottom: '100px',
          minWidth: '700px',
          minHeight: '400px',
          margin: ' 0 auto 150px auto',
        }}
      >
        <WholeStatsStatisticsCharts y={y} />
      </div>
    </div>
  );
}

export default WholeStatisticComponent;
