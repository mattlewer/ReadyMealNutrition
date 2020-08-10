import React from 'react';
import Chart from 'chart.js';
import {Bar} from 'react-chartjs-2'
import '../CSS/FourAverageCharts.css';
import 'chartjs-plugin-datalabels'
Chart.defaults.global.plugins.datalabels.anchor = 'end';
Chart.defaults.global.plugins.datalabels.align = 'end';

function FourAverageCharts(){

    // AVERAGES FOR SUPERMARKETS - FROM PYTHON SCRIPTS
    const compareToLabels = ['Fat', 'Saturates',  'Sugars', 'Salt'];
    const sainsburysMean = [4.08, 1.46, 2.49, 0.46];
    const tescoMean = [4.29, 1.69, 2.13, 0.45];
    const morrisonsMean = [5.12, 1.67, 2.54, 0.51];
    const waitroseMean = [5.20, 2.04, 2.27, 0.48];

    // THE VALUE OF BAR FLOATING ABOVE
    let myPlugins = {datalabels:{
        color:'##FF638F',
        formatter: function (value) {
          return value + 'g';
        },
      }}
      // LAYOUT VALUES FOR CHARTS
      let averageValuesLayout = {
        padding:{
          right:70,
          left:70,
          bottom:20,
        }
      }
      // HIDE LEGEND, TOO MESSY WITH 4 CHARTS
      let averageValuesLegend = {
        display:false,
        labels:{
          fontColor: '#dbdbdb',
        } 
      } 
        // HIDE Y VALUES AS FLOATING NUMS
      let averageValuesY = [{
        display: false,
        stacked: true,
        ticks: {
            min: 0, // minimum value
            max: 6 // maximum value
        }
      }]
        // SHOW BAR NAMES AND COLOR 
      let averageValuesX = [{
        display: true,
        stacked: true,
        ticks: {
          fontColor:'#FF638F'
        }
      }]
  
  
      // SET UP CHARTS VISUALLY WITH PREVIOUSLY DECLARED VALUES
  
      // SAINSBURIES CHART
      let sainsburysAverageOptions = {
        plugins:myPlugins,
        layout:averageValuesLayout,
        legend:averageValuesLegend,
        title: {
          display: true,
          text: 'Sainsburys',
          fontColor: '#FF638F'
        },
        scales: {
          yAxes: averageValuesY,
          xAxes: averageValuesX
        }
      }
  
      let tescoAverageOptions = {
        plugins:myPlugins,
        layout:averageValuesLayout,
        legend:averageValuesLegend,
        title: {
          display: true,
          text: 'Tesco',
          fontColor:'#FF638F'
        },
        scales: {
          yAxes: averageValuesY,
          xAxes: averageValuesX
        }
      }
      let morrisonsAverageOptions = {
        plugins:myPlugins,
        layout:averageValuesLayout,
        legend:averageValuesLegend,
        title: {
          display: true,
          text: 'Morrisons',
          fontColor:'#FF638F'
        },
        scales: {
          yAxes: averageValuesY,
          xAxes: averageValuesX
        }
      }
      let waitroseAverageOptions = {
        plugins:myPlugins,
        layout:averageValuesLayout,
        legend:averageValuesLegend,
        title: {
          layout:{
            padding:{
              bottom:50,
            }
          },
          display: true,
          text: 'Waitrose',
          fontColor:'#FF638F',
        },
        scales: {
          yAxes: averageValuesY,
          xAxes: averageValuesX
        }
      }
  
      // PREPARE CHARTS DATA
      const barColors = ['#FFA630', '#4DA1A9', '#D7E8BA', '#EE7674']
  
      let sainsburysAverageData = {
        datasets: [{
            data: sainsburysMean,
            backgroundColor:barColors
        }],
        labels: compareToLabels
      };
  
      let tescoAverageData = {
        datasets: [{
            data: tescoMean,
            backgroundColor:barColors
        }],
        labels: compareToLabels
      };
  
      let waitroseAverageData = {
        datasets: [{
            data: waitroseMean,
            backgroundColor:barColors
        }],
        labels: compareToLabels
      };
      let morrisonsAverageData = {
        datasets: [{
            data: morrisonsMean,
            backgroundColor:barColors
        }],
        labels: compareToLabels
      };

    return(
    <div className="second">
        <h1 className="DataTitle">The Average 'Ready Meal For One'</h1>
        <p className="Text-Area">Data collected from UK supermarkets</p>
        <div className="PieHolder">
          <Bar className="Pie" data={sainsburysAverageData} options={sainsburysAverageOptions} />
          <Bar className="Pie" data={morrisonsAverageData} options={morrisonsAverageOptions} />
        </div>
        <div className="PieHolder2">
          <Bar className="Pie" data={waitroseAverageData} options={waitroseAverageOptions} />
          <Bar className="Pie" data={tescoAverageData} options={tescoAverageOptions} />
        </div>
    </div>
    );
}

export default FourAverageCharts;