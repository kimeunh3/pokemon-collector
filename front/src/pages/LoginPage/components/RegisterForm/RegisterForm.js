import React, { useState } from 'react';
import {
	Box,
	Button,
	TextField,
	Grid,
	Radio,
	RadioGroup,
	FormControlLabel,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	Typography,
	Rating,
	FormLabel,
} from '@mui/material';
import { CatchingPokemon } from '@mui/icons-material';
import IconObj from '../../../../core/Icon';

import * as Api from '../../../../api';

function RegisterPage({ setLogin }) {
	const [inputs, setInputs] = useState({
		email: '',
		password: '',
		nickname: '',
		sex: 'male',
		age: '',
		interest: 3,
		likeType: '',
	});
	const types = [
		'노말',
		'불꽃',
		'물',
		'풀',
		'전기',
		'얼음',
		'격투',
		'독',
		'땅',
		'비행',
		'에스퍼',
		'벌레',
		'바위',
		'고스트',
		'드래곤',
		'강철',
		'페어리',
	];

	const onChange = (e) => {
		const { name, value } = e.target;
		setInputs({
			...inputs,
			[name]: value,
		});
	};

	const validateEmail = (email) =>
		email
			.toLowerCase()
			.match(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			);
	const isEmailValid = validateEmail(inputs.email);
	// 비밀번호가 4글자 이상인지 여부를 확인함.
	const isPasswordValid = inputs.password.length >= 4;
	// 이메일과 비밀번호 조건이 동시에 만족되는지 확인함.
	const isFormValid = isEmailValid && isPasswordValid;

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			// "user/register" 엔드포인트로 post요청함.
			await Api.post('user/register', inputs);

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
				onChange={onChange}
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
				onChange={onChange}
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
				onChange={onChange}
				sx={{ width: '70%', margin: 'auto', marginBottom: '1%' }}
			/>
			<Grid container spacing={2} sx={{ width: '90%', margin: 'auto' }}>
				<Grid item xs={6} sm={6}>
					<FormControl sx={{ margin: 'auto' }} required>
						<FormLabel>성별</FormLabel>
						<RadioGroup
							row
							defaultValue='male'
							name='sex'
							onChange={onChange}
							sx={{ minWidth: '300px' }}
						>
							<FormControlLabel value='male' control={<Radio />} label='남성' />
							<FormControlLabel
								value='female'
								control={<Radio />}
								label='여성'
							/>
						</RadioGroup>
					</FormControl>
				</Grid>
				<Grid item xs={6} sm={5}>
					<TextField
						required
						id='filled-number'
						label='나이'
						name='age'
						InputLabelProps={{
							shrink: true,
						}}
						variant='standard'
						size='small'
						onChange={onChange}
					/>
				</Grid>

				<Grid item xs={6} sm={6}>
					<Typography component='legend'>
						<CatchingPokemon />
						<span> 포켓몬 관심도</span>
					</Typography>
					<Rating
						type='number'
						name='interest'
						value={Number(inputs.interest)}
						onChange={onChange}
					/>
				</Grid>
				<Grid item xs={6} sm={5}>
					<FormControl required fullWidth variant='standard' size='small'>
						<InputLabel id='demo-simple-select-label'>선호하는 속성</InputLabel>
						<Select
							labelId='demo-simple-select-label'
							id='demo-simple-select'
							name='likeType'
							value={inputs.likeType}
							label='favAtt'
							onChange={onChange}
						>
							{types.map((type) => (
								<MenuItem value={type}>
									<Typography sx={IconObj[type].Color}>
										{IconObj[type].Icon} {type}
									</Typography>
								</MenuItem>
							))}
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
