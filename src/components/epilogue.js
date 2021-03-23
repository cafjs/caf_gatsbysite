import { Link } from "gatsby";
import React from 'react';
import { Container } from "react-bootstrap";


const Epilogue = ({ heading, intro, nextPage}) => {

    return (
        <div className="cta-section theme-bg-dark py-5 text-center position-relative">
	    <div className="theme-bg-shapes-right"></div>
	    <div className="theme-bg-shapes-left"></div>
            <Container>
	      <h1 className="text-white mb-3">{heading}</h1>
	      <div className="section-intro text-white mb-3 single-col-max mx-auto">{intro}</div>
              <div class="pt-3 text-center">
                <Link to={nextPage} className="bt btn-light p-3"> Learn more → </Link>
	      </div>
	    </Container>
        </div>
    );

};

export default Epilogue;
