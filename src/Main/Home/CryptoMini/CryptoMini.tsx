import React, { useContext, useEffect } from 'react';
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import { ThemeContext, typesFortheme } from '../../../Context/context';
import './CryptoMini.scss';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import axios from 'axios';
const CryptoMini = () => {
  const getBTC = async () => {
    const res = await axios.get('https://api.coingecko.com/api/v3/ping');
    return res;
  };
  useEffect(() => {
    // console.log(getBTC());
    axios.get('https://api.coingecko.com/api/v3/ping').then((resp) => {
      console.log(resp);
    });
  }, []);

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  let nums = [2, 7, 9, 3, 6, 9, 1, 4];
  // labels.map(() => nums.push(Math.floor(Math.random() * 10));

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: nums,
        borderColor: 'rgb(255, 99, 132)',
      },
    ],
  };

  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      // to remove the labels
      x: {
        display: false,
        ticks: {
          display: false,
        },

        // to remove the x-axis grid
        grid: {
          drawBorder: false,
          display: false,
        },
      },
      // to remove the y-axis labels
      y: {
        display: false,
        ticks: {
          display: false,
          beginAtZero: false,
        },
        // to remove the y-axis grid
        grid: {
          drawBorder: false,
          display: false,
        },
      },
    },
  };
  const theme = useContext(ThemeContext);
  return (
    <div
      style={theme[theme.now as keyof typeof typesFortheme].cardBackground}
      className="CryptoMini-wrap">
      <div
        style={theme.now === 'light' ? { color: 'black' } : { color: 'white' }}
        className="first-row-crypto-mini">
        <div>icon</div>
        <div className="name-section-crypto-mini">
          <h4>Bitcoin</h4>
          <p>BTC</p>
        </div>
      </div>
      <div
        style={theme.now === 'light' ? { color: 'black' } : { color: 'white' }}
        className="second-row-crypto-mini">
        <div>Price</div>
        <div>
          Graph
          <Line
            width={100}
            height={50}
            options={options}
            data={data}
            style={{ border: 'none', boxShadow: 'none' }}
          />
        </div>
      </div>
    </div>
  );
};

export default CryptoMini;
