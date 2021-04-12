import React, { useState, useEffect} from 'react';
import {Nav} from "react-bootstrap";

const MIN_WIDTH = 1200;

const DocsSidebar = () => {

    const [visible, setVisible] = useState(true);

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
                  <Nav.Link className="scrollto active" href="#getting-started">Getting Started</Nav.Link>
                </Nav.Item>
                <Nav.Item><Nav.Link className="scrollto" href="#install">Install</Nav.Link></Nav.Item>
	        <Nav.Item><Nav.Link className="scrollto" href="#headless-example">Headless Example</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link className="scrollto" href="#add-react-frontend">Add React Frontend</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link className="scrollto" href="#add-device">Add Device</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link className="scrollto" href="#three-way-isomorphic">Three-Way Iso</Nav.Link></Nav.Item>

                <Nav.Item className="nav-item section-title mt-3">
                  <Nav.Link className="scrollto" href="#concepts">Concepts</Nav.Link>
                </Nav.Item>
                <Nav.Item><Nav.Link className="scrollto" href="#components">Components</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link className="scrollto" href="#cloud-assistant">Cloud Assistant</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link className="scrollto" href="#autonomous">Autonomous</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link className="scrollto" href="#client">Client</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link className="scrollto" href="#trusted-bus">Trusted Bus</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link className="scrollto" href="#sharing-actors">Sharing Actors</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link className="scrollto" href="#publish-subscribe">Publish Subscribe</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link className="scrollto" href="#iot-device">IoT Device</Nav.Link></Nav.Item>

                <Nav.Item className="nav-item section-title mt-3">
                  <Nav.Link className="scrollto" href="#apis">APIs</Nav.Link>
                </Nav.Item>

                <Nav.Item className="nav-item section-title mt-3">
                  <Nav.Link className="scrollto" href="#tools">Tools</Nav.Link>
                </Nav.Item>

                <Nav.Item className="nav-item section-title mt-3">
                  <Nav.Link className="scrollto" href="#resources">Resources</Nav.Link>
                </Nav.Item>
              </ul>
	      </Nav>
          </div>
        </>
    );
};

export default DocsSidebar;
