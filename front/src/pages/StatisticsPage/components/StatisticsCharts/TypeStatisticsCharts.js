import React from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  RadialLinearScale,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend
);

export const optionBarStats = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: '능력치',
    },
  },
};

export const optionDoughnutType = {
  // responsive: true,
  plugins: {
    // legend: {
    //   position: 'top',
    // },
    title: {
      display: true,
      text: '보유한 다른 속성',
    },
  },
};

export const optionBarWeightHeight = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: '키/몸무게',
    },
  },
  scales: {
    height: {
      type: 'linear',
      position: 'left',
      title: {
        display: true,
        text: '키 (m)',
      },
      grid: {
        display: false,
      },
    },
    weight: {
      type: 'linear',
      position: 'right',
      title: {
        display: true,
        text: '몸무게 (kg)',
      },
      grid: {
        display: false,
      },
    },
  },
};

export const optionBarTotal = {
  plugins: {
    title: {
      display: true,
      text: '종합 능력치',
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

export function BarStats({ x, y }) {
  const dataBarStats = {
    labels: x,
    datasets: [
      {
        label: '공격력',
        data: y.attack,
        backgroundColor: 'rgba(240, 128, 48, 0.5)',
      },
      {
        label: '방어력',
        data: y.defense,
        backgroundColor: 'rgba(248, 208, 48, 0.5)',
      },
      {
        label: 'Hp',
        data: y.hp,
        backgroundColor: 'rgba(255, 0, 0, 0.5)',
      },
      {
        label: '특수공격력',
        data: y.spAttack,
        backgroundColor: 'rgba(104, 144, 240, 0.5)',
      },
      {
        label: '특수방어력',
        data: y.spDefense,
        backgroundColor: 'rgba(120, 200, 80, 0.5)',
      },
      {
        label: '스피드',
        data: y.speed,
        backgroundColor: 'rgba(193, 131, 193, 0.5)',
      },
    ],
  };

  return (
    <div
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius: '10px',
      }}
    >
      <Bar options={optionBarStats} data={dataBarStats} />
    </div>
  );
}

export function DoughnutType({ y }) {
  const dataDoughnutType = {
    labels: Object.keys(y.typesCnt),
    datasets: [
      {
        label: '# of Votes',
        data: Object.values(y.typesCnt),
        backgroundColor: [
          'rgba(198, 198, 167, 0.5)',
          'rgba(245, 172, 120, 0.5)',
          'rgba(157, 183, 245, 0.5)',
          'rgba(167, 219, 141, 0.5)',
          'rgba(250, 224, 120, 0.5)',
          'rgba(188, 230, 230, 0.5)',
          'rgba(214, 120, 115, 0.5)',
          'rgba(193, 131, 193, 0.5)',
          'rgba(235, 214, 157, 0.5)',
          'rgba(198, 183, 245, 0.5)',
          'rgba(250, 146, 178, 0.5)',
          'rgba(198, 209, 110, 0.5)',
          'rgba(209, 193, 125, 0.5)',
          'rgba(162, 146, 188, 0.5)',
          'rgba(162, 125, 250, 0.5)',
          'rgba(209, 209, 224, 0.5)',
          'rgba(244, 189, 201, 0.5)',
          'rgba(0, 0, 0, 0.5)',
        ],
        borderColor: [
          'rgba(198, 198, 167, 1)',
          'rgba(245, 172, 120, 1)',
          'rgba(157, 183, 245, 1)',
          'rgba(167, 219, 141, 1)',
          'rgba(250, 224, 120, 1)',
          'rgba(188, 230, 230, 1)',
          'rgba(214, 120, 115, 1)',
          'rgba(193, 131, 193, 1)',
          'rgba(235, 214, 157, 1)',
          'rgba(198, 183, 245, 1)',
          'rgba(250, 146, 178, 1)',
          'rgba(198, 209, 110, 1)',
          'rgba(209, 193, 125, 1)',
          'rgba(162, 146, 188, 1)',
          'rgba(162, 125, 250, 1)',
          'rgba(209, 209, 224, 1)',
          'rgba(244, 189, 201, 1)',
          'rgba(0, 0, 0, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius: '10px',
        maxWidth: '40vw',
        marginLeft: '18vw',
      }}
    >
      <Doughnut options={optionDoughnutType} data={dataDoughnutType} />
    </div>
  );
}

export function BarWeightHeight({ x, y }) {
  const dataBarWeightHeight = {
    labels: x,
    datasets: [
      {
        label: '키',
        data: y.height,
        backgroundColor: 'rgba(161, 57, 89, 0.5)',
        yAxisID: 'height',
      },
      {
        label: '몸무게',
        data: y.weight,
        backgroundColor: 'rgba(68, 94, 156, 0.5)',
        yAxisID: 'weight',
      },
    ],
  };

  return (
    <div
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius: '10px',
      }}
    >
      <Bar options={optionBarWeightHeight} data={dataBarWeightHeight} />
    </div>
  );
}

export function BarTotal({ x, y }) {
  const dataBarTotal = {
    labels: x,
    datasets: [
      {
        label: '공격력',
        data: y.attack,
        backgroundColor: 'rgba(240, 128, 48, 0.5)',
        stack: 'Stack 0',
      },
      {
        label: '방어력',
        data: y.defense,
        backgroundColor: 'rgba(248, 208, 48, 0.5)',
        stack: 'Stack 0',
      },
      {
        label: 'Hp',
        data: y.hp,
        backgroundColor: 'rgba(255, 0, 0, 0.5)',
        stack: 'Stack 0',
      },
      {
        label: '특수공격력',
        data: y.spAttack,
        backgroundColor: 'rgba(104, 144, 240, 0.5)',
        stack: 'Stack 0',
      },
      {
        label: '특수방어력',
        data: y.spDefense,
        backgroundColor: 'rgba(120, 200, 80, 0.5)',
        stack: 'Stack 0',
      },
      {
        label: '스피드',
        data: y.speed,
        backgroundColor: 'rgba(193, 131, 193, 0.5)',
        stack: 'Stack 0',
      },
      {
        type: 'line',
        label: '종합점수',
        data: y.totalPoints,
        backgroundColor: 'black',
        stack: 'Stack 1',
      },
    ],
  };

  return (
    <div
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius: '10px',
      }}
    >
      <Bar options={optionBarTotal} data={dataBarTotal} />
    </div>
  );
}
