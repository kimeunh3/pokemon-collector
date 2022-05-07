import React, { useState } from 'react';
import {
	Rating,
	InputLabel,
	Select,
	MenuItem,
	Button,
	Box,
	TextField,
	Grid,
	FormControl,
	Typography,
	CardMedia,
} from '@mui/material';
import { CatchingPokemon } from '@mui/icons-material';
import ProfileImgModal from './ProfileImgModal';

import IconObj from '../../../../core/Icon';
import { pokemonURL } from '../../../../core/constants/ImgSrc';
import * as Api from '../../../../api';

function UserEditCard({
	userState,
	setIsEdit,
	fetchUserInfo,
	userPokemonList,
}) {
	const { email, nickname, likeType, interest, profileImg } = userState;
	const [isEditProfileImg, setIsEditProfileImg] = useState(false);
	const [selected, setSelected] = useState(profileImg);

	const [inputs, setInputs] = useState({
		email,
		nickname,
		likeType,
		interest,
		profileImg,
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
	const disabled = true;
	const onChange = (e) => {
		const { name, value } = e.target;
		setInputs({
			...inputs,
			[name]: value,
		});
	};

	const handleEdit = async () => {
		setInputs({ ...inputs, profileImg: `${selected}` });
		const res = await Api.put('user/profileModify', inputs);
		if (res.status === 200) {
			fetchUserInfo();
			setIsEdit(false);
		} else {
			alert(res);
		}
	};

	return (
		<Box
			component='form'
			sx={{ display: 'flex', flexDirection: 'column', padding: '10px' }}
		>
			<CardMedia
				component='img'
				image={`${pokemonURL}/${selected}`}
				alt='profileImg'
				sx={{ width: '65%', height: '65%', margin: 'auto', cursor: 'pointer' }}
				onClick={() => {
					setIsEditProfileImg(true);
				}}
			/>
			<TextField
				disabled={disabled}
				size='small'
				id='email'
				label='이메일'
				name='email'
				value={email}
				autoComplete='email'
				onChange={onChange}
				sx={{
					width: '70%',
					margin: 'auto',
					marginTop: '5%',
					marginBottom: '5%',
				}}
			/>
			<TextField
				required
				size='small'
				id='nickname'
				label='닉네임'
				name='nickname'
				defaultValue={nickname}
				autoComplete='nickname'
				onChange={onChange}
				sx={{ width: '70%', margin: 'auto', marginBottom: '1%' }}
			/>
			<Grid container spacing={2} sx={{ width: '90%', margin: 'auto' }}>
				<Grid item xs={6} sm={6} sx={{ minWidth: '135px' }}>
					<Typography component='legend' variant='overline'>
						<CatchingPokemon />
						<span> 포켓몬 관심도</span>
					</Typography>
					<Rating
						type='number'
						name='interest'
						defaultValue={Number(interest)}
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
							defaultValue={likeType}
							label='favAtt'
							onChange={onChange}
						>
							{types.map((type) => (
								<MenuItem value={type} key={type}>
									<Typography sx={IconObj[type].Color}>
										{IconObj[type].Icon} {type}
									</Typography>
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid>
			</Grid>
			<Box sx={{ display: 'flex', justifyContent: 'center' }}>
				<Button
					variant='contained'
					sx={{
						minWidth: '110px',
						width: '40%',
					}}
					onClick={handleEdit}
				>
					변경 하기
				</Button>
			</Box>
			{isEditProfileImg && (
				<ProfileImgModal
					isEditProfileImg={isEditProfileImg}
					setIsEditProfileImg={setIsEditProfileImg}
					userPokemonList={userPokemonList}
					selected={selected}
					setSelected={setSelected}
					inputs={inputs}
					setInputs={setInputs}
				/>
			)}
		</Box>
	);
}

export default UserEditCard;
