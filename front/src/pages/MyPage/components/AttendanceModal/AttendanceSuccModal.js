import React from 'react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import * as Api from '../../../../api';

function AttendanceSuccModal({
	attdSuccModalOpen,
	setAttdSuccModalOpen,
	fetchUserInfo,
}) {
	const style = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 400,
		bgcolor: 'background.paper',
		border: '2px solid #000',
		borderRadius: '20px',
		boxShadow: 24,
		p: 4,
	};

	const handleGetPoint = async () => {
		const res = await Api.put('user/checkIn');
		fetchUserInfo();
		console.log(res);
		setAttdSuccModalOpen(true);
	};

	return (
		<Modal
			open={!attdSuccModalOpen}
			e
			aria-labelledby='modal-modal-title'
			aria-describedby='modal-modal-description'
		>
			<Box sx={style}>
				<Typography id='modal-modal-title' variant='h6' component='h2'>
					환영합니다! 출석체크에 성공했어요!
				</Typography>
				<Typography id='modal-modal-description' sx={{ mt: 2 }}>
					지금 1000포인트를 받으시겠어요?
				</Typography>

				<Grid container mt={4}>
					<Grid item xs={8} md={8}>
						<Button
							variant='contained'
							color='success'
							onClick={handleGetPoint}
						>
							네!
						</Button>
					</Grid>
					<Grid item xs={4} md={4}>
						<Button
							variant='contained'
							color='error'
							onClick={() => {
								setAttdSuccModalOpen(true);
							}}
						>
							아니오!
						</Button>
					</Grid>
				</Grid>
			</Box>
		</Modal>
	);
}

export default AttendanceSuccModal;
