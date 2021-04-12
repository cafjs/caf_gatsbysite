import {Link} from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { Container } from 'react-bootstrap';
import Logo from '../svgs/logosquare.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGithub
} from '@fortawesome/free-brands-svg-icons';

const Header = ({ siteTitle , isDocs}) => {

    return (
        <header className="header fixed-top">
          <div className="branding docs-branding">
            <Container className="position-relative py-2" fluid>
              <div className="docs-logo-wrapper">
                {isDocs &&
                    <button id="docs-sidebar-toggler" className="docs-sidebar-toggler docs-sidebar-visible mr-3 d-xl-none" type="button">
                          <span></span>
	                  <span></span>
	                  <span></span>
	            </button>}
                <div className="site-logo">
                  <Link to="/" className="navbar-brand">
                    <Logo className="logo-icon mr-2" height="40px" width="40px"/>
                    <span className="logo-text">Caf.js</span>
                  </Link>
                </div>
              </div>
              <div className="docs-top-utilities d-flex justify-content-end align-items-center">

	        <ul className="social-list list-inline  mx-3 mx-md-5 mx-lg-5 mb-0  d-flex">
	          <li className="list-inline-item"><a href="https://github.com/cafjs/caf"> <FontAwesomeIcon className="fa-fw" icon={faGithub}  /></a></li>
	        </ul>
	        <Link to="/docs/documentation" className="btn btn-primary d-flex">Docs</Link>
	      </div>
            </Container>
          </div>
        </header>
    );
};

Header.propTypes = {
    siteTitle: PropTypes.string,
    isDocs: PropTypes.bool
};

Header.defaultProps = {
    siteTitle: ``,
    isDocs: false
};

export default Header;
