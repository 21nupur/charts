import React, { Component } from 'react'
import { Bar, Doughnut, Pie, Bubble} from 'react-chartjs-2'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
export class Charts extends Component {
    constructor(props){
        super(props);
        this.state ={
            chartData : {
              labels : ['Frozen Yoghurt','Icecream sandwhich','Eclair','Cupcake','GingerBread'],
              datasets:[
                  {
                      label : 'Calories',
                      data :[
                              159,
                              237,
                              262,
                              305,
                              356
                      ],
                      backgroundColor:[
      
                          '#e3342f',
                          '#e3342f',
                          '#e3342f',
                          '#e3342f',
                          '#e3342f'
                         
                      ]
                  },
                  {
                      label : 'Fat(g)',
                      data :[
                              6,
                              9,
                              16,
                              3.7,
                              16
                      ],
                      backgroundColor:[
                          '#f6993f',
                          '#f6993f',
                          '#f6993f',
                          '#f6993f',
                          '#f6993f',
                         
                      ]
                  },
                  {
                      label : 'Carbs(g)',
                      data :[
                              24,
                              37,
                              24,
                              67,
                              49
                      ],
                      backgroundColor:[
                         '#9561e2',
                         '#9561e2',
                         '#9561e2',
                         '#9561e2',
                         '#9561e2'
                         
                      ]
                  },
                  {
                      label : 'Protien(g)',
                      data :[
                              4,
                              4.3,
                              6,
                              4.3,
                              3.9
                      ],
                      backgroundColor:[
                          '#ffed4a',
                          '#ffed4a',
                          '#ffed4a',
                          '#ffed4a',
                          '#ffed4a'
                      
                      ]
                  }
      
              ]
            }
            }
            
    
        }
    
  render() {
      console.log(this.state.chartData)
    return (
      <div>
        <Doughnut
                   data = {this.state.chartData}
                   options={{
                       title:{
                           display: true,
                        //    text : 'Vitamin Distribution'
                       },
                       legend :{
                           display: true,
                           position : 'right'
                       }
                   }} 
        />
      </div>
    )
  }
}

export default Charts
