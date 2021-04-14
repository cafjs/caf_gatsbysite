import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { MDXProvider } from "@mdx-js/react";

import Header from './header';

import DocsSidebar from './docsSidebar';
import DocsContent from './docsContent';
import DocsArticle from './docsArticle';
import DocsSection from './docsSection';

const h1 = ({children}) => (
    <h1 className="docs-heading">{children}</h1>
);
const h2 = ({children}) => (
    <h2 className="section-heading">{children}</h2>
);

const docsLayout = {DocsSidebar, DocsContent, DocsArticle, DocsSection, h1, h2};

const LayoutDocsMDX = ({ children, pageInfo }) => {
    const data = useStaticQuery(graphql`
      query SiteTitleQuery3 {
        site {
          siteMetadata {
            title
          }
        }
      }
    `);

    return (
        <MDXProvider components={docsLayout}>
          <Header siteTitle={data.site.siteMetadata.title} isDocs={true} />
            <div className="docs-wrapper">{children}</div>
            <footer>
              <div className='footer-bottom text-center py-5'>
                <span>© Copyright {new Date().getFullYear()} Caf.js Labs LLC</span>
              </div>
            </footer>
        </MDXProvider>
    );
};

export default LayoutDocsMDX;
