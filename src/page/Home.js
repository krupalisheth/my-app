import React from 'react'
import Sidebar from './Sidebar'
import Cards from './Cards'
import './Home.css';
import Chart from 'react-apexcharts'

function Home() {
  var options = {
    series: [{
      name: "Sales",
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
    }],
    chart: {
      type: 'area',
      height: 350,
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },

    title: {
      text: 'Total Sales Chart ',
      align: 'left'
    },
    subtitle: {
      text: 'Monthly Sales',
      align: 'left'
    },

    xaxis: {
      categories: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep']
    },
    yaxis: {

      opposite: true
    },
    legend: {

      horizontalAlign: 'left'
    }
  };


  var pie_options = {
    series: [44, 55, 13, 33],
    chart: {
      width: 380,
      type: 'donut',
    },
    dataLabels: {
      enabled: false
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          show: false
        }
      }
    }],
    legend: {
      position: 'bottom',
      offsetX: 25,
      height: 30,
      width: 300
    }
  };

  return (
    <>
      <div className='main'>
        <Sidebar />

        <div className='home'>
          <div className='header'>
            <h2>Welcome, Krupali Sheth</h2>
          </div>
          <div className='cards'>
            <Cards title="Today's Orders" count="30" pr="10.37" color='#F2D30F'></Cards>
            <Cards title="Sales" count="45" pr="23.37" color='#1f8c09'></Cards>
            <Cards title="Customer" count="10" pr="8.37" color='#de2a12'></Cards>
            <Cards title="Monthly Revenue" count="$35000" pr="45.12" color='#1447a5'></Cards>
          </div>
          <div className='charts'>
            <div className='area-chart'>
              {/* width={700} height={440} */}
              <Chart options={options} series={options.series} type="area" legend={''} />
            </div>
            <div className='pie-chart'>
              {/* height={350} width={400} */}
              <Chart options={pie_options} series={pie_options.series} type='pie' />
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Home