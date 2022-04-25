import React, { useState, useContext } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

import * as Api from "../../../api";
import { DispatchContext } from "../../Context";

import RegisterForm from './RegisterForm';

function LoginPage() {
	const [Login, setLogin] = useState(true);
	const [email, setEmail] = useState('a@a.com');
	const [password, setPassword] = useState('1234');

	const navigate = useNavigate();
	const dispatch = useContext(DispatchContext);

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

	const handleSubmit = async (e) => {
		e.preventDefault();
	
		try {
		  // "user/login" 엔드포인트로 post요청함.
		  const res = await Api.post("user/login", {
			email,
			password
		  });
		  // 유저 정보는 response의 data임.
		  const user = res.data;
		  // JWT 토큰은 유저 정보의 token임.
		  const jwtToken = user.token;
		  // sessionStorage에 "userToken"이라는 키로 JWT 토큰을 저장함.
		  sessionStorage.setItem("userToken", jwtToken);
		  // dispatch 함수를 이용해 로그인 성공 상태로 만듦.
		  dispatch({
			type: "LOGIN_SUCCESS",
			payload: user,
		  });
	
		  // 기본 페이지로 이동함.
		  navigate("/home", { replace: true });
		} catch (err) {
		  console.log("로그인에 실패하였습니다.\n", err);
		}
	  };
	

	return (
		<Container
			component='main'
			maxWidth='xl'
			sx={{
				height: '100vh',
				backgroundImage: 'url(/images/loginBackground.png)',
				backgroundPosition: 'center center',
				backgroundSize: '100% 100%',
				minHeight: '740px',
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
					width: '35%',
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
								onClick={handleSubmit}
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
