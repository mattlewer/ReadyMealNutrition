import React from 'react';

import '../CSS/Data.css';

// IMPORT OUR CHARTS
import WhatsHealthyChart from './WhatsHealthyChart.js'
import FourAverageCharts from './FourAveragesCharts.js';
import AreAveragesHealthy from './AreAveragesHealthy.js';
import AllDataChart from './AllDataChart.js';


//  Function to load 'Data' section of the website
function Data(){
    return(
        <section className="WhatsHealthySection">
          <div className="first">
            <div className="dc-all">
              <div className="MainContent">
                <div className="ChartContainer">
                  <WhatsHealthyChart/>
                </div>  
                <div className="TextArea" id="Preparation">
                  <h3 className="DataTitle">What Constitutes a Healthy Meal?</h3> 
                </div>  
                <p className="dc-subHead">Data taken from NHS England's recommended intake per 100g</p>
              </div>
            </div>
          </div>
        <section className="od-all">
          <div className="ContentControl">
            <div className="ChartContainer">
              <FourAverageCharts/>
            </div>
          </div>
        </section>
        <section className="AverageToHealth">
          <div className="ah-content">
            <div className="ah-subHead-Layout">
              <h3 className="ah-title">Are They Healthy?</h3>
              <p className="ah-subHead">Legend: <br/><p id='Healthy'>Healthy, </p><p id='Moderate'>Moderate, </p><p id='Unhealthy'>Unhealthy, </p><p id='Tesco'>Tesco, </p><p id="Morrisons">Morrisons, </p><p id="Sainsburys">Sainsburys, </p><p id="Waitrose">Waitrose</p></p>
            </div>
            <span className="ChartContainerComp">
              <AreAveragesHealthy/>
            </span>
          </div>
        </section>
        <section className="hee">
          <div className="he-content">
            <div className="heInnerContent">
              <div className="TitleAndSub">
                <h3 className="he-title">View The Data</h3>
                <p className="he-subHead" id="supermarket-in-view">All collected supermarket data</p>
              </div>
              <div className="allProductGraph">
                <AllDataChart/>
              </div>
            </div>
          </div>
        </section>
      </section>
    );
}

export default Data;