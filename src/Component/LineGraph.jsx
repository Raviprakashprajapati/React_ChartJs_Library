import React from 'react'
import { Line } from 'react-chartjs-2'

import {Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    plugins
} from "chart.js"

ChartJS.register(CategoryScale,
    LinearScale,PointElement,LineElement,Title,Tooltip,Legend
)



function LineGraph() {

    const lineChartData = {
        labels: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        datasets: [
          {
            id: 1,
            label: 'Steps of Ravi',
            data: [200,300,100,800,500,400,700],
            borderColor: 'red',
          },
          {
            id: 2,
            label: 'Steps of Saurav',
            data: [600,700,787,400,200,900,550],
            borderColor:"green"
          },
        ],
      }

      const options = {
        responsive:true,
        plugins:{
          legend:{
            position:"bottom",
          },
          title:{
            display:true,
            text:"This is a graph about representating my daily steps"
          }
        }
      }

  return (
   <Line
    options={options}
   data={lineChartData}
   
   />
  )
}

export default LineGraph
