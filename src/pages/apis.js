import React from "react";
import { useStaticQuery, graphql } from 'gatsby';

import APIsHeader from '../components/apisHeader';
import APIsSidebar from '../components/apisSidebar';
import APIsContent from '../components/apisContent';
import APIsIframe from '../components/apisIframe';

const APIs = () => {
    const data = useStaticQuery(graphql`
      query SiteTitleQuery4 {
        site {
          siteMetadata {
            title
          }
        }
      }
    `);

    return (
        <>
          <APIsHeader siteTitle={data.site.siteMetadata.title} isDocs={true} />
          <APIsSidebar/>
          <APIsContent>
            <APIsIframe/>
          </APIsContent>
        </>
    );
};

export default APIs;
