import "./feedChart.scss";
import Chart from "react-apexcharts";
import { useState } from "react";


function FeedChart() {

    const [state, setState] = useState({
        
            options: {
              chart: {
                id: "basic-bar",
                width:"1000px"
              },
              xaxis: {
                categories: ["01-02-2022", "02-02-2022", "03-02-2022", "04-02-2022"],
                width: 20
              },
              dataLabels:{
                enabled:false,

              },
              plotOptions: {
                bar: {
                  columnWidth: '90%', 

                  
                },
                
              },
          

            
            },
            series: [
              {
                name: "upi",
                data: [5600, 2000, 1000, 4000],
               
              },
              {
                name: "Card",
                data: [1300, 5000, 800, 4300]
              },
              {
                name: "Debit card",
                data: [700, 1200, 3300, 2200]
              },
              {
                name: "Netbanking",
                data: [1300, 1549, 800, 4300]
              },
              {
                name: "others",
                data: [1700, 1200, 3300, 6000]
              }
              
            ]
          
        
    })
  return (
    <div className="chart">
       

            <Chart
              options={state.options}
              series={state.series}
              type="bar"
              width="560"
            />

            </div>
       
  )
}

export default FeedChart