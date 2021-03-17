module.exports = {
    pathPrefix: "/caf_gatsbysite",
    siteMetadata: {
        title: `Cafj.s Framework`,
        description: `Description of the Caf.js Framework.`,
        author: `Antonio Lain`
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`
            }
        },
        {
            resolve: "gatsby-plugin-react-svg",
            options: {
                rule: {
                    include: /svgs/
                }
            }
        },
        `gatsby-plugin-mdx`,
        `gatsby-plugin-fontawesome-css`,
        `gatsby-plugin-sass`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`
  ]
};
