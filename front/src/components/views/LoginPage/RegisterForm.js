import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


import * as Api from "../../../api";

function RegisterPage({ setLogin }) {
	// const navigate = useNavigate();

	// useState로 nickname 상태를 생성함.
	const [nickname, setNickname] = useState("");
	// useState로 email 상태를 생성함.
	const [email, setEmail] = useState("");
	// useState로 password 상태를 생성함.
	const [password, setPassword] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
	
		try {
		  // "user/register" 엔드포인트로 post요청함.
		  await Api.post("user/register", {
			email,
			password,
			nickname,
			'sex': 'Female',
			'age': 25,
			'interest': 5,
			'likeType': '물'
		  });
	
		  // 로그인 페이지로 이동함.
		  setLogin(true);
		} catch (err) {
		  console.log("회원가입에 실패하였습니다.", err);
		}
	  };
	
  

	return (
		<Box component='form' sx={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit}>
			<TextField
				margin='normal'
				required
				id='nickname'
				label='닉네임'
				name='nickname'
				autoComplete='nickname'
				onChange={(e) => setNickname(e.target.value)}
				autoFocus
				sx={{ width: '70%', margin: 'auto', marginBottom: '4%' }}
			/>
			<FormControl sx={{ margin: 'auto' }} required>
				<FormLabel>성별</FormLabel>
				<RadioGroup row defaultValue='남성'>
					<FormControlLabel value='남성' control={<Radio />} label='남성' />
					<FormControlLabel value='여성' control={<Radio />} label='여성' />
				</RadioGroup>
			</FormControl>
			<TextField
				margin='normal'
				required
				id='email'
				label='이메일'
				name='email'
				autoComplete='email'
				onChange={(e) => setEmail(e.target.value)}
				sx={{ width: '70%', margin: 'auto', marginBottom: '4%' }}
			/>
			<TextField
				margin='normal'
				required
				name='password'
				label='비밀번호'
				type='password'
				id='password'
				autoComplete='current-password'
				onChange={(e) => setPassword(e.target.value)}
				sx={{ width: '70%', margin: 'auto' }}
			/>
			<Button
				variant='contained'
				type='submit'
				color='success'
				sx={{ width: '40%', margin: 'auto', mt: 1, mb: 2 }}
			>
				가입 하기
			</Button>
			<Grid container justifyContent='flex-end'>
				<Grid>
					<Button
						color='primary'
						onClick={() => {
							setLogin(true);
						}}
					>
						이미 계정이 있으신가요? 로그인 하기
					</Button>
				</Grid>
			</Grid>
		</Box>
	);
}

RegisterPage.propTypes = {
	setLogin: PropTypes.node.isRequired,
};

export default RegisterPage;
