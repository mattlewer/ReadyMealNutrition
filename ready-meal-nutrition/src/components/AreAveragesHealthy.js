import React from 'react';
import {Bar} from 'react-chartjs-2'
import 'chartjs-plugin-datalabels'
import Chart from 'chart.js';

Chart.defaults.global.plugins.datalabels.anchor = 'end';
Chart.defaults.global.plugins.datalabels.align = 'end';

function AreAveragesHealthy(){
    
    // DATA TO SET UP CHARTS
    // Values for: 'Fat', 'Saturates',  'Sugars', 'Salt'
    const healthy = [3, 1.5, 5, 0.3];
    const moderate = [10.5, 3.25, 13.75, 0.9];
    const unhealthy = [17.5, 5, 22.5, 1.5];

    const sainsburysMean = [4.08, 1.46, 2.49, 0.46];
    const tescoMean = [4.29, 1.69, 2.13, 0.45];
    const morrisonsMean = [5.12, 1.67, 2.54, 0.51];
    const waitroseMean = [5.20, 2.04, 2.27, 0.48];

    const sainsburysHigh = [8.6, 4.6, 8.9, 0.86];
    const tescoHigh = [15.4, 5.8, 9.7, 1.1];
    const morrisonsHigh = [17.4, 7.7, 16.9, 0.96];
    const waitroseHigh = [9.1, 4.5, 4.8, 0.83];

    const sainsburysLow = [0.7, 0.2, 0.5, 0.19];
    const tescoLow = [0.6, 0.2, 0.4, 0.1];
    const morrisonsLow = [0.9, 0.1, 0.3, 0.18];
    const waitroseLow = [1.9, 0.2, 0.7, 0.28];

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


    // SETUP MEANS
    const dataSetAverageTesco = {
        datalabels: {
          display: false
        },
        label:"Tesco",
        fillColor: "rgba(220,220,220,0.5)", 
        strokeColor: "rgba(220,220,220,0.8)", 
        highlightFill: "rgba(220,220,220,0.75)",
        highlightStroke: "rgba(220,220,220,1)",
        data: tescoMean,
        backgroundColor: "#4DA1A9"
    }
    const dataSetAverageMorrisons = {
        datalabels: {
          display: false
        },
        label:"Morrisons",
        fillColor: "rgba(220,220,220,0.5)", 
        strokeColor: "rgba(220,220,220,0.8)", 
        highlightFill: "rgba(220,220,220,0.75)",
        highlightStroke: "rgba(220,220,220,1)",
        data: morrisonsMean,
        backgroundColor: "#00b023"
    }
    const dataSetAverageSainsburys = {
        datalabels: {
          display: false
        },
        label:"Sainsburys",
        fillColor: "rgba(220,220,220,0.5)", 
        strokeColor: "rgba(220,220,220,0.8)", 
        highlightFill: "rgba(220,220,220,0.75)",
        highlightStroke: "rgba(220,220,220,1)",
        data: sainsburysMean,
        backgroundColor: "#ff8c00"
    }
    const dataSetAverageWaitrose = {
        datalabels: {
          display: false
        },
        label:"Waitrose",
        fillColor: "rgba(220,220,220,0.5)", 
        strokeColor: "rgba(220,220,220,0.8)", 
        highlightFill: "rgba(220,220,220,0.75)",
        highlightStroke: "rgba(220,220,220,1)",
        data: waitroseMean,
        backgroundColor: "#c852ff"
    }


    // Min DATASETS

    const dataSetHighTesco = {
      datalabels: {
        display: false
      },
      label:"Tesco",
      fillColor: "rgba(220,220,220,0.5)", 
      strokeColor: "rgba(220,220,220,0.8)", 
      highlightFill: "rgba(220,220,220,0.75)",
      highlightStroke: "rgba(220,220,220,1)",
      data: tescoHigh,
      backgroundColor: "#4DA1A9"
  }
  const dataSetHighMorrisons = {
      datalabels: {
        display: false
      },
      label:"Morrisons",
      fillColor: "rgba(220,220,220,0.5)", 
      strokeColor: "rgba(220,220,220,0.8)", 
      highlightFill: "rgba(220,220,220,0.75)",
      highlightStroke: "rgba(220,220,220,1)",
      data: morrisonsHigh,
      backgroundColor: "#00b023"
  }
  const dataSetHighSainsburys = {
      datalabels: {
        display: false
      },
      label:"Sainsburys",
      fillColor: "rgba(220,220,220,0.5)", 
      strokeColor: "rgba(220,220,220,0.8)", 
      highlightFill: "rgba(220,220,220,0.75)",
      highlightStroke: "rgba(220,220,220,1)",
      data: sainsburysHigh,
      backgroundColor: "#ff8c00"
  }
  const dataSetHighWaitrose = {
      datalabels: {
        display: false
      },
      label:"Waitrose",
      fillColor: "rgba(220,220,220,0.5)", 
      strokeColor: "rgba(220,220,220,0.8)", 
      highlightFill: "rgba(220,220,220,0.75)",
      highlightStroke: "rgba(220,220,220,1)",
      data: waitroseHigh,
      backgroundColor: "#c852ff"
  }

      // MIN DATASETS

      const dataSetLowTesco = {
        datalabels: {
          display: false
        },
        label:"Tesco",
        fillColor: "rgba(220,220,220,0.5)", 
        strokeColor: "rgba(220,220,220,0.8)", 
        highlightFill: "rgba(220,220,220,0.75)",
        highlightStroke: "rgba(220,220,220,1)",
        data: tescoLow,
        backgroundColor: "#4DA1A9"
    }
    const dataSetLowMorrisons = {
        datalabels: {
          display: false
        },
        label:"Morrisons",
        fillColor: "rgba(220,220,220,0.5)", 
        strokeColor: "rgba(220,220,220,0.8)", 
        highlightFill: "rgba(220,220,220,0.75)",
        highlightStroke: "rgba(220,220,220,1)",
        data: morrisonsLow,
        backgroundColor: "#00b023"
    }
    const dataSetLowSainsburys = {
        datalabels: {
          display: false
        },
        label:"Sainsburys",
        fillColor: "rgba(220,220,220,0.5)", 
        strokeColor: "rgba(220,220,220,0.8)", 
        highlightFill: "rgba(220,220,220,0.75)",
        highlightStroke: "rgba(220,220,220,1)",
        data: sainsburysLow,
        backgroundColor: "#ff8c00"
    }
    const dataSetLowWaitrose = {
        datalabels: {
          display: false
        },
        label:"Waitrose",
        fillColor: "rgba(220,220,220,0.5)", 
        strokeColor: "rgba(220,220,220,0.8)", 
        highlightFill: "rgba(220,220,220,0.75)",
        highlightStroke: "rgba(220,220,220,1)",
        data: waitroseLow,
        backgroundColor: "#c852ff"
    }

  // BAR CHART DATA
    let areAveragesHealthyBarData = {
        labels:['Fat', 'Saturates',  'Sugars', 'Salt'],
        datasets:[dataSetHealthy, dataSetModerate, dataSetUnhealthy, dataSetAverageTesco, dataSetAverageMorrisons,
           dataSetAverageSainsburys, dataSetAverageWaitrose]
    };

    let areHighsHealthyBarData = {
        labels:['Fat', 'Saturates',  'Sugars', 'Salt'],
        datasets:[dataSetHealthy, dataSetModerate, dataSetUnhealthy, dataSetHighTesco, dataSetHighMorrisons,
          dataSetHighSainsburys, dataSetHighWaitrose]
    };

    let areLowsHealthyBarData = {
      labels:['Fat', 'Saturates',  'Sugars', 'Salt'],
      datasets:[dataSetHealthy, dataSetModerate, dataSetUnhealthy, dataSetLowTesco, dataSetLowMorrisons,
        dataSetLowSainsburys, dataSetLowWaitrose]
  };

  let scales = {
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


  let legend = {
    display:false,
    labels:{
      fontColor: '#dbdbdb',
    }
  };

  // BAR CHART VISUAL INFO - STYLING
    let areAveragesHealthyPlotOptions = {
      title: {
        display: true,
        text: 'Average Values',
        fontColor: '#d1d1d1'
      },
      legend:{
        onClick: null,
        display:false, 
        position:'bottom',
        labels:{
          fontColor: '#dbdbdb',
        }
      },
      scales: scales
    };

    let areHighsHealthyPlotOptions = {
      title: {
        display: true,
        text: 'Highest Values',
        fontColor: '#d1d1d1'
      },
      legend:legend,
      scales: scales
    };

    let areLowsHealthyPlotOptions = {
      title: {
        display: true,
        text: 'Lowest Values',
        fontColor: '#d1d1d1',
      },
      legend:legend,
      scales: scales
    };

    return(
      <div className="AreTheyHealthyCharts">
        <div className="PieHolder1">
          <Bar className="Pie" data={areAveragesHealthyBarData} options={areAveragesHealthyPlotOptions} />
        </div>
        <div className="PieHolder2">
          <Bar className="Pie" data={areHighsHealthyBarData} options={areHighsHealthyPlotOptions} />
          <Bar className="Pie" data={areLowsHealthyBarData} options={areLowsHealthyPlotOptions} />
        </div>
      </div>

    );
    
}


export default AreAveragesHealthy;