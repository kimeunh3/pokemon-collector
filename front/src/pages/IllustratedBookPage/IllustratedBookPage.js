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

import * as Api from '../../api';

function IllustratedBookPage() {
	const [selectType1, setSelectType1] = useState(10);
	const [selectType2, setSelectType2] = useState(10);
	const [searchName, setSearchName] = useState();
	const [isOpen, setIsOpen] = useState(false);
	const [userPokemonList, setUserPokemonList] = useState([]);
	const [pokemonList, setPokemonList]= useState([]);

	useEffect(() => {
		Api.get('user/current').then((res) => {
			setUserPokemonList(res.data.stickers);
		});
	}, []);

	const userPokemonObj = {};
	userPokemonList.forEach((value) => {
		userPokemonObj[value.id] = value.name;
	});

	const pokemonNumber = Object.keys(userPokemonList).length;

	useEffect(() => {
		const newPokemonList = [];
		for (let i = 1; i < 152; i += 1) {
			newPokemonList.push(i.toString());
		}
		setPokemonList(newPokemonList)
	}, [])

	const handleChangeType1 = (e) => {
		setSelectType1(e.target.value);
	};
	const handleChangeType2 = (e) => {
		setSelectType2(e.target.value);
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
		<div style={{ paddingTop: '170px', paddingBottom: '50px' }}>
			<FormControl
				style={{ width: '200px', marginLeft: '40px', backgroundColor: 'white' }}
			>
				<InputLabel id='demo-simple-select-label'>속성 1</InputLabel>
				<Select
					labelId='demo-simple-select-label'
					id='demo-simple-select'
					value={selectType1}
					label='속성 1'
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
			<FormControl
				style={{ width: '200px', marginLeft: '40px', backgroundColor: 'white' }}
			>
				<InputLabel id='demo-simple-select-label'>속성 2</InputLabel>
				<Select
					labelId='demo-simple-select-label'
					id='demo-simple-select'
					value={selectType2}
					label='속성 2'
					onChange={handleChangeType2}
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
					<img alt='' src='images/IllustratedBookPage/typeColor.png' />
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
				style={{ backgroundColor: 'white', marginLeft: '630px' }}
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
							name={userPokemonObj[num]}
							selectType1={String(selectType1)}
							selectType2={String(selectType2)}
							searchName={searchName}
							num={Number(num)}
						/>
					) : (
						<DefaultBookCard
							selectType1={String(selectType1)}
							selectType2={String(selectType2)}
							searchName={searchName}
						/>
					)
				)}
			</div>
			<button
				type='button'
				id='go-top'
				onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
			>
				<span className='material-symbols-outlined'>arrow_upward</span>
			</button>
		</div>
	);
}

export default IllustratedBookPage;
