import React, { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import DefaultBookCard from './DefaultBookCard';
import PokemonBookCard from './PokemonBookCard';

function IllustratedBookPage() {
  const [type, setType] = useState(10);
  const userPokemonList = { 25 : "피카츄" };
  const pokemonNumber = Object.keys(userPokemonList).length;

  const pokemonList = [];
  for (let i = 1; i < 152; i+=1) {
    pokemonList.push(String(i));
  }

  const handleChange = (e) => {
    setType(e.target.value);
  }

  return (
    <div style={{ paddingTop: "170px", paddingBottom: "50px" }}>
        <FormControl style={{ width: "200px", marginLeft: "40px", backgroundColor: 'white' }}>
          <InputLabel id="demo-simple-select-label">속성</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={type}
            label="속성"
            onChange={handleChange}
          >
            <MenuItem value={10}>전체</MenuItem>
            <MenuItem value={20}>불꽃</MenuItem>
            <MenuItem value={30}>물</MenuItem>
            <MenuItem value={40}>풀</MenuItem>
            <MenuItem value={50}>독</MenuItem>
            <MenuItem value={60}>비행</MenuItem>
            <MenuItem value={70}>노말</MenuItem>
            <MenuItem value={80}>전기</MenuItem>
            <MenuItem value={90}>땅</MenuItem>
            <MenuItem value={100}>벌레</MenuItem>
            <MenuItem value={110}>땅</MenuItem>
            <MenuItem value={120}>페어리</MenuItem>
            <MenuItem value={130}>격투</MenuItem>
            <MenuItem value={140}>에스퍼</MenuItem>
            <MenuItem value={150}>바위</MenuItem>
            <MenuItem value={160}>강철</MenuItem>
            <MenuItem value={170}>얼음</MenuItem>
            <MenuItem value={180}>고스트</MenuItem>
            <MenuItem value={190}>드래곤</MenuItem>
          </Select>
        </FormControl>
        <div style={{ textAlign: "end", marginRight: "50px" }}>보유한 포켓몬 수: {pokemonNumber}</div>
        <div
        style={{
          display: "grid",
          gridTemplateRows: "1fr ",
          gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
          gap: "2em 1em",
          marginTop: "50px"
        }}
        >
          {pokemonList.map((num) => (
              Object.keys(userPokemonList).includes(num) ?  <PokemonBookCard name={userPokemonList[num]} type={type} /> : <DefaultBookCard />
          ))}
        </div>
        <button type="button" id="go-top" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}><span className="material-symbols-outlined">arrow_upward</span></button>
    </div>
  );
}

export default IllustratedBookPage;
