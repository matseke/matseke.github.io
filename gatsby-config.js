module.exports = {
  siteMetadata: {
    title: 'Mats blog',
  },
  plugins: [
    // react-helmet is included by default with gatsby
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/blog/`,
      },
    },
  ],
}
