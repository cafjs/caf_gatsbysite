import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';

const LayoutMDX = ({ children, pageInfo }) => {
    const data = useStaticQuery(graphql`
      query SiteTitleQuery2 {
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
        <main><div className="mdx-article docs-page">{children}</div></main>
        <footer>
          <div className='footer-bottom text-center py-5'>
            <span>© Copyright {new Date().getFullYear()} Caf.js Labs LLC</span>
          </div>
        </footer>
      </>
    );
};

export default LayoutMDX;
