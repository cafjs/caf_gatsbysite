import React from 'react';
import { Container } from 'react-bootstrap';

const DocsSidebar = () => {
    return (
          <div id="docs-sidebar" className="docs-sidebar">
            <nav id="docs-nav" className="docs-nav navbar">
              <ul className="section-items list-unstyled nav flex-column pb-3">
	        <li className="nav-item section-title">
                  <a className="nav-link scrollto active" href="#getting-started">Getting Started</a>
                </li>
                <li className="nav-item"><a className="nav-link scrollto" href="#install">Install</a></li>
	        <li className="nav-item"><a className="nav-link scrollto" href="#headless-example">Headless Example</a></li>
                <li className="nav-item"><a className="nav-link scrollto" href="#add-react-frontend">Add React Frontend</a></li>
                <li className="nav-item"><a className="nav-link scrollto" href="#add-device">Add Device</a></li>
                <li className="nav-item"><a className="nav-link scrollto" href="#three-way-isomorphic">Three-Way Isomorphic</a></li>

                <li className="nav-item section-title mt-3">
                  <a className="nav-link scrollto" href="#concepts">Concepts</a>
                </li>
                <li className="nav-item"><a className="nav-link scrollto" href="#components">Components</a></li>
                <li className="nav-item"><a className="nav-link scrollto" href="#cloud-assistant">Cloud Assistant</a></li>
                <li className="nav-item"><a className="nav-link scrollto" href="#autonomous">Autonomous</a></li>
                <li className="nav-item"><a className="nav-link scrollto" href="#client">Client</a></li>
                <li className="nav-item"><a className="nav-link scrollto" href="#trusted-bus">Trusted Bus</a></li>
                <li className="nav-item"><a className="nav-link scrollto" href="#sharing-actors">Sharing Actors</a></li>
                <li className="nav-item"><a className="nav-link scrollto" href="#publish-subscribe">Publish Subscribe</a></li>
                <li className="nav-item"><a className="nav-link scrollto" href="#iot-device">IoT Device</a></li>

                <li className="nav-item section-title mt-3">
                  <a className="nav-link scrollto" href="#apis">APIs</a>
                </li>

                <li className="nav-item section-title mt-3">
                  <a className="nav-link scrollto" href="#tools">Tools</a>
                </li>

                <li className="nav-item section-title mt-3">
                  <a className="nav-link scrollto" href="#resources">Resources</a>
                </li>
              </ul>
	    </nav>
          </div>
      );
};

export default DocsSidebar;
