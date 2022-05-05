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

const OPTION_BAR_TYPE_STATS = {
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

const OPTION_BAR_TYPE_TOP5 = {
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

const OPTION_BAR_TYPE_LOW5 = {
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

const OPTION_BAR_POKEMON_TOP15 = {
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
      text: '상위 10% 포켓몬',
    },
  },
};

const OPTION_BAR_POKEMON_LOW15 = {
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
      text: '하위 10% 포켓몬',
    },
  },
};

export function BarTypeStats({ y, colors, stats }) {
  const dataBarTypeStats = {
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
        label: stats,
        data: y,
        backgroundColor: colors,
      },
    ],
  };

  return (
    <div
      style={{
        backgroundColor: 'rgba(255, 255, 255, 1)',
        borderRadius: '10px',
      }}
    >
      <Bar options={OPTION_BAR_TYPE_STATS} data={dataBarTypeStats} />
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
    <div
      style={{
        backgroundColor: 'rgba(255, 255, 255, 1)',
        borderRadius: '10px',
      }}
    >
      <Bar options={OPTION_BAR_TYPE_TOP5} data={dataBarTypeTop5} />
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
    <div
      style={{
        backgroundColor: 'rgba(255, 255, 255, 1)',
        borderRadius: '10px',
      }}
    >
      <Bar options={OPTION_BAR_TYPE_LOW5} data={dataBarTypeLow5} />
    </div>
  );
}

export function BarPokemonTop15({ x, y, colors, stats }) {
  const dataBarPokemonTop15 = {
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
    <div
      style={{
        backgroundColor: 'rgba(255, 255, 255, 1)',
        borderRadius: '10px',
      }}
    >
      <Bar options={OPTION_BAR_POKEMON_TOP15} data={dataBarPokemonTop15} />
    </div>
  );
}

export function BarPokemonLow15({ x, y, colors, stats }) {
  const dataBarPokemonLow15 = {
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
    <div
      style={{
        backgroundColor: 'rgba(255, 255, 255, 1)',
        borderRadius: '10px',
      }}
    >
      <Bar options={OPTION_BAR_POKEMON_LOW15} data={dataBarPokemonLow15} />
    </div>
  );
}
