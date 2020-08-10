import React from 'react';
import * as d3 from 'd3'
import Chart from 'chart.js';

// CSV IMPORTS -  CURRENTLY LOCALLY STORED
import morrisonsForOne from '../CSV/morrisonsForOne.csv'
import waitroseForOne from '../CSV/waitroseForOne.csv'
import tescoForOne from '../CSV/tescoForOne.csv'
import sainsburysForOne from '../CSV/sainsburyForOne.csv'

// Function to create chart containing all collected data for supermarket ready meals
function AllDataChart(){

    // Create arrays for our variables
    let allLabels = [];

    let allFatData = [];
    let allSaltData = [];
    let allCarbohydrateData = [];
    let allSugarData = [];
    let allProteinData = [];
    let allEnergyData = [];


    // Import csv's with d3

    // MORRISONS
    d3.csv(morrisonsForOne, function(morrisonsForOne) {
      allLabels.push(morrisonsForOne.Title);
      allFatData.push(morrisonsForOne.Fat);
      allEnergyData.push(morrisonsForOne.Energy);
      allSaltData.push(morrisonsForOne.Salt);
      allCarbohydrateData.push(morrisonsForOne.Carbohydrate);
      allSugarData.push(morrisonsForOne.Sugars);
      allProteinData.push(morrisonsForOne.Protein);
    })

    // SAINSBURYS
    d3.csv(sainsburysForOne, function(sainsburysForOne) { 
      allLabels.push(sainsburysForOne.Title);
      allFatData.push(sainsburysForOne.Fat)
      allEnergyData.push(sainsburysForOne.Energy);
      allSaltData.push(sainsburysForOne.Salt)
      allCarbohydrateData.push(sainsburysForOne.Carbohydrate)
      allSugarData.push(sainsburysForOne.Sugars)
      allProteinData.push(sainsburysForOne.Protein)
    });

    // WAITROSE
    d3.csv(waitroseForOne, function(waitroseForOne) { 
      allLabels.push(waitroseForOne.Title);
      allFatData.push(waitroseForOne.Fat)
      allEnergyData.push(waitroseForOne.Energy);
      allSaltData.push(waitroseForOne.Salt)
      allCarbohydrateData.push(waitroseForOne.Carbohydrate)
      allSugarData.push(waitroseForOne.Sugars)
      allProteinData.push(waitroseForOne.Protein)
    });

    // TESCO
    d3.csv(tescoForOne, function(tescoForOne) { 
      allLabels.push(tescoForOne.Title);
      allFatData.push(tescoForOne.Fat)
      allEnergyData.push(tescoForOne.Energy);
      allSaltData.push(tescoForOne.Salt)
      allCarbohydrateData.push(tescoForOne.Carbohydrate)
      allSugarData.push(tescoForOne.Sugars)
      allProteinData.push(tescoForOne.Protein)
    });


    // Prepare initial chart
    let chart;
    d3.csv(tescoForOne, function(tescoForOne) { 
      
    if (chart) chart.chart.destroy();
      chart = new Chart('chart', {
        type: 'line',
        options: allProductChatOptions,
        data: {
          labels: allLabels,
          datasets: [
            {
              label:"Salt",
              data: allSaltData,
              backgroundColor:"rgba(255, 166, 48, 0.8)"
            },
            {
              label:"Sugar",
              hidden:true,
              data: allSugarData,
              backgroundColor:"rgba(215, 232, 186, 0.8)"
            },
            {
              label:"Fat",
              hidden:true,
              data: allFatData,
              backgroundColor:"rgba(255, 99, 143, 0.8)"
            },
            {
              label:"Protein",
              hidden:true,
              data: allProteinData,
              backgroundColor:"rgba(77, 161, 169, 0.8)"
            },
            {
              label:"Carbohydrates",
              hidden:true,
              data: allCarbohydrateData,
              backgroundColor:"rgba(255, 138, 138, 0.8)"
            },
            {
              label:"Calories",
              hidden:true,
              data: allEnergyData,
              backgroundColor:"rgba(255, 126, 46, 0.6)"
            },
          ]
        }
      });
    });

    let allProductChatOptions =  {
      hover: {
        onHover: function(e) {
           var point = this.getElementAtEvent(e);
           if (point.length) e.target.style.cursor = 'pointer';
           else e.target.style.cursor = 'default';
        }
     },
      plugins: {
        datalabels: {
           // hide datalabels for all datasets
           display: false
        }
      },
      legend:{
        onHover: function(e) {
          e.target.style.cursor = 'pointer';
       },
        display:true,
        labels:{
          fontColor: '#FF638F',
        }
      },
        scales: {
          yAxes: [{
            barThickness: 4,
            categoryPercentage: 1.0,
            barPercentage: 1.0,
            ticks: {
              fontColor:'#FF638F',
              display:true,
          }
          }],
          xAxes:[{
            ticks:{
              display:false
            }
          }]
        }
    }

     return(
        <canvas id="chart"></canvas>
     );
}

export default AllDataChart;