import React from 'react';
import { Link } from 'react-scroll';
import '../CSS/navBar.css';


function navbar(){

    return(
        <div className="navbar">
           <div className="links">
                <ul className="linkList">
                <Link
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {500}
                    >
                        Home
                    </Link>
                    <Link
                    activeClass="active"
                    to="WhatsHealthySection"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {500}
                    >
                        Data
                    </Link>
                    <Link
                    activeClass="active"
                    to="ResultsSection"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {500}
                    >
                        Results
                    </Link>
                    <Link
                    className="AboutLink"
                    activeClass="active"
                    to="ObtainingData"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {500}
                    >
                        About
                    </Link>
                </ul>
            </div> 
        </div>
    );
}

export default navbar