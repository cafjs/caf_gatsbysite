import { Link } from "gatsby";
import PropTypes from 'prop-types';

import React from 'react';
import { Card } from 'react-bootstrap';



const MyCard = ({children, title, description, nextPage}) => {
    return (
        <Card className="shadow-sm">
          <Card.Body>
            <h5 className="card-title mb-3">
              <span className="theme-icon-holder card-icon-holder mr-2">{children}</span>
              <span className="card-title-text">{title}</span>
            </h5>
            <Card.Text dangerouslySetInnerHTML={{__html: description + '<span class="fake-link"> Learn more → </span>'}}>
            </Card.Text>
            <Link to={nextPage} className="card-link-mask"></Link>
          </Card.Body>
        </Card>
    );
};

MyCard.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    nextPage:  PropTypes.string

};

MyCard.defaultProps = {
    title: ``,
    description: ``,
    nextPage:  ``
};

export default MyCard;
