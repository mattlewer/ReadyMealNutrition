import React from 'react';
import '../CSS/About.css';
import DataImage from '../Images/about.svg'
function About(){
    return(
        <section id="ObtainingData">
            <div className="ab-all">
                <div className="ab-content">
                    <div className="ab-headers">
                        <h3 className="ab-title">About</h3>
                        <h1 className="ab-mid">Python scripts - Selenium & BS4</h1>
                        <p className="ab-subHead">For collecting data, Python Scripts were created to retrieve all nutritional
                        data for UK supermarkets, under the sub-section 'Ready Meals For One'<br/></p>
                    </div>
                    <div className="CSVSection">
                        <p className="ab-subHead2">Created by Matthew Lewer - 2020<br/>GitHub repo containing Python Scripts, CSV files & website code:<br/>
                        <a className="csv" href="https://github.com/mattlewer/ReadyMealNutrition"><br/>Click Me</a></p>
                    </div>
                </div>
                <div className="ab-ImageContainer">
                    <img className="ab-dataImage" src={DataImage} alt="Oops"/>
                </div>
            </div>
        </section>

    );
}

export default About;