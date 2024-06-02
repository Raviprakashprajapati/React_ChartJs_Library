import React from 'react'

import { Bar } from 'react-chartjs-2'

import {Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from "chart.js"

ChartJS.register(CategoryScale,
    LinearScale,BarElement,Title,Tooltip,Legend
)


function BarGraph() {

    const barData = {
        labels:[ "Rent","Groceries","Transportation","Entertainment","Others"],

        datasets:[

            {
                label:"Expenses in a Month of Ravi",
                data: [5000,2000,1200,700,4000],
                // backgroundColor:"black",
                backgroundColor:["black","red","green","yellow","orange"],
                borderColor:"yellow",
                borderWidth:"1"
                
            }

        ]
    }

  return (
    <Bar data={barData} />
  )
}

export default BarGraph
