import React, { useState } from 'react'
import './Dashboard.css'
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, BarElement } from 'chart.js';
ChartJS.register(
    Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, BarElement
)




function Performance(props) {
    const data = props.data
    const color = Object.keys(data)
  
    const values = Object.values(data)
    console.log(values) 

    const [datal, setData] = useState({
        labels: color,
        datasets: [
            {
                label: "# of Hits",
                backgroundColor: color,
                data: values,
                barPercentage: 0.4
            }
        ]
    })

    const [options, setoptions] = useState({
        indexAxis: 'y', 
        layout: {
            padding: 8
        },
        plugins: {
            title: {
                display: true,
                text: ' Hits',
                position: 'left',
                color: "#fff",
            },
            legend:{
                labels:{
                    color:'#fff',
                }
            },
        },
        scales: {
            y: {
                ticks: {
                    color: "#fff",
                    beginAtZero: true
                }
            },
            x: {
                ticks: {
                    color: "#fff",
                }
            }
        }
    }
    )





    return (
        <>
            <div className='performance'>
                <h4 className='heading'>Performance</h4>
                <Bar data={datal} options={options} height={260} width={400} />
            </div>
        </>
    )
}
export default Performance;