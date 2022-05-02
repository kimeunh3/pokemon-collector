import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options1 = {
  plugins: {
    title: {
      display: true,
      text: '속성별 능력치',
    },
  },
  responsive: true,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

export const options2 = {
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: 'right',
    },
    title: {
      display: true,
      text: '속성별 포켓몬 수',
    },
  },
};

export function WholeStatsStatisticsCharts({ y }) {
  const data = {
    labels: [
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
    ],
    datasets: [
      {
        label: '공격력',
        data: y.attackMeans,
        backgroundColor: 'rgba(240, 128, 48, 0.8)',
        stack: 'Stack 0',
      },
      {
        label: '방어력',
        data: y.defenseMeans,
        backgroundColor: 'rgba(248, 208, 48, 0.8)',
        stack: 'Stack 0',
      },
      {
        label: 'Hp',
        data: y.hpMeans,
        backgroundColor: 'rgba(255, 0, 0, 0.8)',
        stack: 'Stack 0',
      },
      {
        label: '특수공격력',
        data: y.spAttackMeans,
        backgroundColor: 'rgba(104, 144, 240, 0.8)',
        stack: 'Stack 0',
      },
      {
        label: '특수방어력',
        data: y.spDefenseMeans,
        backgroundColor: 'rgba(120, 200, 80, 0.8)',
        stack: 'Stack 0',
      },
      {
        label: '스피드',
        data: y.speedMeans,
        backgroundColor: 'rgba(193, 131, 193, 0.8)',
        stack: 'Stack 0',
      },
      {
        type: 'line',
        label: '종합점수',
        data: y.totalPointsMeans,
        backgroundColor: 'black',
        stack: 'Stack 1',
      },
    ],
  };

  return <Bar options={options1} data={data} />;
}

export function WholeTypeCharts({ y }) {
  const ColorList = [
    'rgba(198, 198, 167, 0.8)',
    'rgba(245, 172, 120, 0.8)',
    'rgba(157, 183, 245, 0.8)',
    'rgba(167, 219, 141, 0.8)',
    'rgba(250, 224, 120, 0.8)',
    'rgba(188, 230, 230, 0.8)',
    'rgba(214, 120, 115, 0.8)',
    'rgba(193, 131, 193, 0.8)',
    'rgba(235, 214, 157, 0.8)',
    'rgba(198, 183, 245, 0.8)',
    'rgba(250, 146, 178, 0.8)',
    'rgba(198, 209, 110, 0.8)',
    'rgba(209, 193, 125, 0.8)',
    'rgba(162, 146, 188, 0.8)',
    'rgba(162, 125, 250, 0.8)',
    'rgba(209, 209, 224, 0.8)',
    'rgba(244, 189, 201, 0.8)',
  ];

  const data = {
    labels: [
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
    ],
    datasets: [
      {
        label: '포켓몬 수',
        data: y,
        borderColor: ColorList,
        backgroundColor: ColorList,
      },
    ],
  };

  return <Bar options={options2} data={data} />;
}
