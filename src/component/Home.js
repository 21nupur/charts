import React, { Component } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { Grid, Paper } from '@material-ui/core'
const style ={
  Paper :{ padding :20 , marginTop : 30, marginBottom:10, marginLeft:80,marginRight:10 }
}
const options = {
    
    title: {
      text:'Multiple Representation'
    },
    series: [{
                type:'column',
                name:'red',
                data:[1,2,5,6,9,-3,6]
    },
           {   type:'spline', 
               name:'yellow',
               data:[3,2,-1,5,-9,6,-7,3]}
  ]
}
  const optionsa = {
    chart: {
        type: 'spline'
      },
    title: {
      text: 'SPLINE CHART'
    },
    xAxis: {
        categories: ['Apples', 'Pears', 'Oranges', 'Bananas', 'Carrots'],
      
    },
    series: [{
      data: [['One',1],['two',3],['three',0],['four',4],['five',2],['six',1],['seven',5],['eight',6]]
    
    }]
  }
  const optionsb = {
    chart: {
        type:'area'
    },
    title: {
      text: 'AREA CHART'
    },
    series: [{
      data: [['One',1],['two',3],['three',9],['four',4],['five',2],['six',1],['seven',5],['eight',6]]
    
    }]
  }
  const optionsc = {
    chart: {
        type: 'pie'
      },
    title: {
      text: 'AREA CHART'
    },
    series: [{
      data: [['One',1],['two',3],['three',0],['four',4],['five',2],['six',1],['seven',5],['eight',6]]
    
    }]
  }
  
export class Home extends Component {
  render() {
    return (
        <div>
           <h2>....................................</h2>
          <h2 align="center">WELCOME TO REACT-CHARTS</h2>
        {/* <HighchartsReact
        
          highcharts={Highcharts}
          options={options}
        />
      */}
      <Grid container>
         <Grid item>
        <Paper style = {style.Paper}>
        <HighchartsReact
        
          highcharts={Highcharts}
          options={options}
        />
        </Paper>
        </Grid>
        <Grid item>
        <Paper style = {style.Paper}>
        <HighchartsReact
        
          highcharts={Highcharts}
          options={optionsb}
        />
        </Paper>
        </Grid> 

        </Grid>
   </div>
    )
  }
}

export default Home
