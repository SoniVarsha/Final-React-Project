import React, { useState } from 'react'
import './Dashboard.css'
import Chart from "react-apexcharts";



function LatestHits(props) {
    const { featured, months, latest, popular } = props.data || []

    const [series, setSeries] = useState(
        [
            {
                name: "featured",
                data: featured,
              },
              {
                name: "latest",
                data: latest,
              },
              {
                name: "popular",
                data: popular,
              },
        
        ]
    )

    const [options, setoptions] = useState({
      colors: ["#f7604c", "#a8d582", "#4ed6b8"],
        chart: {
            id: "apexchart-example",
            toolbar: {
              show: false,
            },
            foreColor: "#fff",
          },
          xaxis: {
            categories: months,
          },
          stroke: {
            curve: "smooth",
            width: "3",
          },
          // colors: ["#f7604c", "#a8d582", "#4ed6b8"],
    }
    )

    return (
        <>
        <div>
        <h4 className='heading '>Latest Hits</h4>
        <Chart options={options} series={series} type="line"/>
        </div>
        </>
    )
}
export default LatestHits;