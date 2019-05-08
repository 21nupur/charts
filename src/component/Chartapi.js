import React, { Component } from 'react'
// import { Bar, Doughnut, Pie} from 'react-chartjs-2'
import axios from 'axios';
import { Bar, Line,Radar } from 'react-chartjs-2';
import { Grid, Paper } from '@material-ui/core'
const fetchParams = {  
    method: "GET",
    mode: "cors",
    cache: "default"
  };
  const style ={
    Paper :{ padding :100, marginTop : 15, marginBottom:10, marginLeft:10,marginRight:10 },
    Line :{ backgroundColor: 'rgba(255, 99, 132, 0.2)'}
  }
export class Chartapi extends Component {
    
    constructor(props){
      super(props);
      this.state = {
        chartData: [],
        data : {}
      };
      // this.setstate = this.setstate.bind(this);
    }


    componentDidMount(){
        axios('https://swapi.co/api/people/',fetchParams)
        .then(response=>{
          console.log(response.data.results);
          // setstate(response.data.results);
          this.setState({
            chartData: response.data.results
          })
        }).catch(err =>{
          console.log('fhsahfaoihfiaos',err)
        });

        this.setdata();
    }


    // fetchData(){
    //     fetch('https://swapi.co/api/people/',fetchParams)
    //     .then(response => response.json())
    //     .then(data => this.state ={
    //         chartData : data})
    //     .catch(error => console.log('parsing failed', error))
    // }

    setdata = () => {
      const {chartData } = this.state;
      let characterlabels = [];
      let characterheights = [];
      chartData.map(function(character){
        characterlabels.push(character.name);
        characterheights.push(parseInt(character.height));
      })
      let {chart} = '';
      chart = {
        'labels': characterlabels,
        'datasets' : [{
          data: characterheights
        }]
      }
      console.log("serthfoashi", chart)
    }

  render() {
    const {chartData} = this.state;
    let characterlabels = [];
    let characterheights = [];
    chartData.map(function(character){
      characterlabels.push(character.name);
      characterheights.push(parseInt(character.height));
    })
    let {chart} = '';
    chart ={
      'labels': characterlabels,
      'datasets' : [{
        'label': "Height Comparison",
          'data': characterheights,
          'backgroundColor': 'rgba(54,162,235,0.3)',
          
        
      }]
    }

    console.log("asifgasoifhaosi", chart)
    return (
      <div className="chart"> 
      
        
            <Line style={style.Line}
              data = {chart}
              // width={100}
              // height={50}
              // options = {{maintainAspectRatio: false}}
            />
           
          {/* <Grid container >
          <Grid item sm>
          <Paper style = {style.Paper}>
            <Radar
              data = {chart}
              // width={100}
              // height={50}
              // options = {{maintainAspectRatio: false}}
            />
           </Paper> 
            </Grid>
          </Grid> */}
           
      </div>
    )
  }
}

export default Chartapi
