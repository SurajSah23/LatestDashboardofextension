import { useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

function UsageOne() {
  const [selectedType, setSelectedType] = useState('All types');
  const [selectedPeriod, setSelectedPeriod] = useState('Current billing period');
  const [selectedUser, setSelectedUser] = useState('All Users');

  const [typeDropdownOpen, setTypeDropdownOpen] = useState(false);
  const [periodDropdownOpen, setPeriodDropdownOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const sampleData = [
    { date: 'January 19', credits: 0.2 },
    { date: 'January 26', credits: 0.4 },
    { date: 'February 2', credits: 0.8 },
    { date: 'February 9', credits: 0.6 },
    { date: 'February 16', credits: 0.3 },
    { date: 'February 23', credits: 0.5 },
    { date: 'March 2', credits: 0.7 },
    { date: 'March 9', credits: 0.4 }
  ];

  const types = ['All types', 'Type 1', 'Type 2', 'Type 3'];
  const periods = ['Current billing period', 'Last month', 'Last 3 months', 'Custom'];
  const users = ['All Users', 'User 1', 'User 2', 'User 3'];

  const totalCredits = sampleData.reduce((sum, point) => sum + point.credits, 0);

  const chartOptions = {
    title: { text: undefined },
    credits: { enabled: false },
    xAxis: {
      categories: sampleData.map(point => point.date),
      labels: { style: { color: '#6B7280', fontSize: '12px' } },
      gridLineWidth: 1,
      gridLineColor: '#E5E7EB',
      tickLength: 0
    },
    yAxis: {
      title: { text: undefined },
      labels: { format: '{value:.1f}', style: { color: '#6B7280', fontSize: '12px' } },
      gridLineColor: '#E5E7EB',
      min: 0,
      max: 1,
      tickInterval: 0.1
    },
    series: [{
      type: 'line',
      name: 'Credits',
      data: sampleData.map(point => point.credits),
      color: '#3B82F6',
      marker: { symbol: 'circle', radius: 4, lineWidth: 2, lineColor: '#3B82F6', fillColor: '#3B82F6' },
      states: { hover: { lineWidth: 2 } }
    }],
    tooltip: {
      formatter: function() { return `<b>${this.x}</b><br/>Credits: ${this.y}`; },
      backgroundColor: '#FFFFFF',
      borderColor: '#E5E7EB',
      borderRadius: 8,
      style: { color: '#1F2937' }
    },
    legend: { enabled: false },
    chart: {
      height: 320,
      style: { fontFamily: '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }
    }
  };

  return (
    <div className="p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-xl font-semibold text-gray-900 mb-6">Usage</h1>
        
        <div className="flex gap-4 mb-8">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Filter by:</span>
            {[{label: selectedType, list: types, setState: setSelectedType, open: typeDropdownOpen, setOpen: setTypeDropdownOpen},
              {label: selectedPeriod, list: periods, setState: setSelectedPeriod, open: periodDropdownOpen, setOpen: setPeriodDropdownOpen},
              {label: selectedUser, list: users, setState: setSelectedUser, open: userDropdownOpen, setOpen: setUserDropdownOpen}].map(({ label, list, setState, open, setOpen }, index) => (
                <div className="relative" key={index}>
                  <button className="flex items-center gap-2 text-blue-600 text-sm border rounded-md px-3 py-1.5 hover:bg-gray-50" onClick={() => setOpen(!open)}>
                    {label}
                    <img src="https://i.ibb.co/bMB8k79z/chevron-down-2.png" alt="" />
                  </button>
                  {open && (
                    <div className="absolute z-10 mt-1 w-48 bg-white border rounded-md shadow-lg">
                      {list.map(item => (
                        <button key={item} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => { setState(item); setOpen(false); }}>
                          {item}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-sm font-medium text-gray-700">CREDITS USAGE</h2>
            <span className="text-sm text-gray-600">{totalCredits.toFixed(1)} credits</span>
          </div>
          <div className="w-full">
            <HighchartsReact highcharts={Highcharts} options={chartOptions} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UsageOne;
