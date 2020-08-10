import React from 'react';
import {Bar} from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';
import Chart from 'chart.js';


Chart.defaults.global.plugins.datalabels.anchor = 'end';
Chart.defaults.global.plugins.datalabels.align = 'end';

function WhatsHealthyChart(){
    
    // DATA TO SET UP CHARTS
    const healthy = [3, 1.5, 5, 0.3];
    const moderate = [10.5, 3.25, 13.75, 0.9];
    const unhealthy = [17.5, 5, 22.5, 1.5];

    // DATA SETS FOR LEVELS OF HEALTH - as per NHS website - FOR USE IN BAR CHART
    const dataSetHealthy = {
      datalabels: {
        display: false
      },
      label:"Healthy",
      fillColor: "rgba(220,220,220,0.5)", 
      strokeColor: "rgba(220,220,220,0.8)", 
      highlightFill: "rgba(220,220,220,0.75)",
      highlightStroke: "rgba(220,220,220,1)",
      data: healthy,
      backgroundColor:"#99D19C"
    }

    const dataSetModerate = {
      datalabels: {
        display: false
      },
      label:"Moderate",
      fillColor: "rgba(220,220,220,0.5)", 
      strokeColor: "rgba(220,220,220,0.8)", 
      highlightFill: "rgba(220,220,220,0.75)",
      highlightStroke: "rgba(220,220,220,1)",
      data: moderate,
      backgroundColor: "#FFA630"
    }

    const dataSetUnhealthy = {
      datalabels: {
        display: false
      },
      label:"Unhealthy",
      fillColor: "rgba(220,220,220,0.5)", 
      strokeColor: "rgba(220,220,220,0.8)", 
      highlightFill: "rgba(220,220,220,0.75)",
      highlightStroke: "rgba(220,220,220,1)",
      data: unhealthy,
      backgroundColor: "#EE7674"
    }

  // BAR CHART DATA
    let whatsHealthyBarData = {
        labels:['Fat', 'Saturates',  'Sugars', 'Salt'],
        datasets:[dataSetHealthy, dataSetModerate, dataSetUnhealthy]
    };

  // BAR CHART VISUAL INFO - STYLING
    let whatsHealthyPlotOptions = {
      legend:{
        onClick: null,
        display:true,
        labels:{
          fontColor: '#dbdbdb',
        }
      },
      scales: {
        xAxes: [{
          ticks: {
            min:0,
            fontColor: "#FF638F",
            zeroLineColor: "#FF638F"
          },
          gridLines: {
              color: "#1c1c1c",
              zeroLineColor: "#FF638F"
          }
        }],
        yAxes:[{
          scaleLabel:{
            display:true,
            fontColor: '#dbdbdb',
            labelString: 'Grams Per 100g'
          },
          ticks:{
            fontColor:"#FF638F",
            zeroLineColor:"#FF638F"
          },
          gridLines:{
            zeroLineColor: "#FF638F"
          }
        }]
      }
    };

    return(
        <Bar className="Chart" data={whatsHealthyBarData} options={whatsHealthyPlotOptions} />
    );
}


export default WhatsHealthyChart;