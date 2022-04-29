import React from 'react';
import {
	Adjust,
	LocalFireDepartment,
	Opacity,
	Grass,
	Bolt,
	BugReport,
	AcUnit,
	SportsMma,
	Coronavirus,
	Landscape,
	Air,
	Storm,
	Castle,
	DarkMode,
	Adb,
	Hardware,
	Reddit,
} from '@mui/icons-material';

const IconObj = {
	노말: {
		Icon: <Adjust sx={{ color: '#A8A878' }} />,
		Color: '#A8A878',
	},
	불꽃: {
		Icon: <LocalFireDepartment sx={{ color: '#F08030' }} />,
		Color: { color: '#F08030' },
	},
	물: {
		Icon: <Opacity sx={{ color: '#6890F0' }} />,
		Color: { color: '#6890F0' },
	},
	풀: {
		Icon: <Grass sx={{ color: '#78C850' }} />,
		Color: { color: '#78C850' },
	},
	전기: {
		Icon: <Bolt sx={{ color: '#F8D030' }} />,
		Color: { color: '#F8D030' },
	},
	얼음: {
		Icon: <AcUnit sx={{ color: '#98D8D8' }} />,
		Color: { color: '#98D8D8' },
	},
	격투: {
		Icon: <SportsMma sx={{ color: '#C03028' }} />,
		Color: { color: '#C03028' },
	},
	독: {
		Icon: <Coronavirus sx={{ color: '#A040A0' }} />,
		Color: { color: '#A040A0' },
	},
	땅: {
		Icon: <Landscape sx={{ color: '#E0C068' }} />,
		Color: { color: '#E0C068' },
	},
	비행: {
		Icon: <Air sx={{ color: '#A890F0' }} />,
		Color: { color: '#A890F0' },
	},
	에스퍼: {
		Icon: <Storm sx={{ color: '#F85888' }} />,
		Color: { color: '#F85888' },
	},
	벌레: {
		Icon: <BugReport sx={{ color: '#A8B820' }} />,
		Color: { color: '#A8B820' },
	},
	바위: {
		Icon: <Castle sx={{ color: '#B8A038' }} />,
		Color: { color: '#B8A038' },
	},
	고스트: {
		Icon: <DarkMode sx={{ color: '#705898' }} />,
		Color: { color: '#705898' },
	},
	드래곤: {
		Icon: <Adb sx={{ color: '#7038F8' }} />,
		Color: { color: '#7038F8' },
	},
	강철: {
		Icon: <Hardware sx={{ color: '#B8B8D0' }} />,
		Color: { color: '#B8B8D0' },
	},
	페어리: {
		Icon: <Reddit sx={{ color: '#EE99AC' }} />,
		Color: { color: '#EE99AC' },
	},
};

export default IconObj;
