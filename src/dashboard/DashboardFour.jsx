import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const monthlyData = [
  { month: 'Jan', direct: 25, organic: 15, referral: 10 },
  { month: 'Feb', direct: 30, organic: 20, referral: 15 },
  { month: 'Mar', direct: 20, organic: 12, referral: 8 },
  { month: 'Apr', direct: 25, organic: 18, referral: 12 },
  { month: 'May', direct: 22, organic: 15, referral: 10 },
  { month: 'Jun', direct: 28, organic: 20, referral: 14 },
  { month: 'Jul', direct: 24, organic: 16, referral: 12 },
  { month: 'Aug', direct: 26, organic: 18, referral: 13 },
  { month: 'Sep', direct: 23, organic: 17, referral: 11 },
  { month: 'Oct', direct: 27, organic: 19, referral: 14 },
  { month: 'Nov', direct: 29, organic: 21, referral: 15 },
  { month: 'Dec', direct: 21, organic: 14, referral: 9 },
];

function DashboardFour() {
  const options = {
    chart: {
      type: 'column',
      height: 400,
    },
    title: {
      text: '',
    },
    xAxis: {
      categories: monthlyData.map(data => data.month),
      title: {
        text: '',
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: '',
      },
      labels: {
        enabled: false, 
      },
    },
    tooltip: {
      shared: true,
      valueSuffix: ' units',
    },
    plotOptions: {
      column: {
        stacking: 'normal',
      },
    },
    series: [
      {
        name: 'Direct',
        data: monthlyData.map(data => data.referral),
        color: '#EEF2FF',
      },
      {
        name: 'Organic search',
        data: monthlyData.map(data => data.organic),
        color: '#C7D2FE',
      },
      {
        name: 'Referral',
        data: monthlyData.map(data => data.direct),
        color: '#6366F1',
      },
    ],
  };

  return (
    <div className="shadow-xl border border-gray-200 sm:w-[590px] md:w-[768px] lg:w-[860px] rounded-lg ml-4 sm:ml-6 sm:mt-8 md:mt-12 lg:relative lg:bottom-96 lg:-translate-y-96  lg:shadow-lg lg:-mt-32">
      <div className="max-w-full mx-auto bg-white rounded-lg p-4 sm:p-6 md:p-8">
        <h2 className="mb-4 sm:mb-6 md:mb-8 ml-2 sm:ml-4 md:ml-5 text-base sm:text-lg md:text-xl font-medium text-gray-900 mt-3 sm:mt-5 md:mt-7">Usage</h2>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </div>
  );
}

export default DashboardFour;