import React from 'react';
import {Container} from 'react-bootstrap';

const DocsContent = ({children}) => {
    return (
        <>
          <div className="docs-content">
            <Container>{children}</Container>
          </div>
        </>
    );
};

export default DocsContent;
