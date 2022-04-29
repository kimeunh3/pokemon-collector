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

export const optionBarStats = {
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

export function BarTypeStats({ y, colors }) {
    const dataBarStats = {
        labels: ['노말', '불꽃', '물', '풀', '전기', '얼음', '격투', '독', '땅', '비행', '에스퍼', '벌레', '바위', '고스트', '드래곤', '강철', '페어리'],
        datasets: [
            {
              label: '공격력',
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
            <Bar options={optionBarStats} data={dataBarStats} />
          </div>
    );
}