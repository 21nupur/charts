import React, { Component } from 'react'
import { Grid, Paper } from '@material-ui/core'
import Chartapi from './Chartapi'
import Charts from './Charts'
import Tables from './Tables'
import HighChartb from './HighChartb';


const style ={
  Paper :{ padding :20 , marginTop : 50, marginBottom:10, marginLeft:5,marginRight:10 }
}
export default props => 
<div>
  <h3>----------------------------</h3>
        <h2 align='center'>
                The Graphical representation of Data
                </h2>
               

      <Grid container  >
            <Grid item sm>
            <Paper style = {style.Paper}>
            <h3 >Dynamic Data Plot</h3>
                   <Chartapi/>   
            </Paper>
            <p style = {{marginLeft:30}}>This data is getting fetched from an API.
                      A pre built api is being used, fetching it's 
                      value to plot this Chart</p>
            </Grid>
            <Grid item sm>
            <Paper style = {style.Paper}>
            {/* <h3 >Static Data Plot</h3> */}
                <HighChartb/>
            </Paper>
            <p style = {{marginLeft:30}}>This data is Static, a table 
                  is created based on which this Chart is Plotted
                      </p>
            </Grid> 
      </Grid>

      </div>

