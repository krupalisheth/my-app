import React, { Fragment, useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Cards from './Cards'
import './Home.css';
import Chart from 'react-apexcharts'

function Home() {
  const [orders, setOrders] = useState([]);
  const [sales, setSales] = useState(0);
  const [revenue, setRevenue] = useState(0);
  const [series, setSeries] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [donut, setDonut] = useState([]);
  var options = {
    series: [{
      name: "Sales",
      data: series
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
      categories: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
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
      enabled: true
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

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem('data'));
    setOrders(data);
    setSales(data?.length ? data.length : 0);
    let revenue = 0;
    let d = [];
    data?.forEach(element => {
      revenue += Number(element.total);
      // let m = new Date(element.date).getMonth();
      // let s = JSON.parse(JSON.stringify(series[m]))
      // s += 1;
      // series[m] = s;
      element.items?.forEach(ele => {
        d = [...d, ele];
      });
      series[0] = data.length;
    });
    d.forEach(element => {

    });
    setSeries(series)
    setRevenue(revenue);
  }, [setOrders, setSales, setRevenue, setSeries])

  return (
    <>
      <div className='main'>
        <Sidebar />

        <div className='home'>
          {/* <div className='header'> */}
          {/* <h2>Welcome, Krupali Sheth</h2> */}
          {/* </div> */}
          <div className='cards reports' style={{ marginTop: "30px" }}>
            <Cards title="Today's Orders" count={sales} pr="10.37" color='#F2D30F'></Cards>
            {/* <Cards title="Sales" count="45" pr="23.37" color='#1f8c09'></Cards> */}
            {/* <Cards title="Customer" count="10" pr="8.37" color='#de2a12'></Cards> */}
            <Cards title="Monthly Revenue" count={'Rs. ' + revenue} pr="45.12" color='#1447a5'></Cards>
          </div>
          <div className='charts'>
            <div className='area-chart'>
              {/* width={700} height={440} */}
              <Chart options={options} series={options.series} type="area" legend={''} />
            </div>
            {/* <div className='pie-chart'>
              <Chart options={pie_options} series={pie_options.series} type='pie' />
            </div> */}
          </div>
        </div>

      </div>
    </>
  )
}

export default Home