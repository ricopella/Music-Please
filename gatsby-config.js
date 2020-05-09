const activeEnv =
    process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"

console.log(`Using environment config: '${activeEnv}'`)

require("dotenv").config({
    path: `.env.${activeEnv}`,
})

module.exports = {
    siteMetadata: {
        title: `The Music Please.`,
        description: `The Music Please is a collective of DJ's and Artists`,
        author: `Ricopella`,
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
        `gatsby-plugin-emotion`,
        {
            resolve: "gatsby-plugin-react-svg",
            options: {
                rule: {
                    include: `${__dirname}/src/images/svg`
                }
            }
        }
    ],
}