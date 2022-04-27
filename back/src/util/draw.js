/*
  0.002 % : [151:"뮤", 150:"뮤츠"],
  0.01 % : [144:"프리져", 145:"썬더", 146:"파이어"],
  0.1 % : ["25:피카츄", 1:"이상해씨", 4:"파이리", 143:"잠만보", 133:"이브이"],
  99.29 % : [ 전설, 환상, 인기 포켓몬을 제외한 나머지]
  */

class draw{

  // 확률 적용하여 포켓몬 id 뽑기
  static drawPokemonid(){

    let pokemonNums = [];

    // array를 151까지 채우기
    function range(start, end) {
      return Array(end - start + 1).fill().map((_, idx) => start + idx);
    };

    const rand_1_100000 = Math.floor(Math.random() * 100000) + 1;
    if (rand_1_100000 <= 4){ pokemonNums = [150, 151]; }
    else if (rand_1_100000 >= 10 & rand_1_100000 <= 40){ pokemonNums = [144, 145, 146]; }
    else if (rand_1_100000 >= 100 & rand_1_100000 <= 500){ pokemonNums = [1, 4, 25, 133, 143]; }
    else{
      pokemonNums = range(1, 151);
      const notNormal = [1, 4, 25, 133, 143, 144, 145, 146, 150, 151];
      for (var num of notNormal){
        const idx = pokemonNums.indexOf(num);
        pokemonNums.splice(idx, 1);   
      };
    };
    return pokemonNums[Math.floor(Math.random() * pokemonNums.length)];
  }

  // 뽑기를 위해 적정 포인트가 있는지 확인
  static pointCheck(point){
    if (point >= 1000){ return true; }
    return false;
  };


  
};

export {draw}