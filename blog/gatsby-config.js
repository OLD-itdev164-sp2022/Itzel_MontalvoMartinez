require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    title: `Cool Blog`,
    description: `ITDEV-164 Gatsby Blog`,
    author: `Itzel Montalvo-Martinez`,
    //siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
    contact: {
      name: `Itzel Montalvo-Martinez`,
      company: `Blogs Inc.`,
      address: `PO Box 1234`
    }
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `{gatsby-source-contentful}`,
        accessToken: `${process.env.ACCESS_TOKEN}`
       // name: `images`,
        //path: `${__dirname}/src/images`,
      },
    },
    //`gatsby-transformer-sharp`,
    //`gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-filesystem`,
      options: {
        name: `images`,
        //short_name: `starter`,
        //start_url: `/`,
        //background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        //display: `minimal-ui`,
        //icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
