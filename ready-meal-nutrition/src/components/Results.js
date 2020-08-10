import React from 'react';
import '../CSS/Results.css'
import DataImage from '../Images/report2.svg'
function Results(){
    return(
        <section className="ResultsSection">
            <div className="rs-all">
                <div className="rs-imageContainer">
                    <img className="rs-image" src={DataImage} alt="Oops"/>
                </div>
                <div class="results-content">
                    <div className="rs-headers">
                        <h3 className="ResultsTitle">Results</h3>
                        <p className="rs-subHead">Thoughts on data and general conclusion</p>
                        <p className="rs-mainContent">Upon starting this research I had anticipated that ready meals would be overwhelmingly
                        worse for human health than a home-cooked meal. Whilst I do not have the data for vitamin intake etc, I believe the data
                        I have collected shows that the same is true for ready meals as is true for home cooked meals<br/><br/><br/> In short - It depends what you eat.<br/> </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Results;