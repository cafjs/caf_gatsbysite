import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { MDXProvider } from "@mdx-js/react";

import Header from './header';

const docsLayout = {Link};

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
          <MDXProvider components={docsLayout}>
            <Header siteTitle={data.site.siteMetadata.title}  isDocs={false} />
            <main><div className="mdx-article docs-page">{children}</div></main>
            <footer>
              <div className='footer-bottom text-center py-5'>
                <span>© Copyright {new Date().getFullYear()} Caf.js Labs LLC</span>
              </div>
            </footer>
          </MDXProvider>
        </>
    );
};

export default LayoutMDX;
