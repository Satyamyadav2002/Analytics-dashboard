import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import {
  ChartBarIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  Squares2X2Icon,
  ChartPieIcon,
  UsersIcon,
  BellIcon,
  Cog6ToothIcon,
  ArrowTrendingUpIcon,
  ArrowDownIcon,
  ArrowUpIcon,
  UserIcon,
  ShoppingCartIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface DemographicItem {
  country: string;
  countryCode: string;
  visitors: number;
  percentage: number;
  flag: string;
}

const chartData = {
  labels: ['Mar 1', 'Mar 5', 'Mar 10', 'Mar 15', 'Mar 20', 'Mar 25', 'Mar 30'],
  datasets: [
    {
      label: 'Visitors',
      data: [1000, 2000, 1500, 2500, 1800, 3000, 2800],
      borderColor: '#2563eb',
      tension: 0.4,
      pointStyle: false as const,
    },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      grid: {
        color: '#333',
      },
      ticks: {
        color: '#666',
      },
    },
    y: {
      grid: {
        color: '#333',
      },
      ticks: {
        color: '#666',
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

const demographics: DemographicItem[] = [
  { 
    country: 'India', 
    countryCode: 'IN',
    visitors: 35,
    percentage: 35,
    flag: '🇮🇳'
  },
  { 
    country: 'USA', 
    countryCode: 'US',
    visitors: 25,
    percentage: 25,
    flag: '🇺🇸'
  },
  { 
    country: 'Canada', 
    countryCode: 'CA',
    visitors: 20,
    percentage: 20,
    flag: '🇨🇦'
  },
  { 
    country: 'UAE', 
    countryCode: 'AE',
    visitors: 15,
    percentage: 15,
    flag: '🇦🇪'
  }
];

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-dashboard-dark text-dashboard-text">
      {/* Desktop Sidebar - hidden on mobile */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-dashboard-card hidden lg:block p-4">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 rounded-full bg-dashboard-text/10"></div>
          <h1 className="text-xl font-bold">Analytics</h1>
        </div>
        
        <nav className="space-y-2">
          <a href="#dashboard" className="nav-item">
            <Squares2X2Icon className="w-5 h-5" />
            Dashboard
          </a>
          <a href="#analytics" className="nav-item">
            <ChartBarIcon className="w-5 h-5" />
            Analytics
          </a>
          <a href="#connect" className="nav-item">
            <UsersIcon className="w-5 h-5" />
            Connect
          </a>
          <a href="/profile" className="nav-item">
            <UserIcon className="w-5 h-5" />
            Profile
          </a>
          <a href="/settings" className="nav-item">
            <Cog6ToothIcon className="w-5 h-5" />
            Settings
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-64 p-4 pb-20">
        {/* Header */}
        <header className="bg-gray-800 p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl sm:text-2xl font-bold text-white">Analytics Dashboard</h1>
            <div className="flex items-center space-x-2 text-gray-400">
              <span>Home</span>
              <span>/</span>
              <span>Dashboard</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
              <span>Connect</span>
              <ArrowTrendingUpIcon className="h-5 w-5" />
            </button>
          </div>
        </header>

        {/* Top Navigation */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-4">
            <button className="bg-dashboard-card hover:bg-dashboard-text/10 text-dashboard-text px-4 py-2 rounded-lg">
              Overview
            </button>
            <button className="bg-dashboard-card hover:bg-dashboard-text/10 text-dashboard-text px-4 py-2 rounded-lg">
              Analytics
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-dashboard-card hover:bg-dashboard-text/10 text-dashboard-text px-4 py-2 rounded-lg">
              Export
            </button>
            <button className="bg-dashboard-card hover:bg-dashboard-text/10 text-dashboard-text px-4 py-2 rounded-lg">
              Share
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="dashboard-card">
            <div className="dashboard-label">Visitors</div>
            <div className="dashboard-stat">13.49K</div>
            <div className="text-green-500 text-sm">+12.5%</div>
          </div>
          <div className="dashboard-card">
            <div className="dashboard-label">Founders</div>
            <div className="dashboard-stat">7.4K</div>
            <div className="text-green-500 text-sm">+100%</div>
          </div>
          <div className="dashboard-card">
            <div className="dashboard-label">Investors</div>
            <div className="dashboard-stat">6.09K</div>
            <div className="text-green-500 text-sm">+86%</div>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
          {/* Chart */}
          <div className="dashboard-card mb-8 h-[300px]">
            <h3 className="text-xl font-bold mb-4">Visitor Trends</h3>
            <div className="w-full h-[250px]">
              <Line data={chartData} options={chartOptions} />
            </div>
          </div>
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Demographics Section */}
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-white">Demographics</h2>
              <GlobeAltIcon className="h-6 w-6 text-gray-400" />
            </div>
            <div className="space-y-4">
              {demographics.map((item) => (
                <div key={item.country} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{item.flag}</span>
                    <span className="text-white">{item.country}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-blue-500 rounded-full"
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-400">{item.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-dashboard-card lg:hidden">
        <div className="flex justify-around p-4">
          <button className="flex flex-col items-center gap-1">
            <Squares2X2Icon className="w-6 h-6" />
            <span className="text-xs">Dashboard</span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <ChartBarIcon className="w-6 h-6" />
            <span className="text-xs">Analytics</span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <UsersIcon className="w-6 h-6" />
            <span className="text-xs">Connect</span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <UserIcon className="w-6 h-6" />
            <span className="text-xs">Profile</span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <Cog6ToothIcon className="w-6 h-6" />
            <span className="text-xs">Settings</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Dashboard; 