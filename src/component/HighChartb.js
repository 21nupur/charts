import React, { Component } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { Grid, Paper } from '@material-ui/core'
const style ={
    Paper :{ padding :20 , marginTop : 60, marginBottom:10, marginLeft:70,marginRight:10 }
  }
const options = {
    chart: {
        type: 'spline'
    },
    title:{
        text:'VITAMIN DISTRIBUTION - SPLINE CHART'
    },
    xAxis:{
        categories:['Jan','Feb','Mar','Apr','Jun']},
    series:[{
           name:'Sales',
           data:[159,
            337,
            262,
            305,
            356]
       },
    {
        name:'Management',
        data:[
            63,
            -96,
            163,
            -34.7,
            160
        ]
        
   
    },
    {
        name:'Products',
        data:[
            243,
            37,
            -24,
            67,
            49
        ]
        
   
    },
    {
        name:'Growth',
        data:[
            47,
            149.3,
            44.3,
            206,
            36.9
        ]
        
   
    }]
}
export class HighChartb extends Component {
    render() {
      return (
        <div>
         
          <HighchartsReact
          
            highcharts={Highcharts}
            options={options}
          />
         
          </div>)
    }
}
export default HighChartb