import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import { BarTypeStats } from './components/StatisticsCharts/StatsStatisticsCharts';
import StatsDrawerComponents from './components/DrawerComponents/StatsDrawerComponents';

// import * as Api from '../../api';

function StatsStatisticsPage() {
  const params = useParams();
  const { stats } = params;
  const [isBarTypeStats, setIsBarTypeStats] = useState(true);

  const korengStatsList = {'공격력':'attack', '방어력':'defense', 'Hp':'hp', '특수공격력':'spAttack', '특수방어력':'spDefense', '스피드':'speed', '키':'height', '몸무게': 'weight', '종합점수':'totalPoints'}
  const engStats = korengStatsList[stats];
  // const [pokemons, setPokemons] = useState([]);

  // useEffect(() => {
  //   Api.get(`pokemonList/${stats}`)
  //     .then((res) => {
  //       setPokemons(res.data);
  //     })
  // }, []);

  const pokemons = [{'attack': 80,
  'defense': 100,
  'height': 0.4,
  'hp': 40,
  'name': '꼬마돌',
  'pokedex_number': 74,
  'spAttack': 30,
  'spDefense': 30,
  'speed': 20,
  'status': '노말',
  'totalPoints': 300,
  'typeOne': '바위',
  'typeTwo': '땅',
  'type_number': 2,
  'weight': 20.0},
 {'attack': 95,
  'defense': 115,
  'height': 1.0,
  'hp': 55,
  'name': '데구리',
  'pokedex_number': 75,
  'spAttack': 45,
  'spDefense': 45,
  'speed': 35,
  'status': '노말',
  'totalPoints': 390,
  'typeOne': '바위',
  'typeTwo': '땅',
  'type_number': 2,
  'weight': 105.0},
 {'attack': 120,
  'defense': 130,
  'height': 1.4,
  'hp': 80,
  'name': '딱구리',
  'pokedex_number': 76,
  'spAttack': 55,
  'spDefense': 65,
  'speed': 45,
  'status': '노말',
  'totalPoints': 495,
  'typeOne': '바위',
  'typeTwo': '땅',
  'type_number': 2,
  'weight': 300.0},
 {'attack': 45,
  'defense': 160,
  'height': 8.8,
  'hp': 35,
  'name': '롱스톤',
  'pokedex_number': 95,
  'spAttack': 30,
  'spDefense': 45,
  'speed': 70,
  'status': '노말',
  'totalPoints': 385,
  'typeOne': '바위',
  'typeTwo': '땅',
  'type_number': 2,
  'weight': 210.0},
 {'attack': 40,
  'defense': 100,
  'height': 0.4,
  'hp': 35,
  'name': '암나이트',
  'pokedex_number': 138,
  'spAttack': 90,
  'spDefense': 55,
  'speed': 35,
  'status': '노말',
  'totalPoints': 355,
  'typeOne': '바위',
  'typeTwo': '물',
  'type_number': 2,
  'weight': 7.5},
 {'attack': 60,
  'defense': 125,
  'height': 1.0,
  'hp': 70,
  'name': '암스타',
  'pokedex_number': 139,
  'spAttack': 115,
  'spDefense': 70,
  'speed': 55,
  'status': '노말',
  'totalPoints': 495,
  'typeOne': '불꽃',
  'typeTwo': '물',
  'type_number': 2,
  'weight': 35.0},
 {'attack': 80,
  'defense': 90,
  'height': 0.5,
  'hp': 30,
  'name': '투구',
  'pokedex_number': 140,
  'spAttack': 55,
  'spDefense': 45,
  'speed': 55,
  'status': '노말',
  'totalPoints': 355,
  'typeOne': '불꽃',
  'typeTwo': '물',
  'type_number': 2,
  'weight': 11.5},
 {'attack': 115,
  'defense': 105,
  'height': 1.3,
  'hp': 60,
  'name': '투구푸스',
  'pokedex_number': 141,
  'spAttack': 65,
  'spDefense': 70,
  'speed': 80,
  'status': '노말',
  'totalPoints': 495,
  'typeOne': '강철',
  'typeTwo': '물',
  'type_number': 2,
  'weight': 40.5},
 {'attack': 105,
  'defense': 65,
  'height': 1.8,
  'hp': 80,
  'name': '프테라',
  'pokedex_number': 142,
  'spAttack': 60,
  'spDefense': 75,
  'speed': 130,
  'status': '노말',
  'totalPoints': 515,
  'typeOne': '강철',
  'typeTwo': '비행',
  'type_number': 2,
  'weight': 59.0}];



  const x = [];
  const y = {
    pokemonsStats: [],
    typesStatsSum: { '노말': 0, '불꽃': 0, '물': 0, '풀': 0, '전기': 0, '얼음': 0, '격투': 0, '독': 0, '땅': 0, '비행': 0, '에스퍼': 0, '벌레': 0, '바위': 0, '고스트': 0, '드래곤': 0, '강철': 0, '페어리': 0},
    typesCnt: { '노말': 0, '불꽃': 0, '물': 0, '풀': 0, '전기': 0, '얼음': 0, '격투': 0, '독': 0, '땅': 0, '비행': 0, '에스퍼': 0, '벌레': 0, '바위': 0, '고스트': 0, '드래곤': 0, '강철': 0, '페어리': 0},
    typesMeans: [],
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
    y.pokemonsStats.push(pokemon[engStats]);
    y.typesStatsSum[pokemon.typeOne] += pokemon[engStats];
    y.typesStatsSum[pokemon.typeTwo] += pokemon[engStats];
    y.typesCnt[pokemon.typeOne] += 1;
    y.typesCnt[pokemon.typeTwo] += 1;
  })

  const typeSum = Object.values(y.typesStatsSum);
  const typeCnt = Object.values(y.typesCnt);
  
  for(let i=0; i<17; i+=1) {
    const typemean = typeSum[i]/typeCnt[i]
    y.typesMeans.push(typemean.toFixed(1));
  }

  console.log(y)

  const average = arr => arr.reduce((p, c) => p + c, 0) / arr.length;

  const statsInfo = {
    pokemonCnt: x.length,
    statsMean: average(y.pokemonsStats).toFixed(1),
  }

	return (
    <div>
      <StatsDrawerComponents
        stats={stats}
        statsColor={statsColorList[stats]}
        statsInfo={statsInfo}
        isBarStats={isBarTypeStats}
        setIsBarStats={setIsBarTypeStats}
      />
      <div style={{ margin: '10vh 3vw auto 25vw' }}>
          {isBarTypeStats && <BarTypeStats y={y.typesMeans} colors={typeColors} />}
      </div>
    </div>
	);
}

export default StatsStatisticsPage;