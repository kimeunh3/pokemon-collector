import React, { useState, useEffect, useReducer } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import * as Api from './api';
import { loginReducer } from './reducer';

import NavBar from './pages/NavBar/NavBar';
import LoginPage from './pages/LoginPage/LoginPage';
import LandingPage from './pages/LandingPage/LandingPage';
import IllustratedBookPage from './pages/IllustratedBookPage/IllustratedBookPage';
import BreadPage from './pages/BreadPage/BreadPage';
import PokemonDetailPage from './pages/PokemonDetailPage/PokemonDetailPage';
import StatisticsPage from './pages/StatisticsPage/StatisticsPage';
import TypeStatisticsPage from './pages/StatisticsPage/TypeStatisticsPage';
import StatsStatisticsPage from './pages/StatisticsPage/StatsStatisticsPage';
import MyPage from './pages/MyPage/MyPage';
import QuizPage from './pages/QuizPage/QuizPage';

import { UserStateContext, DispatchContext } from './Context';
import './App.css';
import ImgSrc from './core/constants/ImgSrc';

function App() {
	// useReducer 훅을 통해 userState 상태와 dispatch함수를 생성함.
	const [userState, dispatch] = useReducer(loginReducer, {
		user: null,
	});

	// 아래의 fetchCurrentUser 함수가 실행된 다음에 컴포넌트가 구현되도록 함.
	// 아래 코드를 보면 isFetchCompleted 가 true여야 컴포넌트가 구현됨.
	const [isFetchCompleted, setIsFetchCompleted] = useState(false);

	const fetchCurrentUser = async () => {
		try {
			// 이전에 발급받은 토큰이 있다면, 이를 가지고 유저 정보를 받아옴.
			const res = await Api.get('user/current');
			const currentUser = res.data;

			// dispatch 함수를 통해 로그인 성공 상태로 만듦.
			dispatch({
				type: 'LOGIN_SUCCESS',
				payload: currentUser,
			});

			console.log('%c sessionStorage에 토큰 있음.', 'color: #d93d1a;');
		} catch {
			console.log('%c SessionStorage에 토큰 없음.', 'color: #d93d1a;');
		}
		// fetchCurrentUser 과정이 끝났으므로, isFetchCompleted 상태를 true로 바꿔줌
		setIsFetchCompleted(true);
	};

	// useEffect함수를 통해 fetchCurrentUser 함수를 실행함.
	useEffect(() => {
		fetchCurrentUser();
	}, []);

	if (!isFetchCompleted) {
		return (
			<div id='loading'>
				<img id='loading-image' src={ImgSrc.loadingGif} alt='Loading...' />
			</div>
		);
	}

	return (
		<DispatchContext.Provider value={dispatch}>
			<UserStateContext.Provider value={userState}>
				<Router>
					<NavBar />
					<Routes>
						<Route path='/' exact element={<LandingPage />} />
						<Route path='/login' element={<LoginPage />} />
						<Route path='/bread' element={<BreadPage userState={userState} />} />
						<Route path='/pokemonDetail/:pokemonId' element={<PokemonDetailPage />} />
						<Route path='/illustratedBook' element={<IllustratedBookPage />} />
						<Route path='/statisticsPage' element={<StatisticsPage />} />
						<Route
							path='/statisticsPage/typeStatisticsPage/:type'
							element={<TypeStatisticsPage />}
						/>
						<Route
							path='/statisticsPage/statsStatisticsPage/:stats'
							element={<StatsStatisticsPage />}
						/>
						<Route path='/myPage' element={<MyPage userState={userState} />} />
						<Route path='/quizPage' element={<QuizPage />} />
					</Routes>
				</Router>
			</UserStateContext.Provider>
		</DispatchContext.Provider>
	);
}

export default App;
