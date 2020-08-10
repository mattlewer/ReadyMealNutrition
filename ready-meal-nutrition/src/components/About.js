import React from 'react';
import '../CSS/About.css';

function About(){
    return(
        <section id="ObtainingData">
            <div className="ab-all">
            <div className="ab-content">
                    <div>
                    <h3 className="ab-title">About</h3>
                    <h1 className="ab-mid">Python scripts - Selenium & BS4</h1>
                    <p className="ab-subHead">For collecting data, Python Scripts were created to retrieve all nutritional
                    data for UK supermarkets, under the sub-section 'Ready Meals For One'<br/></p>
                    <div className="CSVSection">
                        <p className="ab-subHead2">The CSV files for the datasets can be found here:<br/>
                        <a className="csv" href="https://drive.google.com/drive/folders/1156y5PwvwWA3CSRonY6YXRXz9F-xg4sq?usp=sharing">Click Me</a></p>
                    </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default About;