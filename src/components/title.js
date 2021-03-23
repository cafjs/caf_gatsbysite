import PropTypes from 'prop-types';
import React from 'react';

const Title = ({ pageTitle }) => (
    <h1 className="mdxH1"> {pageTitle}</h1>
);

Title.propTypes = {
    pageTitle: PropTypes.string
};

Title.defaultProps = {
    siteTitle: ``
};

export default Title;
