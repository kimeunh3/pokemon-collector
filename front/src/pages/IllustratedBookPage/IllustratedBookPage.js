import React, { useState, useEffect } from 'react';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import {
  DialogActions,
  DialogContent,
  Button,
  Dialog,
  DialogTitle,
  TextField,
} from '@mui/material';
import DefaultBookCard from './components/DefaultBookCard/DefaultBookCard';
import PokemonBookCard from './components/PokemonBookCard/PokemonBookCard';
import ScrollUpButton from '../../components/commons/ScrollUpButton';
import ImgSrc from '../../core/constants/ImgSrc';
import RankingButton from '../../components/commons/RankingButton';

import * as Api from '../../api';

function IllustratedBookPage() {
  const [selectType, setSelectType] = useState(10);
  const [searchName, setSearchName] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [userPokemonList, setUserPokemonList] = useState([]);
  const [pokemonList, setPokemonList] = useState([]);
  const [userPokemonObj, setUserPokemonObj] = useState({});
  const [pokemonNumber, setPokemonNumber] = useState();

  useEffect(() => {
    Api.get('user/current').then((res) => {
      setUserPokemonList(res.data.stickers);
    });
  }, []);

  useEffect(() => {
    const newUserPokemonObj = {};
    userPokemonList.forEach((value) => {
      newUserPokemonObj[value.id] = value.name;
    });

    setUserPokemonObj(newUserPokemonObj);

    const userPokemonIdList = userPokemonList.map((pokemon) => pokemon.id);

    const userPokemonIdSetList = [...new Set(userPokemonIdList)];

    setPokemonNumber(Object.keys(userPokemonIdSetList).length);
  }, [userPokemonList]);

  useEffect(() => {
    const newPokemonList = [];
    for (let i = 1; i < 152; i += 1) {
      newPokemonList.push(i.toString());
    }
    setPokemonList(newPokemonList);
  }, []);

  const handleChangeType1 = (e) => {
    setSelectType(e.target.value);
  };

  const handleClickOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  const onChangeSearchName = (e) => {
    setSearchName(e.target.value);
  };

  return (
    <div style={{ marginTop: '25vh', marginBottom: '20vh' }}>
      <FormControl
        style={{ width: '200px', marginLeft: '40px', backgroundColor: 'white' }}
      >
        <InputLabel id='demo-simple-select-label'>속성</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={selectType}
          label='속성'
          onChange={handleChangeType1}
        >
          <MenuItem value={10}>전체</MenuItem>
          <MenuItem value={20}>노말</MenuItem>
          <MenuItem value={30}>불꽃</MenuItem>
          <MenuItem value={40}>물</MenuItem>
          <MenuItem value={50}>풀</MenuItem>
          <MenuItem value={60}>전기</MenuItem>
          <MenuItem value={70}>얼음</MenuItem>
          <MenuItem value={80}>격투</MenuItem>
          <MenuItem value={90}>독</MenuItem>
          <MenuItem value={100}>땅</MenuItem>
          <MenuItem value={110}>비행</MenuItem>
          <MenuItem value={120}>에스퍼</MenuItem>
          <MenuItem value={130}>벌레</MenuItem>
          <MenuItem value={140}>바위</MenuItem>
          <MenuItem value={150}>고스트</MenuItem>
          <MenuItem value={160}>드래곤</MenuItem>
          <MenuItem value={170}>강철</MenuItem>
          <MenuItem value={180}>페어리</MenuItem>
        </Select>
      </FormControl>
      <Button
        variant='contained'
        color='inherit'
        onClick={handleClickOpen}
        style={{ marginLeft: '30px', marginTop: '10px' }}
      >
        속성 색상표
      </Button>
      <Dialog open={isOpen} onClose={handleClose} style={{ zIndex: '10000' }}>
        <DialogTitle>포켓몬 속성 색상표</DialogTitle>
        <DialogContent>
          <img alt='' src={ImgSrc.typeColorImg} />
        </DialogContent>
        <DialogActions>
          <Button variant='contained' color='inherit' onClick={handleClose}>
            닫기
          </Button>
        </DialogActions>
      </Dialog>
      <TextField
        id='outlined-basic'
        label='포켓몬 이름 검색'
        variant='outlined'
        onChange={onChangeSearchName}
        style={{
          backgroundColor: 'white',
          float: 'right',
          marginRight: '50px',
        }}
      />
      <div style={{ textAlign: 'end', marginTop: '20px', marginRight: '50px' }}>
        보유한 포켓몬 수: {pokemonNumber}
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateRows: '1fr ',
          gridTemplateColumns: '1fr '.repeat(5),
          gap: '2em 1em',
          marginTop: '50px',
        }}
      >
        {pokemonList.map((num) =>
          Object.keys(userPokemonObj).includes(num) ? (
            <PokemonBookCard
              key={Number(num)}
              name={userPokemonObj[num]}
              selectType={String(selectType)}
              searchName={searchName}
              num={Number(num)}
            />
          ) : (
            <DefaultBookCard
              key={Number(num)}
              selectType={String(selectType)}
              searchName={searchName}
            />
          )
        )}
      </div>
      <ScrollUpButton />
      <RankingButton />
    </div>
  );
}

export default IllustratedBookPage;
