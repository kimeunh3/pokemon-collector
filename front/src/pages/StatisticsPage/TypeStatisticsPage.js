import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

import * as Api from '../../api';

function typeStatisticsPage() {
    const params = useParams();
    const { type } = params;
    let type1Pokemons = [];
    const [pokemons, setPokemons] = useState([]);

    const type1List = {
        // normal
        '노말': [ 16, 17, 18, 19, 20, 21, 22, 39, 40, 52, 53, 83, 84, 85, 108, 113, 115, 128, 132, 133, 137, 143 ],
        // fire
        '불꽃': [ 4, 5, 6, 37, 38, 58, 59, 77, 78, 126, 136, 146 ],
        // water
        '물': [ 7, 8, 9, 54, 55, 60, 61, 62, 72, 73, 79, 80, 86, 87, 90, 91, 98, 99, 116, 117, 118, 119, 120, 121, 129, 130, 131, 134 ],
        // grass
        '풀': [ 1, 2, 3, 43, 44, 45, 69, 70, 71, 102, 103, 114 ],
        // electric
        '전기': [ 25, 26, 81, 82, 100, 101, 125, 135, 145 ],
        // ice
        '얼음': [ 124, 144 ],
        // fighting
        '격투': [ 56, 57, 66, 67, 68, 106, 107 ],
        // poison
        '독': [ 23, 24, 29, 30, 31, 32, 33, 34, 41, 42, 88, 89, 109, 110 ],
        // ground
        '땅': [ 27, 28, 50, 51, 104, 105, 111, 112 ],
        // psychic
        '에스퍼': [ 63, 64, 65, 96, 97, 122, 150, 151 ],
        // bug
        '벌레': [ 10, 11, 12, 13, 14, 15, 46, 47, 48, 49, 123, 127 ],
        // rock
        '바위': [ 74, 75, 76, 95, 138, 139, 140, 141, 142 ],
        // ghost
        '고스트': [ 92, 93, 94 ],
        // dragon
        '드래곤': [ 147, 148, 149 ],
        // fairy
        '페어리': [ 35, 36 ]
      };

    useEffect(() => {
        Object.keys(type1List).forEach(key => {
            if (key===type){
              type1Pokemons = type1List[key];
            }
          });
        console.log(type1Pokemons)
        type1Pokemons.forEach(key => {
            Api.get(`pokemon/${key}`)
            .then((res) => setPokemons(() => {
                const newPokemons = pokemons;
                newPokemons.append(res.data);
                return newPokemons;
            }));
        })
      }, []);

      console.log(pokemons);

	return (
        <div style={{ paddingTop: '180px', paddingBottom: '50px' }}>
            통계페이지 {params.type}
        </div>
	);
}

export default typeStatisticsPage;