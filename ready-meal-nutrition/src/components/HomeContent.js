import React from 'react';
import '../CSS/Home.css';
import DataImage from '../Images/dataPic.svg'

function HomeContent(){

    return(
        <section className="main-container" id="home">
            <div className="hc-all">
                <div className="content">
                    <div className="hc-text">
                        <h3 className="Title">How Healthy Are Ready Meals?</h3>
                        <p className="subHead">A personal project to analyse the nutritional content of supermarket ready meals</p>
                    </div>
                </div> 
                <div className="ImageContainer">
                    <img className="dataImage" src={DataImage} alt="Oops"/>
                </div>
            </div>
        </section>
    );
}

export default HomeContent