import React, { useState } from 'react';
import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import * as Api from '../../../../api';

function RegisterPage({ setLogin }) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [nickname, setNickname] = useState('');
	const [interest, setInterest] = React.useState(3);
	const [favAtt, setFavAtt] = React.useState('');

	const validateEmail = (email) =>
		email
			.toLowerCase()
			.match(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			);
	const isEmailValid = validateEmail(email);
	// 비밀번호가 4글자 이상인지 여부를 확인함.
	const isPasswordValid = password.length >= 4;
	// 이메일과 비밀번호 조건이 동시에 만족되는지 확인함.
	const isFormValid = isEmailValid && isPasswordValid;

	const handleChange = (event) => {
		setFavAtt(event.target.value);
	};
	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			// "user/register" 엔드포인트로 post요청함.
			await Api.post('user/register', {
				email,
				password,
				nickname,
				sex: 'Female',
				age: 25,
				interest: 5,
				likeType: '물',
			});

			// 로그인 페이지로 이동함.
			setLogin(true);
		} catch (err) {
			console.log('회원가입에 실패하였습니다.', err);
		}
	};

	return (
		<Box
			component='form'
			sx={{ display: 'flex', flexDirection: 'column' }}
			onSubmit={handleSubmit}
		>
			<TextField
				required
				autoFocus
				size='small'
				id='email'
				label='이메일'
				name='email'
				autoComplete='email'
				onChange={(e) => setEmail(e.target.value)}
				sx={{
					width: '70%',
					margin: 'auto',
					marginBottom: '2%',
				}}
			/>
			{!isEmailValid && (
				<Typography
					variant='caption'
					className='text-success'
					sx={{ width: '70%', margin: 'auto', marginBottom: '1%' }}
				>
					이메일 형식이 올바르지 않습니다.
				</Typography>
			)}
			<TextField
				required
				name='password'
				size='small'
				label='비밀번호'
				type='password'
				id='password'
				autoComplete='current-password'
				onChange={(e) => setPassword(e.target.value)}
				sx={{ width: '70%', margin: 'auto', marginBottom: '2%' }}
			/>
			{!isPasswordValid && (
				<Typography
					variant='caption'
					className='text-success'
					sx={{
						width: '70%',
						margin: 'auto',
						marginBottom: '1%',
					}}
				>
					비밀번호는 4글자 이상입니다.
				</Typography>
			)}
			<TextField
				required
				size='small'
				id='nickname'
				label='닉네임'
				name='nickname'
				autoComplete='nickname'
				onChange={(e) => setNickname(e.target.value)}
				sx={{ width: '70%', margin: 'auto', marginBottom: '1%' }}
			/>
			<Grid container spacing={2} sx={{ width: '90%', margin: 'auto' }}>
				<Grid item xs={6} sm={6}>
					<FormControl sx={{ margin: 'auto' }} required>
						<FormLabel>성별</FormLabel>
						<RadioGroup row defaultValue='남성'>
							<FormControlLabel value='남성' control={<Radio />} label='남성' />
							<FormControlLabel value='여성' control={<Radio />} label='여성' />
						</RadioGroup>
					</FormControl>
				</Grid>
				<Grid item xs={6} sm={5}>
					<TextField
						required
						id='filled-number'
						label='나이'
						type='number'
						InputLabelProps={{
							shrink: true,
						}}
						variant='standard'
						size='small'
					/>
				</Grid>

				<Grid item xs={6} sm={6}>
					<Typography component='legend'>포켓몬 관심도</Typography>
					<Rating
						name='simple-controlled'
						value={interest}
						onChange={(event, newValue) => {
							setInterest(newValue);
						}}
					/>
				</Grid>
				<Grid item xs={6} sm={5}>
					<FormControl required fullWidth variant='standard' size='small'>
						<InputLabel id='demo-simple-select-label'>선호 속성</InputLabel>
						<Select
							labelId='demo-simple-select-label'
							id='demo-simple-select'
							value={favAtt}
							label='favAtt'
							onChange={handleChange}
						>
							<MenuItem value={10}>Ten</MenuItem>
							<MenuItem value={20}>Twenty</MenuItem>
							<MenuItem value={30}>Thirty</MenuItem>
						</Select>
					</FormControl>
				</Grid>
			</Grid>

			<Button
				variant='contained'
				type='submit'
				color='success'
				sx={{ width: '40%', margin: 'auto', mt: 1, mb: 2 }}
				disabled={!isFormValid}
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

export default RegisterPage;
