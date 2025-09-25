import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface CategoryChartProps {
  data: {
    labels: string[];
    values: number[];
  };
}

const CategoryChart: React.FC<CategoryChartProps> = ({ data }) => {
  if (!data || !data.labels || !data.values) {
    return <div>No category data available.</div>;
  }

  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Spending by Category',
        data: data.values,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Spending Analysis',
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default CategoryChart;