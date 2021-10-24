import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class ApexChart extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        series: [{
          name: 'Series 1',
          data: [90,100,80,80,70,90],
        }],
        
        options: {
          chart: {
            toolbar:{
              show:false,
            },
            height: 450,
            type: 'radar',
           
          },
          xaxis: {
            categories: ['Pace', 'Dribbling', 'Shooting', 'Defending', 'Passing', 'Physicality']
          },
          yaxis: {
            tickAmount:10,
            
          },
          colors:['#f64762'],
          stroke: {
            show: true,
            width: 3, 
          },
          markers: {
            size: 9,
            
          }
        },
      };
    }
    render() {
      return (
        

  <div id="chart">
<Chart options={this.state.options} series={this.state.series} type="radar" height={400} />

</div>


      );
    }
  }
export default ApexChart;
      



     