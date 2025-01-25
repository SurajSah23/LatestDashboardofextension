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
      text: 'Monthly Usage Data',
    },
    xAxis: {
      categories: monthlyData.map(data => data.month),
      title: {
        text: 'Month',
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Usage Count',
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
        name: 'Direct',
        data: monthlyData.map(data => data.organic),
        color: '#C7D2FE',
      },
      {
        name: 'Organic search',
        data: monthlyData.map(data => data.direct),
        color: '#6366F1',
      },
      {
        name: 'Referral',
        data: monthlyData.map(data => data.direct),
        color: '#6366F1',
      },
    ],
  };

  return (
    <div className=" relative bottom-44 shadow-xl border border-gray-200  w-[1020px] rounded-lg ml-5">
      <div className="max-w-5xl mx-auto bg-white rounded-lg">
        <h2 className="mb-8 ml-5 text-lg font-medium text-gray-900 mt-7">Usage</h2>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </div>
  );
}

export default DashboardFour;
