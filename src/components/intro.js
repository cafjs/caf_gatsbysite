import React from 'react';
import { Container } from "react-bootstrap";


const Intro = ({ heading, intro}) => {

    return (
        <div className="page-header theme-bg-dark py-5 text-center position-relative">
	    <div className="theme-bg-shapes-right"></div>
	    <div className="theme-bg-shapes-left"></div>
            <Container>
	      <h1 className="page-heading single-col-max mx-auto">{heading}</h1>
	      <div className="page-intro single-col-max mx-auto">{intro}</div>
	    </Container>
        </div>
    );

};

export default Intro;
