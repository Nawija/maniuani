/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    siteMetadata: {
        title: ``,
        description: ``,
        author: `Animani`,
        siteUrl: `https://Animani.pl`,
    },
    plugins: [
        {
            resolve: "gatsby-source-datocms",
            options: {
                apiToken: "d35c5a40617b75e69bd1596ead06e9",
            },
        },
        "gatsby-plugin-image",
        {
            resolve: `gatsby-plugin-sharp`,
            options: {
                defaults: {
                    placeholder: `none`,
                },
            },
        },
        "gatsby-transformer-sharp",
        "gatsby-plugin-postcss",
        "gatsby-plugin-sitemap",
        `gatsby-plugin-robots-txt`,
        {
            resolve: `gatsby-plugin-nprogress`,
            options: {
                showSpinner: false,
                minimum: 0.1,
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/",
            },
            __key: "images",
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Animani`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#FBE7E6`,
                theme_color: `#FBE7E6`,
                display: `standalone`,
                icon: `src/images/favicon.jpg`,
            },
        },
    ],
};
