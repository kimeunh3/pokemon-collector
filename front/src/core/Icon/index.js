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
	Edit,
	GppBad,
	Favorite,
	AutoAwesome,
	GppMaybe,
	Forward,
	FileUpload,
	Download,
	Mediation,
} from '@mui/icons-material';

const IconObj = {
	노말: {
		Icon: <Adjust sx={{ color: '#6D6D4E' }} />,
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
	공격력: {
		Icon: <Edit sx={{ color: 'rgba(240, 128, 48, 1)' }} />,
	},
	방어력: {
		Icon: <GppBad sx={{ color: 'rgba(248, 208, 48, 1)' }} />,
	},
	Hp: {
		Icon: <Favorite sx={{ color: 'rgba(255, 0, 0, 1)' }} />,
	},
	특수공격력: {
		Icon: <AutoAwesome sx={{ color: 'rgba(104, 144, 240, 1)' }} />,
	},
	특수방어력: {
		Icon: <GppMaybe sx={{ color: 'rgba(120, 200, 80, 1)' }} />,
	},
	스피드: {
		Icon: <Forward sx={{ color: 'rgba(193, 131, 193, 1)' }} />,
	},
	키: {
		Icon: <FileUpload sx={{ color: 'rgba(161, 57, 89, 1)' }} />,
	},
	몸무게: {
		Icon: <Download sx={{ color: 'rgba(68, 94, 156, 1)' }} />,
	},
	종합점수: {
		Icon: <Mediation sx={{ color: 'rgba(128, 128, 128, 1)' }} />,
	},
};

export default IconObj;
