import React, { useEffect, useState } from 'react';
import { Line, Pie, Doughnut } from 'react-chartjs-2';

const data = {
  labels: ['10000', '20000', '30000', '40000', '50000', '60000', '70000+'],
  datasets: [
    {
      label: 'Sales',
      data: [50, 60, 70, 80, 90, 100, 110],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const pieData = {
  labels: ["Above 10%","Above 20%","Above 30%"],
  datasets: [
    {
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
      hoverOffset: 4,
    },
  ],
};

const doughnutData = {
  labels: ['Yes','No'],
  datasets: [
    {
      label: 'My First Dataset',
      data: [50,50],
      backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
      hoverOffset: 4,
    },
  ],
};



const Charts = () => {
    const [val, setVal] = useState(0)
    useEffect(() => {

        const valll = localStorage.getItem('Value');
        console.log(valll)
        setVal(valll)
        
    }, [])
    

    
        return (
            val == 1 && (

                <div className='h-[30rem] w-[30rem]'>
                <div>
                </div>
                <div> <Line data={data} options={options} /></div>
                <div>
                <Pie data={pieData} />
                </div>
                <div><Doughnut data={doughnutData} /></div>
                
                </div>
                )

                )
   
};

export default Charts;
