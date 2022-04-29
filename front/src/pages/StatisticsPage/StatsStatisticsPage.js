import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { BarTypeStats, BarTypeTop5, BarTypeLow5 } from './components/StatisticsCharts/StatsStatisticsCharts';
import StatsDrawerComponents from './components/DrawerComponents/StatsDrawerComponents';

import * as Api from '../../api';

function StatsStatisticsPage() {
  const params = useParams();
  const { stats } = params;
  const [isBarTypeStats, setIsBarTypeStats] = useState(true);
  const [isBarTypeTop5, setIsBarTypeTop5] = useState(false);
  const [isBarTypeLow5, setIsBarTypeLow5] = useState(false);

  const korengStatsList = {'공격력':'attack', '방어력':'defense', 'Hp':'hp', '특수공격력':'spAttack', '특수방어력':'spDefense', '스피드':'speed', '키':'height', '몸무게': 'weight', '종합점수':'totalPoints'}
  const engStats = korengStatsList[stats];
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    Api.get('pokemonList')
      .then((res) => {
        setPokemons(res.data);
      })
  }, []);

  const x = [];
  const y = {
    pokemonsStats: {},
    typesStatsSum: { '노말': 0, '불꽃': 0, '물': 0, '풀': 0, '전기': 0, '얼음': 0, '격투': 0, '독': 0, '땅': 0, '비행': 0, '에스퍼': 0, '벌레': 0, '바위': 0, '고스트': 0, '드래곤': 0, '강철': 0, '페어리': 0},
    typesCnt: { '노말': 0, '불꽃': 0, '물': 0, '풀': 0, '전기': 0, '얼음': 0, '격투': 0, '독': 0, '땅': 0, '비행': 0, '에스퍼': 0, '벌레': 0, '바위': 0, '고스트': 0, '드래곤': 0, '강철': 0, '페어리': 0},
    typesMeans: {},
  }

  const typeColorList = {
    '노말': 'rgba(198, 198, 167, 0.8)',
    '불꽃': 'rgba(245, 172, 120, 0.8)',
    '물': 'rgba(157, 183, 245, 0.8)',
    '풀': 'rgba(167, 219, 141, 0.8)',
    '전기': 'rgba(250, 224, 120, 0.8)',
    '얼음': 'rgba(188, 230, 230, 0.8)',
    '격투': 'rgba(214, 120, 115, 0.8)',
    '독': 'rgba(193, 131, 193, 0.8)',
    '땅': 'rgba(235, 214, 157, 0.8)',
    '비행': 'rgba(198, 183, 245, 0.8)',
    '에스퍼': 'rgba(250, 146, 178, 0.8)',
    '벌레': 'rgba(198, 209, 110, 0.8)',
    '바위': 'rgba(209, 193, 125, 0.8)',
    '고스트': 'rgba(162, 146, 188, 0.8)',
    '드래곤': 'rgba(162, 125, 250, 0.8)',
    '강철': 'rgba(209, 209, 224, 0.8)',
    '페어리': 'rgba(244, 189, 201, 0.8)'
  };

  const typeColors = Object.values(typeColorList)

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
    y.pokemonsStats[pokemon.name] = pokemon[engStats];
    y.typesStatsSum[pokemon.typeOne] += pokemon[engStats];
    y.typesStatsSum[pokemon.typeTwo] += pokemon[engStats];
    y.typesCnt[pokemon.typeOne] += 1;
    y.typesCnt[pokemon.typeTwo] += 1;
  })

  delete y.typesStatsSum.없음;
  delete y.typesCnt.없음;
  
  Object.keys(y.typesStatsSum).forEach(pokemonType => {
    const typemean = y.typesStatsSum[pokemonType]/y.typesCnt[pokemonType]
    y.typesMeans[pokemonType] = Number(typemean.toFixed(1));
  })

  const average = arr => arr.reduce((p, c) => p + c, 0) / arr.length;

  const sortTypeMeans = Object.keys(y.typesMeans).sort((a,b) => y.typesMeans[b]-y.typesMeans[a]);
  const typesMeansTop5 = sortTypeMeans.slice(0,5);
  const typesMeanslow5 = sortTypeMeans.slice(-5);
  
  const typesMeansTop5List = [];
  const typesMeanslow5List = [];
  const typesMeansTop5Colors = [];
  const typesMeanslow5Colors = [];

  typesMeansTop5.forEach(pokemonType => {
    typesMeansTop5List.push(y.typesMeans[pokemonType]);
    typesMeansTop5Colors.push(typeColorList[pokemonType]);
  })

  typesMeanslow5.forEach(pokemonType => {
    typesMeanslow5List.push(y.typesMeans[pokemonType]);
    typesMeanslow5Colors.push(typeColorList[pokemonType]);
  })

  const sortPokemonsStats = Object.keys(y.pokemonsStats).sort((a,b) => y.pokemonsStats[b]-y.pokemonsStats[a]);

  const statsMean = Number(average(Object.values(y.pokemonsStats)).toFixed(1));

  typesMeansTop5.push('평균');
  typesMeanslow5.unshift('평균');
  typesMeansTop5List.push(statsMean);
  typesMeanslow5List.unshift(statsMean);
  typesMeansTop5Colors.push('rgba(0, 0, 0, 0.5)');
  typesMeanslow5Colors.unshift('rgba(0, 0, 0, 0.5)');

  const statsInfo = {
    pokemonCnt: x.length,
    statsMean,
    typesStatsMean: average(Object.values(y.typesMeans)).toFixed(1),
    statsMax: sortTypeMeans[0],
    statsMin: sortTypeMeans[16],
    pokemonMax: sortPokemonsStats[0],
    pokemonMin: sortPokemonsStats[150],
  }

	return (
    <div>
      <StatsDrawerComponents
        stats={stats}
        statsColor={statsColorList[stats]}
        statsInfo={statsInfo}
        isBarStats={isBarTypeStats}
        isBarTypeTop5={isBarTypeTop5}
        isBarTypeLow5={isBarTypeLow5}
        setIsBarStats={setIsBarTypeStats}
        setIsBarTypeTop5={setIsBarTypeTop5}
        setIsBarTypeLow5={setIsBarTypeLow5}
      />
      <div style={{ margin: '10vh 3vw auto 25vw' }}>
          {isBarTypeStats && <BarTypeStats y={y.typesMeans} colors={typeColors} stats={stats} />}
          {isBarTypeTop5 && <BarTypeTop5 x={typesMeansTop5} y={typesMeansTop5List} colors={typesMeansTop5Colors} stats={stats} />}
          {isBarTypeLow5 && <BarTypeLow5 x={typesMeanslow5} y={typesMeanslow5List} colors={typesMeanslow5Colors} stats={stats} />}
      </div>
    </div>
	);
}

export default StatsStatisticsPage;