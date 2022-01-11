import React, { useState, useEffect} from 'react';
import {Nav} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faWrench,
    faArrowCircleUp,
    faPlusCircle
} from '@fortawesome/free-solid-svg-icons';

const MIN_WIDTH = 1200;

const APIsSidebar = () => {
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
        const btn = document.getElementById('apis-sidebar-toggler');
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
          <div id="apis-sidebar" className={classSidebar}>
            <Nav id="apis-nav" className="docs-nav navbar" onSelect={handleSelect}>
              <ul className="section-items list-unstyled nav flex-column pb-3">
	        <Nav.Item className="section-title">
                  <Nav.Link className="scrollto"><FontAwesomeIcon className="fa-fw" icon={faArrowCircleUp}/> Main</Nav.Link>
                </Nav.Item>
                <Nav.Item><Nav.Link className="scrollto" href="#caf_components">caf_components</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link className="scrollto" href="#caf_ca">caf_ca</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link className="scrollto" href="#caf_cli">caf_cli</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link className="scrollto" href="#caf_core">caf_core</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link className="scrollto" href="#caf_sharing">caf_sharing</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link className="scrollto" href="#caf_security">caf_security</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link className="scrollto" href="#caf_session">caf_session</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link className="scrollto" href="#caf_pubsub">caf_pubsub</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link className="scrollto" href="#caf_fsm">caf_fsm</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link className="scrollto" href="#caf_iot">caf_iot</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link className="scrollto" href="#caf_platform">caf_platform</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link className="scrollto" href="#caf_profiler">caf_profiler</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link className="scrollto" href="#caf_redis">caf_redis</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link className="scrollto" href="#caf_transport">caf_transport</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link className="scrollto" href="#caf_crossapp">caf_crossapp</Nav.Link></Nav.Item>

                <Nav.Item className="nav-item section-title mt-3">
                  <Nav.Link className="scrollto"><FontAwesomeIcon className="fa-fw" icon={faPlusCircle}/> Extra</Nav.Link>
                </Nav.Item>
                <Nav.Item><Nav.Link className="scrollto" href="#caf_react">caf_react</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link className="scrollto" href="#caf_sms">caf_sms</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link className="scrollto" href="#caf_smtp">caf_smtp</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link className="scrollto" href="#caf_paypal">caf_paypal</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link className="scrollto" href="#caf_graphql">caf_graphql</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link className="scrollto" href="#caf_forward">caf_forward</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link className="scrollto" href="#caf_deploy">caf_deploy</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link className="scrollto" href="#caf_iot_gatt">caf_iot_gatt</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link className="scrollto" href="#caf_iot_http">caf_iot_http</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link className="scrollto" href="#caf_rpi">caf_rpi</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link className="scrollto" href="#caf_rpi_gpio">caf_rpi_gpio</Nav.Link></Nav.Item>

                <Nav.Item className="nav-item section-title mt-3">
                  <Nav.Link className="scrollto"><FontAwesomeIcon className="fa-fw" icon={faWrench}/> Tools</Nav.Link>
                </Nav.Item>
                <Nav.Item><Nav.Link className="scrollto" href="#caf_dcinabox">caf_dcinabox</Nav.Link></Nav.Item>

              </ul>
	      </Nav>
          </div>
        </>
    );
};

export default APIsSidebar;
