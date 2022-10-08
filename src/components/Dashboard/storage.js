import React, { useState } from 'react'
import './Dashboard.css'
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Title, ArcElement, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, BarElement } from 'chart.js';
ChartJS.register(
    Title, ArcElement, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, BarElement
)



export default function Storage(props) {
    const allData = props.data


    const key = Object.keys(allData)
    const value = Object.values(allData)

    const [dataS, setmyData] = useState({
        labels: key.map((item, index) => item + ' ' + "storage" +  ' ' + '(' + value[index] + "0GB" + ")"),
        datasets: [{
            data: value,
            backgroundColor: [
                'rgb(199,0, 57)',
                'rgb(227, 138, 38 )',
                'rgb(81, 119, 181  )'
            ],
        }]
    })

    const [options, setoptions] = useState({
        plugins: {
            legend: {
                labels: {
                    color: '#fff',
                }
            },
        }
    })

    return (
        <>
            <div>
                <h4 className='heading'>Storage Information</h4>
                <Pie data={dataS} options={options} />
            </div>
        </>
    )
}
