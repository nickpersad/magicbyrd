const { BLOCKS, MARKS, INLINES } = require("@contentful/rich-text-types")
module.exports = {
  siteMetadata: {
    title: `Magic Byrd - An IoT Platform for Enabling Smart Products`,
    description: `Magic Byrd Platform offers enterprises a cloud IoT layer & tools to rapidly build Industry 4.0 solutions & applications scaled across millions of items with minimal coding.`,
    author: `MBk`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://magicbyrd.us2.list-manage.com/subscribe/post?u=07abc2ef17f153d8e38fbe439&amp;id=9566f8efbd",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `f2l15srzaa7q`,
        accessToken: "8PyMhfcFqTd4p9u2OXUVIRFw6hG3WjJH6spO4WXgpjE",
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Karla`,
            variants: [`400`, `700`],
          },
          {
            family: `Barlow`,
            variants: [`300`, `400`, `500`, `600`, `700`, `800`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Magicbyrd`,
        short_name: `Magicbyrd`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
}
