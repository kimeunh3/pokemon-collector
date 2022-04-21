import React, { useState } from 'react';
import Container from '@mui/material/Container';
// import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
// import Stack from '@mui/material/Stack';
import RegisterPage from './RegisterPage';

function LoginPage() {
	const [Login, setLogin] = useState(true);
	return (
		<Container
			component='main'
			maxWidth='xl'
			sx={{
				height: '100vh',
				backgroundImage: 'url(/images/loginBackground.png)',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
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
				}}
				marginRight={10}
			>
				<Container>
					<img src='/images/logo.png' alt='Logo' width='330' height='130' />
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
								type='submit'
								variant='contained'
								color='error'
								sx={{ width: '40%', margin: 'auto', mt: 3, mb: 2 }}
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
						<RegisterPage setLogin={setLogin} />
					)}
				</Container>
			</Box>
		</Container>
	);
}

export default LoginPage;
