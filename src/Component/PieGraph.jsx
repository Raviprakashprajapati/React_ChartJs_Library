import React from 'react'
import { Pie } from 'react-chartjs-2'

import {Chart as ChartJS,
    CategoryScale,
    Tooltip,
    Legend,
    ArcElement
} from "chart.js"

ChartJS.register(CategoryScale,
    Tooltip,Legend,ArcElement
)



function PieGraph() {


    const pieData = {
        labels:["Facebook", "Twitter", "Instagram", "Youtube", "LinkedIn"],

        datasets:[

            {
                label:"Time Spent by Ravi in minutes",
                data: [20,60,140,240,50],
                backgroundColor:[
                    "cyan","black","orange","red","green"
                ],
                borderColor:"black",
                hoverOffset:3
            },
            {
                label:"Time Spent by Saurav in minutes",
                data: [50,30,50,20,110],
                backgroundColor:[
                    "cyan","black","orange","red","green"
                ],
                borderColor:"black",
                hoverOffset:3
            }

        ]
    }

  return (
    <div style={{border:"2px solid red"}} >
        <Pie data={pieData} />
      
    </div>
  )
}

export default PieGraph
