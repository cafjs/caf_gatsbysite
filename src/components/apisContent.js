import React from 'react';
import {Container} from 'react-bootstrap';

const APIsContent = ({children}) => {
    return (
        <>
          <div className="apis-content">
            <Container fluid>{children}</Container>
          </div>
        </>
    );
};

export default APIsContent;
