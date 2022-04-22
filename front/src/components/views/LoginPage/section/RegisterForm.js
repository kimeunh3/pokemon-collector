import React from 'react';
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

function RegisterPage({ setLogin }) {
	return (
		<Box component='form' sx={{ display: 'flex', flexDirection: 'column' }}>
			<TextField
				margin='normal'
				required
				id='nickname'
				label='닉네임'
				name='nickname'
				autoComplete='nickname'
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
				<Grid item>
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
