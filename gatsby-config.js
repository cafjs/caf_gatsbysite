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
        `gatsby-plugin-fontawesome-css`,
        `gatsby-plugin-sass`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-plugin-mdx`,
            options: {

                extensions: [`.mdx`, `.md`],
                gatsbyRemarkPlugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            backgroundColor: "none",
                            disableBgImage: true,
                            linkImagesToOriginal: false,
                            wrapperStyle: fluidResult => {
//                                console.log(fluidResult);
                                return `width: 272px;`;
                            }
                        },
                    }
                ],
                defaultLayouts: {

                    default: require.resolve("./src/components/layoutMDX.js"),
                }
            }
        }
    ]
};
