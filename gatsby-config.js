require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Trail Making Test`,
    description: `Open, Accessible TMT Testing.`,
    author: `@willthevideoman`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-ackee-tracker`,
      options: {
        domainId: process.env.ACKEE_DOMAIN_ID,
        server: process.env.ACKEE_SERVER,
        ignoreLocalhost: true,
        detailed: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `trail-test`,
        short_name: `tmt`,
        start_url: `/`,
        background_color: `#808080`,
        theme_color: `#58a8ff`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
}
