module.exports = {
  siteMetadata: {
    title: `The Music Please.`,
    description: `The Music Please is a collective of DJ's and Artists`,
    author: `Ricopella`
  },
  plugins: [
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `music-please`,
        short_name: `musicplease`,
        start_url: `/`,
        background_color: `#000000`,
      },
    },
    'gatsby-plugin-offline',
  ],
}
