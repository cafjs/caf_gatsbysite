import React, { useState, useEffect} from 'react';
import {Nav} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLightbulb,
    faWrench,
    faArrowCircleUp,
    faBook,
    faCog
} from '@fortawesome/free-solid-svg-icons';

const MIN_WIDTH = 1200;

const DocsSidebar = () => {
    const [visible, setVisible] = useState(false);

    // need to delay when the sidebar was visible to trigger a transition
    useEffect(() => {
        setVisible(window.innerWidth >= MIN_WIDTH);
    }, []); // Call just once

    useEffect(() => {
        if (typeof window === 'undefined') {
            return () => {};
        }

        const handleResize = () => {
            setVisible(window.innerWidth >= MIN_WIDTH);
        };

        window.addEventListener('resize', handleResize);

        // this is a hack, need to use state propagation
        const btn = document.getElementById('docs-sidebar-toggler');
        const handleClick = () => {
            setVisible(!visible);
        };
        btn && btn.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('resize', handleResize);
            btn && btn.removeEventListener('click', handleClick);
        };
    });

    const classSidebar = 'docs-sidebar ' +
          (visible ? 'sidebar-visible' : 'sidebar-hidden');

    const handleSelect = (selectedKey) => {
         setVisible(window.innerWidth >= MIN_WIDTH);
    };

    return (
        <>
          <div id="docs-sidebar" className={classSidebar}>
            <Nav id="docs-nav" className="docs-nav navbar" onSelect={handleSelect}>
              <ul className="section-items list-unstyled nav flex-column pb-3">
                <Nav.Item className="section-title">
                  <Nav.Link className="scrollto" href="#concepts"><FontAwesomeIcon className="fa-fw" icon={faLightbulb}/>Concepts</Nav.Link>
                </Nav.Item>
                <Nav.Item><Nav.Link className="scrollto" href="#components">Components</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link className="scrollto" href="#cloud-assistant">Cloud Assistant</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link className="scrollto" href="#autonomous">Autonomous</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link className="scrollto" href="#client">Client</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link className="scrollto" href="#trusted-bus">Trusted Bus</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link className="scrollto" href="#sharedmap">SharedMap</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link className="scrollto" href="#publish-subscribe">Publish Subscribe</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link className="scrollto" href="#iot-device">IoT Device</Nav.Link></Nav.Item>

                <Nav.Item className="nav-item section-title mt-3">
                  <Nav.Link className="scrollto" href="#getting-started"><FontAwesomeIcon className="fa-fw" icon={faArrowCircleUp}/> Getting Started</Nav.Link>
                </Nav.Item>
                <Nav.Item><Nav.Link className="scrollto" href="#install">Install</Nav.Link></Nav.Item>
	        <Nav.Item><Nav.Link className="scrollto" href="#headless-example">First App</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link className="scrollto" href="#add-react-frontend">React UI</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link className="scrollto" href="#cafjs-cloud">Caf.js Cloud</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link className="scrollto" href="#add-device">Simulated Device</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link className="scrollto" href="#raspberry-pi">Raspberry Pi</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link className="scrollto" href="#three-way-isomorphic">Three-Way Iso</Nav.Link></Nav.Item>

                <Nav.Item className="nav-item section-title mt-3">
                  <Nav.Link className="scrollto" href="../../apis"><FontAwesomeIcon className="fa-fw" icon={faCog}/> APIs</Nav.Link>
                </Nav.Item>

                <Nav.Item className="nav-item section-title mt-3">
                  <Nav.Link className="scrollto" href="#tools"><FontAwesomeIcon className="fa-fw" icon={faWrench}/> Tools</Nav.Link>
                </Nav.Item>
                <Nav.Item><Nav.Link className="scrollto" href="#cafjs-tool">cafjs</Nav.Link></Nav.Item>

                <Nav.Item className="nav-item section-title mt-3">
                  <Nav.Link className="scrollto" href="#resources"><FontAwesomeIcon className="fa-fw" icon={faBook}/> Resources</Nav.Link>
                </Nav.Item>
              </ul>
	    </Nav>
          </div>
        </>
    );
};

export default DocsSidebar;
