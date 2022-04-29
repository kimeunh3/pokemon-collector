import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const optionBarTypeStats = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: 'top',
    },
    title: {
      display: true,
      text: '속성별 통계',
    },
  },
};

export const optionBarTypeTop5 = {
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
      text: '상위 30% 속성',
    },
  },
};

export const optionBarTypeLow5 = {
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
      text: '하위 30% 속성',
    },
  },
};

export function BarTypeStats({ y, colors, stats }) {
  const dataBarTypeStats = {
    labels: ['노말', '불꽃', '물', '풀', '전기', '얼음', '격투', '독', '땅', '비행', '에스퍼', '벌레', '바위', '고스트', '드래곤', '강철', '페어리'],
    datasets: [
        {
          label: stats,
          data: y,
          backgroundColor: colors,
        },
    ],
  };

  return (
    <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius: '10px',
    }}>
      <Bar options={optionBarTypeStats} data={dataBarTypeStats} />
    </div>
  );
}

export function BarTypeTop5({ x, y, colors, stats }) {
  const dataBarTypeTop5 = {
    labels: x,
    datasets: [
        {
          label: stats,
          data: y,
          backgroundColor: colors,
        },
    ],
  };

  return (
    <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius: '10px',
    }}>
      <Bar options={optionBarTypeTop5} data={dataBarTypeTop5} />
    </div>
  );
}

export function BarTypeLow5({ x, y, colors, stats }) {
  const dataBarTypeLow5 = {
    labels: x,
    datasets: [
        {
          label: stats,
          data: y,
          backgroundColor: colors,
        },
    ],
  };

  return (
    <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius: '10px',
    }}>
      <Bar options={optionBarTypeLow5} data={dataBarTypeLow5} />
    </div>
  );
}