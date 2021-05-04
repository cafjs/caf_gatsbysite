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
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Caf.js`,
                short_name:`Caf.js`,
                start_url: `/`,
                icon: `src/images/logosquare.svg`,
                cache_busting_mode: `none`
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `docs`,
                path: `${__dirname}/src/pages/docs`
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
                                return `width: 272px;`;
                            }
                        },
                    },
                    {
                        resolve: `gatsby-remark-prismjs`,
                        options: {
                        },
                    }

                ],
                defaultLayouts: {
                    docs: require.resolve("./src/components/layoutDocsMDX.js"),
                    default: require.resolve("./src/components/layoutMDX.js")
                }
            }
        }
    ]
};
