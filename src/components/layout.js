import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';

const Layout = ({ children, pageInfo }) => {
    const data = useStaticQuery(graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `);

    return (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <footer>
          <div class='footer-bottom text-center py-5'>
            <span>© Copyright {new Date().getFullYear()} Caf.js Labs LLC</span>
          </div>
        </footer>
      </>
    );
};

export default Layout;
