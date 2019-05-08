import React, { Component } from 'react'
import { Grid, Paper } from '@material-ui/core'
import Chart from './Chartapi'
import HighChartb from './HighChartb'
import Tables from './Tables'
import Highcharta from './Highcharta';


const style ={
  Paper :{ padding :20 , marginTop : 30, marginBottom:10, marginLeft:20,marginRight:30 }
}
export class Static extends Component{
        render(){
                return(
                        <div>
                                <h3>-----------------------------</h3>
                                <h2 align='center'> Data Table</h2>
      <Grid container >
            <Grid item sm>
            <Paper style = {style.Paper}>
                   <Tables/>
            </Paper>
            </Grid>
            </Grid>
            {/* <Grid item sm>
            <Paper style = {style.Paper}>
            <h3>Static Chart</h3>
                    <HighChartb/>
            </Paper>
            </Grid> */}
            <Highcharta/>
            {/* <Grid item sm>
            <Paper style = {style.Paper}>
                    <Chart/>
            </Paper>
            </Grid> */}
     

                                </div>
                )
        }
}

export default Static

