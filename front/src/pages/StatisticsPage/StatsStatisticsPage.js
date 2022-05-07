import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  BarTypeStats,
  BarTypeTop5,
  BarTypeLow5,
  BarPokemonTop15,
  BarPokemonLow15,
} from './components/StatisticsCharts/StatsStatisticsCharts';
import StatsDrawerComponents from './components/DrawerComponents/StatsDrawerComponents';
import COLORLIST from '../../core/ColorList/ColorList';

import * as Api from '../../api';

const KOR_ENG_STATS_LIST = {
  공격력: 'attack',
  방어력: 'defense',
  Hp: 'hp',
  특수공격력: 'spAttack',
  특수방어력: 'spDefense',
  스피드: 'speed',
  키: 'height',
  몸무게: 'weight',
  종합점수: 'totalPoints',
};

const TYPE_COLOR_LIST = {
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

const STATS_COLOR_LIST = {
  공격력: 'rgba(240, 128, 48, 0.8)',
  방어력: 'rgba(248, 208, 48, 0.8)',
  Hp: 'rgba(255, 0, 0, 0.8)',
  특수공격력: 'rgba(104, 144, 240, 0.8)',
  특수방어력: 'rgba(120, 200, 80, 0.8)',
  스피드: 'rgba(193, 131, 193, 0.8)',
  키: 'rgba(161, 57, 89, 0.8)',
  몸무게: 'rgba(68, 94, 156, 0.8)',
  종합점수: 'rgba(128, 128, 128, 0.8)',
};

function statsStatistics(
  engStats,
  typeColors,
  pokemons,
  setPokemons,
  y,
  setY,
  setStatsInfo,
  statsMean,
  setStatsMean,
  typesStatsMean,
  setTypesStatsMean,
  typesMeansTop5,
  setTypesMeansTop5,
  typesMeansLow5,
  setTypesMeansLow5,
  setTypesMeansTop5List,
  setTypesMeansLow5List,
  setTypesMeansTop5Colors,
  setTypesMeansLow5Colors,
  pokemonsStatsTop15,
  setPokemonsStatsTop15,
  pokemonsStatsLow15,
  setPokemonsStatsLow15,
  setPokemonsStatsTop15List,
  setPokemonsStatsLow15List
) {
  // 평균값 구하는 함수
  const average = (arr) => arr.reduce((p, c) => p + c, 0) / arr.length;

  useEffect(() => {
    Api.get('pokemonList').then((res) => {
      setPokemons(res.data);
    });
  }, []);

  useEffect(() => {
    const newX = [];
    const newY = {
      pokemonsStats: {},
      typesStatsSum: {
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
      typesMeans: {},
    };
    pokemons.forEach((pokemon) => {
      newX.push(pokemon.name);
      newY.pokemonsStats[pokemon.name] = pokemon[engStats];
      newY.typesStatsSum[pokemon.typeOne] += pokemon[engStats];
      newY.typesStatsSum[pokemon.typeTwo] += pokemon[engStats];
      newY.typesCnt[pokemon.typeOne] += 1;
      newY.typesCnt[pokemon.typeTwo] += 1;
    });
    delete newY.typesStatsSum.없음;
    delete newY.typesCnt.없음;

    Object.entries(newY.typesStatsSum).forEach((typeSum) => {
      const typemean = typeSum[1] / newY.typesCnt[typeSum[0]];
      newY.typesMeans[typeSum[0]] = Number(typemean.toFixed(1));
    });

    // 상위 30%, 하위 30% 속성 순위 차트에 들어갈 평균값
    const newStatsMean = Number(
      average(Object.values(newY.pokemonsStats)).toFixed(1)
    );
    setStatsMean(newStatsMean);

    // 상위 10%, 하위 10% 포켓몬 순위 차트에 들어갈 평균값
    const newTypesStatsMean = Number(
      average(Object.values(newY.typesMeans)).toFixed(1)
    );
    setTypesStatsMean(newTypesStatsMean);

    // 상위 30%, 하위 30% 속성 순위 차트에 입력할 데이터 생성
    const sortTypeMeans = Object.keys(newY.typesMeans).sort(
      (a, b) => newY.typesMeans[b] - newY.typesMeans[a]
    );
    const newTypesMeansTop5 = sortTypeMeans.slice(0, 5);
    const newTypesMeansLow5 = sortTypeMeans.slice(-5);

    // 상위 30%, 하위 30% 속성 순위 차트에 평균값 넣기
    newTypesMeansTop5.push('전체평균');
    newTypesMeansLow5.unshift('전체평균');

    setTypesMeansTop5(newTypesMeansTop5);
    setTypesMeansLow5(newTypesMeansLow5);

    // 상위 10%, 하위 10% 포켓몬 순위 차트에 입력할 데이터 생성
    const sortPokemonsStats = Object.keys(newY.pokemonsStats).sort(
      (a, b) => newY.pokemonsStats[b] - newY.pokemonsStats[a]
    );
    const newPokemonsStatsTop15 = sortPokemonsStats.slice(0, 15);
    const newPokemonsStatsLow15 = sortPokemonsStats.slice(-15);

    // 상위 10%, 하위 10% 포켓몬 순위 차트에 평균값 넣기
    newPokemonsStatsTop15.push('전체평균');
    newPokemonsStatsLow15.unshift('전체평균');

    setPokemonsStatsTop15(newPokemonsStatsTop15);
    setPokemonsStatsLow15(newPokemonsStatsLow15);

    setY(newY);

    // 통계 개요에 들어갈 값
    setStatsInfo({
      pokemonCnt: newX.length,
      statsMean: newStatsMean,
      typesStatsMean: newTypesStatsMean,
      statsMax: sortTypeMeans[0],
      statsMin: sortTypeMeans[16],
      pokemonMax: sortPokemonsStats[0],
      pokemonMin: sortPokemonsStats[150],
    });
  }, [pokemons]);

  // 상위 30%, 하위 30% 속성 순위 차트에 들어갈 데이터(값, 색깔) 생성
  useEffect(() => {
    const newTypesMeansTop5List = [];
    const newTypesMeansLow5List = [];
    const newTypesMeansTop5Colors = [];
    const newTypesMeansLow5Colors = [];

    typesMeansTop5.slice(0, 5).forEach((pokemonType) => {
      newTypesMeansTop5List.push(y.typesMeans[pokemonType]);
      newTypesMeansTop5Colors.push(TYPE_COLOR_LIST[pokemonType]);
    });

    typesMeansLow5.slice(1, 6).forEach((pokemonType) => {
      newTypesMeansLow5List.push(y.typesMeans[pokemonType]);
      newTypesMeansLow5Colors.push(TYPE_COLOR_LIST[pokemonType]);
    });

    // 상위 30%, 하위 30% 속성 순위 차트에 평균값 넣기
    newTypesMeansTop5List.push(typesStatsMean);
    newTypesMeansLow5List.unshift(typesStatsMean);
    newTypesMeansTop5Colors.push('rgba(0, 0, 0, 0.5)');
    newTypesMeansLow5Colors.unshift('rgba(0, 0, 0, 0.5)');

    setTypesMeansTop5List(newTypesMeansTop5List);
    setTypesMeansLow5List(newTypesMeansLow5List);
    setTypesMeansTop5Colors(newTypesMeansTop5Colors);
    setTypesMeansLow5Colors(newTypesMeansLow5Colors);
  }, [typesMeansTop5, typesMeansLow5]);

  // 상위 10%, 하위 10% 포켓몬 순위 차트에 들어갈 데이터(값, 색깔) 생성
  useEffect(() => {
    const newPokemonsStatsTop15List = [];
    const newPokemonsStatsLow15List = [];

    pokemonsStatsTop15.slice(0, 15).forEach((pokemon) => {
      newPokemonsStatsTop15List.push(y.pokemonsStats[pokemon]);
    });

    pokemonsStatsLow15.slice(1, 16).forEach((pokemon) => {
      newPokemonsStatsLow15List.push(y.pokemonsStats[pokemon]);
    });

    // 상위 10%, 하위 10% 포켓몬 순위 차트에 평균값 넣기
    newPokemonsStatsTop15List.push(statsMean);
    newPokemonsStatsLow15List.unshift(statsMean);

    setPokemonsStatsTop15List(newPokemonsStatsTop15List);
    setPokemonsStatsLow15List(newPokemonsStatsLow15List);
  }, [pokemonsStatsTop15, pokemonsStatsLow15]);
}

function StatsStatisticsPage() {
  const params = useParams();
  const { stats } = params;
  const [select, setSelect] = useState('barTypeStats');
  // select: barTypeStats, barTypeTop5, barTypeLow5, barPokemonTop15, barPokemonLow15

  const engStats = KOR_ENG_STATS_LIST[stats];
  const typeColors = Object.values(TYPE_COLOR_LIST);
  const [pokemons, setPokemons] = useState([]);
  const [y, setY] = useState({});
  const [statsInfo, setStatsInfo] = useState({});
  const [statsMean, setStatsMean] = useState();
  const [typesStatsMean, setTypesStatsMean] = useState();

  const [typesMeansTop5, setTypesMeansTop5] = useState([]);
  const [typesMeansLow5, setTypesMeansLow5] = useState([]);
  const [typesMeansTop5List, setTypesMeansTop5List] = useState([]);
  const [typesMeansLow5List, setTypesMeansLow5List] = useState([]);
  const [typesMeansTop5Colors, setTypesMeansTop5Colors] = useState([]);
  const [typesMeansLow5Colors, setTypesMeansLow5Colors] = useState([]);

  const [pokemonsStatsTop15, setPokemonsStatsTop15] = useState([]);
  const [pokemonsStatsLow15, setPokemonsStatsLow15] = useState([]);
  const [pokemonsStatsTop15List, setPokemonsStatsTop15List] = useState([]);
  const [pokemonsStatsLow15List, setPokemonsStatsLow15List] = useState([]);

  const COLOR_GRADATION = COLORLIST[stats];

  const COLOR_GRADATION_REVERSE = [...COLOR_GRADATION].reverse();

  statsStatistics(
    engStats,
    typeColors,
    pokemons,
    setPokemons,
    y,
    setY,
    setStatsInfo,
    statsMean,
    setStatsMean,
    typesStatsMean,
    setTypesStatsMean,
    typesMeansTop5,
    setTypesMeansTop5,
    typesMeansLow5,
    setTypesMeansLow5,
    setTypesMeansTop5List,
    setTypesMeansLow5List,
    setTypesMeansTop5Colors,
    setTypesMeansLow5Colors,
    pokemonsStatsTop15,
    setPokemonsStatsTop15,
    pokemonsStatsLow15,
    setPokemonsStatsLow15,
    setPokemonsStatsTop15List,
    setPokemonsStatsLow15List
  );

  return (
    <div>
      <StatsDrawerComponents
        stats={stats}
        statsColor={STATS_COLOR_LIST[stats]}
        statsInfo={statsInfo}
        select={select}
        setSelect={setSelect}
      />
      <div style={{ margin: '10vh 3vw auto 25vw' }}>
        {select === 'barTypeStats' && (
          <BarTypeStats y={y.typesMeans} colors={typeColors} stats={stats} />
        )}
        {select === 'barTypeTop5' && (
          <BarTypeTop5
            x={typesMeansTop5}
            y={typesMeansTop5List}
            colors={typesMeansTop5Colors}
            stats={stats}
          />
        )}
        {select === 'barTypeLow5' && (
          <BarTypeLow5
            x={typesMeansLow5}
            y={typesMeansLow5List}
            colors={typesMeansLow5Colors}
            stats={stats}
          />
        )}
        {select === 'barPokemonTop15' && (
          <BarPokemonTop15
            x={pokemonsStatsTop15}
            y={pokemonsStatsTop15List}
            colors={COLOR_GRADATION}
            stats={stats}
          />
        )}
        {select === 'barPokemonLow15' && (
          <BarPokemonLow15
            x={pokemonsStatsLow15}
            y={pokemonsStatsLow15List}
            colors={COLOR_GRADATION_REVERSE}
            stats={stats}
          />
        )}
      </div>
    </div>
  );
}

export default StatsStatisticsPage;
