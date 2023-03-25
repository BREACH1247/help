import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import Chart from 'chart.js/auto';
import Data from "../data.csv"

const BarChart = () => {
  const [data, setData] = useState(null);
  const [value,setValue] = useState(0);
  const dummyData = [10,20,30,40,50]
    const handleFileUpload = (event) => { 
    const file = event.target.files[0];
    Papa.parse(file, {
      download: true,
      header: true,
      complete: (result) => {
        setData(result.data);
      },
    });
  };

 

  useEffect(() => {
    if (data) {
      const labels_1 = [
        'Monthly Salary',
        'Card Limit',
      ];
     
      const values_1 = [
        data[0].monthly_salary,
        data[0].card_limit,
      ];

      const ctx = document.getElementById('barChart').getContext('2d');
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels:labels_1,
          datasets: [
            {
              label: 'Bar Chart',
              data: values_1,
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
            indexAxis: 'y',
          },
        },
      });
      setValue(1);
      localStorage.setItem('Value', value);
  }
  }, [data]);
  
  

  return (
  <div>
    <input type="file" accept=".csv" onChange={handleFileUpload} />
      <div className="h-[30rem] w-[30rem]"><canvas id="barChart" width="10" height="10"></canvas></div>;
  </div>
 
)};

export default BarChart;