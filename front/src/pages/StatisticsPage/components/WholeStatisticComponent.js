import React, { useState, useEffect } from 'react';
import { FormControlLabel, Switch } from '@mui/material';
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

const COLOR_LIST = {
  노말: 'rgba(198, 198, 167, 0.6)',
  불꽃: 'rgba(245, 172, 120, 0.6)',
  물: 'rgba(157, 183, 245, 0.6)',
  풀: 'rgba(167, 219, 141, 0.6)',
  전기: 'rgba(250, 224, 120, 0.6)',
  얼음: 'rgba(188, 230, 230, 0.6)',
  격투: 'rgba(214, 120, 115, 0.6)',
  독: 'rgba(193, 131, 193, 0.6)',
  땅: 'rgba(235, 214, 157, 0.6)',
  비행: 'rgba(198, 183, 245, 0.6)',
  에스퍼: 'rgba(250, 146, 178, 0.6)',
  벌레: 'rgba(198, 209, 110, 0.6)',
  바위: 'rgba(209, 193, 125, 0.6)',
  고스트: 'rgba(162, 146, 188, 0.6)',
  드래곤: 'rgba(162, 125, 250, 0.6)',
  강철: 'rgba(209, 209, 224, 0.6)',
  페어리: 'rgba(244, 189, 201, 0.6)',
};

function wholeStatistic(
  pokemons,
  setPokemons,
  setX,
  y,
  setY,
  IsSort,
  setChartY,
  setColorList,
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
        },
        typeCntListName: [],
        typeCntList: [],
        sortTypeCntList: [],
        sortTypeCnt: [],
        attackMeans: [],
        defenseMeans: [],
        hpMeans: [],
        spAttackMeans: [],
        spDefenseMeans: [],
        speedMeans: [],
        totalPointsMeans: [],
        colorList: [],
        sortColorList: [],
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
        newY.typesCnt[pokemon.typeOne] += 1;
        newY.typesCnt[pokemon.typeTwo] += 1;
      });

      delete newY.typesCnt.없음;
      newY.typeCntList = Object.values(newY.typesCnt);
      newY.typeCntListName = Object.keys(newY.typesCnt);
      newY.colorList = Object.values(COLOR_LIST);

      for (let i = 0; i < 17; i += 1) {
        const attackMean = newY.attack[i] / newY.typeCntList[i];
        newY.attackMeans.push(attackMean.toFixed(1));
        const defenseMean = newY.defense[i] / newY.typeCntList[i];
        newY.defenseMeans.push(defenseMean.toFixed(1));
        const hpMean = newY.hp[i] / newY.typeCntList[i];
        newY.hpMeans.push(hpMean.toFixed(1));
        const spAttackMean = newY.spAttack[i] / newY.typeCntList[i];
        newY.spAttackMeans.push(spAttackMean.toFixed(1));
        const spDefenseMean = newY.spDefense[i] / newY.typeCntList[i];
        newY.spDefenseMeans.push(spDefenseMean.toFixed(1));
        const speedMean = newY.speed[i] / newY.typeCntList[i];
        newY.speedMeans.push(speedMean.toFixed(1));
      }

      newY.sortTypeCntList = Object.keys(newY.typesCnt).sort(
        (a, b) => newY.typesCnt[b] - newY.typesCnt[a]
      );

      newY.sortTypeCntList.forEach((type) => {
        newY.sortTypeCnt.push(newY.typesCnt[type]);
        newY.sortColorList.push(COLOR_LIST[type]);
      });

      ENG_TYPE.forEach((type) => {
        newY.totalPointsMeans.push(pokemonTotalInfo[type].toFixed(1));
      });

      setX(Object.keys(newY.typesCnt));
      setY(newY);
      setChartY(newY.typeCntList);
      setColorList(newY.colorList);
    }
  }, [pokemons, pokemonTotalInfo]);

  useEffect(() => {
    if (y) {
      if (!IsSort) {
        setX(y.typeCntListName);
        setChartY(y.typeCntList);
        setColorList(y.colorList);
      } else {
        setX(y.sortTypeCntList);
        setChartY(y.sortTypeCnt);
        setColorList(y.sortColorList);
      }
    }
  }, [IsSort]);
}

function WholeStatisticComponent() {
  const [pokemons, setPokemons] = useState([]);
  const [x, setX] = useState();
  const [y, setY] = useState();
  const [chartY, setChartY] = useState();
  const [pokemonTotalInfo, setPokemonTotalInfo] = useState();
  const [IsSort, setIsSort] = useState(false);
  const [colorList, setColorList] = useState();

  wholeStatistic(
    pokemons,
    setPokemons,
    setX,
    y,
    setY,
    IsSort,
    setChartY,
    setColorList,
    pokemonTotalInfo,
    setPokemonTotalInfo
  );

  if (!y) return null;

  return (
    <div>
      <div
        style={{
          display: 'grid',
          width: '65vw',
          justifyItems: 'center',
          backgroundColor: 'rgba(255, 255, 255, 1)',
          borderRadius: '10px',
          marginBottom: '100px',
          minWidth: '700px',
          minHeight: '400px',
          margin: ' 0 auto 150px auto',
        }}
      >
        <WholeTypeCharts x={x} y={chartY} color={colorList} />
        <FormControlLabel
          control={<Switch />}
          onClick={() => {
            setIsSort(!IsSort);
          }}
          label='순서대로 보기'
        />
      </div>
      <div
        style={{
          display: 'grid',
          width: '65vw',
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
