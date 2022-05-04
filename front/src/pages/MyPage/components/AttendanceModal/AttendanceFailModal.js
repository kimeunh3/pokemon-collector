import React from 'react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function AttendanceFailModal({ AttdFailModalOpen, setAttdFailModalOpen }) {
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

	return (
		<Modal
			open={AttdFailModalOpen}
			aria-labelledby='modal-modal-title'
			aria-describedby='modal-modal-description'
		>
			<Box sx={style}>
				<Typography id='modal-modal-title' variant='h6' component='h2'>
					출석 체크에 실패했습니다.
				</Typography>
				<Typography id='modal-modal-description' sx={{ mt: 2 }}>
					이전 출석체크 후 24시간 뒤 시도해주세요.
				</Typography>
				<Button
					sx={{ marginLeft: 15, marginTop: 3 }}
					variant='contained'
					onClick={() => {
						setAttdFailModalOpen(false);
					}}
				>
					확인
				</Button>
			</Box>
		</Modal>
	);
}

export default AttendanceFailModal;
