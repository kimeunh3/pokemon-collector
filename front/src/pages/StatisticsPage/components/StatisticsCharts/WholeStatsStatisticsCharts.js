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

const OPTION_1 = {
  plugins: {
    title: {
      display: true,
      text: '속성별 능력치 평균',
    },
  },
  responsive: true,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  scales: {
    stats: {
      type: 'linear',
      position: 'left',
      title: {
        display: true,
        text: '능력치',
      },
      grid: {
        display: false,
      },
      stacked: true,
    },
    totalPoint: {
      type: 'linear',
      position: 'right',
      title: {
        display: true,
        text: '종합점수',
      },
      grid: {
        display: false,
      },
      stacked: true,
    },
  },
};

const OPTION_2 = {
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
        backgroundColor: 'rgba(240, 128, 48, 0.6)',
        stack: 'Stack 0',
        yAxisID: 'stats',
      },
      {
        label: '방어력',
        data: y.defenseMeans,
        backgroundColor: 'rgba(248, 208, 48, 0.6)',
        stack: 'Stack 0',
        yAxisID: 'stats',
      },
      {
        label: 'Hp',
        data: y.hpMeans,
        backgroundColor: 'rgba(255, 0, 0, 0.6)',
        stack: 'Stack 0',
        yAxisID: 'stats',
      },
      {
        label: '특수공격력',
        data: y.spAttackMeans,
        backgroundColor: 'rgba(104, 144, 240, 0.6)',
        stack: 'Stack 0',
        yAxisID: 'stats',
      },
      {
        label: '특수방어력',
        data: y.spDefenseMeans,
        backgroundColor: 'rgba(120, 200, 80, 0.6)',
        stack: 'Stack 0',
        yAxisID: 'stats',
      },
      {
        label: '스피드',
        data: y.speedMeans,
        backgroundColor: 'rgba(193, 131, 193, 0.6)',
        stack: 'Stack 0',
        yAxisID: 'stats',
      },
      {
        type: 'line',
        label: '종합점수',
        data: y.totalPointsMeans,
        backgroundColor: 'black',
        stack: 'Stack 1',
        yAxisID: 'totalPoint',
      },
    ],
  };

  return <Bar options={OPTION_1} data={data} />;
}

export function WholeTypeCharts({ x, y, color }) {
  const data = {
    labels: x,
    datasets: [
      {
        label: '포켓몬 수',
        data: y,
        borderColor: color,
        backgroundColor: color,
      },
    ],
  };

  return <Bar options={OPTION_2} data={data} />;
}
