'use client'

import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Users',
      data: [100, 200, 300, 400, 500, 600],
      borderColor: 'rgb(59, 130, 246)',
      backgroundColor: 'rgba(59, 130, 246, 0.5)',
    },
  ],
}

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'User Growth',
    },
  },
}

export default function Dashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-secondary p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Total Users</h2>
        <p className="text-3xl font-bold">1,234</p>
      </div>
      <div className="bg-secondary p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Active Users</h2>
        <p className="text-3xl font-bold">789</p>
      </div>
      <div className="bg-secondary p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Conversion Rate</h2>
        <p className="text-3xl font-bold">64%</p>
      </div>
      <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-secondary p-6 rounded-lg shadow-lg">
        <Line options={options} data={data} />
      </div>
    </div>
  )
} 