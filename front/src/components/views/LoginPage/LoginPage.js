import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import RegisterForm from './section/RegisterForm';

function LoginPage() {
	const [Login, setLogin] = useState(true);
	const [Email, setEmail] = useState('a@a.com');
	const [Password, setPassword] = useState('1234');

	const validateEmail = (email) =>
		email
			.toLowerCase()
			.match(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			);
	const isEmailValid = validateEmail(Email);
	// 비밀번호가 4글자 이상인지 여부를 확인함.
	const isPasswordValid = Password.length >= 4;
	// 이메일과 비밀번호 조건이 동시에 만족되는지 확인함.
	const isFormValid = isEmailValid && isPasswordValid;

	return (
		<Container
			component='main'
			maxWidth='xl'
			sx={{
				height: '100vh',
				backgroundImage: 'url(/images/loginBackground.png)',
				backgroundPosition: 'center center',
				backgroundSize: '105% 120%',
			}}
		>
			<Box
				mt={10}
				sx={{
					float: 'right',
					display: 'flex',
					flexDirection: 'column',
					bgcolor: '#FFFFFF',
					opacity: '0.9',
					borderRadius: '20px',
					height: '80%',
					width: '38%',
					justifyContent: 'center',
					minWidth: '450px',
				}}
				marginRight={10}
			>
				<Container>
					<img src='/images/logo.png' alt='Logo' width='300px' height='100px' />
					<Typography component='h4' variant='h4' mt={4} marginLeft={5} mb={4}>
						환영합니다!
					</Typography>
					{Login ? (
						<Box
							component='form'
							sx={{ display: 'flex', flexDirection: 'column' }}
						>
							<TextField
								margin='normal'
								required
								id='email'
								label='이메일'
								name='email'
								autoComplete='email'
								autoFocus
								onChange={(e) => setEmail(e.target.value)}
								sx={{ width: '70%', margin: 'auto', marginBottom: '2%' }}
							/>
							{!isEmailValid && (
								<Typography
									className='text-success'
									sx={{ width: '70%', margin: 'auto', marginBottom: '1%' }}
								>
									이메일 형식이 올바르지 않습니다.
								</Typography>
							)}
							<TextField
								margin='normal'
								required
								name='password'
								label='비밀번호'
								type='password'
								id='password'
								onChange={(e) => setPassword(e.target.value)}
								autoComplete='current-password'
								sx={{ width: '70%', margin: 'auto' }}
							/>
							{!isPasswordValid && (
								<Typography
									className='text-success'
									sx={{ width: '70%', margin: 'auto', marginBottom: '1%' }}
								>
									비밀번호는 4글자 이상입니다.
								</Typography>
							)}
							<Button
								type='submit'
								variant='contained'
								color='error'
								sx={{ width: '40%', margin: 'auto', mt: 3, mb: 2 }}
								disabled={!isFormValid}
							>
								로그인
							</Button>
							<Button
								variant='contained'
								color='success'
								sx={{ width: '40%', margin: 'auto', mt: 1, mb: 2 }}
								onClick={() => {
									setLogin(false);
								}}
							>
								회원 가입
							</Button>
						</Box>
					) : (
						<RegisterForm setLogin={setLogin} />
					)}
				</Container>
			</Box>
		</Container>
	);
}

export default LoginPage;
