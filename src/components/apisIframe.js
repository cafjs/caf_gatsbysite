import React, { useState, useEffect} from 'react';
import { Row, Col} from "react-bootstrap"

const URL_PREFIX = 'https://www.cafjslabs.com/api/';

const DEFAULT_IFRAME_URL = URL_PREFIX + 'caf_components';

const APIsIframe = () => {
    const [iframeURL, setIframeURL] = useState(DEFAULT_IFRAME_URL);

    // need to delay
    useEffect(() => {
        if (window.location && window.location.hash) {
            const hash = window.location.hash.slice(1);
            if (hash.indexOf('caf_') === 0) {
                setIframeURL(URL_PREFIX + hash + '/index.html');
            }
        }
    }, []); // Call just once

    useEffect(() => {
        if (typeof window === 'undefined') {
            return () => {};
        }

        const handleHashChange = (hash) => {
            const hashArray = hash.newURL.split('#');
            if (hashArray.length === 2) {
                const hash = hashArray[1];
                if (hash.indexOf('caf_') === 0) {
                    setIframeURL(URL_PREFIX + hash + '/index.html');
                }
            }
        };

        window.addEventListener('hashchange', handleHashChange);

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    });

    return (
        <Row>
          <Col>
            <iframe title="Caf.js APIs" className="apis-iframe" src={iframeURL}></iframe>
          </Col>
        </Row>
    );
};

export default APIsIframe;
