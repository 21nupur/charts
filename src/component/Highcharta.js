import React, { Component } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { Grid, Paper } from '@material-ui/core'
import HighChartb from './HighChartb'

const style ={
    Paper :{ padding :20 , marginTop : 60, marginBottom:10, marginLeft:70,marginRight:10 }
  }
const options = {
    chart:{
        type:'column'
        
    },
    title:{
        text:'VITAMIN DISTRIBUTION - COLUMN CHART'
    },
    xAxis:{
        categories:['Frozen Yoghurt','Icecream sandwhich','Eclair','Cupcake','GingerBread']},
    series:[{
           name:'calories',
           data:[159,
            237,
            262,
            305,
            356]
       },
    {
        name:'Fat(g)',
        data:[
            63,
            96,
            163,
            34.7,
            160
        ]
        
   
    },
    {
        name:'Carbs(g)',
        data:[
            24,
            37,
            24,
            67,
            49
        ]
        
   
    },
    {
        name:'Protien(g)',
        data:[
            47,
            49.3,
            66,
            44.3,
            36.9
        ]
        
   
    }]
}

export class Highcharta extends Component {
  render() {
    return (
      <div>
          <h2 align="center">Data Represented in Different Charts</h2>
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
        <HighChartb/>
        </Paper>
        </Grid>
        </Grid>
       
      </div>
    )
  }
}

export default Highcharta
