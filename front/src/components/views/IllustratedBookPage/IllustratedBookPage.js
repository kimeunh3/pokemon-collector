import React from 'react';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import DefaultBookCard from './DefaultBookCard';
import PokemonBookCard from './PokemonBookCard';

function IllustratedBookPage() {
//   const [Login, setLogin] = useState(true);
const userPokemonList = [1,2,5,7,11,20,24,25,33,48,49,54,56,59,66,69];
const pokemonNumber = userPokemonList.length;

const pokemonList = [];
for (let i = 1; i < 152; i+=1) {
    pokemonList.push(i);
}

  return (
    <div style={{ paddingTop: "170px" }}>
        <FormControl style={{ width: "200px", marginLeft: "40px", backgroundColor: 'white' }}>
            <InputLabel id="demo-simple-select-label">속성</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={}
                label="속성"
                // onChange={}
            >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
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
                userPokemonList.includes(num) ?  <PokemonBookCard name={num}/> : <DefaultBookCard />
            ))}
        </div>
        <button type="button" id="go-top" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}><span className="material-symbols-outlined">arrow_upward</span></button>
    </div>
  );
}

export default IllustratedBookPage;
