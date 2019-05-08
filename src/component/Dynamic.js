import React, { Component } from 'react'
// import { Bar, Doughnut, Pie} from 'react-chartjs-2'
import axios from 'axios';
import { Bar, Line,Radar } from 'react-chartjs-2';
import { Grid, Paper } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';
function TransitionUp(props) {
    return <Slide {...props} direction="up" />;
  }
  
const fetchParams = {  
    method: "GET",
    mode: "cors",
    cache: "default"
  };
  const style ={
    Paper :{ padding :20, marginTop : 30, marginLeft:10,marginRight:10 },
    Button :{textAlign:'center',marginTop : 50 }
    // Line : rgba
    
}
export class Dynamic extends Component {
    
    constructor(props){
      super(props);
      this.state = {
        chartData: [],
        data : {}
      };
      // this.setstate = this.setstate.bind(this);
    }
    state = {
        open: false,
        Transition: null,
      };
    
      handleClick = Transition => () => {
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
      };
    
      handleClose = () => {
        this.setState({ open: false });
      };

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
      let {chartt} = '';
      chartt = {
        'labels': characterlabels,
        'datasets' : [{
          data: characterheights
        }]
      }
      console.log("serthfoashi", chartt)
    }

  render() {
    const {chartData} = this.state;
    let characterlabels = [];
    let characterheights = [];
    chartData.map(function(character){
      characterlabels.push(character.name);
      characterheights.push(parseInt(character.height));
    })
    let {chartt} = '';
    chartt ={
      'labels': characterlabels,
      'datasets' : [{
        'label': "Height Comparison",
          'data': characterheights,
          'backgroundColor': 'rgba(255,159,64,0.6)',
          
        
      }]
    }

    console.log("asifgasoifhaosi", chartt)
    return (
      <div className="chart"> 
      
        {/* <Snackbar
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={this.state.Transition}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">Chart data is now Refreshed</span>}/> */}
     <h3>-----------------------------</h3>
     <div style = {style.Button}>
      <Button   variant="outlined" color= "secondary" onClick={this.handleClick(TransitionUp)}>Refresh data</Button>
      </div>
      <Grid container >
          <Grid item sm>
          <Paper style = {style.Paper}>
          <h3>Line Graph</h3>
            <Line
              data = {chartt}
              // width={100}
              // height={50}
              // options = {{maintainAspectRatio: false}}
            />
          
           </Paper> 
            </Grid>
          <Grid item sm>
          <Paper style = {style.Paper}>
          <h3>Radar Graph</h3>
            <Radar
              data = {chartt}
              // width={100}
              // height={50}
              // options = {{maintainAspectRatio: false}}
            />
           </Paper> 
            </Grid>
          </Grid>
       
         
      </div>
    )
  }
}

export default Dynamic
