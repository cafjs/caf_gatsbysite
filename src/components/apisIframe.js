import React, { useState, useEffect} from 'react';

const URL_PREFIX = 'https://www.cafjs.com/api/';

const DEFAULT_IFRAME_URL = URL_PREFIX + 'caf_components';

const APIsIframe = () => {
    const [iframeURL, setIframeURL] = useState(DEFAULT_IFRAME_URL);

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
        <iframe title="Caf.js APIs" className="apis-iframe" src={iframeURL}></iframe>
    );
};

export default APIsIframe;
